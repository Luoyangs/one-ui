
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import FormItemMixin from '@src/mixins/form-item';
import { AvatarOptions } from './types';

@Component({
  name: 'OneAvatar'
})
export default class OneAvatar extends Mixins(FormItemMixin) {
  @Prop(Boolean)
  private circle: Pick<AvatarOptions, 'circle'>;
  @Prop(String)
  private icon: Pick<AvatarOptions, 'icon'>;
  @Prop(String)
  private src: Pick<AvatarOptions, 'src'>;

  private prefixClass: string = 'one-avatar';

  get avatarClass() {
    const { size, icon, circle, prefixClass } = this;

    return {
      [prefixClass]: true,
      [`${prefixClass}--${size}`]: size,
      [`${prefixClass}--circle`]: circle,
      [`${prefixClass}--icon`]: icon
    };
  }

  get imgStyle() {
    let styles = {};

    if (this.src) {
      styles = {
        'background-image': `url(${this.src})`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
      };
    }
    return styles;
  }

  render() {
    const { avatarClass, icon, src, prefixClass, imgStyle } = this;
    const template = <div class={avatarClass}></div>;

    template.children = template.children || [];
    if (icon) {
      template.children.push(<one-icon svg={icon} />);
    } else if (src) {
      template.children.push(<div class={`${prefixClass}-img`} style={imgStyle} />);
    }

    return template;
  }
}
