<template>
  <div class="credit-usable-reject">
    <div class="box-title-use">
      <img src="../../../../assets/img/creditreject.png" alt>
      <span class="box-title-name">
        <span>驳回申请（</span>
        <span style="color: #949494">展示最近三条记录</span>
        <span>）</span>
      </span>
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        :data="rejectedCreditList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%"
      >
        <el-table-column prop="creditNum" show-overflow-tooltip label="申请编号" min-width="158px" sortable></el-table-column>
        <el-table-column prop="prodName" show-overflow-tooltip label="授信产品" min-width="95px" sortable></el-table-column>
        <el-table-column prop="expireDateStr" show-overflow-tooltip label="额度到期日" min-width="100px" sortable></el-table-column>
        <el-table-column label="综合借贷成本" prop="totalCostStr" min-width="110px" show-overflow-tooltip sortable>
          <template slot-scope="scope">
            {{scope.row.totalCostStr}}%
          </template>
        </el-table-column>
        <el-table-column prop="repaymentMethodStr" min-width="95px" show-overflow-tooltip label="还款方式" sortable></el-table-column>
        <el-table-column prop="expectCreditLineStr" min-width="95px" show-overflow-tooltip label="期望额度" sortable></el-table-column>
        <el-table-column prop="createTimeStr" min-width="95px" show-overflow-tooltip label="申请时间" sortable></el-table-column>
        <el-table-column prop="status" show-overflow-tooltip label="状态" sortable width="95px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreditUsableReject',
  components: {
  },
  props: {
    rejectedCreditList: {
    }
  },
  data() {
    return {
    }
  },

  methods: {
    upFileShowFun(val) {
      this.$emit('upFileFun', val)
    },
    modalCreateShowFun(val) {
      this.$emit('createShowFun', val)
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
