
import { Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { CardOptions } from './types';

@Component({
  name: 'OneCard',
})
export default class OneCard extends tsx.Component<CardOptions> {
  @Prop(String)
  private title: Pick<CardOptions, 'title'>;

  @Prop({
    type: String,
    default: 'always',
    validator: val => {
      return ['always', 'hover', 'never'].includes(val);
    }
  })
  private shadow: Pick<CardOptions, 'shadow'>;

  @Prop(Boolean)
  private small: Pick<CardOptions, 'small'>;

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
