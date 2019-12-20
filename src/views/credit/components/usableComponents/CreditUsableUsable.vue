<template>
  <div class="credit-usable-usable">
    <div class="box-title-use">
      <img src="../../../../assets/img/creditquota.png" alt>
      <span class="box-title-name">
            <span>可申请额度（</span>
            <span>{{total}}</span>
            <span>）</span>
          </span>
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        v-loading="listLoading && !loading && !listLoadings"
        :data="creditCalculateList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%"
      >
        <el-table-column prop="creditNum" label="申请编号" show-overflow-tooltip min-width="195px"
                         sortable></el-table-column>
        <el-table-column prop="prodName" show-overflow-tooltip label="授信产品" min-width="110px" sortable></el-table-column>
        <el-table-column prop="expireDateStr" label="额度到期日" show-overflow-tooltip  min-width="120px"
                         sortable></el-table-column>
        <el-table-column label="综合借贷成本" prop="totalCostStr" show-overflow-tooltip sortable min-width="130px">
          <template slot-scope="scope">
            {{scope.row.totalCostStr}}%
          </template>
        </el-table-column>
        <el-table-column prop="repaymentMethodStr" min-width="110px" label="还款方式" show-overflow-tooltip
                         sortable></el-table-column>
        <el-table-column prop="expectCreditLineStr" min-width="110px" label="期望额度" show-overflow-tooltip
                         sortable></el-table-column>
        <el-table-column prop="financingAmount" min-width="110px" label="融资额度" show-overflow-tooltip
                         sortable>
          <template slot-scope="scope">
            {{scope.row.financingAmount | NumFormat}}
          </template>
        </el-table-column>
<!--        <el-table-column prop="originCreditLineStr" label="批贷额度" show-overflow-tooltip-->
<!--                         sortable></el-table-column>-->
        <el-table-column prop="latestCreditLineStr" min-width="120px" label="可申请额度" show-overflow-tooltip
                         sortable></el-table-column>
        <el-table-column prop="createTimeStr" show-overflow-tooltip label="申请时间" min-width="110px" sortable></el-table-column>

        <el-table-column fixed="right" label="操作" align="center" width="95px">
          <template slot-scope="scope">
            <a
              class="go-apply-btn"
              @click="modalApplyShowFun(scope.row)"
              :id="scope"
            >申请借款</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreditUsableUsable',
  components: {
  },
  props: ['total', 'creditCalculateList', 'listLoading', 'listLoadings', 'loading'],
  data() {
    return {
    }
  },

  methods: {
    modalApplyShowFun(val) {
      this.$emit('applyShowFun', val)
    }
  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
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
</style>
