<template>
  <div class="use-finish">
    <div class="box-panel">
      <div class="search-box search-box-nowrap" style="margin-top: 15px;">
        <el-form
          :inline="true"
          :model="listQuery"
          class="demo-form-inline"
          size="medium"
          label-position="left"
        >
          <el-form-item label="借款编号:">
            <el-input v-model="listQuery.applyNum" placeholder="请输入编号"></el-input>
          </el-form-item>
          <el-form-item class="pl-10" label="状态:">
            <el-select v-model="listQuery.status" placeholder="请选择状态" style="width:100%;">
              <el-option label="全部" value=""></el-option>
              <el-option label="已还清" value="PAY_OFF"></el-option>
              <el-option label="用户已拒绝" value="USER_REFUSE"></el-option>
              <el-option label="平台审核被拒绝" value="PLATEFORM_REJECT"></el-option>
              <el-option label="资金方审核被拒绝" value="FINANCE_PARTY_REJECT"></el-option>
              <el-option label="已失效" value="EXPIRED"></el-option>
              <el-option label="放款失败" value="LOAN_FAIL"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="pl-10 search-box-time" label="申请时间:">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="listQuery.beginTime"
                style="width: 100%;"
                :picker-options="startPickerOptions"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-col>
            <el-col class="line text-c" :span="2">至</el-col>
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="listQuery.endTime"
                style="width: 100%;"
                :picker-options="endPickerOptions"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-col>
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
        <img src="../../../assets/img/use-complete.png" alt>
        <span class="box-title-name">
          <span>已完成用款列表（</span>
          <span>{{total}}</span>
          <span>）</span>
        </span>
      </div>
      <el-table
        @expand-change="expandSelect"
        :row-key='getRowKeys'
        :expand-row-keys="expands"
        :data="tableData"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        v-loading="loading"
        stripe
        tooltip-effect="light"
        style="width: 100%;margin-top: 10px;"
      >
        <el-table-column
          prop="applyNum"
          show-overflow-tooltip
          label="借款编号"
          min-width="170px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="授信产品"
          prop="creditProducts"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="loanAmountStr"
          show-overflow-tooltip
          label="借款金额"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="loanPeriod"
          show-overflow-tooltip
          label="借款期限"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.loanPeriod}} {{scope.row.loanPeriodUnitStr}}
          </template>
        </el-table-column>
        <el-table-column
          prop="totalFinancingCostStr"
          show-overflow-tooltip
          label="综合借贷成本"
          sortable
          min-width="130px">
        </el-table-column>
        <el-table-column
          prop="financingCostOfFundersStr"
          show-overflow-tooltip
          label="借款利率"
          sortable
          min-width="110px">
        </el-table-column>
        <el-table-column
          prop="repaymentType"
          show-overflow-tooltip
          label="还款方式"
          sortable
          min-width="120px">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="资金出借方"
          prop="capitalSideName"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="applyDateStr"
          show-overflow-tooltip
          min-width="110px"
          sortable
          label="申请时间">
        </el-table-column>
        <el-table-column
          prop="statusStr"
          show-overflow-tooltip
          min-width="90px"
          sortable
          label="状态">
        </el-table-column>
        <el-table-column type="expand" label="查看" align="center" width="85px;">
          <template slot-scope="props">
            <div
              class="content-item slot-content-item"
              v-if="props.row.status != 'PAY_OFF'"
            >
              <div>
                <div class="box-detail-null">
                  <img :src="nullImg" alt>
                  <div>小主，您的此笔借款未成功ㄒoㄒ</div>
                </div>
              </div>
            </div>
            <div class="content-item slot-content-item" v-else>
              <div class="box-title-use" v-for="(item,index) in selectRepaymentByApplyNumData.contractList" :key="index">
                <span class="box-title-name">
                  <span class="box-title-name-title">{{item.title}}：</span>
                  <span>{{item.contractNum}}</span>
                </span>
                <DownloadButton buttonText="下载" :buttonUrl="'/contract/downContractByContractNum?storageUrl='+ item.storageUrl + '&contractNum=' + item.contractNum" />
              </div>
              <div class="box-title-use box-title-use-list">
              <span class="box-title-name">
                <span class="box-title-name-title">还款计划</span>
              </span>
                <span class="last-time">
                <span>最后还款日：</span>
                <span>{{selectRepaymentByApplyNumData.repaymentDate}}</span>
              </span>
              </div>
              <el-table
                class="el-table-borderd"
                :data="selectRepaymentByApplyNumData.repaymentPlan"
                :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
              >
                <el-table-column
                  label="借款本金"
                  prop="loanPrincipal"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="借款利息"
                  prop="interest"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="借款服务费"
                  prop="platformCommissions"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="待还本金"
                  prop="planPrincipal"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="待还利息"
                  prop="remainWaitInterest"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="待还服务费"
                  prop="planPlatformCommissions"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="实还本金"
                  prop="repaidPrincipal"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="实还利息"
                  prop="repaidInterest"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="实还服务费"
                  prop="repaidPlatformCommissions"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
              <div class="box-title-use box-title-use-list">
                <span class="box-title-name">
                  <span class="box-title-name-title">还款记录</span>
                </span>
              </div>
              <el-table
                class="el-table-borderd"
                :data="selectRepaymentByApplyNumData.deductionList"
                :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
              >
                <el-table-column label="序号" prop="index" show-overflow-tooltip width="50px">
                  <template slot-scope="scope">
                    {{scope.$index + 1}}
                  </template>
                </el-table-column>
                <el-table-column
                  label="还款日期"
                  min-width="130px"
                  prop="createTime"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="还款本金"
                  prop="repaidPrincipal"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="还款利息"
                  prop="repaidInterest"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="服务费"
                  prop="platformCommissions"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="逾期违约金"
                  prop="penalty"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="逾期罚息"
                  prop="defaultInterest"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="还款总金额"
                  prop="totalAmountRepayment"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="还款状态"
                  prop="bizType"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
          </template>
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
import DownloadButton from '@/components/DownloadButton.vue'
import {
  selectCompletedLoanByStatement,
  selectRepaymentByApplyNum
} from '@/api/usemoney'

