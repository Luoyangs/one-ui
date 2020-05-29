<template>
  <div class="left-menu">
    <div class="menu-scroller" :style="style">
      <ul class="menu-list">
        <div class="menu-search">
          <!-- <div class="search-input" contenteditable @input="handleSearch"></div> -->
        </div>
        <ul class="sub-list primary">
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/install">Install</router-link></li>
          <li><router-link to="/change-log">Change Log</router-link></li>
        </ul>
        <dd>General
          <ul class="sub-list">
            <li><router-link to="/color">Color</router-link></li>
            <li><router-link to="/button">Button</router-link></li>
            <li><router-link to="/avatar">Avatar</router-link></li>
            <li><router-link to="/layout">Layout</router-link></li>
            <li><router-link to="/icon">Icon</router-link></li>
            <li><router-link to="/card">Card</router-link></li>
          </ul>
        </dd>
        <dd>Navigation
          <ul class="sub-list">
            <li><router-link to="/header">Header</router-link></li>
            <li><router-link to="/sidebar">Sidebar</router-link></li>
            <li><router-link to="/tabs">Tabs</router-link></li>
            <li><router-link to="/pagination">Pagination</router-link></li>
            <li><router-link to="/anchor">Anchor</router-link></li>
            <li><router-link to="/affix">Affix</router-link></li>
            <li><router-link to="/breadcrumb">Breadcrumb</router-link></li>
            <li><router-link to="/backtop">Backtop</router-link></li>
          </ul>
        </dd>
        <dd>Data Entry
          <ul class="sub-list">
            <li><router-link to="/checkbox">Checkbox</router-link></li>
            <li><router-link to="/radio">Radio</router-link></li>
            <li><router-link to="/select">Select</router-link></li>
            <li><router-link to="/cascader">Cascader</router-link></li>
            <li><router-link to="/input">Input</router-link></li>
            <li><router-link to="/rate">Rate</router-link></li>
            <li><router-link to="/switch">Switch</router-link></li>
            <li><router-link to="/upload">Upload</router-link></li>
            <li><router-link to="/form">Form</router-link></li>
            <li><router-link to="/calendar">Calendar</router-link></li>
            <li><router-link to="/color-picker">ColorPicker</router-link></li>
            <li><router-link to="/date-picker">DatePicker</router-link></li>
          </ul>
        </dd>
        <dd>Data Display
          <ul class="sub-list">
            <li><router-link to="/table">Table</router-link></li>
            <li><router-link to="/badge">Badge</router-link></li>
            <li><router-link to="/tag">Tag</router-link></li>
            <li><router-link to="/steps">Steps</router-link></li>
            <li><router-link to="/timeline">Timeline</router-link></li>
            <li><router-link to="/tree">Tree</router-link></li>
            <li><router-link to="/menu">Menu</router-link></li>
            <li><router-link to="/collapse">Collapse</router-link></li>
            <li><router-link to="/swiper">Swiper</router-link></li>
            <li><router-link to="/infinite-scroll">InfiniteScroll</router-link></li>
          </ul>
        </dd>
        <dd>Feedback
          <ul class="sub-list">
            <li><router-link to="/modal">Modal</router-link></li>
            <li><router-link to="/notify">Notify</router-link></li>
            <li><router-link to="/toast">Toast</router-link></li>
            <li><router-link to="/alert">Alert</router-link></li>
            <li><router-link to="/tooltip">Tooltip</router-link></li>
            <li><router-link to="/popover">Popover</router-link></li>
            <li><router-link to="/progress">Progress</router-link></li>
            <li><router-link to="/skeletion">Skeletion</router-link></li>
            <li><router-link to="/spin">Spin</router-link></li>
            <li><router-link to="/drawer">Drawer</router-link></li>
            <li><router-link to="/loading">Loading</router-link></li>
          </ul>
        </dd>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class LeftMenu extends Vue {
  @Prop(Boolean) private isExpanded: boolean;

  private search: string = '';

  get style() {
    if (this.isExpanded) {
      return {
        'width': '120px',
        'padding-left': '16px'
      };
    } else {
      return {
        'width': '0',
        'padding-left': '0'
      };
    }
  }

  private handleSearch(event: any) {
    this.search = event.target.textContent;
  }
}
</script>

<style lang="scss" scoped>
.left-menu {
  position: relative;
  height: 100vh;
  background: #ffffff;
  padding: 0;
  .menu-scroller {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .menu-list, .menu-item {
    list-style: none;
    font-weight: normal;
  }
  .menu-list {
    margin: 0;
    padding: 0;
    dd {
      color: #333;
      font-weight: 500;
      font-size: 14px;
    }
    .sub-list {
      margin: 12px 0;
      a {
        display: block;
        color: #666666;
        font-size: 13px;
        font-weight: normal;
        padding: 8px 12px;
        &.router-link-active {
          color: #009688;
          font-weight: 500;
          position: relative;
          &::after {
            position: absolute;
            right: 2px;
            content: '';
            width: 2px;
            height: 24px;
            background: #009688
          }
        }
      }
      &.primary a {
        color: #333;
        font-weight: 500;
        padding-left: 0;
        &.router-link-active {
          color: #009688;
        }
      }
    }
  }
}
</style>
