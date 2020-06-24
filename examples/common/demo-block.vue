<template>
  <div class="common-demo-block">
    <img class="demo-block-control" @click="isExpanded = !isExpanded" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg">
    <div class="source" ref="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" :style="{ height: isExpanded ? sourceRefHeight: 'auto' }">
      <div class="desc" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  name: 'DemoBlock'
})
export default class DemoBlock extends Vue {
  private isExpanded: boolean = true;
  private expandLabel = '<>';
  private sourceRefHeight: string = '200px';

  private renderAnchorHref() {
    const anchors = document.querySelectorAll('h2 a, h3 a, h4 a, h5 a');
    const basePath = location.href.split('#').splice(0, 2).join('#');

    Array.from(anchors).forEach((a: HTMLLinkElement) => {
      let href = a.getAttribute('href');
      href = href.substring(href.lastIndexOf('#'));
      a.href = basePath + href;
    });
  }

  private mounted() {
    this.renderAnchorHref();

    const sourceRef = this.$refs.source as HTMLDivElement;
    this.sourceRefHeight = sourceRef.getBoundingClientRect().height + 'px';
  }
}
</script>

<style lang="scss">
.common-demo-block {
  position: relative;
  display: flex;
  transition: 0.2s;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .demo-button {
    float: right;
  }
  img.demo-block-control {
    position: absolute;
    right: -8px;
    bottom: 0;
    cursor: pointer;
    font-size: 16px;
    transform: translateX(-30px);
    width: 18px;
    height: 18px;
    line-height: 44px;
    transition: 0.3s;
    display: inline-block;
  }
  .source {
    flex: 4;
    padding: 24px;
    border-right: 1px solid #eaeefb;
  }
  .meta {
    flex: 3;
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    transition: height 0.2s;
  }
  .desc {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 20px;
    background-color: #fff;
    p {
      margin: 0;
      line-height: 26px;
    }
    code {
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
  .highlight {
    pre {
      margin: 0;
      font-size: 0;
    }
    code.hljs {
      margin: 0;
      padding: 18px 24px;
      border: none;
      max-height: none;
      border-radius: 0;
      display: block;
      overflow-x: auto;
      &::before {
        content: none;
      }
    }
  }
}
</style>
