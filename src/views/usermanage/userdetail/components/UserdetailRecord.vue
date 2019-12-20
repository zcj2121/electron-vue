<template>
  <div class="content-item" style="margin-top: 14px;">
    <div class="box-title">资金记录</div>
    <div class="box-panel" style="margin-top: 20px;">
      <div class="search-box">
        <el-form :inline="true" size="medium" label-width="78px" :model="listQuery" class="demo-form-inline">
          <el-form-item class="pl-10" label="发生日期:">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="listQuery.beginTime"
              :picker-options="startPickerOptions"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
            <span class="time-br">至</span>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="listQuery.endTime"
              :picker-options="endPickerOptions"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="交易账号:">
            <el-input
              v-model="listQuery.accountNo"
              @keyup="listQuery.accountNo=listQuery.accountNo.replace(/[^\w]/g,'')"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="交易类型:">
            <el-select v-model="listQuery.tradeType" placeholder="请选择交易类型" style="width:100%;">
              <el-option label="全部" value=""></el-option>
              <el-option label="放款" value="LOAN"></el-option>
              <el-option label="还款" value="REPAY"></el-option>
              <el-option label="充值ACS" value="ACS"></el-option>
              <el-option label="提现" value="WITHDRAW"></el-option>
              <el-option label="转账" value="TRANSFER"></el-option>
              <el-option label="浦发放款" value="PUFA_LOAN"></el-option>
              <el-option label="本金还款" value="CAPITAL_REPAY"></el-option>
              <el-option label="利息还款" value="INTEREST_REPAY"></el-option>
              <el-option label="服务费还款" value="SERVICE_FEE_REPAY"></el-option>
              <el-option label="跨行手续费" value="SERVICE_CHARGE"></el-option>
              <el-option label="抹帐" value="WIPE"></el-option>
              <el-option label="退汇" value="BACK"></el-option>
              <el-option label="其他" value="OTHER"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="pl-10">
            <div class="btn-box" style="text-align: left;">
              <el-button
                class="btn default-btn"
                type="default"
                @click="fetchData(1)"
              >筛选
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="box-title-use">
        <a class="box-title-use-dwon" @click="detailDown">
          <img class="down-img" src="../../../../assets/img/down.png" alt="下载">
          <img class="down-hover-img" src="../../../../assets/img/down-hover.png" alt="下载">
          <span>下载</span>
        </a>
      </div>
      <el-table
        :data="list"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        v-loading="listLoading && !loading"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%;margin-top: 10px;"
      >
        <el-table-column label="序号" prop="index" show-overflow-tooltip width="65px">
          <template slot-scope="scope">
            {{(listQuery.curr - 1) * listQuery.limit + scope.$index + 1}}
          </template>
        </el-table-column>
        <el-table-column
          prop="tradeTypeStr"
          label="交易类型"
          min-width="110px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="tradeTimeStr"
          label="交易时间"
          width="158px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="changeTypeStr"
          label="类别"
          min-width="80px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="changeAmountStr"
          label="交易金额"
          min-width="110px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="balanceStr"
          label="账户余额"
          min-width="110px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="usableBalanceStr"
          label="可用余额"
          min-width="110px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="freezeAmountStr"
          label="冻结金额"
          min-width="110px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          prop="accountNo"
          label="账号"
          width="185px"
          show-overflow-tooltip
          sortable>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      prev-text=" 上一页"
      next-text="下一页 "
      :total="total"
      :current-page="listQuery.curr"
      :page-sizes="pageSizes"
      :page-size="listQuery.limit"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>

export default {
  name: 'UserdetailRecord',
  components: {
  },
  props: ['listQuery', 'list', 'listLoading', 'total', 'loading', 'pageSizes', 'endPickerOptions', 'startPickerOptions'],
  data() {
    return {
    }
  },

  methods: {
    fetchData(val) {
      this.$emit('fetchData', val)
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    detailDown(val) {
      this.$emit('detailDown', val)
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

    .box-panel {
      overflow: hidden;
      margin-top: 0px;
      .box-title-use {
        overflow: hidden;
        padding-left: 0px;
        line-height: 18px;
        font-size: 18px;
        border-left: none;

        img {
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }

        .box-title-name {
          margin-left: 10px;
          vertical-align: middle;
        }
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
      }
    }

  }
</style>
