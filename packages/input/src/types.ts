import { ComponentSize } from '@src/constants/size';

export interface InputOptions {
  /**
   * 输入框内容, 使用v-model
   */
  value: string | number;
  /**
   * 输入框类型，同原生 input 标签的 type 属性
   */
  type: string;
  /**
   * 输入框默认内容
   */
  placeholder: string;
  /**
   * 前缀图标
   */
  prefixIcon?: string;
  /**
   * 后缀图标
   */
  suffixIcon?: string;
  /**
   * 前缀文字
   */
  prefixLabel?: string;
  /**
   * 后缀文字
   */
  suffixLabel?: string;
  /**
   * 输入框大小。可选值为'small', 'normal', 'large', 'x-large'
   */
  size: ComponentSize;
  /**
   * 可以点击清除图标删除内容
   */
  clearable?: boolean;
  /**
   * 是否禁用状态，默认为 false
   */
  disabled?: boolean;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 是否显示字数限制，配合maxLength使用
   */
  showWordLimit?: boolean;
  /**
   * 是否自动增加textarea的高度
   */
  autosize?: boolean;
  /**
   * textarea的最大行数
   */
  maxrows?: number;
  /**
   * textarea的最小行数
   */
  minrows?: number;
  /**
   * textarea的初始行数
   */
  rows?: number;
  /**
   * textarea native props, 可选值有'vertical', 'both', 'horizontal', 'none'
   */
  resize?: string;
}
