<template>
  <div class="content-item content-item-tab">
    <div class="box-title">账户概览</div>
    <div class="box-panel">
      <div class="user-box">
        <div class="user-box-content">
          <div class="user-box-content-title">账户余额</div>
          <div class="user-box-content-money">
            {{(detail.totalBorrowerAccountVo ? detail.totalBorrowerAccountVo.totalBalance : 0) | NumFormat}}
          </div>
          <img src="../../../../assets/img/user-box-img-account.png" alt="账户余额">
        </div>
      </div>
      <div class="user-box">
        <div class="user-box-content">
          <div class="user-box-content-title">冻结总金额</div>
          <div class="user-box-content-money">
            {{(detail.totalBorrowerAccountVo ? detail.totalBorrowerAccountVo.totalFrozenBalance : 0) |
            NumFormat}}
          </div>
          <img src="../../../../assets/img/user-box-img-freeze.png" alt="冻结金额">
        </div>
      </div>
      <div class="user-box">
        <div class="user-box-content">
          <div class="user-box-content-title">可用余额</div>
          <div class="user-box-content-money">
            {{(detail.totalBorrowerAccountVo ? detail.totalBorrowerAccountVo.totalAvailableBalance : 0) |
            NumFormat}}
          </div>
          <img src="../../../../assets/img/user-box-img-usable.png" alt="可用余额">
        </div>
        <div class="btn-box user-box-btn">
          <el-button class="btn success-btn sub-btn" type="primary" @click="toCashout">提现</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserdetailOverview',
  components: {
  },
  props: ['detail'],
  data() {
    return {
    }
  },

  methods: {
    toCashout(val) {
      this.$emit('toCashout', val)
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
    .user-box {
      float: left;
      overflow: hidden;
      width: 33.3333333%;
      height: 130px;
      padding: 30px 20px;
      border-right: 2px solid #fbfbfb;

      .user-box-icon {
        float: left;
        width: 30px;
        height: 62px;
        line-height: 62px;

        img {
          width: 100%;
          height: auto;
          vertical-align: middle;
        }
      }

      .user-box-content {
        float: left;
        width: 100%;
        height: 62px;
        margin-left: 15px;
        vertical-align: middle;

        &-title {
          font-size: 14px;
          color: #949494;
        }

        &-money {
          min-height: 28px;
          margin-top: 2px;
          font-size: 28px;
          color: #2c2c2c;
        }

        img {
          width: 150px;
          margin-top: 14px;
        }
      }

      .user-box-btn {
        clear: both;
        position: absolute;
        top: 20px;
        right: 30px;
        margin-left: 40px;
        padding-top: 8px;
        text-align: left;

      }
    }

    .user-box:first-child {
      padding-left: 0px;
    }

    .user-box:last-child {
      border-right: none;
    }

  }
</style>
