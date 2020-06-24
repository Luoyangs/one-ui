// 参考
// https://github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
let hiddenTextarea: HTMLTextAreaElement;
const isNull = (val: any) => val === null || val === undefined;

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;
const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

function calcNodeStyle(element: HTMLTextAreaElement) {
  const style = window.getComputedStyle(element);
  const boxSizing = style.getPropertyValue('box-sizing');
  const paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  const borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  const contextStyle = CONTEXT_STYLE
    .map(name => `${name}: ${style.getPropertyValue(name)}`)
    .join(';');

  return { contextStyle, paddingSize, borderSize, boxSizing };
}

/**
 * 动态甲酸textarea的高度
 * @param element Textarea
 * @param minRows 最小行数
 * @param maxRows 最大行数
 */
export function calcTextareaHeight(element: HTMLTextAreaElement, minRows: number = 1, maxRows: number = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  const { contextStyle, paddingSize, borderSize, boxSizing } = calcNodeStyle(element);
  hiddenTextarea.setAttribute('style', `${contextStyle}; ${HIDDEN_STYLE}`);
  hiddenTextarea.value = element.value || element.placeholder || '';

  let height = hiddenTextarea.scrollHeight;
  const result: any = {};

  if (boxSizing === 'border-box') {
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    height -= paddingSize;
  }

  hiddenTextarea.value = '';
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (!isNull(minRows)) {
    let minHeight = minRows * singleRowHeight;

    if (boxSizing === 'border-box') {
      minHeight += paddingSize + borderSize;
    }
    height = Math.max(height, minHeight);
    result.minHeight = `${minHeight}px`;
  }

  if (!isNull(maxRows)) {
    let maxHeight = maxRows * singleRowHeight;

    if (boxSizing === 'border-box') {
      maxHeight += paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }

  result.height = `${height}px`;

  if (hiddenTextarea && hiddenTextarea.parentNode) {
    hiddenTextarea.parentNode.removeChild(hiddenTextarea);
    hiddenTextarea = null;
  }

  return result;
}
