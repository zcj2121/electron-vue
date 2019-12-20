<template>
  <div class="register">
    <div class="login-content">
      <img class="login-bg" src="../../assets/img/login_bg_1.jpg" alt="背景">
      <img class="login-bg" src="../../assets/img/login_bg_1.png" alt="背景">
      <div class="register-box" v-loading="loading">
        <div class="register-box-title">
          <span>注册</span>
          <el-popover
            ref="popoverReg"
            placement="right"
            title
            width="220"
            trigger="hover"
            content="商户需通过和质量化入网审核,才可通过注册。"
          >
            <img src="../../assets/img/problem.png" slot="reference" alt="提示">
          </el-popover>
        </div>
        <div class="register-box-item" style="margin-top: 8px;">
          <input type="text"
                 class="username"
                 placeholder="请输入手机号"
                 v-model="form.phone"
                 @keyup="form.phone=form.phone.replace(/\D/g,'')"
          >
        </div>
        <div class="register-box-item">
          <input
            type="password"
            v-model="form.password"
            class="password"
            placeholder="请设置密码,6~12位,包含大小写字母、数字"
          >
        </div>
        <div class="register-box-item">
          <input class="code"
                 placeholder="请输入图片验证码"
                 v-model="form.imgcode"
                 @keyup="form.imgcode=form.imgcode.replace(/[\W]/g,'')"
          >
          <div class="ver-code ver-code-img" @click="getCodeFun">
            <img :src="imgCode" alt="">
          </div>

        </div>
        <div class="register-box-item">
          <input class="code"
                 placeholder="请输入短信验证码"
                 v-model="form.code"
                 @keyup="form.code=form.code.replace(/\D/g,'')"
          >
          <el-button class="ver-code"
                     :disabled="!validCode"
                     @click="verCodeFun">{{verCodeName}}
          </el-button>
        </div>
        <div class="input-error">
          <transition name="el-fade-in">
            <div v-show="inputError">{{inputError}}</div>
          </transition>
        </div>
        <el-button type="primary"
                   class="register-btn"
                   style="margin-top: 15px;"
                   @click="formSaveFun">注册
        </el-button>
        <div class="read-box">
          <label class="checkbox-inline">
            <el-checkbox style="margin-bottom: 0px;" v-model="isRead"></el-checkbox>
            <span> 我已阅读并同意</span>
            <a href="javascript:void(0)" @click.stop="modalRegisterFun">《注册协议》</a>
          </label>
          <label class="checkbox-inline fr">
            <span>已有账号,</span>
            <a @click="goLoginFun">立即登录</a>
          </label>
        </div>
      </div>
    </div>

    <!-- 注册协议 模态框 -->
    <el-dialog class="agreement-box"
               title="注册协议"
               top="15vh"
               height="68vh"
               width="750px"
               :lock-scroll="false"
               :visible.sync="modalRegisterShow"
    >
      <div>
        <div class="agreement-box__content" id="getGVRPContent" v-html="getGVRP">
          {{getGVRP}}
        </div>
      </div>
      <div slot="footer" class="btn-box">
        <el-button class="btn success-btn"
                   type="primary"
                   @click="modalRegisterShow = false,isRead = true">我已阅读并同意
        </el-button>
      </div>
    </el-dialog>
    <!-- 注册协议 模态框 -->

  </div>
</template>

<script>
import md5 from 'js-md5'
import { downURL } from '@/utils/request'
import { register, sendSmsVerificationCode, getGVRP, getCode } from '@/api/user'
import { validatePwd, validatePhone, validateSixCode, validateFourCode } from '@/utils/validate'

