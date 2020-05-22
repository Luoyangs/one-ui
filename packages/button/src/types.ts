import { ButtonType } from '@src/constants';

export interface ButtonOptions {
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
