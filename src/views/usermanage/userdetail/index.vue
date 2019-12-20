<template>
    <UsermanageNav>
    <div class="userdetail">
      <div class="content-box">
        <div class="content-box-panel" v-loading.fullscreen.lock="loading">
          <div class="box-aside">
            <!--          账户概览-->
            <UserdetailOverview :detail="detail" @toCashout="toCashout" />
            <!--          账户明细-->
            <UserdetailDetailed :detail="detail" :detailShow="detailShow" @changeShowHide="changeShowHide" />
            <!--          资金记录-->
            <UserdetailRecord
              :listQuery="listQuery"
              :list="list"
              :listLoading="listLoading"
              :total="total"
              :loading="loading"
              :pageSizes="pageSizes"
              :endPickerOptions="endPickerOptions"
              :startPickerOptions="startPickerOptions"
              @fetchData="fetchData"
              @handleSizeChange="handleSizeChange"
              @handleCurrentChange="handleCurrentChange"
              @detailDown="detailDown"
            />
          </div>
          <div class="box-info">
            <!--          账户信息-->
            <UserdetailInformation :detailInfo="detailInfo" />
            <!--          信用账户-->
            <UserdetailCredit :creditData="creditData" :creditDataList="creditDataList" />
          </div>
        </div>
      </div>
    </div>
    </UsermanageNav>
</template>

<script>

import { downURL } from '@/utils/request'
import {
  selectBorrowerAccount,
  selectAccountStatement,
  queryAccountCreditByNumber,
  getProductLineByCustomerNumber
} from '@/api/usermanage';
import { checkOpenAccount } from '@/api/work'

import UserdetailOverview from '@/views/usermanage/userdetail/components/UserdetailOverview'
import UserdetailDetailed from '@/views/usermanage/userdetail/components/UserdetailDetailed'
import UserdetailRecord from '@/views/usermanage/userdetail/components/UserdetailRecord'
import UserdetailInformation from '@/views/usermanage/userdetail/components/UserdetailInformation'
import UserdetailCredit from '@/views/usermanage/userdetail/components/UserdetailCredit'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'userdetail',
  components: {
    UserdetailOverview,
    UserdetailDetailed,
    UserdetailRecord,
    UserdetailInformation,
    UserdetailCredit,
    UsermanageNav
  },
  data() {
    return {
      list: null, // 列表显示数据
      loading: false, // 加载动画
      listLoading: false, // 列表加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        accountNo: '',
        beginTime: '',
        endTime: '',
        tradeType: ''
      },
      detailShow: true,
      startPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.endTime) {
            return time.getTime() > (new Date(this.listQuery.endTime)).getTime();
          }
          return time.getTime() > Date.now();
        }
      },
      endPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.beginTime) {
            return time.getTime() < (new Date(this.listQuery.beginTime)).getTime() || time.getTime() > Date.now();
          }
          return time.getTime() > Date.now();
        }
      },
      detail: {
        totalBorrowerAccountVo: null,
        borrowerAccountVoList: []
      },
      detailInfo: {
        isOpenAccount: false,
        mobile: '',
        name: ''
      },
      creditData: {
        zged: 0,
        kyed: 0,
        zdye: 0
      },
      creditDataList: [],
      downrul: downURL()
    };
  },

  computed: {},

  watch: {
    //监听 搜索条件
    listQuery: {
      handler() {
        // this.fetchData()
      },
      deep: true
    }
  },

  created() {
    this.detailData()
    this.infoData()
    this.fetchData()
    this.queryAccountCreditByNumberData()
    this.getProductLineByCustomerNumberData()
  },

  mounted() {
  },

  destroyed() {
  },

  methods: {
    // 点击 提现
    toCashout() {
      this.$router.push({path: '/usermanage/cashout'});
    },
    // 获取 账户详情
    detailData() {
      this.loading = true
      selectBorrowerAccount().then(response => {
        if (response.success) {
          if (response.data) {
            this.detail = response.data
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 获取 账户详情 右侧
    infoData() {
      this.loading = true
      checkOpenAccount().then(response => {
        if (response.success && response.data) {
          this.detailInfo = response.data
        } else {
          this.detailInfo = {
            isOpenAccount: false,
            mobile: '',
            name: ''
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 列表数据 分页 搜索
    // 获取 列表数据
    fetchData(val) {
      this.listLoading = true
      this.list = []
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectAccountStatement(this.listQuery).then(response => {
        if (response.success) {
          if (response.data) {
            this.list = response.data.AccountStatementResultList
            this.total = response.data.count
          }
        }
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
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

    changeShowHide() {
      this.detailShow = !this.detailShow
    },

    // 信用账户
    queryAccountCreditByNumberData() {
      queryAccountCreditByNumber().then(response => {
        if (response.success) {
          if (response.data) {
            this.creditData = {
              zged: response.data.creditLimit,
              kyed: response.data.usableAccount,
              zdye: response.data.loanAccount
            }
          } else {
            this.creditData = {
              zged: 0,
              kyed: 0,
              zdye: 0
            }
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          });
        }
      }).catch(() => {
      })
    },

    // 信用账户 授信产品信息
    getProductLineByCustomerNumberData() {
      getProductLineByCustomerNumber().then(response => {
        if (response.success && response.data) {
          this.creditDataList = response.data
        } else {
          this.creditDataList = []
        }
      }).catch(() => {
      })
    },
    // 点击 下载
    detailDown() {
      let start = (new Date(this.listQuery.beginTime)).getTime() || 0, end = (new Date(this.listQuery.endTime)).getTime() || 0

      if (
        end - start > 3600 * 1000 * 24 * 30 ||
        end == 0 ||
        start == 0
      ) {
        this.$message({
          message: '日期选择区间不能大于30天',
          type: 'error',
          duration: 2000
        })
        return false
      }
      window.open(this.downrul + '/borrowerAccount/downBorrowerAccountList?accountNo='+ this.listQuery.accountNo+
        '&beginTime='+(this.listQuery.beginTime || '')+
        '&endTime='+(this.listQuery.endTime || '')+
        '&tradeType='+this.listQuery.tradeType+
        '&curr='+this.listQuery.curr+
        '&limit='+this.listQuery.limit);
    }
  }
};
</script>

<style lang="less">
  .userdetail {
    .search-box {
      overflow: hidden;

      .el-form-item {
        padding-left: 10px;
        .time-br{
          padding: 0 10px;
        }
      }

      .el-form-item__content {
        width: calc(100% - 78px);
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
  .userdetail {
    .content-box {
      overflow: hidden;

      .content-box-panel {
        overflow: hidden;

        .box-aside {
          float: left;
          width: calc(100% - 304px);
        }
        .box-info {
          float: right;
          width: 290px;
        }
      }
    }

  }
</style>
