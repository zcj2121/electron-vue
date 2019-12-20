<template>
  <div class="factoring-valid">
    <div class="box-panel">
      <el-table
        ref="factoringTable"
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
          prop="factoringNum"
          show-overflow-tooltip
          label="保理池编号"
          min-width="150px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="creditProdName"
          show-overflow-tooltip
          label="授信产品"
          min-width="130px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="totalFinancingCost"
          show-overflow-tooltip
          label="综合借贷成本"
          sortable
          min-width="130px">
          <template slot-scope="scope">
            {{scope.row.totalFinancingCostStr}}%
          </template>
        </el-table-column>
        <el-table-column
          prop="capitalName"
          show-overflow-tooltip
          label="账款受让方"
          sortable
          min-width="120px">
        </el-table-column>
        <el-table-column
          prop="inPoolStatus"
          show-overflow-tooltip
          label="入池状态"
          sortable
          min-width="105px">
          <template slot-scope="scope">
            {{scope.row.inPoolStatus == 1 ? '关闭' : '开启'}}
          </template>
        </el-table-column>
        <el-table-column
          prop="financingAmount"
          show-overflow-tooltip
          min-width="120px"
          sortable
          label="融资额度">
          <template slot-scope="scope">
            {{scope.row.financingAmount | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="applyAmount"
          show-overflow-tooltip
          min-width="120px"
          sortable
          label="可申请额度">
          <template slot-scope="scope">
            {{scope.row.applyAmount | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="effectiveDate"
          show-overflow-tooltip
          min-width="110px"
          sortable
          label="生效日期">
          <template slot-scope="scope">
            {{scope.row.effectiveDate | dateTime}}
          </template>
        </el-table-column>
        <el-table-column
          prop="invalidDate"
          show-overflow-tooltip
          min-width="110px"
          sortable
          label="失效日期">
          <template slot-scope="scope">
            {{scope.row.invalidDate | dateTime}}
          </template>
        </el-table-column>
        <el-table-column type="expand" class="abc" width="-1">
          <template>
            <div class="content-item slot-content-item">
              <el-table
                class="el-table-borderd"
                :data="selectPoolLoanApplyData"
                :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
                style="margin-top:0px;"
              >
                <el-table-column
                  label="借款编号"
                  min-width="136px"
                  prop="applyNum"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="借款金额"
                  prop="loanAmountStr"
                  min-width="100px"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  show-overflow-tooltip
                  label="借款期限"
                  prop="loanPeriod"
                  min-width="100px">
                  <template slot-scope="scope">
                    {{scope.row.loanPeriod}} {{scope.row.loanPeriodUnitStr}}
                  </template>
                </el-table-column>
                <el-table-column
                  label="综合借贷成本"
                  prop="totalFinancingCostStr"
                  min-width="100px"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="借款利息"
                  prop="interest"
                  min-width="100px"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="剩余未还本金"
                  prop="planPrincipal"
                  min-width="100px"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  label="最后还款日期"
                  min-width="100px"
                  prop="repaymentDateStr"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="140px">
          <template slot-scope="scope">
            <div class="btn-box">
              <a
                class="go-apply-btn"
                @click="modalApplyShowFun(scope.row)"
              >申请借款</a>
              <span class="btn-br"></span>
              <a
                class="go-apply-btn"
                @click="toogleExpandCargo(scope.row)"
                :id="scope"
              >查看</a>
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
    <!-- 申请借款 模态框 -->
    <el-dialog title="申请借款信息" :visible.sync="modalApplyShow" top="30vh" width="450px">
      <div v-loading="boxLoading">
        <form class="form-horizontal apply-modal-form" v-if="detailData">
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">融资额度:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.totalCredit | NumFormat }}</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">可申请额度:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.usableCredit | NumFormat }}</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">
              <span class="muted">*</span>借款金额:
            </label>
            <div class="no-pl col-modal-box">
              <el-input v-model="money" size="mini" class="fl" style="width:100px !important;"></el-input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">综合借贷成本:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.finalInterestRate }}（年化）</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">借款期限:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.loanPeriod }}</div>
            </div>
          </div>
          <div class="form-group" style="margin-bottom: 8px;">
            <label class="control-label label-sm col-modal-label">还款方式:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.repaymentType}}</div>
            </div>
          </div>
        </form>
        <div class="btn-box" style="margin-top: 12px;">
          <el-button class="btn default-btn" type="default" @click="modalApplyShow = false">稍后再试</el-button>
          <el-button
            class="btn success-btn sub-btn"
            type="primary"
            @click="applyLoanFun"
          >确认借款
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 申请借款 模态框 -->
  </div>
