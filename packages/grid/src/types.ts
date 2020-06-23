export interface RowOptions {
  /**
   * 栅格间距，单位 px，左右平分
   */
  gutter: number;
  /**
   * 布局模式，可选值为flex或不选
   */
  type?: 'flex';
  /**
   * flex 布局下的垂直对齐方式
   */
  align: 'top' | 'middle' | 'bottom';
  /**
   * flex 布局下的水平排列方式
   */
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

export interface ColOptions {
  /**
   * 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none
   */
  span: number;
  /**
   * 栅格的顺序，在flex布局下有效
   */
  order: number;
  /**
   * 栅格左侧的间隔格数
   */
  offset: number;
  /**
   * 栅格向右移动格数
   */
  push: number;
  /**
   * 栅格向左移动格数
   */
  pull: number;
}

export type GridOptions =  RowOptions | ColOptions;
