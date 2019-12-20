<template>
  <div class="credit-nav-box">
    <a class="credit-nav-item" @click="navActiveFun" :class="{'active': navActive}">
      <img class="credit-nav-img-active" src="../../../../assets/img/credit-nav-1-active.png" alt="">
      <img class="credit-nav-img" src="../../../../assets/img/credit-nav-1-active.png" alt="">
      <span>申请额度</span>
    </a>
    <a class="credit-nav-item-btn" :href="downurl+ '/templates/template.xlsx'" download="">
      <img class="credit-nav-img-active" src="../../../../assets/img/credit-nav-2-active.png" alt="">
      <img class="credit-nav-img" src="../../../../assets/img/credit-nav-2.png" alt="">
      <span>下载模版</span>
    </a>
    <a
      class="credit-nav-item-btn"
      href="../../static/files/manual.pdf"
      download="和智商服借款操作手册.pdf"
    >
      <img class="credit-nav-img-active" src="../../../../assets/img/credit-nav-3-active.png" alt="">
      <img class="credit-nav-img" src="../../../../assets/img/credit-nav-3.png" alt="">
      <span>下载教程</span>
    </a>
  </div>
</template>

<script>

import {downURL} from '@/utils/request'
export default {
  name: 'CreditNavBox',
  props: {
    navActive: {
    }
  },
  data() {
    return {
      downurl: downURL()
    }
  },

  methods: {
    navActiveFun(val) {
      this.$emit('acitveFun', val)
    }
  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
  .credit-nav-box {
    overflow: hidden;
    padding: 15px 1px 35px;

    .credit-nav-item,
    .credit-nav-item-btn {
      float: left;
      height: 100px;
      width: calc(33.333333% - 10px);
      margin-left: 15px;
      font-size: 16px;
      text-align: center;
      line-height: 100px;
      color: #2c2c2c;
      background: rgba(246, 248, 249, 1);
      box-shadow: 0px 0px 0px 1px rgba(226, 226, 226, 1);
      cursor: pointer;

      img {
        width: 24px;
        height: auto;
        vertical-align: middle;
      }

      span {
        margin-left: 10px;
        vertical-align: middle;
      }

      .credit-nav-img-active {
        display: none;
      }

      .credit-nav-img {
        display: initial;
      }
    }

    .credit-nav-item {
      color: #ffffff;
      background: linear-gradient(90deg, rgba(186, 200, 250, 1) 0%, rgba(107, 153, 248, 1) 100%);
      box-shadow: 2px 7px 11px 1px rgba(204, 221, 255, 1);
      margin-left: 0px;
      &.active,
      &:active,
      &:hover {
        background: linear-gradient(90deg, #8c9ff5 0%, #4266f2 100%);
        box-shadow: 2px 7px 11px 1px rgba(204, 221, 255, 1);

        .credit-nav-img-active {
          display: initial;
        }

        .credit-nav-img {
          display: none;
        }
      }
    }

    .credit-nav-item-btn{
      &.active,
      &:active,
      &:hover {
        color: #2f81ff;
        box-shadow: 0px 0px 11px 1px rgba(226, 226, 226, 1);
        .credit-nav-img-active {
          display: initial;
        }

        .credit-nav-img {
          display: none;
        }
      }
    }
  }
</style>
