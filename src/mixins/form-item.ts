import { Component, Prop, Vue } from 'vue-property-decorator';
import { ComponentSize, COMPONENTS_SIZE } from '@src/constants';

declare module 'vue/types/vue' {
  interface Vue {
    size?: ComponentSize;
    sizeClass?: string;
  }
}

@Component({
  name: 'FormItemMixin'
})
export default class FormItemMixin extends Vue {
  @Prop({
    type: String,
    validator: (val: string = 'normal') => COMPONENTS_SIZE.includes(val)
  })
  size: ComponentSize;

  get formItem() {
    let parent = this.$parent;
    while (parent && parent.$options.name !== 'ShopeeFormItem') {
      parent = parent.$parent;
    }
    return parent;
  }

  /**
   * return current Component's size || formItem's size || defaule normal
   */
  get sizeClass(): string {
    return this.size || (this.formItem || {} as any).sizeClass || 'normal';
  }
}
