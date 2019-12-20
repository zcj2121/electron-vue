<template>
  <div class="use-intransit" v-loading="loading">
    <div class="box-title-use" style="margin-top: 15px;">
      <img src="../../../assets/img/use-audit.png" alt>
      <span class="box-title-name">
        <span>审核中借款（</span>
        <span>{{listData.auditingCount}}</span>
        <span>）</span>
      </span>
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        :data="listData.auditingList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%"
      >
        <el-table-column
          label="借款编号"
          width="180px"
          prop="applyNum"
          show-overflow-tooltip
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
          show-overflow-tooltip
          label="借款金额"
          prop="loanAmountStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款期限"
          prop="loanPeriod"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.loanPeriod}} {{scope.row.loanPeriodUnitStr}}
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="综合借贷成本"
          prop="totalFinancingCostStr"
          min-width="130px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款利率"
          prop="financingCostOfFundersStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="还款方式"
          prop="repaymentType"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="资金出借方"
          prop="capitalSideName"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="申请日期"
          prop="applyDateStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="状态"
          prop="statusStr"
          min-width="110px"
          sortable>
        </el-table-column>
      </el-table>
    </div>
    <div class="box-title-use">
      <img src="../../../assets/img/use-noconfirm.png" alt>
      <span class="box-title-name">
        <span>待确认借款（</span>
        <span>{{listData.count}}</span>
        <span>）</span>
      </span>
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        :data="listData.loanApplyList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%"
      >
        <el-table-column
          label="借款编号"
          width="180px"
          prop="applyNum"
          show-overflow-tooltip
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
          show-overflow-tooltip
          label="借款金额"
          prop="loanAmountStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款期限"
          prop="loanPeriod"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.loanPeriod}} {{scope.row.loanPeriodUnitStr}}
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="综合借贷成本"
          prop="totalFinancingCostStr"
          min-width="130px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款利率"
          prop="financingCostOfFundersStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="还款方式"
          prop="repaymentType"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="资金出借方"
          prop="capitalSideName"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="申请日期"
          prop="applyDateStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="95px">
          <template slot-scope="scope">
            <a @click="toLoanconfirmFun(scope.row)" :id="scope">立即确认</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="box-title-use">
      <img src="../../../assets/img/use-confirme.png" alt>
      <span class="box-title-name">
        <span>待放款借款（</span>
        <span>{{listData.confirLoanCount}}</span>
        <span>）</span>
      </span>
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        ref="confirmTable"
        class="use-confirm-table"
        :data="listData.confirLoanList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%"
      >
        <el-table-column
          label="借款编号"
          width="180px"
          prop="applyNum"
          show-overflow-tooltip
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="授信产品"
          min-width="120px"
          prop="creditProducts"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款金额"
          min-width="110px"
          prop="loanAmountStr"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款期限"
          min-width="110px"
          prop="loanPeriod"
          sortable>
          <template slot-scope="scope">
            {{scope.row.loanPeriod}} {{scope.row.loanPeriodUnitStr}}
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="综合借贷成本"
          prop="totalFinancingCostStr"
          min-width="130px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款利率"
          prop="financingCostOfFundersStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="还款方式"
          prop="repaymentType"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="资金出借方"
          prop="capitalSideName"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="申请日期"
          prop="applyDateStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column type="expand" width="-1">
          <template>
            <div class="content-item slot-content-item">
              <div class="box-title-use" v-for="(item,index) in confirDetailList" :key="'detail' +index">
                <span class="box-title-name">
                  <span class="box-title-name-title">{{item.title}}：</span>
                  <span>{{item.contractNum}}</span>
                </span>
                <DownloadButton buttonText="下载" :buttonUrl="'/contract/downContractByContractNum?storageUrl='+ item.storageUrl + '&contractNum=' + item.contractNum" />
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="相关协议" align="center" width="95px">
          <template slot-scope="scope">
            <a
              class="go-apply-btn"
              @click="toogleExpandCargo(scope.row)"
            >查看</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="box-title-use" style="margin-top: 15px;">
      <img src="../../../assets/img/use-norepay-1.png" alt>
      <span class="box-title-name">
        <span>还款中借款（</span>
        <span>{{listData.pendRepaCount}}</span>
        <span>）</span>
      </span>
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        @expand-change="expandSelect"
        :row-key='getRowKeys'
        :expand-row-keys="expands"
        :data="listData.pendRepaList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%"
      >
        <el-table-column
          label="借款编号"
          width="180px"
          prop="applyNum"
          show-overflow-tooltip
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
          show-overflow-tooltip
          label="借款金额"
          prop="loanAmountStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款期限"
          prop="loanPeriod"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.loanPeriod}} {{scope.row.loanPeriodUnitStr}}
          </template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="综合借贷成本"
          prop="totalFinancingCostStr"
          min-width="130px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="借款利率"
          prop="financingCostOfFundersStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="剩余本金"
          prop="planPrincipal"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="还款方式"
          prop="repaymentType"
          min-width="120px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="资金出借方"
          prop="capitalSideName"
          min-width="130px"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="申请日期"
          prop="applyDateStr"
          min-width="110px"
          sortable>
        </el-table-column>
        <el-table-column type="expand" label="查看" align="center" width="95px">
          <template>
            <div class="content-item slot-content-item">
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
  </div>
