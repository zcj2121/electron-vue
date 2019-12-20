<template>
  <UsermanageNav>
  <div class="drawlist">
    <div class="content-box">
      <div class="drawlist-box">
        <div class="content-item" style="margin-top: 0px;">
          <div class="box-title">提现记录</div>
          <div class="box-panel" style="">
            <div class="search-box search-box-nowrap">
              <el-form
                :inline="true"
                :model="listQuery"
                class="demo-form-inline"
                size="medium"
                label-position="left"
              >
                <el-form-item label="转出账号:">
                  <el-select v-model="listQuery.outerBankNum" placeholder="请选择转出账号" style="width:100%;">
                    <el-option label="全部" value=""></el-option>
                    <el-option v-for="(item,index) in outOptions" :key="index" :value="item.bankCardNo"
                               :label="item.bankCardNo | afterFourMask"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="pl-10" label="转入账号:">
                  <el-select v-model="listQuery.inerBankNum" placeholder="请选择转入账号" style="width:100%;">
                    <el-option label="全部" value=""></el-option>
                    <el-option v-for="(item,index) in inOptions" :key="index" :value="item.accountNo"
                               :label="item.accountNo | afterFourMask"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="pl-10" label="提现金额:">
                  <el-input v-model="listQuery.requestAmount" placeholder="请输入提现金额"></el-input>
                </el-form-item>
                <el-form-item class="pl-10">
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
              style="width: 100%;margin-top: 15px;"
            >
              <el-table-column label="序号" prop="index" show-overflow-tooltip width="55px">
                <template slot-scope="scope">
                  {{(listQuery.curr - 1) * listQuery.limit + scope.$index + 1}}
                </template>
              </el-table-column>
              <el-table-column
                prop="withdrawNum"
                show-overflow-tooltip
                label="提现申请编号"
                min-width="175px"
                sortable>
              </el-table-column>
              <el-table-column
                prop="withdrawType"
                show-overflow-tooltip
                label="提现类型"
                min-width="110px"
                sortable>
              </el-table-column>
              <el-table-column
                prop="outerBankNum"
                show-overflow-tooltip
                label="出账账户"
                sortable
                min-width="150px">
              </el-table-column>
              <el-table-column
                prop="actualAmountStr"
                show-overflow-tooltip
                label="提现金额"
                sortable
                min-width="110px">
              </el-table-column>
              <el-table-column
                prop="inerBankNum"
                show-overflow-tooltip
                label="入账账户"
                sortable
                min-width="150px">
              </el-table-column>
              <el-table-column
                prop="inerUserName"
                show-overflow-tooltip
                label="入账账户名称"
                sortable
                min-width="150px">
              </el-table-column>
              <el-table-column
                prop="createdTimeStr"
                show-overflow-tooltip
                min-width="160px"
                sortable
                label="申请时间">
              </el-table-column>
              <el-table-column
                prop="status"
                show-overflow-tooltip
                label="状态"
                sortable
                width="90px">
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
import { debounce } from '@/utils/validate'
import { moneyFormatter } from '@/filters'
import {
  selectWithdrawByCustomerNo,
  selectWthdrawBorrowerAccount,
  selectWhiteListByCustomerNo
} from '@/api/usermanage'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'drawlist',
  components: {
    UsermanageNav
  },
  data() {
    return {
      list: null, // 列表显示数据
      loading: false, // 加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        outerBankNum: '',
        inerBankNum: '',
        requestAmount: ''
      },
      tableData: [],
      outOptions: [],
      inOptions: []
    }
  },

  computed: {},

  watch: {
    // 监听 搜索条件
    listQuery: {
      handler() {
        // this.fetchData()
      },
      deep: true
    }
  },

  created() {
    // 延迟 输入金额 请求 还款计划
    this.$watch('listQuery.requestAmount', debounce((val) => {
      this.listQuery.requestAmount = moneyFormatter(val)
    }, 600))
  },

  mounted() {
    this._outAccountFun()
    this._inAccountFun()
    this.fetchData()
  },

  destroyed() {
  },

  methods: {
    // 获取 出账账户 列表
    _outAccountFun() {
      selectWthdrawBorrowerAccount().then(response => {
        if (response.success) {
          if (response.data) {
            this.outOptions = response.data
          }
        }
      }).catch(() => {
      })
    },
    // 获取 入账账户 列表
    _inAccountFun() {
      selectWhiteListByCustomerNo().then(response => {
        if (response.success) {
          if (response.data) {
            this.inOptions = response.data
          }
        }
      }).catch(() => {
      })
    },
    // 列表数据 分页 搜索
    // 获取 列表数据
    fetchData(val) {
      this.loading = true
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectWithdrawByCustomerNo(this.listQuery).then(response => {
        if (response.success) {
          if (response.data) {
            this.tableData = response.data.queryWithdrawApplyList
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
    toWhiteAdd() {
      this.$router.push({ path: '/usermanage/whiteadd' })
    }
  }
}
</script>

<style lang="less">
  .drawlist {
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
  .drawlist {
    .content-box {
      overflow: hidden;
    }

    .drawlist-box {
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
