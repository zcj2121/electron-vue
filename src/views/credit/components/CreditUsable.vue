<template>
  <div class="credit-usable" v-loading="loading">
    <!--    操作 nav-->
    <CreditNavBox :navActive="navActive" @acitveFun="navActiveFun" />
    <!--    待上传授信资料-->
    <CreditUsableUpload :creditList="creditList" :nextBarShow="nextBarShow" @upFileFun="upFileShowFun" @createShowFun="modalCreateShowFun" />
    <!--    驳回申请-->
    <CreditUsableReject :rejectedCreditList="rejectedCreditList" @upFileFun="upFileShowFun" @createShowFun="modalCreateShowFun" />
    <!--    可用额度-->
    <CreditUsableUsable
      :total="total"
      :creditCalculateList="creditCalculateList"
      :loading="loading"
      :listLoading="listLoading"
      :listLoadings="listLoadings"
      @applyShowFun="modalApplyShowFun" />
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

    <!-- 上传 模态框 -->
    <el-dialog title="上传" :visible.sync="upFileShow" top="30vh" width="450px">
      <div v-loading="boxLoading">
        <form class="form-horizontal">
          <div class="form-group form-group-sm" style="margin-bottom: 0px;margin-top: 10px;">
            <label
              class="control-label label-sm col-df-label"
              style="width:20% !important;color: #666666;padding-top: 5px;text-align: right;"
            >上传文件:&nbsp;&nbsp;</label>
            <div class="no-pl fl" style="width:75% !important;">
              <div class="btn-box modal-onupfile" @click="upBtnFile">
                <input type="file" style="display: none" ref="upFile" @change="fileData">
                <el-input v-model="upFileName" size="small" class="fl up-file-show" disabled></el-input>
                <el-button size="mini" class="btn default-btn flup-file-btn" style="height: 32px;">选择文件</el-button>
              </div>
            </div>
          </div>
        </form>
        <div class="dialog-footer" style="margin-top: 25px;">
          <div class="btn-box">
            <el-button class="btn success-btn sub-btn" type="primary" @click="fileUpSave">立即上传</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 上传 模态框 -->

    <!-- 生成额度 模态框 -->
    <el-dialog title="生成额度" :visible.sync="modalCreateShow" top="30vh" width="450px">
      <div v-loading="boxLoading">
        <div style="color: #666666;">生成额度后则不可继续上传授信数据，由于生成额度大约需5分钟，如申请借款请稍后登录系统查询额度。</div>
        <div class="dialog-footer" style="margin-top: 20px;">
          <div class="btn-box">
            <el-button class="btn default-btn" type="default" @click="modalCreateShow = false">稍后再试</el-button>
            <el-button
              class="btn success-btn sub-btn"
              type="primary"
              @click="modalCreateGoFun"
            >继续申请
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 生成额度 模态框 -->

    <!-- 申请可用额度 模态框 -->
    <el-dialog title="申请额度" :visible.sync="modalApplyAddShow" @close="modalApplyAddHide" top="30vh" width="500px">
      <div v-loading="boxLoading">
        <form class="form-horizontal apply-modal-form apply-modal-form-add">
          <div class="form-group">
            <label class="control-label label-sm col-modal-label" style="width: 35% !important;">
              <span class="muted">*</span>授信产品:
            </label>
            <div class="no-pl col-modal-box">
              <el-select v-model="addForm.prodCode" size="mini" class="fl" value-key="prodCodeNo" placeholder="请选择出账账户"
                         style="width:250px !important;">
                <el-option label="请选择" value=""></el-option>
                <el-option v-for="(item) in productOptions" :key="item.prodCodeNo" :value="item.prodCodeNo" v-if="item.loanModel == 'CREDIT_APPLY'"
                           :label="item.productName"></el-option>
              </el-select>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label" style="width: 35% !important;">
              <span class="muted">*</span>期望额度:
            </label>
            <div class="no-pl col-modal-box">
              <el-input v-model="addForm.amount" size="mini" class="fl" style="width:250px !important;"></el-input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label" style="width: 35% !important;">综合借贷成本:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text" style="color:#666666">{{addForm.totalFinancingCost * 100 | NumFormat}}%</div>
            </div>
          </div>
        </form>
        <div class="btn-box" style="margin-top: 20px;">
          <el-button class="btn default-btn" type="default" @click="modalApplyAddHide">取消</el-button>
          <el-button
            class="btn success-btn sub-btn"
            type="primary"
            @click="modalApplyAddFun"
          >申请
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 申请可用额度 模态框 -->

    <!-- 申请借款 模态框 -->
    <el-dialog title="申请借款信息" :visible.sync="modalApplyShow" top="30vh" width="450px">
      <div v-loading="boxLoading">
        <form class="form-horizontal apply-modal-form" v-if="detailData">
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">融资额度:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.totalCredit | NumFormat }}</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">可申请额度:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.usableCredit | NumFormat }}</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">
              <span class="muted">*</span>借款金额:
            </label>
            <div class="no-pl col-modal-box">
              <el-input v-model="money" size="mini" class="fl" style="width:100px !important;"></el-input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">综合借贷成本:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.finalInterestRate }}（年化）</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label label-sm col-modal-label">借款期限:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.loanPeriod }}</div>
            </div>
          </div>
          <div class="form-group" style="margin-bottom: 8px;">
            <label class="control-label label-sm col-modal-label">还款方式:</label>
            <div class="no-pl col-modal-box">
              <div class="col-modal-box-text">{{detailData.repaymentType}}</div>
            </div>
          </div>
        </form>
        <div class="btn-box" style="margin-top: 12px;">
          <el-button class="btn default-btn" type="default" @click="modalApplyShow = false">稍后再试</el-button>
          <el-button
            class="btn success-btn sub-btn"
            type="primary"
            @click="applyLoanFun"
          >确认借款
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 申请借款 模态框 -->
  </div>

