<template>
  <UsermanageNav>
  <div class="feelist">
    <div class="content-box">
      <div class="feelist-box">
        <div class="content-item" style="margin-top: 0px;">
          <div class="box-title">手续费记录</div>
          <div class="box-panel" style="margin-top: 20px;">
            <div class="search-box" style="margin-top: 0;">
              <el-form :inline="true" size="medium" label-width="90px" :model="listQuery" class="demo-form-inline">
                <el-form-item label="交易时间:">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="listQuery.tradingDateBefore"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  ></el-date-picker>
                  <span class="time-br">至</span>
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="listQuery.tradingDateEnd"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="应收费时间:">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="listQuery.shouldChargeDateBefore"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  ></el-date-picker>
                  <span class="time-br">至</span>
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="listQuery.shouldChargeDateEnd"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item class="pl-10" label="收款人账号:">
                  <el-input v-model="listQuery.receiverAccount" placeholder="请输入收款人账号"></el-input>
                </el-form-item>

                <el-form-item class="pl-10">
                  <div class="btn-box" style="text-align: left;">
                    <el-button class="btn default-btn" type="default" @click="fetchData(1)">筛选</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
            <div class="box-title-use">
              <a class="box-title-use-dwon" @click="feelistDown">
                <img class="down-img" src="../../../assets/img/down.png" alt="下载">
                <img class="down-hover-img" src="../../../assets/img/down-hover.png" alt="下载">
                <span>下载</span>
              </a>
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
                prop="tradingDate"
                show-overflow-tooltip
                label="交易时间"
                width="156px"
                sortable>
                <template slot-scope="scope">
                  {{scope.row.tradingDate | dateTime('date')}}
                </template>
              </el-table-column>
              <el-table-column
                prop="payerAccount"
                show-overflow-tooltip
                label="付款人账号"
                min-width="120px"
                sortable>
                <template slot-scope="scope">
                  {{scope.row.payerAccount | afterFourMask}}
                </template>
              </el-table-column>
              <el-table-column
                prop="payerName"
                show-overflow-tooltip
                label="付款人姓名"
                min-width="120px"
                sortable>
              </el-table-column>
              <el-table-column
                prop="receiverAccount"
                show-overflow-tooltip
                label="收款人账号"
                sortable
                min-width="120px">
                <template slot-scope="scope">
                  {{scope.row.receiverAccount | afterFourMask}}
                </template>
              </el-table-column>
              <el-table-column
                prop="receiverName"
                show-overflow-tooltip
                label="收款人姓名"
                sortable
                min-width="120px">
              </el-table-column>
              <el-table-column
                prop="payAmount"
                show-overflow-tooltip
                label="交易金额"
                sortable
                min-width="110px">
                <template slot-scope="scope">
                  {{scope.row.payAmount | NumFormat}}
                </template>
              </el-table-column>
              <el-table-column
                prop="poundageAmount"
                show-overflow-tooltip
                min-width="130px"
                sortable
                label="手续费金额">
                <template slot-scope="scope">
                  {{scope.row.poundageAmount | NumFormat}}
                </template>
              </el-table-column>
              <el-table-column
                prop="shouldChargeDate"
                show-overflow-tooltip
                min-width="130px"
                sortable
                label="应收费日期">
                <template slot-scope="scope">
                  {{scope.row.shouldChargeDate | irregularTime}}
                </template>
              </el-table-column>
              <el-table-column
                prop="payAttach"
                show-overflow-tooltip
                label="交易摘要"
                sortable
                min-width="110px">
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
  </div>
  </UsermanageNav>
</template>

<script>

import { downURL } from '@/utils/request'
import {
  selectFeelist
} from '@/api/usermanage'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'drawlist',
  components: {
    UsermanageNav
  },
  data() {
    return {
      loading: false, // 加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        receiverAccount: '',
        tradingDateBefore:'',
        tradingDateEnd:'',
        shouldChargeDateBefore: '',
        shouldChargeDateEnd: ''
      },
      tableData: [],
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
      this.loading = true
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectFeelist(this.listQuery).then(response => {
        if (response.success) {
          if (response.data) {
            this.tableData = response.data.listBaseResult
            this.total = response.data.count
          }
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
    // 列表数据 分页 搜索
    feelistDown() {
      let start = (new Date(this.listQuery.tradingDateBefore)).getTime() || 0, end = (new Date(this.listQuery.tradingDateEnd)).getTime() || 0

      if (
        end - start > 3600 * 1000 * 24 * 30 ||
          end == 0 ||
          start == 0
      ) {
        this.$message({
          message: '交易日期选择区间不能大于30天',
          type: 'error',
          duration: 2000
        })
        return false
      }
      window.open(this.downrul + '/poundage/downPoundage?tradingDateBefore='+ (this.listQuery.tradingDateBefore || '')+
          '&tradingDateEnd='+(this.listQuery.tradingDateEnd || '')+
          '&receiverAccount='+this.listQuery.receiverAccount+
          '&shouldChargeDateBefore='+(this.listQuery.shouldChargeDateBefore || '')+
          '&shouldChargeDateEnd='+(this.listQuery.shouldChargeDateEnd || '')+
          '&curr='+this.listQuery.curr+
          '&limit='+this.listQuery.limit);
    }
  }
}
</script>

<style lang="less">
  .feelist {
    .search-box {
      overflow: hidden;

      .el-form-item {
        padding-left: 10px;
        .time-br{
          padding: 0 10px;
        }
      }

      .el-form-item__content {
        width: calc(100% - 90px);
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
  .feelist {
    .content-box {
      overflow: hidden;
    }

    .feelist-box {
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

