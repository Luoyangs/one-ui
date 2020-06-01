
import Vue from 'vue';
import { OneUIComponent } from './common';

declare class OneAvatar extends OneUIComponent {
  icon?: string;
  src?: string;
  circle?: boolean;
  size: string;
}

export default OneAvatar;