export default {
  name: 'UseFinish',
  components: {
    DownloadButton
  },
  data() {
    return {
      loading: false, // 加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        accountNo: '',
        status: '',
        beginTime: '',
        endTime: ''
      },
      tableData: [],
      nullImg: require('../../../assets/img/user-detail-null.png'),
      selectRepaymentByApplyNumData: {
        repaymentPlan: [],
        deductionList: [],
        contractList: [],
        repaymentDate: ''
      },
      startPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.endTime) {
            return time.getTime() > (new Date(this.listQuery.endTime)).getTime()
          }
          return time.getTime() > Date.now()
        }
      },
      endPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.beginTime) {
            return time.getTime() < (new Date(this.listQuery.beginTime)).getTime() || time.getTime() > Date.now()
          }
          return time.getTime() > Date.now()
        }
      },
      expands: [],
      getRowKeys(row) {
        return row.applyNum
      }
    }
  },

  computed: {},

  watch: {

  },

  created() {

  },

  mounted() {
    this.fetchData()
  },

  destroyed() {
  },

  methods: {
    // 列表数据 分页 搜索
    // 获取 列表数据
    fetchData(val) {
      this.loading = true
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectCompletedLoanByStatement(this.listQuery).then(response => {
        if (response.success) {
          if (response.data) {
            this.tableData = response.data.compLoanList || []
            this.total = response.data.compLoanCount || 0
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 还款中借款 还款计划、还款计划
    _selectRepaymentByApplyNumFun(val) {
      this.selectRepaymentByApplyNumData = {
        repaymentPlan: [],
        contractList: [],
        deductionList: []
      }
      selectRepaymentByApplyNum({
        applyNum: val
      }).then(response => {
        if (response.success) {
          if (response.data) {
            if (response.data.contractList && response.data.contractList.length > 0) {
              this.selectRepaymentByApplyNumData.contractList = response.data.contractList
            } else {
              this.selectRepaymentByApplyNumData.contractList = []
            }
            if (response.data.repaymentPlan && response.data.repaymentPlan.length > 0) {
              this.selectRepaymentByApplyNumData.repaymentPlan = response.data.repaymentPlan
              this.selectRepaymentByApplyNumData.repaymentDate = response.data.repaymentPlan[0].repaymentDate
            } else {
              this.selectRepaymentByApplyNumData.repaymentPlan = []
              this.selectRepaymentByApplyNumData.repaymentDate = ''
            }
            if (response.data.deductionList && response.data.deductionList.length > 0) {
              this.selectRepaymentByApplyNumData.deductionList = response.data.deductionList
            } else {
              this.selectRepaymentByApplyNumData.deductionList = []
            }
            this.expands.push(val)
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
      }).catch(() => {
      })
    },
    // 每页 条数
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.fetchData()
    },
    // 第几页
    handleCurrentChange(val) {
      this.listQuery.curr = val
      this.fetchData()
    },
    // 列表数据 分页 搜索
    // 折叠面板每次只能展开一行
    expandSelect(row, expandedRows) {
      const that = this

      if (expandedRows.length) {
        that.expands = []
        if (row) {
          if (row.status == 'PAY_OFF') {
            that._selectRepaymentByApplyNumFun(row.applyNum)
          } else {
            that.expands.push(row.applyNum)
          }
        }
      } else {
        that.expands = []
      }
    }
  }
}
</script>

<style lang="less">
  .use-finish {
    .search-box {
      overflow: hidden;
      margin-top: 25px;

      .el-form-item {
        margin-bottom: 10px;
      }

      .el-form-item.pl-10 {
        padding-left: 10px;
      }

      .el-form-item__label {
        text-align-last: auto;
        text-align: right;
      }
    }
  }
</style>

<style lang="less" scoped>
  .use-finish {
    .box-panel {
      overflow: hidden;
      margin-top: 0px;

      .box-title-use {
        overflow: hidden;
        padding-left: 0px;
        margin-top: 25px;
        line-height: 18px;
        font-size: 18px;
        border-left: none;

        img {
          width: 26px;
          height: 26px;
          vertical-align: middle;
        }

        .box-title-name {
          margin-left: 10px;
          vertical-align: middle;
        }
      }

      .slot-content-item {
        padding: 30px 20px 20px;
        border: 1px solid #EBEEF5;
        .box-title-use {
          overflow: hidden;
          margin-left: 0px;
          margin-top: 15px;
          padding-left: 0px;
          padding-bottom: 10px;
          line-height: 18px;
          font-size: 18px;
          font-size: 14px;
          border-left: none;
          border-bottom: 1px solid #E5E5E5;

          .box-title-name {
            margin-left: 0px;
          }

          .box-title-name-title {
            font-weight: 400;
            color: rgba(44, 44, 44, 1);
          }

          .last-time {
            float: right;
            font-size: 14px;
            color: rgba(102, 102, 102, 1);
          }
          &:first-child {
            margin-top: 0px;
          }
        }
        .box-title-use-list {
          margin-top: 20px;
          padding: 0;
          border-bottom: none;
        }
      }
      .box-detail-null {
        margin: 10px 0 20px;
        font-size: 14px;
        text-align: center;
        color: #949494;

        img {
          width: 56px;
          height: 56px;
        }

        div {
          margin-top: 8px;
        }
      }
    }
  }
</style>
