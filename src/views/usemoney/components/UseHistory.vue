<template>
  <div class="use-history">
    <div class="box-panel" style="">
      <div class="search-box search-box-nowrap" style="margin-top: 15px;">
        <el-form
          :inline="true"
          :model="listQuery"
          class="demo-form-inline"
          size="medium"
          label-position="left"
        >
          <el-form-item label="借款编号:">
            <el-input v-model="listQuery.applyNum" placeholder="请输入编号"></el-input>
          </el-form-item>
          <el-form-item class="pl-10" label="状态:">
            <el-select v-model="listQuery.bizType" placeholder="请选择状态" style="width:100%;">
              <el-option label="全部" value=""></el-option>
              <el-option label="部分提前还款" value="PART_REPAYMENT"></el-option>
              <el-option label="正常还款" value="NORMAL_REPAYMENT"></el-option>
              <el-option label="提前结清" value="ADVANCE_REPAYMENT"></el-option>
              <el-option label="逾期" value="OUTTIME_REPAYMENT"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="pl-10 search-box-time" label="还款时间:">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="listQuery.beginTime"
                style="width: 100%;"
                :picker-options="startPickerOptions"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-col>
            <el-col class="line text-c" :span="2">至</el-col>
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="listQuery.endTime"
                style="width: 100%;"
                :picker-options="endPickerOptions"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item class="pl-10">
            <div class="btn-box" style="text-align: left;">
              <el-button class="btn default-btn" type="default" @click="fetchData(1)">筛选</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="box-title-use" style="margin-top: 15px;">
        <a class="box-title-use-dwon" @click="detailDown">
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
        <el-table-column label="序号" prop="index" show-overflow-tooltip width="55px">
          <template slot-scope="scope">
            {{(listQuery.curr - 1) * listQuery.limit + scope.$index + 1}}
          </template>
        </el-table-column>
        <el-table-column
          prop="applyNum"
          show-overflow-tooltip
          label="借款编号"
          min-width="170px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="createTime"
          show-overflow-tooltip
          label="还款日期"
          min-width="160px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.createTime | dateTime('date')}}
          </template>
        </el-table-column>

        <el-table-column
          prop="repaidPrincipal"
          show-overflow-tooltip
          label="还款本金"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.repaidPrincipal | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="repaidInterest"
          show-overflow-tooltip
          label="还款利息"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.repaidInterest | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="platformCommissions"
          show-overflow-tooltip
          label="服务费"
          min-width="95px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.platformCommissions | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="penalty"
          show-overflow-tooltip
          label="逾期违约金"
          min-width="120px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.penalty | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="defaultInterest"
          show-overflow-tooltip
          label="逾期罚息"
          min-width="110px"
          sortable>
          <template slot-scope="scope">
            {{scope.row.defaultInterest | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="defaultInterest"
          show-overflow-tooltip
          label="未缴纳服务费违约金"
          min-width="180px"
          sortable>
        </el-table-column>
        <el-table-column
          prop="totalAmountRepayment"
          show-overflow-tooltip
          label="还款总金额"
          min-width="120px"
          sortable>
          <template slot-scope="scope">
            {{(scope.row.defaultInterest + scope.row.penalty + scope.row.platformCommissions + scope.row.repaidInterest+ scope.row.repaidPrincipal) | NumFormat}}
          </template>
        </el-table-column>
        <el-table-column
          prop="bizType"
          show-overflow-tooltip
          label="还款状态"
          min-width="110px"
          sortable>
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
</template>

<script>
import { repaymentRecordList } from '@/api/usemoney'
import { downURL } from '@/utils/request'

export default {
  name: 'CreditEnd',
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
        applyNum: '',
        bizType: '',
        beginTime: '',
        endTime: ''
      },
      tableData: [],
      startPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.endTime) {
            return time.getTime() > (new Date(this.listQuery.endTime)).getTime()
          }
          return time.getTime() > Date.now()
        }
      },
      endPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.beginTime) {
            return time.getTime() < (new Date(this.listQuery.beginTime)).getTime() || time.getTime() > Date.now()
          }
          return time.getTime() > Date.now()
        }
      },
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
      repaymentRecordList(this.listQuery).then(response => {
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
    // 点击 下载
    detailDown() {
      let start = (new Date(this.listQuery.beginTime)).getTime() || 0, end = (new Date(this.listQuery.endTime)).getTime() || 0

      if (
        end - start > 3600 * 1000 * 24 * 30 ||
        end == 0 ||
        start == 0
      ) {
        this.$message({
          message: '还款时间选择区间不能大于30天',
          type: 'error',
          duration: 2000
        })
        return false
      }
      window.open(this.downrul + '/repayment/downRepaymentRecord?applyNum='+ this.listQuery.applyNum+
        '&beginTime='+(this.listQuery.beginTime || '')+
        '&endTime='+(this.listQuery.endTime || '')+
        '&bizType='+this.listQuery.bizType+
        '&curr='+this.listQuery.curr+
        '&limit='+this.listQuery.limit);
    }
  }
}
</script>

<style lang="less">
  .use-history {
    .search-box {
      overflow: hidden;
      margin-top: 25px;

      .el-form-item {
        margin-bottom: 10px;
      }

      .el-form-item.pl-10 {
        padding-left: 10px;
      }

      .el-form-item__label {
        text-align-last: auto;
        text-align: right;
      }
    }
  }
</style>

<style lang="less" scoped>
  .use-history {
    .box-panel {
      overflow: hidden;
      margin-top: 0px;
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
        vertical-align: middle;
        margin-left: 10px;
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
</style>
