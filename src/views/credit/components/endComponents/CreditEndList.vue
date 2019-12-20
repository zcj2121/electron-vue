<template>
  <div class="credit-end-list">
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
        prop="creditNum"
        show-overflow-tooltip
        label="申请编号"
        min-width="195px"
        sortables
      >
      </el-table-column>
      <el-table-column
        prop="prodName"
        show-overflow-tooltip
        label="授信产品"
        min-width="110px"
        sortable>
      </el-table-column>
      <el-table-column
        prop="expireDateStr"
        show-overflow-tooltip
        label="额度到期日"
        min-width="120px"
        sortable>
      </el-table-column>
      <el-table-column
        prop="totalCostStr"
        show-overflow-tooltip
        label="综合借贷成本"
        sortable
        min-width="130px">
        <template slot-scope="scope">
          {{scope.row.totalCostStr}}%
        </template>
      </el-table-column>
      <el-table-column
        prop="repaymentMethodStr"
        show-overflow-tooltip
        label="还款方式"
        sortable
        min-width="110px">
      </el-table-column>
      <el-table-column
        prop="expectCreditLineStr"
        show-overflow-tooltip
        label="期望额度"
        sortable
        min-width="110px">
      </el-table-column>
      <el-table-column
        prop="createDateStr"
        show-overflow-tooltip
        min-width="110px"
        sortable
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="statusStr"
        show-overflow-tooltip
        min-width="100px"
        sortable
        label="状态">
      </el-table-column>
      <el-table-column type="expand" label="查看" align="center" width="80px;">
        <template slot-scope="props">
          <div class="content-item slot-content-item"
               v-if="props.row.statusStr != '已使用'">
            <div>
              <div class="box-detail-null">
                <img src="../../../../assets/img/user-detail-null.png" alt>
                <div>此额度无关联用款申请记录</div>
              </div>
            </div>
          </div>
          <div class="content-item slot-content-item" v-else>
            <el-table
              class="el-table-borderd"
              tooltip-effect="light"
              :data="childTableData"
              :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
            >
              <el-table-column prop="loanApplyNum" show-overflow-tooltip label="借款编号" min-width="112px"></el-table-column>
              <el-table-column prop="loanAmount" show-overflow-tooltip label="借款金额"></el-table-column>
              <el-table-column prop="loanPeriod" show-overflow-tooltip label="借款期限">
                <template slot-scope="scope">
                  {{scope.row.loanPeriod}}{{scope.row.loanType}}
                </template>
              </el-table-column>
              <el-table-column prop="withdrawNum" show-overflow-tooltip label="综合借贷成本">
                <template slot-scope="scope">
                  {{scope.row.totalCost}}%
                </template>
              </el-table-column>
              <el-table-column prop="interestStr" show-overflow-tooltip label="借款利息"></el-table-column>
              <el-table-column prop="surplusAmount" show-overflow-tooltip label="剩余本金"></el-table-column>
              <el-table-column prop="lastRepayTime" show-overflow-tooltip label="最后还款日期"></el-table-column>
            </el-table>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'CreditEndList',
  components: {
  },
  props: ['loading', 'getRowKeys', 'expands', 'tableData', 'childTableData'],
  data() {
    return {
    }
  },

  methods: {
    expandSelect(row, expandedRows) {
      this.$emit('expandSelect', row, expandedRows)
    }
  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
  .slot-content-item {
    padding: 10px 20px 20px;
    border: 1px solid #EBEEF5;

    .box-detail-null {
      margin: 20px 0 10px;
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
</style>
