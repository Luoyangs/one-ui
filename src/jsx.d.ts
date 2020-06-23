import Vue, { CreateElement as VueCreateElement, VNode as VueVNode } from 'vue';

declare global {
  interface CreateElement extends VueCreateElement{}
  interface VNode extends VueVNode{}
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface ElementAttributesProperty {}
  }
}
