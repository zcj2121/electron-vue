<template>
  <div class="content content-forget">
    <div class="content-nav">当前位置：商户忘记密码</div>
    <div class="content-box forget-box">
      <div class="content-item" style="padding: 0px;height: 100%;">
        <ForgetHeader :forgetItem="forgetItem" />
        <ForgetContent
          :loading="loading"
          :forgetItem="forgetItem"
          :form="form"
          :inputError="inputError"
          :validCode="validCode"
          :imgCode="imgCode"
          :verCodeName="verCodeName"
          @backLoginFun="backLoginFun"
          @nextFun="nextFun"
          @getImgCode="getImgCode"
          @verCodeFun="verCodeFun"
        />
      </div>
    </div>
  </div>
</template>

<script>

import md5 from 'js-md5'
import { downURL } from '@/utils/request'
import ForgetHeader from '@/views/forget/components/ForgetHeader'
import ForgetContent from '@/views/forget/components/ForgetContent'
import { validatePwd, validatePhone, validateFourCode } from '@/utils/validate'
import { checkPhone, sendSmsVerificationCode, checkPhoneVerifyCode, resetPassword } from '@/api/user'

export default {
  name: 'forget',
  components: {
    ForgetHeader,
    ForgetContent
  },

  data() {
    return {
      inputError: '',
      forgetItem: 1,
      loading: false,
      validCode: true,
      verCodeName: '获取验证码',
      form: {
        phone: '',
        xincode: '',
        imgcode: '',
        password: '',
        conpassword: ''
      },
      imgCode: null
    }
  },

  computed: {},

  watch: {
    'form.phone': {
      handler(val) {
        if (!validatePhone(val)) {
          this.inputError = '请输入有效手机号码'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'form.imgcode': {
      handler(val) {
        this.form.imgcode = val.replace(/[\W]/g, '')
        if (!validateFourCode(val)) {
          this.inputError = '请输入4位图片验证码'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'form.xincode': {
      handler(val) {
        if (val.length != 6) {
          this.inputError = '请输入6位有效短信验证码'
          return false
        }
        this.inputError = ''

      },
      deep: true
    },
    'form.password': {
      handler(val) {
        this.form.password = val.replace(/\s/g, '')
        if (!validatePwd(val)) {
          this.inputError = '密码须包含6~12位大小写字母、数字'
        } else if (this.form.password != this.form.conpassword) {
          this.inputError = '两次密码输入不一致'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'form.conpassword': {
      handler(val) {
        this.form.conpassword = val.replace(/\s/g, '')
        if (!validatePwd(val)) {
          this.inputError = '密码须包含6~12位大小写字母、数字'
        } else if (this.form.password != this.form.conpassword) {
          this.inputError = '两次密码输入不一致'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    }
  },

  created() {
    this.getImgCode()
  },

  mounted() {
  },

  destroyed() {
  },
  beforeDestroy() {
    clearInterval(this._inter)
  },
  methods: {
    // 获取图片验证码
    getImgCode() {
      this.imgCode = downURL() + '/user/visit/getCode?time=' + (new Date()).getTime()
    },
    // 点击 下一步
    nextFun(val) {
      if (val == 2) {
        if (!validatePhone(this.form.phone)) {
          this.inputError = '请输入有效手机号码'
          return false
        }
        this.getImgCode()
        this.inputError = ''
        this.loading = true
        // 是否 可注册
        checkPhone({
          customerTel: this.form.phone,
          sendType: 'RESET'
        }).then((response) => {
          if (!response.success) {
            this.$message({
              message: response.returnMessage,
              type: 'error',
              duration: 1800
            })
          } else {
            this.forgetItem = val
          }
          this.loading = false
        }).catch(() => {
          this.loading = false
          return false
        })
      } else if (val == 3) {
        if (this.form.xincode.length != 6) {
          this.inputError = '请输入6位有效短信验证码'
          return false
        }
        this.loading = true
        this.inputError = ''
        // 短信验证码 是否正确
        checkPhoneVerifyCode({
          customerTel: this.form.phone,
          phoneVerifyCode: this.form.xincode
        }).then((response) => {
          if (!response.success) {
            this.$message({
              message: response.returnMessage,
              type: 'error',
              duration: 1800
            })
          } else {
            this.inputError = ''
            clearInterval(this._inter)
            this.forgetItem = val
          }
          this.loading = false
        }).catch(() => {
          this.loading = false
          return false
        })

      } else if (val == 4) {
        if (
          !validatePwd(this.form.password) ||
            !validatePwd(this.form.conpassword)
        ) {
          this.inputError = '密码须包含6~12位大小写字母、数字'
          return false
        }
        if (this.form.password != this.form.conpassword) {
          this.inputError = '两次密码输入不一致'
          return false
        }
        // 重置密码
        resetPassword({
          customerTel: this.form.phone,
          loginPwd: md5(this.form.password),
          phoneVerifyCode: this.form.xincode
        }).then((response) => {
          if (!response.success) {
            this.$message({
              message: response.returnMessage,
              type: 'error',
              duration: 1800
            })
          } else {
            this.inputError = ''
            this.forgetItem = val
          }
          this.loading = false
        }).catch(() => {
          this.loading = false
          return false
        })
      } else if (val == -1) {
        this.getImgCode()
        this.inputError = ''
        this.form.xincode = ''
        clearInterval(this._inter)
        this.verCodeName = '获取验证码'
        this.validCode = true
        this.forgetItem = 2
        this.form.password = ''
        this.form.conpassword = ''
        setTimeout(() => {
          this.inputError = ''
        },1)
      } else if (val == -2) {
        this.inputError = ''
        this.forgetItem = 1
        this.form.xincode = ''
        this.form.imgcode = ''
        clearInterval(this._inter)
        this.verCodeName = '获取验证码'
        this.validCode = true
        setTimeout(() => {
          this.inputError = ''
        },1)
      }
    },
    // 获取验证码
    verCodeFun() {
      if (!validatePhone(this.form.phone)) {
        this.inputError = '请输入有效手机号码'
        return false
      }
      if (!validateFourCode(this.form.imgcode)) {
        this.inputError = '请输入4位图片验证码'
        return false
      }
      let time = 59

      this.loading = true
      // 发送短信
      sendSmsVerificationCode({
        customerTel: this.form.phone,
        luotestResponse: this.form.imgcode,
        sendType: 'RESET'
      }).then((response) => {
        if (response.success) {
          if (this.validCode) {
            this.$message({
              message: '短信验证码发送成功',
              type: 'success',
              duration: 1800
            })
            this.validCode = false
            this.verCodeName = time + '秒'
            this._inter = setInterval(() => {
              time--
              this.verCodeName = time + '秒'
              if (time == 0) {
                this.getImgCode()
                clearInterval(this._inter)
                this.verCodeName = '重新获取'
                this.validCode = true
              }
            }, 1000)
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
        return false
      })
    },
    // 返回登录
    backLoginFun() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
  .content-forget{
    height:calc(100% - 60px);
    .forget-box {
      height: calc(100% - 60px);
      margin-bottom: 0px;
    }
  }
</style>
