
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'OneCard'
})
export default class OneCard extends Vue {
  @Prop(String)
  private title: string;

  @Prop({
    type: String,
    default: 'always',
    validator: val => {
      return ['always', 'hover', 'never'].includes(val);
    }
  })
  private shadow: string;

  @Prop(Boolean)
  private small: boolean;

  get containerClass() {
    const { shadow, small } = this;

    return [
      'one-card',
      `one-card--${shadow}`,
      small ? 'one-card--small' : ''
    ];
  }

  render() {
    const { title, containerClass } = this;
    const titleView = [];
    if (title) {
      titleView.push(<div class='one-card__title'>{title}</div>);
    } else if (this.$slots.title) {
      titleView.push(<div class='one-card__title'>{this.$slots.title}</div>);
    }

    return (
      <div class={containerClass}>
        {...titleView}
        <div class='one-card__content'>{this.$slots.default}</div>
      </div>
    );
  }
}
