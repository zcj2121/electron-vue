<template>
  <div>
    <div class="content-item content-item-tab">
      <div class="box-title" style="border-left:none;padding-left:0px;">账户信息</div>
      <div class="box-panel" style="margin-top: 28px;">
        <div class="user-info-box">
          <div class="user-info-icon">
            <img src="../../../../assets/img/work-company.png" alt="">
          </div>
          <div class="user-info-detail">
            <div>
              <span>客户名称：</span>
              <span v-if="detailInfo">{{ detailInfo.name | mobileNameMask}}</span>
            </div>
            <div>
              <span>手机号码：</span>
              <span v-if="detailInfo">{{ detailInfo.mobile | mobilePhoneMask}}</span>
            </div>
          </div>
        </div>
<!--        <div class="user-info-auth">-->
<!--          <img src="../../../../assets/img/user-auth.png" alt="CA证书">-->
<!--          <span>您{{ detailInfo ? (detailInfo.isOpenAccount ? '已' : '还未') : '还未'}}通过CA证书申请</span>-->
<!--        </div>-->
      </div>
    </div>
    <div class="content-item content-item-tab" style="margin-top: 14px;">
      <div class="box-title" style="border-left:none;padding-left:0px;height: 28px;line-height: 28px;">
        <span>数字证书</span>
        <div class="btn-box" style="margin-left: 14px;text-align: left;display: inline-block;" v-if="!detailInfo.isOpenAccount">
          <el-button class="btn none-btn" type="default" @click="goAutograph">立即开通</el-button>
        </div>
      </div>
      <div class="box-panel" style="margin-top: 15px;" v-if="detailInfo.isOpenAccount">
        <div class="user-info-box">
          <div class="user-info-detail" style="margin-left: 0px;height: auto;">
            <div>
              <span style="color: #949494">开通状态：</span>
              <span style="color:#FFAD37;">已开通</span>
            </div>
            <div style="margin-top: 10px;">
              <span style="color: #949494">绑定手机：</span>
              <span style="color: #666666">{{ detailInfo.mobile }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserdetailInformation',
  components: {
  },
  props: ['detailInfo'],
  data() {
    return {
    }
  },

  methods: {
    goAutograph() {
      sessionStorage.removeItem('isAutograph')
      sessionStorage.setItem('isAutograph', JSON.stringify('userdetail'))
      this.$router.push({ path: '/autograph' })
    }
  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
  .content-item {
    position: relative;
    padding: 30px;

    .box-title {
      height: 16px;
      padding-left: 10px;
      line-height: 18px;
      font-size: 18px;
      border-left: 4px solid #2f81ff;

    }

    .user-info-box {
      overflow: hidden;

      .user-info-icon {
        float: left;
        width: 56px;
        height: 56px;

        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }

      .user-info-detail {
        float: left;
        height: 56px;
        margin-left: 15px;
        font-size: 14px;
        vertical-align: middle;
        color: #666666;

        span {
          line-height: 28px;
        }
      }
    }

    .user-info-auth {
      margin-top: 25px;

      img {
        width: 15px;
        vertical-align: middle;
      }

      span {
        margin-left: 5px;
        font-size: 12px;
        color: #2f81ff;

      }
    }
  }


  .money-info-null {
    height: 112px;
    font-size: 14px;
    line-height: 112px;
    color: #949494;

  }

  .money-info-box {
    margin-top: 15px;
    font-size: 14px;
    color: #949494;
    span {
      &:first-child {
        text-align: justify;
        display: inline-block;
        text-align-last: justify;
        width: 72px;
      }
      &.money-info-detail {
        margin-left: 25px;
        font-size: 16px;
        color: #2c2c2c;
      }
    }

  }
</style>
