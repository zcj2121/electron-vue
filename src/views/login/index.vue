<template>
  <div class="login">
    <div class="login-content">
      <img class="login-bg" src="../../assets/img/login_bg_1.jpg" alt="背景">
      <img class="login-bg" src="../../assets/img/login_bg_1.png" alt="背景">
      <div class="login-box" v-loading="loading">
        <div class="login-box-title">账号登录</div>
        <div class="login-box-item">
          <input @keyup="form.username=form.username.replace(/\D/g,'')"
                 class="username"
                 placeholder="手机号"
                 type="text"
                 v-model="form.username"
                 @keyup.enter="Login"
          >
        </div>
        <div class="login-box-item">
          <input class="password"
                 onpaste="return false"
                 placeholder="密码"
                 type="password"
                 v-model="form.passwd"
                 @keyup.enter="Login"
          >
        </div>
        <div class="input-error">
          <transition name="el-fade-in">
            <div v-show="inputError">{{inputError}}</div>
          </transition>
        </div>
        <el-button @click="Login" class="login-btn" type="primary">登录</el-button>
        <div class="login-info">
          <span class="fl"><a @click="toForgetFun">忘记密码</a></span>
          <span class="fr">还无账号,<a @click="toRegisterFun">立即注册</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import { login } from '@/api/user'
import { validatePhone, validatePwd } from '@/utils/validate'

export default {
  name: 'login',

  components: {},

  data() {
    return {
      form: {
        username: '',
        passwd: ''
      },
      loading: false,
      inputError: ''
    }
  },

  computed: {},

  watch: {
    'form.username': {
      handler(val) {
        if (!validatePhone(val)) {
          this.inputError = '请输入有效手机号码'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'form.passwd': {
      handler(val) {
        this.form.passwd = val.replace(/\s/g, '')
        if (!validatePwd(val)) {
          this.inputError = '密码须包含6~12位大小写字母、数字'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    }
  },

  created() {
  },

  mounted() {
  },

  destroyed() {
  },

  methods: {
    // 点击 登录
    Login() {
      if (!validatePhone(this.form.username)) {
        this.inputError = '请输入有效手机号码'
        return false
      }
      if (!validatePwd(this.form.passwd)) {
        this.inputError = '密码须包含6~12位大小写字母、数字'
        return false
      }
      this.inputError = ''
      this.loading = true
      // 登录
      login({
        username: this.form.username,
        passwd: md5(this.form.passwd)
      }).then(res => {
        if (res.success) {
          this.$store.commit('SET_INFO', res.data)
          let loginUrl = unescape(window.location.href)
          const isBack = loginUrl.lastIndexOf('?redirect'),
            urlIndex = loginUrl.lastIndexOf('/#/')

          if (isBack < 0) {
            this.$router.push({
              path: '/'
            })
          } else if (urlIndex < 0) {
            this.$router.push({
              path: '/'
            })
          } else {
            loginUrl = loginUrl.substring(urlIndex + 2, loginUrl.length)
            this.$router.push({
              path: loginUrl
            })
          }
          this.loading = false
        } else {
          this.$message({
            message: '账号或密码错误',
            type: 'error',
            duration: 1800
          })
          this.loading = false
        }
      }).catch(() => {
        this.loading = false
      })
    },
    // 前往 忘记密码
    toForgetFun() {
      this.$router.push({
        path: '/forget'
      })
    },
    // 前往 注册
    toRegisterFun() {
      this.$router.push({
        path: '/register',
        query: { 'time': new Date().getTime() }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    height: calc(100% - 60px);
    min-width: 1170px;
    background: #ffffff;

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
    }

    .login-box {
      position: inherit;
      z-index: 1;
      width: 380px;
      padding: 40px 35px 80px;
      margin: auto;
      margin-top: 95px;
      background: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 4px;

      .login-box-title {
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

      .login-box-item {
        position: relative;
        overflow: hidden;
        margin-top: 30px;

        input {
          width: 100%;
          padding: 10px 0px;
          font-size: 16px;
          line-height: 1.5;
          border: none;
          border-bottom: 1px solid #eeeeee;
        }
      }

      .login-btn {
        font-size: 18px !important;
        background: #2f81ff;
        border: 1px solid #2f81ff;
        color: #ffffff !important;
        padding: 10px !important;
        width: 100%;
        height: 46px;
        margin-top: 19px;
      }

      .login-btn:hover,
      .login-btn:active {
        color: #fff !important;
        background: #186ae9;
      }

      .login-info {
        overflow: hidden;
        margin-top: 24px;
        font-size: 13px;
        color: #666;
      }
    }
  }
</style>

