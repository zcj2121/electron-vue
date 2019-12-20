<template>
  <div class="content content-loading loanconfirm">
    <div class="content-nav">
      <span>当前位置：</span>
      <router-link :to="{path:'/work'}">工作台</router-link>
      &gt;
      <router-link :to="{path:'/usemoney'}">用款管理</router-link>
      &gt;
      借款信息确认
    </div>
    <div class="content-box" v-loading="loading">
      <div class="content-item">
        <div class="box-title">借款基本信息</div>
        <LoanconfirmFrom :loanApplyDTOList="loanApplyDTOList" />
        <div class="line-br"></div>
        <div class="box-title">预划扣计划</div>
        <LoanconfirmList
          :isRead="isRead"
          :form="form"
          :deductionPlanList="deductionPlanList"
          @modalAgreementFun="modalAgreementFun"
          @toBackFun="toBackFun"
          @isReadFun="isReadFun"
        />
      </div>
    </div>
    <!-- 确认\取消 模态框 -->
    <el-dialog :visible.sync="closeAlert" title="提示" top="30vh" width="350px">
      <div v-loading="boxLoading">
        <div class="el-message-box__content" style="margin-bottom: 15px;">
          <div class="el-message-box__status el-icon-warning"></div>
          <div class="el-message-box__message">
            <p>{{closeName}}</p>
          </div>
        </div>
        <div class="btn-box text-r">
          <el-button
            @click="closeAlert = false, boxLoading = false"
            class="btn default-btn"
            type="default">取消
          </el-button>
          <el-button
            @click="closeAlertFun"
            class="btn success-btn sub-btn"
            type="primary">确定
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 确认\取消 模态框 -->

    <!-- 合同签署确认 模态框 -->
    <el-dialog :visible.sync="modalConfirmShow" title="合同签署确认" top="30vh" width="500px">
      <div v-loading="boxLoading">
        <div class="modal-confirm-box">
          <div class="modal-confirm-info">
            <p>本公司 {{messageForm.customerName}} 同意使用本公司的数字证书对以下合同进行电子签名：
              《{{messageForm.serviceAgreementStr}}》、《{{messageForm.loanApplyAgreementStr}}》</p>
            <p>该电子签名和企业公章具有相同的法律效力；该电子合同和纸质合同具有相同的法律效力。</p>
          </div>
          <form class="form-confirm-box">
            <div class="form-group">
              <label>手机号</label>
              <div>
                {{messageForm.customerTel}}
              </div>
            </div>
            <div class="form-group">
              <label>验证码</label>
              <el-input
                class="username"
                placeholder="请输入短信验证码"
                v-model="code"
              >
                <el-button style="width:110px;" :style="{color: flag ? '#909399' : '#2f81ff'}" slot="append" @click="getCfcaSendSmsFun">
                  <span v-if="!flag">重新获取</span>
                  <span v-if="flag">{{ second + '秒'}}</span>
                </el-button>
              </el-input>
            </div>
          </form>
        </div>
        <div class="btn-box text-r" style="margin-top: 40px;margin-bottom: 15px;">
          <el-button
            @click="modalConfirmShow = false, boxLoading = false"
            class="btn default-btn"
            type="default">取消
          </el-button>
          <el-button
            @click="confirmSaveFun"
            class="btn success-btn sub-btn"
            type="primary">确定
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 合同签署确认 模态框 -->
    <!-- 借款确认提交成功 模态框 -->
    <el-dialog title="提示" class="confirm-result" :visible.sync="modalResultShow" @close="toUsemoney" top="30vh" width="450px">
      <div v-loading="boxLoading" style="padding:10px 40px;">
        <div class="confirm-result-img">
          <img src="../../assets/img/work-result.png" alt="">
        </div>
        <div class="confirm-result-title" style="text-align: left;line-height:28px;">借款确认提交成功，后续请关注借款接收账户的余额变动。</div>
        <div class="btn-box" style="margin-top: 35px;margin-bottom: 10px;">
          <el-button
            @click="toUsemoney"
            class="btn success-btn sub-btn"
            type="primary"
            style="width:60%"
          >返回用款管理
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 借款确认提交成功 模态框 -->

    <!-- 借款协议 模态框 -->
    <el-dialog
      :lock-scroll="false"
      :visible.sync="modalAgreementShow"
      class="agreement-box"
      height="68vh"
      :title="agreementTitle"
      top="15vh"
      width="750px"
    >
      <div v-loading="boxLoading">
        <div style="height: 55vh;overflow-y: auto;padding: 20px 25px 3vh;" id="modalAgreementHtmlContent" v-html="modalAgreementHtml">
          {{modalAgreementHtml}}
        </div>
      </div>
      <div class="dialog-footer" slot="footer">
        <div class="btn-box">
          <el-button
            @click="modalAgreementShow = false,isRead = true,boxLoading = false"
            class="btn success-btn"
            type="primary"
          >我已阅读并同意
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 借款协议 模态框 -->
  </div>
