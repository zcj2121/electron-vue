<template>
  <a :href="downrul+ buttonUrl" download="" class="box-title-use-dwon">
    <img v-show="buttonImg" class="down-img" src="../assets/img/down.png" :alt="buttonText">
    <img v-show="buttonImg" class="down-hover-img" src="../assets/img/down-hover.png" :alt="buttonText">
    <span>{{buttonText}}</span>
  </a>
</template>

<script>
import { downURL } from '@/utils/request'

export default {
  name: 'DownloadButton',
  props: {
    buttonText: {
      default: '下载',
      type: String
    },
    buttonUrl: {
      default: '',
      type: String
    },
    buttonImg: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      downrul: downURL()
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .box-title-use-dwon {
    overflow: hidden;
    font-size: 14px;
    float: right;
    color: #6b99f6;

    span {
      vertical-align: middle;
    }

    .down-img {
      display: initial;
      vertical-align: middle;
    }

    .down-hover-img {
      display: none;
      vertical-align: middle;
    }

    &:hover,
    &:active {
      color: #2f81ff;

      .down-hover-img {
        display: initial;
        vertical-align: middle;
      }

      .down-img {
        display: none;
        vertical-align: middle;
      }
    }

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    &.text-c {
      text-align: center;
    }
  }
</style>