</template>

<script>
import DownloadButton from '@/components/DownloadButton.vue'
import {
  selectLoanApply,
  selectRepaymentByApplyNum,
  selectAllContractByLoanApplyNum
} from '@/api/usemoney'

export default {
  name: 'UseIntransit',
  components: {
    DownloadButton
  },
  data() {
    return {
      loading: false,
      loadings: false,
      loadingss: false,
      listData: {
        confirLoanCount: 0,
        confirLoanList: [],
        count: 0,
        loanApplyList: [],
        pendRepaCount: 0,
        pendRepaList: [],
        auditingCount: 0,
        auditingList: []
      },
      selectRepaymentByApplyNumData: {
        repaymentPlan: [],
        deductionList: [],
        contractList: [],
        repaymentDate: ''
      },
      confirDetailList: [],
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10 // 每页显示条数
      },
      expands: [],
      getRowKeys(row) {
        return row.applyNum
      }
    }
  },

  computed: {},

  watch: {},

  created() {
  },

  mounted() {
    this.fetchData()
  },

  destroyed() {
  },

  methods: {

    // 请求 列表数据
    fetchData() {
      this.loading = true
      selectLoanApply().then(response => {
        if (response.success) {
          if (response.data) {
            this.listData = response.data
          } else {
            this.listData = {
              confirLoanCount: 0,
              confirLoanList: [],
              count: 0,
              loanApplyList: [],
              pendRepaCount: 0,
              pendRepaList: [],
              auditingCount: 0,
              auditingList: []
            }
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
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

    // 已确认借款 查看
    _selectAllContractByLoanApplyNum(val) {
      this.confirDetailList = []
      selectAllContractByLoanApplyNum({
        applyNum: val.applyNum
      }).then(response => {
        if (response.success) {
          if (response.data) {
            if (response.data.contractList && response.data.contractList.length > 0) {
              this.confirDetailList = response.data.contractList
            }
          }
          let _table = this.$refs.confirmTable

          this.listData.confirLoanList.map(item => {
            if (val.applyNum != item.applyNum) {
              _table.toggleRowExpansion(item, false);
            }
          });
          if (this.confirDetailList.length> 0) {
            _table.toggleRowExpansion(val)
          } else {
            _table.toggleRowExpansion(val,false)
            this.$message({
              message: '暂无相关协议',
              type: 'error',
              duration: 1800
            })
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

    // 折叠面板每次只能展开一行
    expandSelect(row, expandedRows) {
      const that = this

      if (expandedRows.length) {
        that.expands = []
        if (row) {
          that._selectRepaymentByApplyNumFun(row.applyNum)
          // that.expands.push(row.applyNum)
        }
      } else {
        that.expands = []
      }
    },

    // 通过按钮点击展开隐藏
    toogleExpandCargo(row) {
      this._selectAllContractByLoanApplyNum(row)
    },

    // 前往 立即确认
    toLoanconfirmFun(val) {
      sessionStorage.removeItem('loanconfirm')
      sessionStorage.setItem('loanconfirm', JSON.stringify(val))
      this.$router.push({ path: '/usemoney/loanconfirm' })
    }
  }
}
</script>

<style lang="less">
  .use-intransit {
    .box-panel {
      .use-confirm-table{
        .el-table__expand-column {
          overflow: hidden;
          width: -1px;
          border-right:none;
          .cell{
            display: none;
          }
        }
      }
    }
  }

</style>

<style lang="less" scoped>
  .use-intransit {
    .box-title-use {
      overflow: hidden;
      padding-left: 0px;
      margin-top: 10px;
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

    .box-panel {
      margin-top: 20px;

      .slot-content-item {
        padding: 30px 20px 20px;
        border: 1px solid #EBEEF5;
      }

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
      .use-confirm-table{
        .slot-content-item{
          padding: 20px 20px 20px;
        }
        .box-title-use:last-child{
          padding-bottom: 0px;
          border-bottom: none;
        }
      }
    }
  }

</style>
