<template>
  <div class="content-item" style="margin-top: 14px;">
    <div class="box-title">
      <span>账户明细</span>
      <span
        class="show-hide-box"
        v-show="detail.borrowerAccountVoList.length > 0"
        @click="changeShowHide">
          <el-tooltip
            class="item"
            effect="light"
            :content="detailShow?'隐藏':'显示'"
            placement="top"
          >
            <img
              :src="detailShow?require('../../../../assets/img/user-eye-hide.png'):
              require('../../../../assets/img/user-eye-show.png')"
              alt=""
            >
          </el-tooltip>
        </span>
    </div>
    <div class="box-panel" style="margin-top: 20px;">
      <div class="box-detail" v-if="detail.borrowerAccountVoList.length > 0">
        <div v-for="(item, index) in detail.borrowerAccountVoList"
             :key="index">
          <div class="box-detail-fox box-detail-fox-title">
            <div class="box-detail-item">
              <span>账号：</span>
              <span>尾号</span>
              <span>{{item.accountNo | afterFourMask('no')}}</span>
            </div>
          </div>
          <div class="box-detail-fox">
            <div class="box-detail-item">
              <div>账户余额：</div>
              <div v-if="detailShow">{{item.balance | NumFormat}}</div>
              <div v-else>****</div>
            </div>
            <div class="box-detail-item">
              <div>可用余额：</div>
              <div v-if="detailShow">{{item.availableBalance | NumFormat}}</div>
              <div v-else>****</div>
            </div>
            <div class="box-detail-item">
              <div>普通冻结：</div>
              <div v-if="detailShow">{{item.commonFrozen | NumFormat}}</div>
              <div v-else>****</div>
            </div>
            <div class="box-detail-item">
              <div>在途冻结：</div>
              <div v-if="detailShow">{{item.payingFrozen | NumFormat}}</div>
              <div v-else>****</div>
            </div>
            <div class="box-detail-item">
              <div>退汇抹账冻结：</div>
              <div v-if="detailShow">{{item.backFrozen | NumFormat}}</div>
              <div v-else>****</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-detail-null" v-else>
        <img src="../../../../assets/img/user-detail-null.png" alt="共管账户还未开通">
        <div>小主，您的共管账户还未开通ㄒoㄒ</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserdetailDetailed',
  components: {
  },
  props: ['detail', 'detailShow'],
  data() {
    return {
    }
  },

  methods: {
    changeShowHide(val) {
      this.$emit('changeShowHide', val)
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
    .show-hide-box {
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
    .box-detail-null {
      margin-top: 4px;
      text-align: center;
      font-size: 14px;
      color: #949494;

      img {
        width: 56px;
        height: 56px;
      }

      div {
        margin-top: 15px;
      }
    }

    .box-detail {
      overflow: hidden;
      border:1px solid rgba(236,236,236,1);

      .box-detail-fox {
        padding: 0 12px;
        overflow: hidden;
        border-bottom: 1px solid rgba(236,236,236,1);
        .box-detail-item {
          float: left;
          width: 20%;
          padding: 15px 0px;
          font-size: 12px;
          white-space: nowrap;
          color: #949494;

          div:last-child {
            margin-top: 6px;
            color: #2c2c2c;
            font-size: 16px;
          }
        }
      }

      .box-detail-fox:last-child {
        border: none;
      }
      .box-detail-fox-title{
        background: #fbfbfb;

        .box-detail-item{
          width: 100%;
          padding: 10px 0px;
          font-size: 14px;
          span{
            color: #2C2C2C;
          }
        }
      }
    }
  }
</style>
