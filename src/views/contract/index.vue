<template>
    <div class="content contract">
      <div class="content-nav">当前位置：
        <router-link :to="{path:'/work'}">工作台</router-link>
        <span> &gt; 合同管理</span>
      </div>
      <div class="content-box">
        <div class="contract-box">
          <div class="content-item" style="margin-top: 0px;">
            <div class="box-panel">
              <div class="search-box" style="margin-top: 0;">
                <el-form :inline="true" size="medium" label-width="100px" :model="listQuery" class="demo-form-inline">
                  <el-form-item label="合同创建日期:">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="listQuery.createStartTime"
                        :picker-options="startPickerOptions"
                        value-format="yyyy-MM-dd HH:mm:ss"
                      ></el-date-picker>
                    <span class="time-br">至</span>
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="listQuery.createEndTime"
                        :picker-options="endPickerOptions"
                        value-format="yyyy-MM-dd HH:mm:ss"
                      ></el-date-picker>
                  </el-form-item>
                  <el-form-item label="合同名称:">
                    <el-input v-model="listQuery.contractType" placeholder="请输入合同名称" style="width:100%;"></el-input>
                  </el-form-item>
                  <el-form-item label="签署状态:">
                    <el-select v-model="listQuery.realSignStatus" placeholder="请选择签署状态" style="width:100%;">
                      <el-option label="全部" value=""></el-option>
                      <el-option label="未签署" value="UNSIGN"></el-option>
                      <el-option label="签署中" value="SIGNING"></el-option>
                      <el-option label="已签署" value="SIGN_SUCCESS"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="合同状态:">
                    <el-select v-model="listQuery.contractStatus" placeholder="请选择合同状态" style="width:100%;">
                      <el-option label="全部" value=""></el-option>
                      <el-option label="未开始" value="INIT"></el-option>
                      <el-option label="履约中" value="SUCCESS"></el-option>
                      <el-option label="已完成" value="OVER_TIME"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item style="padding-left:10px;">
                    <div class="btn-box" style="text-align: left;">
                      <el-button class="btn default-btn" type="default" @click="fetchData(1)">筛选</el-button>
                    </div>
                  </el-form-item>

                </el-form>
              </div>
              <el-table
                :data="tableData"
                :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
                border
                v-loading="loading"
                stripe
                tooltip-effect="light"
                style="width: 100%;margin-top: 10px;"
              >
                <el-table-column
                  prop="contractNum"
                  show-overflow-tooltip
                  label="合同编号"
                  min-width="200px"
                  sortable>
                </el-table-column>
                <el-table-column
                  prop="payerName"
                  show-overflow-tooltip
                  label="合同名称"
                  min-width="200px"
                  sortable>
                  <template slot-scope="scope">
                    {{scope.row.contractType}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="tradingDate"
                  show-overflow-tooltip
                  label="合同开始日期"
                  min-width="136px"
                  sortable>
                  <template slot-scope="scope">
                    {{scope.row.contractStartTimeStr}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="tradingDate"
                  show-overflow-tooltip
                  label="合同结束日期"
                  min-width="136px"
                  sortable>
                  <template slot-scope="scope">
                    {{scope.row.contractEndTimeStr}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="realSignStatusStr"
                  show-overflow-tooltip
                  label="签署状态"
                  sortable
                  min-width="110px">
                </el-table-column>
                <el-table-column
                  prop="contractStatusStr"
                  show-overflow-tooltip
                  label="合同状态"
                  sortable
                  min-width="110px">
                </el-table-column>
                <el-table-column
                  prop="backnote"
                  show-overflow-tooltip
                  label="备注"
                  sortable
                  min-width="100px">
                </el-table-column>
                <el-table-column
                  prop="modifilyUser"
                  show-overflow-tooltip
                  min-width="100px"
                  sortable
                  label="操作人">
                </el-table-column>
                <el-table-column
                  prop="createTimeStr"
                  show-overflow-tooltip
                  min-width="120px"
                  sortable
                  label="创建时间">
                  <template slot-scope="scope">
                    {{scope.row.createTimeStr}}
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" align="center" width="140px">
                  <template slot-scope="scope">
                    <a
                      class="go-apply-btn"
                      @click="checkOpenAccountFun(scope.row)"
                      :id="scope"
                      v-if="scope.row.realSignStatus == 'UNSIGN' || scope.row.contractStatus == 'INIT'"
                    >签署合约</a>
                    <span
                      class="btn-br"
                      v-if="scope.row.realSignStatus == 'UNSIGN' || scope.row.contractStatus == 'INIT'"
                    ></span>
                    <a
                      class="go-apply-btn"
                      download=""
                      :href="downrul + '/zhongHeFactoring/downFactoringContractByContractNum?downloadpath=' +
                       scope.row.finishContractDownloadPath +
                        '&contractNum=' +
                         scope.row.contractNum"
                      :id="scope"
                    >下载</a>
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
        </div>
      </div>
      <!-- 数字证书未开通 模态框 -->
      <el-dialog title="提示" :visible.sync="modalCollectShow" top="30vh" width="450px">
        <div style="padding:10px 40px;">
          <div style="color: #2C2C2C;text-align: left;margin-top: 10px;">为了提升您的工作效率，和智商服平台携手CFCA，上线电子签约功能，为了方便您的融资，请您开通数字证书。</div>
          <div class="dialog-footer" style="margin-top: 40px;">
            <div class="btn-box">
              <el-button class="btn default-btn" type="default" @click="modalCollectShow = false">取消</el-button>
              <el-button
                class="btn success-btn sub-btn"
                type="primary"
                @click="toAutographFun"
              >立即开通
              </el-button>
            </div>
          </div>
        </div>
      </el-dialog>
      <!-- 数字证书未开通 模态框 -->
    </div>
</template>

<script>

import { downURL } from '@/utils/request'
import { checkOpenAccount } from '@/api/work'
import { selectFactoringAgreeMent } from '@/api/contract'

export default {
  name: 'contract',
  components: {
  },
  data() {
    return {
      loading: false, // 加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        contractType: '',
        realSignStatus:'',
        contractStatus:'',
        createStartTime: '',
        createEndTime: ''
      },
      startPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.createEndTime) {
            return time.getTime() > (new Date(this.listQuery.createEndTime)).getTime();
          }
          return time.getTime() > Date.now();
        }
      },
      endPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.createStartTime) {
            return time.getTime() < (new Date(this.listQuery.createStartTime)).getTime() || time.getTime() > Date.now();
          }
          return time.getTime() > Date.now();
        }
      },
      tableData: [],
      modalCollectShow: false,
      downrul: downURL()
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
      this.total = 0
      this.tableData = []
      this.loading = true
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectFactoringAgreeMent(this.listQuery).then(response => {
        if (response.success && response.data) {
          this.total = response.data.customerAgreementCount
          this.tableData = response.data.customerAgreementResultDTOlist
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
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
    // 是否开通数字证书
    checkOpenAccountFun(val) {
      this.loading = true
      checkOpenAccount().then(response => {
        if (response.success && response.data && response.data.isOpenAccount) {
          this.goContractsignFun(val)
        } else {
          this.modalCollectShow = true
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 签署合约
    goContractsignFun(val) {
      const data = {
        halfStorageUrl: val.halfStorageUrl,
        contractNum: val.contractNum
      }
      sessionStorage.removeItem('contractsign')
      sessionStorage.setItem('contractsign', JSON.stringify(data))
      this.$router.push({ name: 'contractsign' })
    },
    // 跳转 数字证书
    toAutographFun() {
      sessionStorage.removeItem('isAutograph')
      sessionStorage.setItem('isAutograph', JSON.stringify('contract'))
      this.$router.push({ name: 'autograph' })
    }
  }
}
</script>

<style lang="less">
  .contract {
    .search-box {
      overflow: hidden;

      .el-form-item {
        padding-left: 10px;
        .time-br{
          padding: 0 10px;
        }
      }

      .el-form-item__content {
        width: calc(100% - 100px);
      }

      .el-input--suffix .el-input__inner{
        width: 169px;
      }

      .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 169px;
      }
      .el-form-item__label {
        /*text-align: justify;*/
        /*text-align-last: justify;*/
      }
    }
  }
</style>

<style lang="less" scoped>
  .contract {
    .content-box {
      overflow: hidden;
    }

    .contract-box {
      width: 100%;

      .content-item {
        position: relative;
        padding: 30px;
      }

      .show-hide-box {
        overflow: hidden;
        width: 20px;
        margin-left: 5px;
        line-height: 16px;
        cursor: pointer;

        img {
          width: 20px;
          margin-bottom: -2px;
        }
      }

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
    }

  }
</style>

