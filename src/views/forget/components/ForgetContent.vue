<template>
  <div class="forget-content">
    <div class="forget-content-box" v-loading="loading">
      <div
        class="forget-content-item"
        :class="{'active':forgetItem >= 1}"
        v-show="forgetItem == 1"
      >
        <form class="form-forget-box">
          <div class="form-group no-mb">
            <label>手机号</label>
            <el-input class="username"
                      placeholder="请输入手机号"
                      v-model="form.phone"
                      @keyup="form.phone=form.phone.replace(/\D/g,'')"
            >
            </el-input>
          </div>
          <div class="input-error">
            <transition name="el-fade-in">
              <div v-show="inputError">{{inputError}}</div>
            </transition>
          </div>
          <div class="form-group btn-box" style="margin-top: 20px;">
            <el-button
              class="btn success-btn back-btn next-run"
              type="primary"
              :loading="false"
              @click="backLoginFun"
            >返回登录
            </el-button>
            <el-button
              class="btn success-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(2)"
              style="width: 65%;"
            >下一步
            </el-button>
          </div>
        </form>
      </div>

      <div
        class="forget-content-item"
        :class="{'active':forgetItem >= 2}"
        v-show="forgetItem == 2"
      >
        <form class="form-forget-box">
          <div class="form-group no-mb">
            <label>手机号</label>
            <div class="text-def-box username-text">
              {{form.phone | mobilePhoneMask}}
            </div>
          </div>
          <div class="form-group">
            <label>图片验证码</label>
            <el-input class="username"
                      placeholder="请输入图片验证码"
                      v-model="form.imgcode"
                      @keyup="form.imgcode=form.imgcode.replace(/[\W]/g,'')"
            >
              <template slot="append">
                <div @click="getImgCode" class="form-code-img">
                  <img :src="imgCode" alt="">
                </div>
              </template>
            </el-input>
          </div>
          <div class="form-group no-mb">
            <label>验证码</label>
            <div class="input-code-box btn-box">
              <el-input class="username"
                        placeholder="请输入短信验证码"
                        v-model="form.xincode"
                        @keyup="form.xincode=form.xincode.replace(/\D/g,'')"
              >
                <el-button class="code-phone-btn"
                           slot="append" :loading="false"
                           @click="verCodeFun"
                           :style="{color: !validCode ? '#909399' : '#2f81ff'}"
                           :disabled="!validCode">{{verCodeName}}</el-button>
              </el-input>
            </div>
          </div>
          <div class="input-error">
            <transition name="el-fade-in">
              <div v-show="inputError">{{inputError}}</div>
            </transition>
          </div>
          <div class="form-group btn-box">
            <el-button
              class="btn success-btn back-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(-2)"
            >上一步
            </el-button>
            <el-button
              class="btn success-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(3)"
              style="width: 65%;"
            >下一步
            </el-button>
          </div>
        </form>
      </div>
      <div
        class="forget-content-item"
        :class="{'active':forgetItem >= 3}"
        v-show="forgetItem == 3"
      >
        <form class="form-forget-box">
          <div class="form-group">
            <label>设置新密码</label>
            <el-input type="password"
                      class="password"
                      placeholder="6~12位,包含大小写字母、数字"
                      v-model="form.password"
            >
            </el-input>
          </div>
          <div class="form-group no-mb">
            <label>确认新密码</label>
            <el-input
              type="password"
              v-model="form.conpassword"
              class="confirmpassword"
              placeholder="请再次确认密码"
            ></el-input>
          </div>
          <div class="input-error">
            <transition name="el-fade-in">
              <div v-show="inputError">{{inputError}}</div>
            </transition>
          </div>
          <div class="form-group btn-box">
            <el-button
              class="btn success-btn back-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(-1)"
            >上一步
            </el-button>
            <el-button
              class="btn success-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(4)"
              style="width: 65%;"
            >提交
            </el-button>
          </div>
        </form>
      </div>
      <div
        class="forget-content-item"
        :class="{'active':forgetItem >= 4}"
        v-show="forgetItem == 4"
      >
        <form class="form-forget-box">
          <div class="success-forget-box">
            <img src="../../../assets/img/success.png" alt="修改成功">
            <div class="success-forget-text">恭喜您，密码修改成功!</div>
          </div>
          <div class="form-group btn-box">
            <el-button
              class="btn success-btn next-run"
              type="primary"
              :loading="false"
              @click="backLoginFun"
            >返回登录
            </el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetContent',
  components: {},
  props: ['forgetItem', 'loading', 'form', 'inputError', 'validCode', 'imgCode', 'verCodeName'],
  data() {
    return {}
  },

  methods: {
    backLoginFun(val) {
      this.$emit('backLoginFun', val)
    },
    nextFun(val) {
      this.$emit('nextFun', val)
    },
    getImgCode(val) {
      this.$emit('getImgCode', val)
    },
    verCodeFun(val) {
      this.$emit('verCodeFun', val)
    }
  }
}
</script>

<style lang="less">
  .forget-content{
    .forget-content-box{
      .el-input-group__append{
        padding: 0px;
        overflow: hidden;
        .form-code-img{
          cursor: pointer;
          width: 80px;
          height: 38px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .code-phone-btn {
          margin: 0 !important;
          width: 104px !important;
          padding: 0px !important;
          height: 38px;
          &:hover{
            background: none;
          }
        }
      }
    }

  }

</style>

<style lang="less" scoped>
  .forget-content {
    .forget-content-box {
      width: 350px;
      margin: auto;
      margin-top: 40px;

      .back-btn {
        width: calc(100% - 60px);
      }

      .btn-box {
        margin-top: 20px;
      }

      .success-btn {
        height: 42px;
        width: 100%;
        padding: 9px;
        font-size: 16px;
      }

      .forget-content-item {
        .form-forget-box {
          label {
            font-weight: 400;
            margin-bottom: 5px;
            color: #2c2c2c;
          }

          .no-mb {
            margin-bottom: 0px;
          }

          .form-control {
            height: 40px;
          }

          .input-error {
            margin-top: 5px;
            padding-left: 4px;
          }

          .input-code-box {
            overflow: hidden;
            margin-top: 0px;

            .code-img {
              float: left;
              overflow: hidden;
              height: 40px;
              width: 94px;
              margin: 0 14px;
              border: 1px solid #ccc;
              border-radius: 4px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .code-btn {
              float: left;
              padding: 10px 0;
              cursor: pointer;
            }

            .code-input {
              float: left;
              width: 185px;
            }

            .success-btn {
              float: left;
              height: 40px;
              width: 124px;
              text-align: center;
            }
          }

          .ver-input {
            float: left;
            width: 210px;
          }

          .input-code-box-validate {
            height: 44px;
            border: 1px solid #ccc;
            border-radius: 4px;

            .validate-box {
              width: calc(100% + 2px);
              margin-left: -1px;
              margin-top: -1px;
            }
          }

          .text-def-box {
            height: 40px;
            padding-top: 6px;
            font-size: 16px;
          }

          .success-forget-box {
            padding: 38px 0 20px;
            text-align: center;

            img {
              width: 50px;
              height: auto;
              text-align: center;
            }

            .success-forget-text {
              margin-top: 24px;
              font-size: 20px;
              text-align: center;
            }
          }
        }

        &:first-child {
          display: block;
        }
      }
    }
  }
  .back-btn {
    width: calc(35% - 15px) !important;
  }
</style>
