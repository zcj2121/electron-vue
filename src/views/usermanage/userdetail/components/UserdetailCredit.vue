<template>
  <div class="content-item" style="margin-top: 14px;">
    <div class="box-title" style="border-left:none;padding-left:0px;">
      <span>信用账户</span>
      <el-popover
        class="popoverReg"
        ref="popoverReg"
        placement="top-start"
        title
        width="242"
        trigger="hover"
      >
        <p style="font-size: 12px;">最高额度：通过平台最高可借款额度；</p>
        <p style="font-size: 12px;margin-top: 5px;">可借额度：通过平台剩余可借款额度；</p>
        <p style="font-size: 12px;margin-top: 5px;">贷款余额：未结清贷款本金总和；</p>
        <img src="../../../../assets/img/problem.png" slot="reference" alt="提示">
      </el-popover>
    </div>
    <div class="box-panel" style="margin-top: 4px;">
      <div class="money-info-box">
        <span>最高额度</span>
        <span class="money-info-detail">{{creditData.zged | NumFormat}}</span>
      </div>
      <div class="money-info-box">
        <span>可借额度</span>
        <span class="money-info-detail">{{creditData.kyed | NumFormat}}</span>
      </div>
      <div class="money-info-box">
        <span>贷款余额</span>
        <span class="money-info-detail">{{creditData.zdye | NumFormat}}</span>
      </div>
      <div v-if="creditDataList.length > 0">
        <div class="product-info__box" v-for="(item, index) in creditDataList" :key="index">
          <div class="product-info__title">{{item.productName}}</div>
          <ul class="product-info__view">
            <li class="product-info__item">
              <span>最高额度</span>
              <span>{{item.productCreditLine | NumFormat}}</span>
            </li>
            <li class="product-info__item">
              <span>贷款余额</span>
              <span>{{item.productLoanBalance | NumFormat}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserdetailCredit',
  components: {
  },
  props: ['creditData', 'creditDataList'],
  data() {
    return {
    }
  },

  methods: {
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
      .popoverReg {
        overflow: hidden;
        width: 20px;
        margin-left: 4px;
        line-height: 18px;
        cursor: pointer;

        img {
          width: 16px;
          margin-bottom: -2px;
        }
      }
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
        /*width: 60px;*/
      }
      &.money-info-detail {
        margin-left: 15px;
        font-size: 16px;
        color: #2c2c2c;
      }
    }
  }
  .product-info__box{
    position: relative;
    overflow: hidden;
    padding: 10px;
    margin-top: 15px;
    color: #2c2c2c;
    background: #f5f6fa;
    border: 1px solid #e5e5e5;
    .product-info__view{
      margin-top: 10px;
      padding: 10px;
      background: #FFFFFF;
      border: 1px solid #eeeeee;
      .product-info__item{
        line-height: 28px;
        overflow: hidden;
        span{
          width: 50%;
          float: left;
          text-align: right;
          &:first-child{
            text-align: left;
            color:#949494;
          }
        }
      }
    }
    &:before{
      content: '';
      position: absolute;
      left: -8px;
      top: -8px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    &:nth-child(3n +1) {
      &:before{
        background: #766fff;
      }
    }
    &:nth-child(3n +2) {
      &:before{
        background: #ff5ca8;
      }
    }
    &:nth-child(3n +3) {
      &:before{
        background: #ffad37;
      }
    }
  }
</style>
