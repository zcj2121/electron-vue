<template>
  <div class="forget-header">
    <div class="forget-header-box">
      <div class="forget-header-item" :class="{'active':forgetItem >= 1}">
        <div>输入手机号</div>
      </div>
      <div class="forget-header-item" :class="{'active':forgetItem >= 2}">
        <div>安全验证</div>
      </div>
      <div class="forget-header-item" :class="{'active':forgetItem >= 3}">
        <div>重置密码</div>
      </div>
      <div class="forget-header-item" :class="{'active':forgetItem >= 4}">
        <div>修改密码</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ForgetHeader',
  props: ['forgetItem'],
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
  .forget-header {
    padding: 25px;
    background: #f4f8ff;

    .forget-header-box {
      display: flex;
      justify-content: space-between;
      width: 650px;
      margin: auto;

      .forget-header-item {
        position: relative;
        width: 70px;
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
          width: 140px;
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
