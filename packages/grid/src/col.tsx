import { Component, Prop, Vue } from 'vue-property-decorator';
import { ColOptions } from './types';

@Component({
  name: 'OneCol'
})
export default class OneCol extends Vue {
  @Prop({ type: [Number, String], default: 0 })
  private span: Pick<ColOptions, 'span'>;
  @Prop([Number, String])
  private order: Pick<ColOptions, 'order'>;
  @Prop([Number, String])
  private offset: Pick<ColOptions, 'offset'>;
  @Prop([Number, String])
  private push: Pick<ColOptions, 'push'>;
  @Prop([Number, String])
  private pull: Pick<ColOptions, 'pull'>;

  private prefixClass: string = 'one-col';
  /**
   * 由row传入
   */
  private gutter: number = 0;

  get colClass() {
    const { prefixClass, span, order, offset, push, pull } = this;

    return {
      [prefixClass]: true,
      [`${prefixClass}-span-${span}`]: span,
      [`${prefixClass}-order-${order}`]: !!order,
      [`${prefixClass}-offset-${offset}`]: !!offset,
      [`${prefixClass}-push-${push}`]: !!push,
      [`${prefixClass}-pull-${pull}`]: !!pull,
    };
  }

  get style() {
    const gutter = +this.gutter;
    let style = {};
    if (gutter !== 0) {
      style = {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      };
    }
    return style;
  }

  private updateGutter() {
    const rowEle = this.$parent as any;
    if (rowEle && rowEle.$options.name === 'OneRow') {
      rowEle.updateGutter(rowEle.gutter);
    }
  }

  mounted() {
    this.updateGutter();
  }

  render(h: CreateElement): VNode {
    const { colClass, style } = this;
    return h('div', {
      class: colClass,
      style
    }, [this.$slots.default]);
  }
}
