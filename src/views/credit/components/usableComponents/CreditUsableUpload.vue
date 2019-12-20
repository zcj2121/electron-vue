<template>
  <div class="credit-usable-upload">
    <div class="box-title-use">
      <img src="../../../../assets/img/creditwaitupload.png" alt>
      <span class="box-title-name">
            <span>待上传授信资料（</span>
            <span>{{creditList.length}}</span>
            <span>）</span>
          </span>
      <DownloadButton buttonText="下载模版" buttonUrl="/templates/template.xlsx" />
    </div>
    <div class="box-panel" style="margin-top: 15px;">
      <el-table
        :data="creditList"
        :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
        border
        stripe
        tooltip-effect="light"
        style="width: 100%;"
        :style="{marginBottom: nextBarShow? '10px' : '20px'}"
      >
        <el-table-column prop="creditNum" show-overflow-tooltip label="申请编号" min-width="195px" sortable></el-table-column>
        <el-table-column prop="prodName" show-overflow-tooltip label="授信产品" min-width="110px" sortable></el-table-column>
        <el-table-column prop="expireDateStr" show-overflow-tooltip min-width="120px" label="额度到期日" sortable></el-table-column>
        <el-table-column label="综合借贷成本" prop="totalCostStr" min-width="130px" show-overflow-tooltip sortable>
          <template slot-scope="scope">
            {{scope.row.totalCostStr}}%
          </template>
        </el-table-column>
        <el-table-column prop="repaymentMethodStr" show-overflow-tooltip label="还款方式" min-width="110px" sortable></el-table-column>
        <el-table-column prop="expectCreditLineStr" show-overflow-tooltip label="期望额度" min-width="110px" sortable></el-table-column>
        <el-table-column prop="createTimeStr" show-overflow-tooltip label="申请时间" min-width="110px" sortable></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="210px">
          <template slot-scope="scope">
            <div class="btn-box" v-if="scope.row.creditStatus != 'AUTO_CREDIT'">
              <el-button
                size="mini"
                class="btn success-btn btn-xs go-upfile-btn"
                @click="upFileShowFun(scope.row)"
                :id="scope"
              >上传
              </el-button>
              <el-button
                size="mini"
                class="btn default-btn btn-xs go-credit-btn"
                @click="modalCreateShowFun(scope.row)"
              >生成额度
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="tips-nav" v-show="nextBarShow">
        下一步 在可用额度中申请借款
      </div>
    </div>
  </div>
</template>

<script>

import DownloadButton from '@/components/DownloadButton.vue'
export default {
  name: 'CreditUsableUpload',
  components: {
    DownloadButton
  },
  props: {
    creditList: {
    },
    nextBarShow: {
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
  .credit-usable-upload{
    .tips-nav{
      overflow: hidden;
      position: relative;
      z-index: 0;
      padding: 5px;
      margin-bottom: 20px;
      color: #EE894C;
      text-align: center;
      border:1px solid rgba(255,211,171,1);
      background: rgba(255,247,234,1);
    }
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
  }
</style>