</template>

<script>

import LoanconfirmFrom from '@/views/loanconfirm/components/LoanconfirmFrom'
import LoanconfirmList from '@/views/loanconfirm/components/LoanconfirmList'
import { confirm, getAgreement, getLoanApplyAgreement, getServiceAgreement, selectLoanApplyByApplyNum, sendSms, beforeConfirm, contract } from '@/api/usemoney'
import { validateSixCode } from '@/utils/validate'
import Cookies from 'js-cookie'

const defSecond = 120
export default {
  name: 'loanconfirm',
  components: {
    LoanconfirmFrom,
    LoanconfirmList
  },
  data() {
    return {
      loanApplyDTOList: null,
      deductionPlanList: [],
      isRead: false,
      closeAlert: false,
      isCloseSave: false,
      loading: false,
      boxLoading: false,
      modalConfirmShow: false,
      modalResultShow: false,
      modalAgreementShow: false,
      modalAgreementHtml:'',
      agreementTitle:'',
      closeName: '',
      code: null,
      second: JSON.parse(JSON.stringify(defSecond)),
      flag: false,
      messageForm: {
        serviceAgreementStr: '',
        loanApplyAgreementStr: '',
        customerName: '',
        customerTel: ''
      },
      form: {
        loanModel: '',
        applyNum: ''
      },
      serviceData: null,
      loanApplyData: null
    }
  },
  computed: {},

  watch: {
  },

  created() {
    this.initTime()
    const loanconfirm = JSON.parse(sessionStorage.getItem('loanconfirm'))
    if (!loanconfirm || !loanconfirm.loanModel || !loanconfirm.applyNum) {
      this.$router.back(-1)
    } else {
      this.form = loanconfirm
    }
  },

  mounted() {
    this.fetchData()
    this._getMessageFun()
  },

  destroyed() {
  },
  beforeDestroy() {
  },

  methods: {
    // 请求 列表数据
    fetchData() {
      this.loading = true
      selectLoanApplyByApplyNum({
        applyNum: this.form.applyNum
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.deductionPlanList = response.data.deductionPlanList
            this.loanApplyDTOList = response.data.loanApplyDTOList
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
    // 获取 签署信息
    _getMessageFun() {
      if (this.form.loanModel != 'FACTORING') {
        return false
      }
      beforeConfirm().then(response => {
        if (response.success && response.data) {
          this.messageForm = response.data
        } else {
          this.messageForm= {
            serviceAgreementStr: '',
            loanApplyAgreementStr: '',
            customerName: '',
            customerTel: ''
          }
        }
      }).catch(() => {
      })
    },
    // 点击 查看 借款协议
    modalAgreementFun(val) {
      if (!val) {
        this.agreementTitle = '借贷辅助服务确认单'
        this.modalAgreementHtml = getAgreement()
        this.modalAgreementShow = true
      } else {
        this._getAgreementFun(val)
      }
    },
    // 获取协议填充信息
    _getAgreementFun(val) {
      this.boxLoading = false
      contract({
        applyNum: this.form.applyNum,
        previewFlag: val
      }).then(response => {
        if (response.success && response.data) {
          this.modalAgreementHtml = ''
          if (val == 1) {
            this.agreementTitle = '融资辅助服务确认单'
            this.modalAgreementHtml = getServiceAgreement(response.data, this.filterFun(response.data, 'zk'), this.filterFun(response.data, 'hk'))

          } else {
            this.agreementTitle = '保理融资申请单'
            this.modalAgreementHtml = getLoanApplyAgreement(response.data)
          }
          this.$nextTick(()=>{
            let ddev = document.getElementById("modalAgreementHtmlContent")
            if (ddev) {
              ddev.scrollTo(0, 0)
            }
          })
          this.modalAgreementShow = true
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
    // 借款信息确认
    toBackFun(val, type) {
      if (type == 0) {
        this.closeName = val
        this.isCloseSave = type
        this.closeAlert = true
      } else {
        if (!this.isRead) {
          this.$message({
            duration: 1800,
            type: 'error',
            message: '请先阅读相关协议并勾选'
          })
          return false
        }
        this.isCloseSave = type
        if (this.form.loanModel == 'CREDIT_APPLY') {
          this.closeName = val
          this.closeAlert = true
        } else if (this.form.loanModel == 'FACTORING'){
          this.code = ''
          if (!this.flag) {
            this.getCfcaSendSmsFun()
          } else {
            this.verCodeFun()
          }
          this.modalConfirmShow = true
        }
      }
    },
    // 确定、取消 前往 用款管理
    // 确认 合同签署确认 方法
    closeAlertFun() {
      this.boxLoading = true
      confirm({
        applyNum: this.form.applyNum,
        confirmStatus: this.isCloseSave,
        checkCode: this.code
      }).then(response => {
        if (response.success) {
          if (this.form.loanModel == 'CREDIT_APPLY') {
            this.$message({
              duration: 1800,
              type: 'success',
              message: '操作成功!'
            })
            this.$router.push({ path: '/usemoney' })
            this.closeAlert = false
          } else if (this.form.loanModel == 'FACTORING') {
            this.modalConfirmShow = false
            this.modalResultShow = true
            Cookies.remove('sendCode')
            clearInterval(this.timer)
            clearInterval(this.timers)
            sessionStorage.removeItem('loanconfirm')
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

    // 确认 合同签署确认
    confirmSaveFun() {
      if (!validateSixCode(this.code)) {
        this.$message({
          message: '请输入6位短信验证码',
          type: 'error',
          duration: 1800
        })
        return false
      }
      this.closeAlertFun()
    },
    // 发送验证码
    getCfcaSendSmsFun() {
      if (this.flag) {
        return false
      }
      this.boxLoading = true
      sendSms({
        projectNo: this.form.applyNum
      }).then(response => {
        if (response.success) {
          this.$message({
            message: '发送短信成功',
            type: 'success',
            duration: 1800
          })
          this.verCodeFun()
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
    // 发送验证码  倒计时
    verCodeFun() {
      if (!this.flag) {
        this.flag = true;
        this.setCookie()
        this.timer = setInterval(() => {
          this.second--
          if (this.second < 1) {
            this.second = defSecond;
            this.flag = false;
            clearInterval(this.timer);
          }
        },1000)
      }
    },
    setCookie() {
      Cookies.set('sendCode', new Date().getTime(), { expires: 1/(24*30), path: '' })
    },
    initTime() {
      let _time = Cookies.get("sendCode")

      if (_time) {
        this.flag = true;
        // eslint-disable-next-line radix
        let secTime = parseInt(this.second - (new Date().getTime() - _time) / 1000);
        if (secTime > 0) {
          this.second = secTime
          this.timers = setInterval(() => {
            this.second--
            if (this.second < 1) {
              this.second = defSecond;
              this.flag = false;
              clearInterval(this.timers);
            }
          },1000)
        }
      }
    },
    // 返回 用款管理
    toUsemoney() {
      this.$router.push({ path: '/usemoney' })
    },
    isReadFun(val) {
      this.isRead = val
    },
    // 合同 融资来源、 还款计划 字段过滤
    filterFun(obj, val) {
      let list = [], arr = this.toListFun(obj, val)

      if (val == 'zk') {
        for (let i =0; i<arr.length;i++) {
          list.push({
            source: arr[i].value,
            quota: obj[val +arr[i].index+ '2'],
            percentage: obj[val +arr[i].index+ '3']
          })
        }
      } else if (val == 'hk') {
        for (let i =0; i<arr.length;i++) {
          list.push({
            time: arr[i].value,
            money: obj[val +arr[i].index+ '2']
          })
        }
      }
      return list
    },
    toListFun(obj, val) {
      let arrList = []

      for (let key in obj){
        if (val == 'hk') {
          if (/^hk.*1$/.test(key)) {
            arrList.push({'index': key.replace(/(^hk)|(1$)/g,''), 'name': key, 'value': obj[key]})
          }
        } else if (val == 'zk') {
          if (/^zk.*1$/.test(key)) {
            arrList.push({'index': key.replace(/(^zk)|(1$)/g,''), 'name': key, 'value': obj[key]})
          }
        }

      }
      return arrList
    }
  }
}
</script>

<style lang="less">
  .agreement-box {
    .el-dialog__body {
      padding: 0px;
    }
  }
</style>

<style lang="less" scoped>
  .loanconfirm {
    .box-title {
      padding-left: 10px;
      line-height: 18px;
      font-size: 18px;
      border-left: 4px solid #2f81ff;
    }
  }
</style>
