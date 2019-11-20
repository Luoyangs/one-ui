<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <one-card title="插件">
      插件可以增加 Vue 的全局/实例属性和组件选项。在这些情况下，在 TypeScript 中制作插件需要类型声明。庆幸的是，TypeScript 有一个特性来补充现有的类型，叫做模块补充 (module augmentation)。
    </one-card>
    <one-card title="插件" shadow="hover">
      插件可以增加 Vue 的全局/实例属性和组件选项。在这些情况下，在 TypeScript 中制作插件需要类型声明。庆幸的是，TypeScript 有一个特性来补充现有的类型，叫做模块补充 (module augmentation)。
    </one-card>
    <one-card title="插件" shadow="never">
      插件可以增加 Vue 的全局/实例属性和组件选项。在这些情况下，在 TypeScript 中制作插件需要类型声明。庆幸的是，TypeScript 有一个特性来补充现有的类型，叫做模块补充 (module augmentation)。
    </one-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { Card as OneCard } from 'one-ui';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss" scoped>
.one-card {
  margin-bottom: 20px;
  margin-left: 20px;
  float: left;
  width: 300px;
}
</style>
