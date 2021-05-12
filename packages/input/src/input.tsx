import { VNodeData, CreateElement } from 'vue';
import { Component, Prop, Model, Vue } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { COMPONENTS_SIZE, ComponentSize } from '@src/constants/size';
import { calcTextareaHeight } from '../util';
import { InputOptions } from './types';
import { Icon as OneIcon } from 'one-ui';
import closeIcon from '@svg/round-close.svg';
import invisibleIcon from '@svg/invisible.svg';
import viewIcon from '@svg/view.svg';
const prefixClass = 'one-input';

@Component({
  name: 'OneInput',
  components: {
    OneIcon
  }
})
export default class OneInput extends tsx.Component<InputOptions> {
  @Model('value-change', { type: [String, Number]})
  private value: string | number;
  @Prop({
    type: String,
    default: 'text'
  })
  private type: string;
  @Prop({
    type: String,
    default: 'normal',
    validator: (val: string) => COMPONENTS_SIZE.includes(val)
  })
  size: ComponentSize;
  @Prop(String)
  private placeholder: string;
  @Prop(String)
  private prefixIcon: string;
  @Prop(String)
  private suffixIcon: string;
  @Prop(String)
  private prefixLabel: string;
  @Prop(String)
  private suffixLabel: string;
  @Prop(Boolean)
  private clearable: boolean;
  @Prop(Boolean)
  private disabled: boolean;
  @Prop(Boolean)
  private showWordLimit: boolean;
  @Prop(Boolean)
  private autosize: boolean;
  @Prop(Number)
  private maxLength: number;
  @Prop(Number)
  private maxrows: number;
  @Prop(Number)
  private minrows: number;
  @Prop(Number)
  private rows: number;
  @Prop({
    type: String,
    default: 'vertical',
    validator: (val: string) => ['vertical', 'both', 'horizontal', 'none'].includes(val)
  })
  private resize: string;

  private acturalListeners: any = {};
  /**
   * textarea 计算样式
   */
  private textareaCalcStyle: any = {};
  private focused: boolean = false;
  // @ts-ignore
  private currentValue: string | number = this.value;
  // @ts-ignore
  private realType: string = this.type;

  get inputClass() {
    const { disabled, isTextarea, size, focused } = this;
    return {
      [`${prefixClass}__inner`]: true,
      // @ts-ignore
      [`${prefixClass}--${size}`]: !isTextarea,
      'is-disabled': disabled,
      'is-focused': focused
    };
  }

  get activeClearBtnClass() {
    return this.clearable && this.textLength > 0 ? 'active-clearable' : '';
  }

  get textLength() {
    if (typeof this.currentValue === 'number') {
      return String(this.currentValue).length;
    }

    return (this.currentValue || '').length;
  }

  get textareaStyle() {
    return Object.assign({}, this.textareaCalcStyle, {
      resize: this.resize
    });
  }

  get isWordLimitVisible() {
    return this.showWordLimit
      && this.maxLength
      // @ts-ignore
      && !this.disabled;
  }

  get nativeProps() {
    const props: any = {};
    // remove below props when using v-bind at native input
    const removeProps = ['prefixLabel', 'prefixIcon', 'suffixLabel', 'suffixIcon', 'restriction'];
    for (const key in this.$props) {
      if (this.$props.hasOwnProperty(key)) {
        if (!removeProps.includes(key)) {
          const value = this.$props[key];
          props[key] = typeof value === 'object' ? Object.assign({}, value) : value;
        }
      }
    }

    // update native props for type change
    if (this.realType) {
      props.type = this.realType;
    }
    return props;
  }

  get isTextarea() {
    // @ts-ignore
    return this.type === 'textarea';
  }

  get isPassword() {
    // @ts-ignore
    return this.type.toLowerCase() === 'password';
  }

  created() {
    // remove click event
    for (const event in this.$listeners) {
      if (event !== 'click') {
        this.acturalListeners[event] = this.$listeners[event];
      }
    }

    this.$nextTick(() => {
      this.resizeTextarea();
    });
  }

  private handleTogglePassword() {
    if (this.realType === 'password') {
      this.realType = 'text';
    } else {
      this.realType = 'password';
    }
  }

  private handleClick() {
    this.$emit('click');
  }

  private handleClear() {
    this.setCurrentValue('');
    this.$emit('clear');
  }

  private handleFocus() {
    this.focused = true;
  }

  private handleBlur() {
    this.focused = false;
  }

  private handleInput(event: InputEvent) {
    // remove the effects of deleteCompositionText input event
    // can't input word when using the chinese method in safari
    if (event.inputType === 'deleteCompositionText') {
      return;
    }

    this.setCurrentValue((event.target as HTMLInputElement).value);
  }

  private handleChange(event: InputEvent) {
    this.setCurrentValue((event.target as HTMLInputElement).value);
  }

  private setCurrentValue(value: string | number) {
    this.currentValue = value;
    // @ts-ignore
    if (this.value !== value) {
      this.$emit('value-change', value);
    }

    this.$nextTick(() => {
      this.resizeTextarea();
    });
  }

