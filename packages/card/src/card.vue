<template>
  <div :class="['one-card', `one-card--${shadow}`]">
    <div class="one-card__title" v-if="title && !$slots.title" v-html="title"></div>
    <div class="one-card__title" v-else-if="!title && $slots.title"><slot name="title"></slot></div>
    <div class="one-card__content"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'OneCard'
})
export default class OneCard extends Vue {
  @Prop()
  private title: string;

  @Prop({
    type: String,
    default: 'always',
    validator: val => {
      return ['always', 'hover', 'never'].includes(val);
    }
  })
  private shadow: string;
}
</script>
