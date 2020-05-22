import Vue from 'vue';
import { OneUIComponent } from './common';
import { ButtonType } from '@src/constants';

export declare class OneButton extends OneUIComponent {
  type: ButtonType;
  disabled?: boolean;
  fullWidth?: boolean;
  circle?: boolean;
  icon?: string;
  suffixIcon?: string;
  nativeType?: string;
  href?: string;
  target?: string;
}