</template>

<script>

import {debounce} from '@/utils/validate'
import {moneyFormatter} from '@/filters'

import {
  applyCredit,
  calculateAmount,
  dealRangeFile,
  finishedCredits,
  insertCreditApply,
  applyForLoan,
  applyForLoanPageData,
  queryRejectedCredits,
  uploadPage
} from '@/api/credit'

import CreditNavBox from '@/views/credit/components/usableComponents/CreditNavBox'
import CreditUsableUpload from '@/views/credit/components/usableComponents/CreditUsableUpload'
import CreditUsableReject from '@/views/credit/components/usableComponents/CreditUsableReject'
import CreditUsableUsable from '@/views/credit/components/usableComponents/CreditUsableUsable'

export default {
  name: 'CreditUsable',
  components: {
    CreditNavBox,
    CreditUsableUpload,
    CreditUsableReject,
    CreditUsableUsable
  },
  data() {
    return {
      loading: false,
      boxLoading: false,
      listLoading: false, // 列表加载动画
      listLoadings: false, // 列表加载动画
      money: '',
      upFileName: '',
      upFile: '',
      upFileShow: false,
      modalApplyShow: false,
      modalApplyAddShow: false,
      modalCreateShow: false,
      dataRow: null,
      creditList: [],
      creditCalculateList: [],
      list: [],
      detailData: null,
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10 // 每页显示条数
      },
      navActive: false,
      rejectedCreditList: [],
      addForm: {
        prodCode: '',
        amount: '',
        totalFinancingCost: ''
      },
      productOptions: [],
      nextBarShow: false
    }
  },

  computed: {},

  watch: {
    'addForm.prodCode':{
      handler(val){
        if (!val) {
          this.addForm.totalFinancingCost = ''
        } else {
          let totalFinancingCost = ''

          this.productOptions.forEach((item, index) => {
            if (item.prodCodeNo == val) {
              totalFinancingCost = item.totalFinancingCost
            }
          })
          this.addForm.totalFinancingCost = totalFinancingCost
        }
      }
    }
  },

  created() {
    // 延迟 输入金额 新增
    this.$watch('addForm.money', debounce((val) => {
      this.addForm.money = moneyFormatter(val)
    }, 400))
    // 延迟 输入金额 申请借款
    this.$watch('money', debounce((val) => {
      this.money = moneyFormatter(val)

      if (parseFloat(val) > parseFloat(this.detailData.usableCredit)) {
        this.money = ''
        this.$message({
          message: '请输入不大于可用余额的有效金额',
          type: 'error',
          duration: 1800
        })
      }
    }, 200))
  },

  mounted() {
    this.fetchData()
    this.rejectData()
    this.listData()
    // if (this.$route.params.prodct) {
    //   this.navActiveFun(this.$route.params.prodct)
    // }
  },

  destroyed() {
  },

  methods: {
    // 请求 列表数据 待上传授信资料
    fetchData() {
      this.loading = true
      uploadPage().then(response => {
        if (response.success) {
          if (response.data) {
            this.creditList = response.data.creditList || []
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 请求 列表数据 可用额度
    listData() {
      this.listLoading = true
      finishedCredits({
        curr: this.listQuery.curr,
        limit: this.listQuery.limit
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.creditCalculateList = response.data.creditCalculateList || []
            this.total = response.data.creditsCount || 0
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    // 请求 列表数据 驳回申请
    rejectData() {
      this.listLoading = true
      queryRejectedCredits().then(response => {
        if (response.success) {
          if (response.data) {
            this.rejectedCreditList = response.data.rejectedCreditList
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    // 每页 条数
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.listData()
    },
    // 第几页
    handleCurrentChange(val) {
      this.listQuery.curr = val
      this.listData()
    },

    // 点击 上传
    upFileShowFun(val) {
      this.dataRow = val
      this.upFile = ''
      this.upFileName = ''
      this.upFileShow = true
      if (this.$refs.upFile) {
        this.$refs.upFile.value = ''
      }
    },
    // 选择上传图片
    upBtnFile() {
      const event = new MouseEvent('click')

      this.$refs.upFile.dispatchEvent(event)
    },
    // 准备上传图片
    fileData(e) {
      const file = e.target.files[0]

      if (file) {
        this.upFile = file
        this.upFileName = file.name
      } else {
        this.upFile = ''
        this.upFileName = ''
        this.$refs.upFile.value = ''
      }
    },
    // 点击立即上传
    fileUpSave() {
      if (this.upFile && this.upFileName) {
        const number = this.getFileName(this.upFile.name).lastIndexOf('.'),
          length = this.getFileName(this.upFile.name).length,
          fileType = this.getFileName(this.upFile.name).substring(number + 1, length).toLowerCase(),
          fileName = this.getFileName(this.upFile.name).substring(0, number).toLowerCase()

        if (!/xls/.test(fileType)) {
          this.$message({
            message: '请选择xls的后缀文件',
            type: 'error',
            duration: 1800
          })
          return false
        }
        const fd = new FormData()

        fd.append('file', this.upFile)
        fd.append('fileType', fileType)
        // fd.append('fileName', fileName)
        fd.append('creditNum', this.dataRow.creditNum)
        this.boxLoading = true
        dealRangeFile(fd)
          .then(response => {
            if (response.success) {
              this.$message({
                message: '上传成功',
                type: 'success',
                duration: 1800
              })
              this.upFileShow = false
              this.fetchData()
            } else {
              this.$message({
                message: response.returnMessage,
                type: 'error',
                duration: 1800
              })
            }
            this.boxLoading = false
          })
          .catch(() => {
            this.boxLoading = false
          })
      } else {
        this.$message({
          message: '请选择需要上传的文件',
          type: 'error',
          duration: 1800
        })
        this.boxLoading = false
      }
    },
    // 点击 生成额度
    modalCreateShowFun(val) {
      this.dataRow = val
      this.modalCreateShow = true
    },
    // 继续申请
    modalCreateGoFun() {
      this.boxLoading = true
      calculateAmount({
        creditNum: this.dataRow.creditNum
      }).then(response => {
        if (response.success) {
          if (response.data.code == '200') {
            this.nextBarShow = true
            setTimeout(() => {
              this.nextBarShow = false
            },5000)
            this.$message({
              message: '申请成功',
              type: 'success',
              duration: 1800
            })
            this.modalCreateShow = false
            this.fetchData()
          } else {
            this.$message({
              message: response.data.returnMessage,
              type: 'error',
              duration: 1800
            })
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.boxLoading = false
      }).catch(() => {
        this.boxLoading = false
      })
    },
    // 点击 申请借款
    modalApplyShowFun(val) {
      this.money = ''
      this.dataRow = null
      this.loading = true
      applyForLoanPageData({
        businessNo: val.creditNum,
        loanModel: 'CREDIT_APPLY'
      }).then(response => {
        if (response.success) {
          this.dataRow = val
          this.detailData = response.data
          this.modalApplyShow = true
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 点击 确认借款
    applyLoanFun() {
      if (!parseFloat(this.money)) {
        this.$message({
          message: '请输入有效借款金额',
          type: 'error',
          duration: 1800
        })
        return false
      }
      this.boxLoading = true
      applyForLoan({
        creditNum: this.dataRow.creditNum,
        loanAmount: this.money,
        prodCode: this.dataRow.prodCode,
        loanModel: 'CREDIT_APPLY'
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.$message({
              message: '申请成功',
              type: 'success',
              duration: 1800
            })
            this.modalApplyShow = false
            this.listData()
          } else {
            this.$message({
              message: '申请失败',
              type: 'error',
              duration: 1800
            })
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.boxLoading = false
      }).catch(() => {
        this.boxLoading = false
      })
    },
    // 申请可用额度 新增
    navActiveFun(val) {
      this.modalApplyAddShow = true
      this.boxLoading = true
      this.addForm.prodCode = ''
      this.addForm.amount = ''
      this.navActive = true
      applyCredit().then(response => {
        if (response.success) {
          if (response.data) {
            if (response.data.productLineDTOList) {
              this.productOptions = response.data.productLineDTOList
              // if (val) {
              //   for (let item of this.productOptions) {
              //     if (item && item.prodCode == val) {
              //       this.addForm.prodCode = item.prodCode
              //       this.$route.params.prodct = ''
              //     }
              //   }
              // }
            }
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
          this.navActive = false
        }
        this.boxLoading = false
      }).catch(() => {
        this.navActive = false
        this.boxLoading = false
      })
    },
    // 申请可用额度 取消
    modalApplyAddHide() {
      this.navActive = false
      this.modalApplyAddShow = false
    },
    // 申请可用额度 确定申请
    modalApplyAddFun() {
      if (!this.addForm.prodCode) {
        this.$message({
          message: '请选择授信产品',
          type: 'error',
          duration: 1800
        })
        return false
      }
      if (!parseFloat(this.addForm.amount)) {
        this.$message({
          message: '请输入有效金额',
          type: 'error',
          duration: 1800
        })
        return false
      }
      this.boxLoading = true
      insertCreditApply({
        prodCode: this.addForm.prodCode,
        amount: this.addForm.amount,
        totalFinancingCost: (this.addForm.totalFinancingCost * 100).toFixed(2)
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.$message({
              message: '申请成功',
              type: 'success',
              duration: 1800
            })
            this.navActive = false
            this.modalApplyAddShow = false
            this.fetchData()
            this.rejectData()
          } else {
            this.$message({
              message: '申请失败',
              type: 'error',
              duration: 1800
            })
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.boxLoading = false
      }).catch(() => {
        this.boxLoading = false
      })
    },
    getFileName(o) {
      const pos = o.lastIndexOf('\\')

      return o.substring(pos + 1)
    }
  }
}
</script>

<style lang="less">
  .up-file-show {
    width: 67% !important;
    cursor: pointer;

    input {
      background-color: inherit !important;
      color: #606266 !important;
      border: 1px solid #ccc !important;
      cursor: pointer !important;
    }
  }
</style>

<style lang="less" scoped>
  .flup-file-btn {
    margin-left: 5px !important;
    padding: 4px 10px !important;
    font-size: 14px !important;
    font-weight: 400 !important;
  }

  .apply-modal-form {
    .form-group {
      margin-bottom: 5px;

      .control-label {
        text-align: right;
      }
    }
  }

  .apply-modal-form-add {
    .form-group {
      margin-bottom: 15px;

      &:first-child {
        margin-top: 5px
      }
    }
  }

</style>