export default {
  name: 'register',

  components: {},

  data() {
    return {
      form: {
        phone: null,
        password: null,
        imgcode: null,
        code: null
      },
      time: 59,
      isRead: false,
      validCode: true,
      modalRegisterShow: false,
      verCodeName: '获取验证码',
      inputError: '',
      submit: false,
      loading: false,
      imgCode: null,
      getGVRP: ''
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
    'form.password': {
      handler(val) {
        this.form.password = val.replace(/\s/g, '')
        if (!validatePwd(val)) {
          this.inputError = '密码须包含6~12位大小写字母、数字'
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
    'form.code': {
      handler(val) {
        if (!validateSixCode(val)) {
          this.inputError = '请输入6位短信验证码'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'isRead': {
      handler(val) {
        if (!val) {
          this.inputError = '请阅读并勾选《注册协议》'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    }
  },

  created() {
    this.getCodeFun()
  },

  mounted() {
  },

  destroyed() {
  },

  beforeDestroy() {
    clearInterval(this._inter)
  },

  methods: {
    getCodeFun () {
      this.imgCode = downURL() + '/user/visit/getCode?time=' + (new Date()).getTime()
    },
    // 点击 注册协议
    modalRegisterFun() {
      this.getGVRP = ''
      this.getGVRP = getGVRP()
      this.$nextTick(()=>{
        let ddev = document.getElementById("getGVRPContent")
        if (ddev) {
          ddev.scrollTo(0, 0)
        }
      })
      this.modalRegisterShow = true
    },
    // 点击 立即登录
    goLoginFun() {
      this.$router.push({ path: '/login' })
    },
    // 点击 注册
    formSaveFun() {
      if (!validatePhone(this.form.phone)) {
        this.inputError = '请输入有效手机号码'
        return false
      }
      if (!validatePwd(this.form.password)) {
        this.inputError = '密码须包含6~12位大小写字母、数字'
        return false
      }
      if (!validateSixCode(this.form.code)) {
        this.inputError = '请输入6位短信验证码'
        return false
      }
      if (!this.isRead) {
        this.inputError = '请阅读并勾选《注册协议》'
        return false
      }
      this.loading = true
      this.inputError = ''
      // 注册
      register({
        customerTel: this.form.phone,
        loginPwd: md5(this.form.password),
        phoneVerifyCode: this.form.code
      }).then((res) => {
        if (res.success) {
          clearInterval(this.inter)
          this.$store.commit('SET_INFO', res.data)
          this.$router.push({ path: '/' })
        } else {
          this.$message({
            message: res.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 获取验证码
    verCodeFun() {
      if (!validatePhone(this.form.phone)) {
        this.inputError = '请输入有效手机号码'
        return false
      }
      if (!validatePwd(this.form.password)) {
        this.inputError = '密码须包含6~12位大小写字母、数字'
        return false
      }
      if (!validateFourCode(this.form.imgcode)) {
        this.inputError = '请输入4位图片验证码'
        return false
      }
      let time = 59

      this.inputError = ''
      this.loading = true
      // 发送短信
      sendSmsVerificationCode({
        customerTel: this.form.phone,
        luotestResponse: this.form.imgcode,
        sendType: 'REGISTER'
      }).then((res) => {
        if (res.success) {
          if (this.validCode) {
            this.$message({
              message: '短信验证码发送成功',
              type: 'success',
              duration: 1800
            })
            this.validCode = false
            this.verCodeName = time + '秒'
            this.inter = setInterval(() => {
              time--
              this.verCodeName = time + '秒'
              if (time <= 0) {
                this.getCodeFun()
                this.validCode = true
                clearInterval(this.inter)
                this.verCodeName = '重新获取'
              }
            }, 1000)
          }
        } else {
          this.$message({
            message: res.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}

</script>

<style lang="less" scoped>
  .register {
    width: 100%;
    height: calc(100% - 60px);
    min-width: 1170px;
    background: #ffffff;

    .agreement-box {
      .el-dialog__body {
        padding: 0px;

        .agreement-box__content {
          overflow-y: auto;
          height: 55vh;
          padding: 35px 15px 3vh;
        }
      }
    }

    .login-content {
      overflow: hidden;
      position: relative;
      z-index: 0;
      width: 100%;
      height: 560px;
      min-width: 1170px;
      background: #0a0b6b;

      .login-bg {
        position: absolute;
        left: 50%;
        top: 0;
        z-index: 0;
        width: 1920px;
        height: 560px;
        margin-left: -960px;
      }

      .register-box {
        position: inherit;
        z-index: 1;
        width: 380px;
        padding: 30px 35px 26px;
        margin: auto;
        margin-top: 95px;
        border: 1px solid #e6e6e6;
        background: #fff;
        border-radius: 4px;

        .register-box-title {
          font-size: 30px;

          span {
            margin-right: 5px;
          }

          img {
            width: 18px;
            height: auto;
            margin-top: 4px;
            vertical-align: text-top;
            cursor: pointer;
          }
        }

        .register-box-item {
          position: relative;
          overflow: hidden;
          min-height: 44px;
          margin-top: 14px;

          input {
            width: 100%;
            padding: 10px 0px;
            font-size: 16px;
            line-height: 1.5;
            border: none;
            border-bottom: 1px solid #eeeeee;
          }

          .ver-code {
            position: absolute;
            bottom: 11px;
            right: 0px;
            z-index: 1;
            padding: 6px 0px;
            font-size: 16px;
            background: #fff;
            color: #2f81ff;
            cursor: pointer;
            border: none;
            &:hover{
              color: #186ae9;
            }
            &.ver-code-img{
              /*border: 1px solid;*/
              width: 80px;
              height: 30px;
              bottom: 10px;
              text-align: center;
              line-height: 30px;
              padding: 0px;
              background: #efefef;
              img{
                width: 100%;
                height: 100%;
              }
            }

          }

        }

        .register-btn {
          font-size: 18px !important;
          background: #2f81ff;
          border: 1px solid #2f81ff;
          color: #ffffff !important;
          padding: 10px !important;
          width: 100%;
          height: 46px;
          margin-top: 18px;
        }

        .register-btn:hover,
        .register-btn:active {
          color: #fff !important;
          background: #186ae9;
        }

        .read-box {
          margin-top: 12px;
          font-size: 13px;
          color: #666;

          input, span, a {
            vertical-align: middle;
          }

          input {
            margin-top: 2px !important;
          }
        }
      }
    }
  }
</style>

