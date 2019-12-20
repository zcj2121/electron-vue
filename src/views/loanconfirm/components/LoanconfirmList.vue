<template>
  <div class="loanconfirm-list">
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        :data="deductionPlanList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        style="width: 100%"
        tooltip-effect="light"
      >
        <el-table-column
          show-overflow-tooltip
          label="序号"
          prop="periodNo"
          width="70px">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="计划划扣日期"
          prop="repaymentDateStr"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="计划划扣本金"
          prop="loanPrincipalStr"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="计划划扣利息"
          prop="interestStr"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="平台佣金"
          prop="platformCommissions"
          sortable>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="计划划扣总金额"
          prop="totalAmountRepaymentStr"
          sortable>
        </el-table-column>
      </el-table>
      <div class="read-box text-c">
        <label class="checkbox-inline" style="font-weight: 400;">
          <el-checkbox style="margin-bottom: 0px;" v-model="isread"></el-checkbox>
          <span> 我已阅读并确认</span>
          <a @click="modalAgreementFun(0)" v-if="form.loanModel == 'CREDIT_APPLY'" href="javascript:void(0)">《借贷辅助服务确认单》</a>
          <a @click="modalAgreementFun(1)" v-if="form.loanModel == 'FACTORING'" href="javascript:void(0)">《融资辅助服务确认单》</a>
          <a @click="modalAgreementFun(2)" v-if="form.loanModel == 'FACTORING'" href="javascript:void(0)">《保理融资申请单》</a>
          <span>中的全部条款</span>
        </label>
      </div>
      <div class="btn-box" style="margin-top:30px;">
        <el-button
          @click="toBackFun('确认拒绝借款信息吗?', '0')"
          class="btn default-btn"
          type="default"
        >拒绝
        </el-button>
        <el-button
          @click="toBackFun('确认保存借款信息吗?', '1')"
          class="btn success-btn sub-btn"
          type="primary"
        >确认
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoanconfirmList',
  components: {
  },
  props: ['isRead','deductionPlanList', 'form'],
  data() {
    return {
      isread: false
    }
  },
  mounted() {

  },
  watch: {
    isread() {
      this.$emit("isReadFun", this.isread)
    },
    isRead() {
      this.isread = this.isRead
    }
  },
  methods: {
    modalAgreementFun(val) {
      this.$emit('modalAgreementFun', val)
    },
    toBackFun(val, type) {
      this.$emit('toBackFun', val, type)
    }
  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
  .loanconfirm-list{
    .box-panel {
      margin-top: 20px;
    }
  }
</style>
