<template>
  <div class="work-content-box">
    <div class="work-content__quata">
      <div class="work-content__title">可借额度(元)</div>
      <div class="work-content__money">{{money | NumFormat}}</div>
    </div>
    <div class="work-content__product">
      <template v-if="prodct.length > 0">
        <div class="work-content__product-item" v-for="(item, index) in prodct" :key="index">
          <div>{{item.productName}}</div>
          <div class="work-content__product-money">{{item.availableCredit | NumFormat}}</div>
          <div class="work-content__product-expect">预计可借款(元)</div>
          <a class="work-content__product-btnbox" @click="toCreditFun(item.loanModel)">
            立 即 借 款 <span><i class="el-icon-right"></i></span>
          </a>
        </div>
      </template>
      <div class="work-content__product-item is-null">
        <div>敬请期待</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkContent',
  props: {
    money: {},
    prodct: {
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {
    toCreditFun(val) {
      this.$emit('toCredit', val)
    }
  }
}
</script>

<style lang="less">
</style>


<style lang="less" scoped>
  .work-content-box {
    padding: 20px;
    background: #f4f4f4;
    .work-content__quata{
      width: 100%;
      padding: 25px 20px;
      background: #FFFFFF;
      .work-content__title{
        font-size: 16px;
      }
      .work-content__money{
        margin-top: 5px;
        font-size: 26px;
        font-weight:bold;
      }
    }
    .work-content__product{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      background: #FFFFFF;
      .work-content__product-item{
        margin: 10px;
        width:207px;
        height:142px;
        padding: 10px 10px 12px;
        text-align: center;
        color: #FFFFFF;
        background:linear-gradient(360deg,rgba(110,155,255,1) 0%,rgba(23,104,253,1) 100%);
        box-shadow:2px 7px 11px 0px rgba(204,221,255,1);
        border-radius:4px;
        .work-content__product-money{
          height:28px;
          margin-top: 10px;
          line-height:28px;
          font-size: 22px;
        }
        .work-content__product-expect{
          font-size: 12px;
        }
        .work-content__product-btnbox{
          display: inline-block;
          width: 130px;
          margin-top: 15px;
          padding: 4px;
          font-size: 12px;
          color: #2F81FF;
          background: #FFFFFF;
          border-radius: 30px;
          span{
            display: inline-block;
            width: 22px;
            height: 22px;
            margin-left: 5px;
            background: #6D9BFF;
            line-height: 22px;
            border-radius: 50%;
            i{
              line-height: 22px;
              height: 22px;
              color: #FFFFFF;
              font-weight: bold;
            }
          }
          &:hover,
          &:active{
            opacity: .9;
          }
        }
        &.is-null{
          text-align: center;
          line-height: 120px;
          color: #949494;
          background:rgba(250,250,250,1);
          border:1px solid rgba(238,238,238,1);
          box-shadow:none;
          border-radius:0px;
        }
      }
    }
  }

</style>
