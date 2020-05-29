<template>
  <div class="app">
    <left-menu :isExpanded="isExpanded"></left-menu>
    <div class="app-container">
      <div class="container-scroller">
        <main-header :isExpanded="isExpanded" @toggle-menu="isExpanded=!isExpanded" />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LeftMenu, MainHeader } from './common';

@Component({
  components: {
    LeftMenu,
    MainHeader
  }
})
export default class App extends Vue {
  private isExpanded: boolean = true;
}
</script>

<style lang="scss">
@import './styles/index.scss';

.app {
  display: flex;
  height: 100vh;
  font-family: 'Roboto';
  .app-container {
    flex: 1;
    overflow: hidden;
    background-color: #fafafa;
    .container-scroller {
      overflow-y: auto;
      height: 100%;
      width: 100%;
    }
    .one-demos {
      background: #fff;
    }
  }
}
</style>
