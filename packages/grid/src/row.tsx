import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { RowOptions } from './types';

@Component({
  name: 'OneRow'
})
export default class OneRow extends Vue {
  @Prop([Number, String])
  private gutter: Pick<RowOptions, 'gutter'>;
  @Prop(String)
  private type: Pick<RowOptions, 'type'>;
  @Prop(String)
  private align: Pick<RowOptions, 'align'>;
  @Prop(String)
  private justify: Pick<RowOptions, 'justify'>;

  private prefixClass: string = 'one-row';

  get rowClass() {
    const { prefixClass, type, align, justify } = this;

    return {
      [prefixClass]: !type,
      [`${prefixClass}-${type}`]: !!type,
      [`${prefixClass}-${type}--${align}`]: !!type && align,
      [`${prefixClass}-${type}--${justify}`]: !!type && justify
    };
  }

  get style() {
    // Unary + will coerce to number
    // https://github.com/microsoft/TypeScript/issues/5710
    const gutter = +this.gutter;
    let style = {};
    if (gutter !== 0) {
      style = {
        marginLeft: gutter / -2 + 'px',
        marginRight: gutter / -2 + 'px'
      };
    }
    return style;
  }

  @Watch('gutter', { immediate: true })
  private updateGutter(value: number): void {
    const children = this.$children;
    children.forEach(child => {
      if (child && child.$options.name === 'OneCol') {
        (child as any).gutter = this.gutter;
      }
    });
  }

  render(h: CreateElement): VNode {
    const { rowClass, style } = this;
    return h('div', {
      class: rowClass,
      style
    }, [this.$slots.default]);
  }
}
