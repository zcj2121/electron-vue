<template>
  <div class="work-header">
    <div class="work-user__box">
      <img src="../../../assets/img/work-company.png" alt="">
      <span>{{info.name}}</span>
      <div class="work-statu">
        <span>数字证书：</span>
        <span v-if="info.isOpenAccount" :class="{'noOpne': true}">已开通</span>
        <div class="btn-box" v-else>
          <el-button class="btn none-btn" type="default" @click="goAutograph">立即开通</el-button>
        </div>
      </div>
    </div>
    <div class="work-header__info">
      <span class="work-header__title">基本信息</span>
      <span
        class="work-header__showbox"
        @click="changeShowHide">
        <el-tooltip
          class="item"
          effect="light"
          :content="detailShow?'隐藏':'显示'"
          placement="top"
        >
          <img
            :src="detailShow?require('../../../assets/img/user-eye-hide.png'):
            require('../../../assets/img/user-eye-show.png')"
            alt=""
          >
        </el-tooltip>
      </span>

    </div>
    <div class="work-header-box">
      <div class="work-header-item">
        <div class="work-header-item-value">{{detailShow ? info.idNo: user.idNumber}}</div>
        <div class="work-header-item-title">证件号码</div>
      </div>
      <div class="work-header-item">
        <div class="work-header-item-value">{{detailShow ? info.mobile: user.customerTel}}</div>
        <div class="work-header-item-title">手机号码</div>
      </div>
      <div class="work-header-item">
        <div class="work-header-item-value">{{detailShow ? info.mail: user.contactMail}}</div>
        <div class="work-header-item-title">企业邮箱</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkHeader',
  props: {
    user: {
      type: Object
    },
    info: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  },
  data() {
    return {
      detailShow: false
    }
  },
  methods: {
    changeShowHide() {
      this.detailShow = !this.detailShow
    },
    goAutograph() {
      sessionStorage.removeItem('isAutograph')
      this.$router.push({ path: '/autograph' })
    }
  }
}
</script>

<style lang="less" scoped>
  .work-header {
    position: relative;
    height: 158px;
    padding: 16px 28px 16px 20px;
    background: linear-gradient(to bottom, #F8FAFF 0%,#E8EAF1 100%);
    z-index: 0;
    .work-user__box{
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        vertical-align: middle;
      }
      span{
        margin-left: 8px;
        font-size: 24px;
        color: #39496B;
        vertical-align: middle;
      }
      .work-statu {
        float: right;
        margin-top: 5px;
        line-height: 28px;
        font-size: 12px;
        color: #2C2C2C;
        span {
          vertical-align: initial;
          margin-left: 0px;
          font-size: 12px;
          &.noOpne {
            font-size: 12px;
            color: #ffac36;
          }
        }
        .btn-box{
          margin-left: 2px;
          text-align: left;
          float: right;
          .btn{
            font-size: 12px;
          }
        }
      }
    }

    .work-header__info{
      padding: 0 45px;
      margin-top: 20px;
      position: relative;
      .work-header__title{

      }
      .work-header__showbox {
        overflow: hidden;
        width: 20px;
        margin-left: 5px;
        line-height: 16px;
        cursor: pointer;

        img {
          width: 20px;
          margin-bottom: -2px;
        }
      }
    }
    .work-header-box{
      padding: 0 45px;
      margin-top: 12px;
      .work-header-item{
        float: left;
        width: 200px;
        .work-header-item-value{
          height: 20px;
          font-size: 14px;
          font-weight:500;
          white-space: nowrap;
        }
        .work-header-item-title{
          margin-top: 2px;
          color: #949494;
          font-size: 12px;
        }
        &:nth-child(2) {
          width: 170px;
        }
        &:nth-child(3) {
          overflow: hidden;
          width: 250px;
        }
        &:last-child {
          position: relative;
        }
      }
    }
    &:before{
      content:"";
      background:url("../../../assets/img/work-header-2.png") no-repeat;
      background-size: 100%;
      width:480px;
      height:158px;
      position:absolute;
      left:230px;
      top:0;
      z-index: -1;
    }
  }

</style>
