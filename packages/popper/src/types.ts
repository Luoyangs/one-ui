import { Placement } from '@popperjs/core/lib/enums';

export interface PopperOptions {
  visible: boolean;
  appendToBody?: boolean;
  placement?: Placement;
  flippable?: boolean;
  transitionName?: string;
  light?: boolean;
  showArrow?: boolean;
  popperRef: any;
}