  private resizeTextarea() {
    const { autosize, isTextarea, rows, minrows, maxrows } = this;
    // @ts-ignore
    const minRows = Math.min(...[rows, minrows].filter(Boolean));
    const textarea = this.$refs.textarea as HTMLTextAreaElement;
    if (!isTextarea) {
      return;
    }

    if (!autosize) {
      this.textareaCalcStyle = {
        // @ts-ignore
        minHeight: calcTextareaHeight(textarea, minRows, maxrows).minHeight
      };
      return;
    }

    // @ts-ignore
    this.textareaCalcStyle = calcTextareaHeight(textarea, minRows, maxrows);
  }

  private renderInputPrefix() {
    const { prefixIcon, prefixLabel } = this;
    const prefixProps = {
      class: `${prefixClass}__prefix`,
      ref: 'prefix'
    } as VNodeData;
    const prefix = <div {...prefixProps}></div>;
    prefix.children = prefix.children || [];

    if (prefixLabel) {
      const prefixSplitClass = `${prefixClass}__prefix-split`;
      prefix.children.push(<span>{prefixLabel}<span class={prefixSplitClass}></span></span>);
    } else if (prefixIcon) {
      const prefixIconClass = `${prefixClass}__prefix-icon`;
      prefix.children.push(<one-icon svg={prefixIcon} class={prefixIconClass}></one-icon>);
    } else if (this.$slots.prefix) {
      prefix.children.push(this.$slots.prefix[0]);
    }

    return prefix.children.length ? prefix : null;
  }

  private renderInputSuffix() {
    const { isTextarea, suffixIcon, suffixLabel, clearable, isWordLimitVisible, textLength, maxLength, isPassword, realType, handleClear, handleTogglePassword } = this;
    const suffixProps = {
      class: `${prefixClass}__suffix`,
      ref: 'suffix'
    } as VNodeData;
    const suffix = <div {...suffixProps}></div>;
    suffix.children = suffix.children || [];

    if (isPassword) {
      const viewProps = {
        class: `${prefixClass}__password`,
        props: {
          svg: realType === 'text' ? viewIcon : invisibleIcon
        },
        nativeOn: {
          click: handleTogglePassword
        }
      } as VNodeData;
      suffix.children.push(<OneIcon {...viewProps} />);
    }

    if (clearable) {
      const clearProps = {
        class: `${prefixClass}__clear-btn`,
        props: {
          svg: closeIcon
        },
        nativeOn: {
          click: handleClear
        }
      } as VNodeData;
      suffix.children.push(<OneIcon {...clearProps} />);
    }
    if (!isTextarea && suffixLabel) {
      const suffixSplitClass = `${prefixClass}__suffix-split`;
      suffix.children.push(<span><span class={suffixSplitClass}></span>{suffixLabel}</span>);
    } else if (isWordLimitVisible) {
      const suffixSplitClass = `${prefixClass}__count`;
      suffix.children.push(<span class={suffixSplitClass}>{textLength}/{maxLength}</span>);
    }
    if (!isTextarea && suffixIcon) {
      const suffixIconClass = `${prefixClass}__suffix-icon`;
      suffix.children.push(<OneIcon svg={suffixIcon} class={suffixIconClass} />);
    } else if (!isTextarea && this.$slots.suffix) {
      suffix.children.push(this.$slots.suffix[0]);
    }

    return suffix.children.length ? suffix : null;
  }

  private renderBasicInput() {
    const {
      realType,
      inputClass,
      activeClearBtnClass,
      currentValue,
      placeholder,
      nativeProps,
      acturalListeners,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange
    } = this;
    const inputProps = {
      class: `${prefixClass}__input`,
      ref: 'text',
      props: {
        type: realType,
        placeholder,
        value: currentValue,
      },
      attrs: this.$attrs,
      domProps: nativeProps,
      nativeOn: acturalListeners,
      on: {
        focus: handleFocus,
        blur: handleBlur,
        compositionend: handleInput,
        input: handleInput,
        change: handleChange
      }
    } as VNodeData;

    return (
      <div class={[inputClass, activeClearBtnClass]}>
        {this.renderInputPrefix()}
        <input {...inputProps}></input>
        {this.renderInputSuffix()}
      </div>
    );
  }

  private renderBasicTextarea() {
    const { inputClass, activeClearBtnClass, textareaStyle, currentValue, nativeProps, handleFocus, handleBlur, handleInput, renderInputSuffix } = this;
    const inputProps = {
      class: inputClass,
      style: textareaStyle,
      ref: 'textarea',
      props: {
        value: currentValue
      },
      domProps: nativeProps,
      attrs: this.$attrs,
      nativeOn: this.$listeners,
      on: {
        focus: handleFocus,
        blur: handleBlur,
        input: handleInput
      }
    } as VNodeData;

    return (
      <div class={activeClearBtnClass}>
        <textarea {...inputProps}></textarea>
        {renderInputSuffix()}
      </div>
    );
  }

  render(h: CreateElement) {
    const { handleClick, type, isTextarea } = this;
    const inputWrapProps = {
      class: !isTextarea ? prefixClass : `${prefixClass} ${prefixClass}__${type}`,
      on: {
        click: handleClick
      }
    } as VNodeData;

    // @ts-ignore
    const inputContent = isTextarea
      ? this.renderBasicTextarea()
      : this.renderBasicInput();
    const helpSlot = this.$slots.help
      ? h('div', {
          class: `${prefixClass}__help`,
        }, [this.$slots.help])
      : null;

    return (
      <div {...inputWrapProps}>
        {inputContent}
        {helpSlot}
      </div>
    );
  }
}
