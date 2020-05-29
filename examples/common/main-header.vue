<template>
  <div class="main-header">
    <div class="main-menu">
      <one-icon @click="$emit('toggle-menu')" :svg="menuIcon" />
    </div>
    <div class="breakmenu"><a href="/">Home</a>{{$route.path}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { listviewIcon, backIcon } from 'one-svgs/svg';

@Component
export default class MainHeader extends Vue {
  @Prop(Boolean) private isExpanded: boolean;

  get menuIcon() {
    return this.isExpanded ? backIcon : listviewIcon;
  }
}
</script>

<style lang="scss">
.main-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: 56px;
  background: #ffffff;
  margin-bottom: 16px;
  z-index: 9999;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  .main-menu {
    flex-basis: 56px;
    text-align: center;
  }
  .one-icon {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .breakmenu {
    flex: 1;
    height: 100%;
    line-height: 56px;
    padding-left: 20px;
    position: relative;
    color: #333;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      height: 38px;
      width: 1px;
      background-color: #dddddd;
    }
  }
}
</style>
