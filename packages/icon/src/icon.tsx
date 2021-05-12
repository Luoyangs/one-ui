import { Component, Prop, Vue } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { IconOptions } from './types';

@Component({
  name: 'OneIcon'
})
export default class OneIcon extends tsx.Component<IconOptions> {
  @Prop(String) private svg: string;

  render() {
    // domPropsInnerHTML like v-html
    return <i class='one-icon' on-click={() => this.$emit('click')} domPropsInnerHTML={this.svg} />;
  }
}
