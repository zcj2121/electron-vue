<template>
  <div class="content content-autograph">
    <div class="content-nav">当前位置：
      <router-link :to="{path:'/work'}">工作台</router-link>
      <span> &gt; 数字证书</span>
    </div>
    <div class="content-box">
      <div class="content-item" style="padding: 0px;min-height: 100%;">
        <AutographHeader :autographItem="autographItem" :loading="loading" />
        <AutographContent
          :loading="loading"
          :autographItem="autographItem"
          :addform="addform"
          :form="form"
          :inputError="inputError"
          :isRead="isRead"
          @nextFun="nextFun"
          @isReadFun="isReadFun"
          @agreementFun="agreementFun"
        />
      </div>
    </div>
    <!-- 确认收款信息 模态框 -->
    <el-dialog :title="model.modelTitle" :visible.sync="modalCollectShow" top="30vh" width="450px">
      <div v-loading="boxLoading" style="padding:10px 40px;">
<!--        <div style="color: #2C2C2C; font-size: 18px;text-align: center;">{{model.modelInfo}}</div>-->
        <div style="color: #666666;margin-top: 15px" v-html="model.modelDetail">{{model.modelDetail}}</div>
        <div class="dialog-footer" style="margin-top: 40px;">
          <div class="btn-box">
            <el-button class="btn default-btn" type="default" @click="modalCollectShow = false">取消</el-button>
            <el-button
              class="btn success-btn sub-btn"
              type="primary"
              @click="collectConfirm"
            >确认
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 确认收款信息 模态框 -->
    <!-- 数字证书开通 模态框 -->
    <el-dialog title="提示" class="confirm-result" :visible.sync="modalResultShow" @close="modalResultHide" top="30vh" width="450px">
      <div v-loading="boxLoading" style="padding:10px 50px;">
        <div class="confirm-result-img">
          <img src="../../assets/img/work-result.png" alt="">
        </div>
        <div class="confirm-result-title">数字证书已开通</div>
        <div class="confirm-result-info" style="margin-top: 15px">
          <p>温馨提示</p>
          <p>电签合同时，接收短信验证码的手机号为：<span style="white-space: nowrap;">{{form.customerTel}}</span>。
            <br>如需修改，请联系您的客户经理或平台运营人员。
          </p>
        </div>
      </div>
    </el-dialog>
    <!-- 数字证书开通 模态框 -->
    <!-- 协议 模态框 -->
    <el-dialog
      class="agreement-box"
      :title="agreementTitle"
      top="12vh"
      height="68vh"
      width="750px"
      :lock-scroll="false"
      :visible.sync="modalAgreementShow"
    >
      <div>
        <div class="agreement-box__content" id="agreementBoxContent" v-html="agreementContent">
          {{agreementContent}}
        </div>
      </div>
    </el-dialog>
    <!-- 协议 模态框 -->
  </div>
</template>

<script>
import {
  getBorrower,
  payApply,
  payAuth,
  openAccount,
  getServiceAgreement,
  getAnxinAgreement,
  getPrivacyAgreement } from '@/api/work'
import AutographHeader from '@/views/autograph/components/AutographHeader'
import AutographContent from '@/views/autograph/components/AutographContent'
import { debounce } from '@/utils/validate'
import { moneyFormatter } from '@/filters'

