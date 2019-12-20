<template>
  <UsermanageNav>
  <div class="whitelist">
    <div class="content-box">
      <div class="whitelist-box" v-loading.fullscreen.lock="loading">
        <div class="content-item" style="margin-top: 0px;padding-bottom:0px;">
          <div class="box-title">白名单账户</div>
          <div class="box-panel" style="margin-top: 15px;">
            <el-table
              :data="accountData"
              :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
              border
              stripe
              tooltip-effect="light"
              style="width: 100%;margin-top: 5px;"
            >
              <el-table-column label="序号" prop="index" show-overflow-tooltip width="60px">
                <template slot-scope="scope">
                  {{scope.$index + 1}}
                </template>
              </el-table-column>
              <el-table-column label="尾号" prop="accountNo" show-overflow-tooltip sortable>
                <template slot-scope="scope">
                  {{scope.row.accountNo | afterFourMask('no')}}
                </template>
              </el-table-column>
              <el-table-column prop="accountName" label="户名" show-overflow-tooltip sortable></el-table-column>
              <el-table-column prop="bankName" label="所属银行" show-overflow-tooltip sortable></el-table-column>
              <el-table-column prop="subBankName" label="网点名称" show-overflow-tooltip sortable></el-table-column>
            </el-table>
          </div>
        </div>
        <div class="content-item" style="margin-top: 0px;padding-top:15px;">
          <div class="box-title" style="position: relative;">白名单管理
            <div class="btn-box whitelist-box-btn">
              <DownloadButton class="whitelist-box-btn-download" buttonText="下载申请单模版" buttonUrl="/templates/whiteApply.doc" />
              <el-button
                class="btn success-btn sub-btn"
                type="primary"
                style="padding: 4px 18px;"
                @click="toWhiteAdd"
              >新建
              </el-button>
            </div>
          </div>
          <div class="box-panel" style="margin-top: 20px;border-top: 1px solid #F5F5F5;">
            <div class="search-box search-box-nowrap">
              <el-form
                :inline="true"
                :model="listQuery"
                class="demo-form-inline"
                size="medium"
                label-position="left"
              >
                <el-form-item label="账号:">
                  <el-input
                    v-model="listQuery.accountNo"
                    @keyup="listQuery.accountNo=listQuery.accountNo.replace(/[^\w]/g,'')"
                    placeholder="请输入账号"
                  ></el-input>
                </el-form-item>
                <el-form-item class="pl-10" label="户名:">
                  <el-input v-model="listQuery.accountName" placeholder="请输入户名"></el-input>
                </el-form-item>
                <el-form-item class="pl-10" label="所属银行:">
                  <el-input v-model="listQuery.bankName" placeholder="请输入所属银行"></el-input>
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
              stripe
              tooltip-effect="light"
              v-loading="listLoading && !loading"
              style="width: 100%;margin-top: 15px;"
            >
              <el-table-column label="序号" prop="index" show-overflow-tooltip width="60px">
                <template slot-scope="scope">
                  {{(listQuery.curr - 1) * listQuery.limit + scope.$index + 1}}
                </template>
              </el-table-column>
              <el-table-column
                prop="applyNo"
                show-overflow-tooltip
                label="申请编号"
                min-width="122px"
                sortable>
              </el-table-column>
              <el-table-column
                prop="accountNo"
                show-overflow-tooltip
                label="账号"
                sortable
                min-width="100px">

              </el-table-column>
              <el-table-column prop="accountName" show-overflow-tooltip label="户名" sortable></el-table-column>
              <el-table-column prop="bankName" show-overflow-tooltip label="所属银行" sortable></el-table-column>
              <el-table-column prop="subBankName" show-overflow-tooltip label="网点名称" sortable></el-table-column>
              <el-table-column prop="status" show-overflow-tooltip label="状态" sortable></el-table-column>
              <el-table-column
                prop="applyTimestr"
                show-overflow-tooltip
                min-width="130px"
                sortable
                label="申请时间">
              </el-table-column>
              <el-table-column label="操作" align="center" width="80px;">
                <template slot-scope="scope">
                  <a :id="scope" @click="toWhiteDetail(scope.row)">查看</a>
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
  </div>
  </UsermanageNav>
</template>

<script>
import { downURL } from '@/utils/request'
import DownloadButton from '@/components/DownloadButton.vue'
import { selectWhiteListByCustomerNo, selectWhiteApplyOrderList } from '@/api/usermanage'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'whitelist',
  components: {
    DownloadButton,
    UsermanageNav
  },
  data() {
    return {
      list: null, // 列表显示数据
      loading: false, // 加载动画
      listLoading: false, // 加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        accountNo: '',
        accountName: '',
        bankName: ''
      },
      accountData: [],
      tableData: [],
      downurl: downURL()
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
  },

  mounted() {
    this.detailData()
    this.fetchData()
  },

  destroyed() {
  },

  methods: {
    // 获取 白名单账户
    detailData() {
      this.loading = true
      selectWhiteListByCustomerNo().then(response => {
        if (response.success) {
          this.accountData = response.data
        } else {
          this.accountData = []
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
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectWhiteApplyOrderList(this.listQuery).then(response => {
        if (response.success) {
          this.tableData = response.data.whiteListApplyOrderDTOList
          this.total = response.data.count
        } else {
          this.list = []
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

    // 点击 新建
    toWhiteAdd() {
      this.$router.push({ path: '/usermanage/whiteadd' })
    },
    // 点击 查看
    toWhiteDetail(val) {
      sessionStorage.removeItem('whiteApplyNo')
      sessionStorage.setItem('whiteApplyNo', JSON.stringify(val.applyNo))
      this.$router.push({ path: '/usermanage/whitedetail' })
    }
  }
}
</script>

<style lang="less">
  .whitelist {
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
  .whitelist {
    .content-box {
      overflow: hidden;
    }

    .whitelist-box {
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
    }

    .box-title {
      height: 16px;
      padding-left: 10px;
      line-height: 18px;
      font-size: 18px;
      border-left: 4px solid #2f81ff;

      .btn-box.whitelist-box-btn {
        display: inline-block;
        position: absolute;
        right: 0;
        top: -6px;
        text-align: center;

        .whitelist-box-btn-download {
          overflow: hidden;
          float: none;
          padding: 6px 12px;
          font-size: 14px;
          color: #6c99f6;
          border: 1px dashed rgba(204, 204, 204, 1);
          border-radius: 2px;

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
            border: 1px dashed #2f81ff;

            .down-img {
              display: none;
              vertical-align: middle;
            }

            .down-hover-img {
              display: initial;
              vertical-align: middle;
            }
          }

          img {
            width: 16px !important;
            height: 16px !important;
            margin-right: 5px !important;
          }
        }
      }
    }

    .box-panel {
      margin-top: 0px;
      overflow: hidden;
    }

  }
</style>
