<template>
  <div class="loanconfirm-from">
    <div class="box-panel">
      <form class="form-horizontal" style="padding: 0 10px;" v-if="loanApplyDTOList">
        <div class="form-group form-group-sm">
          <label class="control-label label-sm col-df-label text-l">借款编号：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.applyNum}}</div>
          <label class="control-label label-sm col-df-label text-l">借款金额：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.loanAmount | NumFormat}}元</div>
          <label class="control-label label-sm col-df-label text-l">申请日期：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.applyDateStr}}</div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label label-sm col-df-label text-l">授信产品：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.creditProducts}}</div>
          <label class="control-label label-sm col-df-label text-l">资金出借方：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.capitalSideName}}</div>
          <label class="control-label label-sm col-df-label text-l">还款方式：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.repaymentType}}</div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label label-sm col-df-label text-l">项目名称：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.proCodeName}}</div>
          <label class="control-label label-sm col-df-label text-l">用款产品：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.proCodeName}}</div>
          <label class="control-label label-sm col-df-label text-l">借款利率：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.financingCostOfFundersStr}}</div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label label-sm col-df-label text-l">客户名称：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.borrowerName}}</div>
          <label class="control-label label-sm col-df-label text-l">综合借贷成本：</label>
          <div class="no-pl col-df-box-pap">{{loanApplyDTOList.totalFinancingCostStr}}</div>
          <label class="control-label label-sm col-df-label text-l">借款期限：</label>
          <div class="no-pl col-df-box-pap">
            {{loanApplyDTOList.loanPeriod}}{{loanApplyDTOList.loanPeriodUnit == '1' ? '天' : '月'}}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoanconfirmFrom',
  components: {
  },
  props: ['loanApplyDTOList'],
  data() {
    return {
    }
  },

  methods: {
    fetchData(val) {
      this.$emit('fetchData', val)
    }
  }
}
</script>

<style lang="less">
</style>

<style lang="less" scoped>
  .loanconfirm-from{
    .box-panel {
      margin-top: 20px;

      .col-df-label {
        width: 100px !important;
        white-space: nowrap;
      }
    }
  }
</style>