export default {
  name: 'forget',
  components: {
    AutographHeader,
    AutographContent
  },

  data() {
    return {
      autographItem: 1,
      inputError: '',
      loading: false,
      boxLoading: false,
      form: {
        customerName: '',
        idNumber: '',
        accountNo:'',
        bankNo:'',
        customerTel: ''
      },
      addform: {
        money:''
      },
      modalCollectShow: false,
      modalResultShow: false,
      next: null,
      model: {
        modelTitle: '',
        modelInfo: '',
        modelDetail: ''
      },
      isRead: false,
      modalAgreementShow: false,
      agreementTitle: '',
      agreementContent: '',
      isFirst: true
    }
  },

  computed: {},

  watch: {
    'form.accountNo': {
      handler(val) {
        if (!this.isFirst && (val.length < 5 || val.length >30)) {
          this.inputError = '请输入有效的收款账号'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'form.bankNo': {
      handler(val) {
        if (!this.isFirst && !val) {
          this.inputError = '请选择收款银行'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'addform.money': {
      handler(val) {
        if (!this.isFirst && !val) {
          this.inputError = '请输入有效的验证金额'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    isRead: {
      handler(val) {
        if (!val) {
          this.inputError = '请先阅读相关协议并勾选'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    }
  },

  created() {
    // 延迟 输入金额
    this.$watch('addform.money', debounce((val) => {
      this.addform.money = moneyFormatter(val)
    }, 300))
    this._getBorrowerFun()
  },

  mounted() {
  },

  destroyed() {
  },
  beforeDestroy() {
  },
  methods: {
    // 下一步
    nextFun(val) {
      this.isFirst = false
      switch (val) {
      case 2:
        if (this.form.accountNo.length < 5 || this.form.accountNo.length >30) {
          this.inputError = '请输入有效的收款账号'
          return false
        }
        if (!this.form.bankNo) {
          this.inputError = '请选择收款银行'
          return false
        }
        this.model = {
          modelTitle: '确认收款信息',
          modelInfo: '确认提交收款信息？',
          modelDetail: '确认后，将有1元以内随机金额打款至此账户。请回填打款金额'
        }
        this.modalCollectShow = true
        break;
      case 3:
        if (!this.addform.money) {
          this.inputError = '请输入有效的验证金额'
          return false
        }
        this.model = {
          modelTitle: '回填验证金额确认',
          modelInfo: '确认提交验证金额？',
          modelDetail: `<div style="text-align: center">确认验证金额后，将开通数字证书。</div>`
        }
        this.modalCollectShow = true
        break;
      case 4:
        if (!this.isRead) {
          this.inputError = '请先阅读相关协议并勾选'
          return false
        }
        this._confirmOpen()
        break;
      case -1:
      case -2:
        this.autographItem -= 1
        break;
      default:
      }
      this.inputError = ''
    },

    // 收款确认、验证金额确认
    collectConfirm() {
      if (this.form.applyState) {
        this.boxLoading = true
        if (this.form.applyState == 'PAY_APPLY' || this.form.applyState == 'INIT') {
          this._confirmCollect()
        } else {
          this._confirmValidate()
        }
      }
    },

    // 关闭 数字证书开通 模态框
    modalResultHide() {
      const isAutograph = JSON.parse(sessionStorage.getItem('isAutograph')) || ''
      if (!isAutograph) {
        this.modalResultShow = false
        this.$router.push({ path: '/work' })
      } else if (isAutograph == 'contract') {
        this.modalResultShow = false
        this.$router.push({ path: '/contract' })
      } else if (isAutograph == 'userdetail') {
        this.modalResultShow = false
        this.$router.push({ path: '/usermanage/userdetail' })
      }
    },

    // 阅读勾选方法
    isReadFun(val) {
      this.isRead = val
    },

    // 查看协议 方法
    agreementFun(val) {
      this.agreementTitle = val.title
      this.this.agreementContent = ''
      setTimeout(()=> {
        switch(val.type) {
        case 1:
          this.agreementContent = getServiceAgreement()
          break;
        case 2:
          this.agreementContent = getPrivacyAgreement()
          break;
        case 3:
          this.agreementContent = getAnxinAgreement()
          break;
        default:
        }
      },1)
      this.modalAgreementShow = true
      this.$nextTick(()=>{
        let ddev = document.getElementById("agreementBoxContent")
        if (ddev) {
          ddev.scrollTo(0, 0)
        }
      })
    },

    // 确认收款信息 、打款申请 方法
    _confirmCollect() {
      payApply({
        accountNo: this.form.accountNo,
        bankNo: this.form.bankNo
      }).then(response => {
        if (response.success) {
          this.modalCollectShow = false
          this._getBorrowerFun()
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.boxLoading = false
      }).catch(() => {
      })
    },
    // 验证金额方法
    _confirmValidate() {
      payAuth({
        amount: this.addform.money
      }).then(response => {
        if (response.success) {
          this.modalCollectShow = false
          this._getBorrowerFun()
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
          this._getBorrowerFun()
        }
        this.boxLoading = false
      }).catch(() => {
      })
    },
    // 确认开通方法
    _confirmOpen() {
      openAccount().then(response => {
        if (response.success) {
          this.modalResultShow = true
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
      }).catch(() => {
      })
    },
    // 获取数字证书 个人信息
    _getBorrowerFun() {
      this.loading = true
      getBorrower().then(response => {
        if (response.success && response.data) {
          this.form = response.data
          this.autographItem = this._nextFilter(response.data.applyState)
          if (response.data.applyState == 'OPEN_SIGN_SUCCESS' || response.data.applyState == 'END') {
            this.$message({
              message: '您已开通数字证书',
              type: 'error',
              duration: 1800
            })
            this.modalResultHide()
          }
        } else {
          this.form = {
            customerName: '',
            idNumber: '',
            accountNo:'',
            bankNo:'',
            customerTel: ''
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    _nextFilter(status) {
      let backNumber
      if (status == 'PAY_APPLY' || status == 'INIT') {
        backNumber = 1
      } else if (status == 'PAY_AUTH') {
        backNumber = 2
      } else {
        backNumber = 3
      }
      return backNumber
    }
  }
}
</script>

<style lang="less">
  .confirm-result {
    .confirm-result-img {
      text-align: center;
      img {
        width: 52px;
        height: 52px;
      }
    }
    .confirm-result-title {
      margin-top: 10px;
      font-size: 18px;
      text-align: center;
      color: #2c2c2c;
    }
    .confirm-result-info{
      margin-top: 20px;
      color: #2c2c2c;
      p{
        font-weight:500;
        &:last-child{
          margin-top: 10px;
          font-weight:400;
          line-height:24px;
          color: #666666;
        }
      }
    }
  }
</style>

<style lang="less" scoped>
  .content-autograph {
    margin: 0px auto;
    min-width: 970px;
    height: 100%;
    .content-box{
      height: calc(100% - 60px);
    }
    .agreement-box {
      .el-dialog__body {
        padding: 0px;
        color: #2c2c2c;
        .agreement-box__content {
          overflow-y: scroll;
          height: 520px;
          padding: 35px 15px 3vh;
        }
      }
    }
  }
</style>

