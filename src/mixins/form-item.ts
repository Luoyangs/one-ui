import { Component, Prop, Vue } from 'vue-property-decorator';
import { ComponentSize, COMPONENTS_SIZE } from '@src/constants';

@Component({
  name: 'FormItemMixin'
})
export default class FormItemMixin extends Vue {
  @Prop({
    type: String,
    validator: (val: string = 'normal') => COMPONENTS_SIZE.includes(val)
  })
  protected size: ComponentSize;

  get formItem() {
    let parent = this.$parent;
    while (parent && parent.$options.name !== 'ShopeeFormItem') {
      parent = parent.$parent;
    }
    return parent;
  }

  get sizeClass() {
    return this.size || (this.formItem || {} as any).sizeClass || 'normal';
  }
}
