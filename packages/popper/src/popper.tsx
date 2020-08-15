import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Instance, StrictModifiers, createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import { Placement, placements } from '@popperjs/core/lib/enums';
import { PopperOptions } from './types';

const stopPropagation = e => e.stopPropagation();

@Component({
  name: 'OnePopper'
})
export default class OnePopper extends Vue {
  @Prop(Boolean)
  private visible: Pick<PopperOptions, 'visible'>;
  @Prop({
    type: Boolean,
    default: true
  })
  private appendToBody: Pick<PopperOptions, 'appendToBody'>;
  @Prop({
    type: String,
    default: 'auto',
    validator: (val: Placement) => placements.includes(val)
  })
  private placement: Pick<PopperOptions, 'placement'>;
  @Prop(Boolean)
  private light: Pick<PopperOptions, 'light'>;
  @Prop(Boolean)
  private flippable: Pick<PopperOptions, 'flippable'>;
  @Prop({
    type: Boolean,
    default: true
  })
  private showArrow: Pick<PopperOptions, 'showArrow'>;
  @Prop(String)
  private transitionName: Pick<PopperOptions, 'transitionName'>;
  @Prop([Function, Object])
  private popperRef: Pick<PopperOptions, 'popperRef'>;

  private popperInstance: Instance;

  get computedPopperRef() {
    // @ts-ignore
    if (typeof this.popperRef === 'function') {
      // @ts-ignore
      return this.popperRef();
    } else if (this.popperRef) {
      return this.popperRef;
    }

    let parent = this.$parent;
    console.log('computedPopperRef', parent, parent.$refs.popperRef);

    while (parent && !parent.$refs.popperRef) {
      parent = parent.$parent;
    }

    if (parent) {
      return parent.$refs.popperRef;
    }

    return null;
  }

  get placementBehavior() { // adjusting placement when overflow the boundry. ps: top-start, right-end...that has suffix does not work
    // @ts-ignore
    const [position] = this.placement.split('-');
    const map = {
      auto: ['bottom', 'top', 'right', 'left'],
      top: ['top', 'bottom', 'right', 'left'],
      bottom: ['bottom', 'top', 'right', 'left'],
      right: ['right', 'left', 'bottom', 'top'],
      left: ['left', 'right', 'bottom', 'top']
    };
    return map[position];
  }

  @Watch('visible', { immediate: true })
  private watchVisible(value: boolean) {
    console.log('watchVisible', value, this.placement, this.popperInstance);

    if (value) {
      // $nextTick ensure computedPopperRef mounted
      this.$nextTick(() => {
        if (!this.popperInstance) {
          this.createPopper();
        } else {
          this.updatePopper();
        }
      });
    }
  }

  @Watch('placement')
  private watchPlacementChange(placement: Pick<PopperOptions, 'placement'>) {
    if (this.popperInstance) {
      this.popperInstance.setOptions({ placement: placement as Placement });
    }
  }

  private createPopper() {
    const { computedPopperRef, appendToBody, placement, flippable, showArrow } = this;
    if (!computedPopperRef) {
      return;
    }

    if (appendToBody) {
      document.body.appendChild(this.$el);
    }

    const popperRef = computedPopperRef.$el ? computedPopperRef.$el : computedPopperRef;
    const modifiers: StrictModifiers[] = [offset, {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    }, preventOverflow];
    if (flippable) {
      modifiers.push(flip);
    }
    if (showArrow) {
      const arrowEl = document.createElement('div');
      arrowEl.setAttribute('class', 'one-popper__arrow');
      arrowEl.setAttribute('data-popper-arrow', '');
      this.$el.appendChild(arrowEl);
      modifiers.push(arrow, {
        name: 'arrow',
        options: {
          padding: 5,
        },
      });
    }
console.log('placement', placement);

    this.popperInstance = createPopper(popperRef, this.$el as HTMLElement, {
      // @ts-ignore
      placement,
      modifiers,
    });
  }

  updatePopper() {
    console.log('updatePopper', this.placement, this.popperInstance);

    if (this.popperInstance) {
      this.popperInstance.update();
    }
  }

  destroyPopper() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.$el.removeEventListener('click', stopPropagation);
    }
  }

  render() {
    const { transitionName, visible, light } = this;
    return (
      <transition name={transitionName}>
        <div class={['one-popper', visible ? 'show' : 'hidden', light ? 'light-theme' : 'default-theme']}>
          {this.$slots.default}
        </div>
      </transition>
    );
  }
}