</template>

<script>
import {debounce} from '@/utils/validate'
import {moneyFormatter} from '@/filters'

import {
  getBorrowerPoolList,
  selectPoolLoanApply
} from '@/api/factoring'
import {
  applyForLoan,
  applyForLoanPageData
} from '@/api/credit'

export default {
  name: 'FactoringValid',
  components: {},
  data() {
    return {
      loading: false, // 加载动画
      boxLoading: false, // 加载动画
      modalApplyShow: false,
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        status:'USABLE'
      },
      tableData: [],
      money: '',
      dataRow: null,
      detailData: null,
      selectPoolLoanApplyData: [],
      expands: [],
      getRowKeys(row) {
        return row.factoringNum
      }
    }
  },

  computed: {},

  watch: {},

  created() {
    // 延迟 输入金额 申请借款
    this.$watch('money', debounce((val) => {
      this.money = moneyFormatter(val)

      if (parseFloat(val) > parseFloat(this.detailData.usableCredit)) {
        this.money = ''
        this.$message({
          message: '请输入不大于可用余额的有效金额',
          type: 'error',
          duration: 1800
        })
      }
    }, 200))
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
      getBorrowerPoolList({
        curr: this.listQuery.curr-1, // 第几页
        limit: this.listQuery.limit, // 每页显示条数
        status:this.listQuery.status
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.tableData = response.data.arrayList || []
            this.total = response.data.count || 0
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 还款中借款 还款计划、还款计划
    _selectPoolLoanApplyFun(val) {
      this.selectPoolLoanApplyData = []
      selectPoolLoanApply({
        poolNum: val
        // curr: 0,
        // limit: 1000
      }).then(response => {
        if (response.success && response.data) {
          this.selectPoolLoanApplyData = response.data.loanApplyVoList
          this.expands.push(val)
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

    // 通过按钮点击展开隐藏
    toogleExpandCargo(row) {
      let $table = this.$refs.factoringTable

      this.tableData.map(item => {
        if (row.factoringNum != item.factoringNum) {
          $table.toggleRowExpansion(item, false);
        }
      });
      $table.toggleRowExpansion(row);
    },
    // 折叠面板每次只能展开一行
    expandSelect(row, expandedRows) {
      const that = this

      if (expandedRows.length) {
        that.expands = []
        if (row) {
          that._selectPoolLoanApplyFun(row.factoringNum)
          // that.expands.push(row.factoringNum)
        }
      } else {
        that.expands = []
      }
    },
    // 点击 申请借款
    modalApplyShowFun(val) {
      this.money = ''
      this.dataRow = null
      this.loading = true
      applyForLoanPageData({
        businessNo: val.factoringNum,
        loanModel: 'FACTORING'
      }).then(response => {
        if (response.success) {
          this.dataRow = val
          this.detailData = response.data
          this.modalApplyShow = true
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
    // 点击 确认借款
    applyLoanFun() {
      if (!parseFloat(this.money)) {
        this.$message({
          message: '请输入有效借款金额',
          type: 'error',
          duration: 1800
        })
        return false
      }
      this.boxLoading = true
      applyForLoan({
        creditNum: this.dataRow.factoringNum,
        loanAmount: this.money,
        prodCode: this.dataRow.creditProdCode,
        loanModel: 'FACTORING'
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.$message({
              message: '申请成功',
              type: 'success',
              duration: 1800
            })
            this.modalApplyShow = false
            this.fetchData()
          } else {
            this.$message({
              message: '申请失败',
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
        this.boxLoading = false
      }).catch(() => {
        this.boxLoading = false
      })
    }
  }
}
</script>

<style lang="less">
  .factoring-valid {
    .box-panel {
      .el-table {
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
  .factoring-valid {
    .box-panel {
      overflow: hidden;
      margin-top: 0px;

      .slot-content-item {
        padding: 20px 20px 20px;
        border: 1px solid #EBEEF5;
      }

      .box-detail-null {
        margin: 20px 0 20px;
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
  .apply-modal-form {
    .form-group {
      margin-bottom: 5px;

      .control-label {
        text-align: right;
      }
    }
  }
</style>
