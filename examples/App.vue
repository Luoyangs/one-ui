<template>
  <div class="app">
    <left-menu></left-menu>
    <div class="app-container">
      <div class="container-scroller">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LeftMenu from './common/left-menu.vue';

@Component({
  components: {
    LeftMenu
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import './styles/index.scss';

.app {
  display: flex;
  height: 100vh;
  font-family: 'Roboto';
  .left-menu {
    width: 200px;
    flex: 0 0 200px;
  }
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
