<template>
  <UsermanageNav>
  <div class="whitedetail">
    <div class="content-box">
      <div class="whitedetail-box" v-loading.fullscreen.lock="loading">
        <div class="content-item">
          <div class="box-title">白名单变更申请详情</div>
          <div class="box-panel" style="margin-top: 25px;">
            <div class="whitelist-form-box">
              <el-form
                :inline="true"
                class="demo-form-inline"
                size="small"
                label-position="left"
                label-width="150px"
              >
                <el-form-item label="申请编号:">
                  <div>{{form.applyNo}}</div>
                </el-form-item>
                <el-form-item label="变更类型:">
                  <div>{{form.changeType}}</div>
                </el-form-item>
                <el-form-item label="申请人:">
                  <div>{{form.applyUserName}}</div>
                </el-form-item>
                <el-form-item label="申请时间:">
                  <div>{{form.applyTimestr}}</div>
                </el-form-item>
                <el-form-item label="白名单账号:">
                  <div>{{form.accountNo}}</div>
                </el-form-item>
                <el-form-item label="户名:">
                  <div>{{form.accountName}}</div>
                </el-form-item>
                <el-form-item label="证件类型:">
                  <div>{{form.certificateType}}</div>
                </el-form-item>
                <el-form-item label="证件号码:">
                  <div>{{form.certificateNo}}</div>
                </el-form-item>
                <el-form-item label="所属银行:">
                  <div>{{form.bankName}}</div>
                </el-form-item>
                <el-form-item label="网点名称:">
                  <div>{{form.subBankName}}</div>
                </el-form-item>
                <el-form-item label="变更原因:" style="width:100%;">
                  <div>{{form.applyReason}}</div>
                </el-form-item>
                <el-form-item label="变更申请单:" style="width:100%;">
                  <div class="whitedetail-upload-box">
                    <div class="upload-box-item" v-img-show:isImg="form.applyPicture">
                      <img
                        class="upload-box-img"
                        alt="变更申请单"
                        :data-id="form.applyPicture"
                        :src="downurl + '/common/showFile?filePath='+form.applyPicture"
                        v-if="form.applyPicture">
                      <div class="upload-box-btn">
                        <span>{{form ? (form.applyPicture ? '点击查看原图' : '暂无图片') :'暂无图片' }}</span>
                      </div>
                    </div>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="box-title" style="margin-top: 25px;">白名单变更申请表日志</div>
          <div class="box-panel" style="margin-top: 25px;padding: 0 10px;">
            <div class="whitelist-form-box">
              <el-table
                :data="tableData"
                :header-cell-style="{background:'#f5f6fa',color: '#2c2c2c'}"
                border
                stripe
                tooltip-effect="light"
                v-loading="listLoading && !loading"
                style="width: 100%;margin-top: 10px;"
              >
                <el-table-column label="序号" prop="index" show-overflow-tooltip width="70px">
                  <template slot-scope="scope">
                    {{scope.$index + 1}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="operationType"
                  show-overflow-tooltip
                  label="操作步骤"
                  width="220px"
                  sortable>
                </el-table-column>
                <el-table-column
                  prop="createTimeStr"
                  show-overflow-tooltip
                  label="操作时间"
                  width="180px"
                  sortable>
                </el-table-column>
                <el-table-column
                  prop="result"
                  show-overflow-tooltip
                  label="操作后状态"
                  width="150px"
                  sortable>
                </el-table-column>
                <el-table-column
                  prop="description"
                  show-overflow-tooltip
                  label="备注"
                  sortable>
                </el-table-column>
              </el-table>
              <div class="btn-box" style="margin-top:30px;margin-bottom: 10px;">
                <el-button
                  class="btn default-btn"
                  type="default"
                  @click="toWhitelist"
                >返回
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </UsermanageNav>
</template>

<script>
import { downURL } from '@/utils/request'
import { selectWhiteApplyOrder, selectWhiteApplyOrderLog } from '@/api/usermanage'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'whitedetail',
  components: {
    UsermanageNav
  },
  data() {
    return {
      loading: false,
      listLoading: false,
      maskBtn: false,
      changeImg: '',
      queryId: '',
      form: {},
      tableData: [],
      downurl: downURL()
    }
  },

  computed: {},

  watch: {},

  created() {
    const whiteApplyNo = JSON.parse(sessionStorage.getItem('whiteApplyNo')) || ''

    if (!whiteApplyNo) {
      this.$router.back(-1)
    } else {
      this.queryId = whiteApplyNo
    }
  },

  mounted() {
    this.detailData()
    this.fetchData()
  },

  destroyed() {
    sessionStorage.removeItem('whiteApplyNo')
  },

  methods: {
    // 获取 变更白名单申请详情
    detailData() {
      this.loading = true
      selectWhiteApplyOrder({
        applyNo: this.queryId
      }).then(response => {
        if (response.success) {
          this.form = response.data
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 获取 变更申请表日志
    fetchData() {
      this.listLoading = true
      selectWhiteApplyOrderLog({
        applyNo: this.queryId
      }).then(response => {
        if (response.success) {
          this.tableData = response.data
        }
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    // 返回 白名单管理
    toWhitelist() {
      this.$router.push({ path: '/usermanage/whitelist' })
    }
  }
}
</script>

<style lang="less">
  .whitedetail {
    .el-form-item__label {
      color: #777;
      text-align: left !important;
    }

    .el-form-item__content {
      width: 60%;
    }

    .el-form-item__label {
      position: relative;
      text-align-last: auto;
      text-align: right;
    }
  }

</style>

<style lang="less" scoped>
  .whitedetail {
    .content-box {
      overflow: hidden;
    }

    .whitedetail-box {
      float: none;
      width: 100%;

      .content-item {
        position: relative;
        padding: 30px;
        .box-title {
          height: 16px;
          padding-left: 10px;
          line-height: 18px;
          font-size: 18px;
          border-left: 4px solid #2f81ff;
        }
      }

      .whitelist-form-box {
        overflow: hidden;

        .el-form-item {
          float: left;
          width: 48.5%;
          padding-left: 10px;
          margin-bottom: 5px;
        }

        .whitedetail-upload-box {
          padding-top: 8px;

          .upload-box-item {
            overflow: hidden;
            float: left;
            width: 210px;
            height: 130px;
            background: rgba(249, 249, 249, 1);
            border: 1px dashed rgba(204, 204, 204, 1);
            border-radius: 4px;

            .upload-box-img {
              position: absolute;
              width: 208px;
              height: 128px;
              border-radius: 4px;
            }

            .upload-box-btn {
              position: absolute;
              width: 208px;
              height: 128px;
              padding: 48px 0px;
              text-align: center;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 4px;
              cursor: pointer;

              img {
                width: 32px;
                height: 32px;
                vertical-align: middle;
              }

              span {
                display: inline-block;
                vertical-align: middle;
                height: 32px;
                font-size: 16px;
                line-height: 32px;
                color: #2f81ff;
              }
            }
          }
        }
      }
    }
  }
</style>
