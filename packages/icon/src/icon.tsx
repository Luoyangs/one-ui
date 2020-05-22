import { Component, Prop, Vue } from 'vue-property-decorator';
import { IconOptions } from './types';

@Component({
  name: 'OneIcon'
})
export default class OneIcon extends Vue {
  @Prop(String) private svg: Pick<IconOptions, 'svg'>;

  render() {
    // domPropsInnerHTML like v-html
    return <i class='one-icon' on-click={() => this.$emit('click')} domPropsInnerHTML={this.svg} />;
  }
}
