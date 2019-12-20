<template>
  <div class="autograph-header">
    <div class="autograph-header-box">
      <div class="autograph-header-item" :class="{'active':autographItem >= 1}">
        <div>填写收款信息</div>
      </div>
      <div class="autograph-header-item" :class="{'active':autographItem >= 2}">
        <div>回填验证金额</div>
      </div>
      <div class="autograph-header-item" :class="{'active':autographItem >= 3}">
        <div>开通数字证书</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AutographHeader',
  props: ['autographItem'],
  data() {
    return {}
  },

  methods: {

  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
  .autograph-header {
    padding: 25px;
    background: #f4f8ff;

    .autograph-header-box {
      display: flex;
      justify-content: space-between;
      width: 500px;
      margin: auto;

      .autograph-header-item {
        position: relative;
        width: 90px;
        text-align: center;
        white-space: nowrap;
        color: #666666;

        img {
          width: 26px;
          height: auto;
        }

        div {
          margin-top: 8px;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 13px;
          left: -132px;
          width: 150px;
          height: 2px;
          background: #b7b7b7;
        }

        &:nth-child(1):before {
          content: " ";
          display: inherit;
          width: 26px;
          height: 27px;
          margin: auto;
          background: url(../../../assets/img/forget-1.png) no-repeat;
          background-size: 100%;
        }

        &:nth-child(2) {
          &:before {
            content: " ";
            display: inherit;
            width: 26px;
            height: 27px;
            margin: auto;
            background: url(../../../assets/img/forget-2.png) no-repeat;
            background-size: 100%;
          }
        }

        &:nth-child(3) {
          &:before {
            content: " ";
            display: inherit;
            width: 26px;
            height: 27px;
            margin: auto;
            background: url(../../../assets/img/forget-3.png) no-repeat;
            background-size: 100%;
          }
        }

        &:nth-child(4) {
          &:before {
            content: " ";
            display: inherit;
            width: 26px;
            height: 27px;
            margin: auto;
            background: url(../../../assets/img/forget-4.png) no-repeat;
            background-size: 100%;
          }
        }

        &.active {
          color: #3080ff;
        }

        &.active:after {
          background: #3080ff;
        }

        &.active:nth-child(1):before {
          content: " ";
          display: inherit;
          width: 26px;
          height: 27px;
          margin: auto;
          background: url(../../../assets/img/forget-11.png) no-repeat;
          background-size: 100%;
        }

        &.active:nth-child(2):before {
          content: " ";
          display: inherit;
          width: 26px;
          height: 27px;
          margin: auto;
          background: url(../../../assets/img/forget-22.png) no-repeat;
          background-size: 100%;
        }

        &.active:nth-child(3):before {
          content: " ";
          display: inherit;
          width: 26px;
          height: 27px;
          margin: auto;
          background: url(../../../assets/img/forget-33.png) no-repeat;
          background-size: 100%;
        }

        &.active:nth-child(4):before {
          content: " ";
          display: inherit;
          width: 26px;
          height: 27px;
          margin: auto;
          background: url(../../../assets/img/forget-44.png) no-repeat;
          background-size: 100%;
        }

        &:first-child:after {
          display: none;
        }
      }
    }
  }
</style>
