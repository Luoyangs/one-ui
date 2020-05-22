import { Component, Prop, Mixins } from 'vue-property-decorator';
import FormItemMixin from '@src/mixins/form-item';
import { BUTTON_TYPES, ButtonType } from '@src/constants';
import { ButtonOptions } from './types';

@Component({
  name: 'OneButton'
})
export default class OneButton extends Mixins(FormItemMixin) {
  @Prop(Boolean)
  private disabled: Pick<ButtonOptions, 'disabled'>;

  @Prop(Boolean)
  private fullWidth: Pick<ButtonOptions, 'fullWidth'>;

  @Prop(Boolean)
  private circle: Pick<ButtonOptions, 'circle'>;

  @Prop({
    type: String,
    default: 'default',
    validator: (val: string) => BUTTON_TYPES.includes(val)
  })
  private type: Pick<ButtonOptions, 'type'>;

  @Prop(String)
  private icon: Pick<ButtonOptions, 'icon'>;

  @Prop(String)
  private suffixIcon: Pick<ButtonOptions, 'suffixIcon'>;

  @Prop({
    type: String,
    default: 'button'
  })
  private nativeType: Pick<ButtonOptions, 'nativeType'>;

  @Prop(String)
  private href: Pick<ButtonOptions, 'href'>;

  @Prop({
    type: String,
    default: '_blank'
  })
  private target: Pick<ButtonOptions, 'target'>;

  get buttonClass() {
    const { type, sizeClass, fullWidth, circle, disabled, href, target } = this;

    return {
      'one-button': true,
      [`one-button--${type}`]: type !== ('default' as any),
      [`one-button--${sizeClass}`]: sizeClass !== 'normal',
      'one-button--circle': circle,
      'one-button--link': href && target,
      'one-button--block': fullWidth,
      'disabled': disabled
    };
  }

  private onClick(event: Event) {
    document.documentElement.removeAttribute('data-focus-visible');

    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.$emit('click', event);
  }

  private handlePressTab(event: KeyboardEvent) {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 9) {
      document.documentElement.setAttribute('data-focus-visible', '');
    }
  }

  mounted() {
    document.documentElement.addEventListener('keydown', this.handlePressTab);
  }

  beforeDestroy() {
    document.documentElement.removeEventListener('keydown', this.handlePressTab);
  }

  render() {
    const { href, target, buttonClass, icon, suffixIcon, nativeType, disabled } = this;

    let template = <button type={nativeType} class={buttonClass} disabled={disabled} on-click={this.onClick}></button>;
    if (href) {
      template = <a class={buttonClass} href={href} target={target} on-click={this.onClick}></a>;
    }

    template.children = template.children || [];
    if (icon) {
      template.children.push(<one-icon svg={icon}></one-icon>);
    }
    if (this.$slots.default) {
      template.children.push(<span>{this.$slots.default}</span>);
    }
    if (suffixIcon) {
      template.children.push(<one-icon svg={suffixIcon}></one-icon>);
    }

    return template;
  }
}
