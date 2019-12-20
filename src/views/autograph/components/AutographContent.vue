<template>
  <div class="autograph-content" v-loading="loading">
    <div class="autograph-content-box" v-show="!loading">
      <div
        class="autograph-content-item"
        :class="{'active':autographItem >= 1}"
        v-show="autographItem == 1"
      >
        <div class="item-title">第一步：请确认收款信息，验证金额将打款至该收款账号</div>
        <form class="form-autograph-box">
          <div class="form-group">
            <label>企业名称</label>
            <el-input
              class="username"
              :disabled="true"
              v-model="form.customerName"
            >
            </el-input>
          </div>
          <div class="form-group">
            <label>统一社会信用代码</label>
            <el-input
              class="username"
              :disabled="true"
              v-model="form.idNumber"
            >
            </el-input>
          </div>
          <div class="form-group">
            <label>收款账户名称</label>
            <el-input
              class="username"
              :disabled="true"
              v-model="form.customerName"
            >
            </el-input>
          </div>
          <div class="form-group">
            <label>收款账号</label>
            <el-input class="username"
                      placeholder="请输入收款账号"
                      v-model="form.accountNo"
            >
            </el-input>
          </div>
          <div class="form-group no-mb">
            <label>银行名称</label>
            <el-select v-model="form.bankNo" filterable style="width:100%" placeholder="请选择">
              <el-option
                v-for="item in banklist"
                :key="item.id"
                :label="item.text"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="input-error">
            <transition name="el-fade-in">
              <div v-show="inputError">{{inputError}}</div>
            </transition>
          </div>
          <div class="form-group btn-box" style="margin-top: 22px;">
            <el-button
              class="btn success-btn"
              type="primary"
              :loading="false"
              @click="nextFun(2)"
              style="width: 100%;"
            >下一步
            </el-button>
          </div>
        </form>
      </div>

      <div
        class="autograph-content-item"
        :class="{'active':autographItem >= 2}"
        v-show="autographItem == 2"
      >
        <div class="item-title">第二步：请填写验证金额</div>
        <form class="form-autograph-box">
          <div class="form-group">
            <label>账户名称</label>
            <el-input
              class="username"
              :disabled="true"
              v-model="form.customerName"
            >
            </el-input>
          </div>
          <div class="form-group">
            <label>账户号码</label>
            <el-input
              class="username"
              :disabled="true"
              v-model="form.accountNo"
            >
            </el-input>
          </div>
          <div class="form-group no-mb">
            <label>验证金额</label>
            <el-input class="username"
                      placeholder="金额单位为元"
                      v-model="addform.money"
            >
              <template slot="append">元</template>
            </el-input>
          </div>
          <div class="input-error">
            <transition name="el-fade-in">
              <div v-show="inputError">{{inputError}}</div>
            </transition>
          </div>
          <div class="form-group btn-box">
            <!--            <el-button-->
            <!--              class="btn success-btn back-btn next-run"-->
            <!--              type="primary"-->
            <!--              :loading="false"-->
            <!--              @click="nextFun(-2)"-->
            <!--            >上一步-->
            <!--            </el-button>-->
            <el-button
              class="btn success-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(3)"
              style="width: 100%;"
            >下一步
            </el-button>
          </div>
        </form>
      </div>
      <div
        class="autograph-content-item"
        :class="{'active':autographItem >= 3}"
        v-show="autographItem == 3"
      >
        <div class="item-title">第三步：请核对电签合同时接收验证码的手机号并确认开通。</div>
        <form class="form-autograph-box">
          <div class="form-group">
            <label>手机号</label>
            <el-input
              type="text"
              :disabled="true"
              v-model="customerTel"
            >
            </el-input>
          </div>
          <div class="form-group no-mb">
            <div class="form-read-box">
              <label class="checkbox-inline">
                <el-checkbox style="margin-bottom: 0px;" v-model="isread"></el-checkbox>
                <span> 我已阅读并确认</span>
                <a href="javascript:void(0)" @click="agreementFun({type:1, title: 'CFCA数字证书服务协议'})">《CFCA数字证书服务协议》</a>
                <span>、</span>
                <a href="javascript:void(0)" @click="agreementFun({type:2, title: '隐私声明'})">《隐私声明》</a>
                <span>、</span>
                <a href="javascript:void(0)" @click="agreementFun({type:3, title: '安心签平台服务协议'})">《安心签平台服务协议》</a>
                <span>，确认生成数字证书。</span>
              </label>
            </div>
          </div>
          <div class="input-error" style="margin-top: 2px;">
            <transition name="el-fade-in">
              <div v-show="inputError">{{inputError}}</div>
            </transition>
          </div>
          <div class="form-group btn-box">
            <!--            <el-button-->
            <!--              class="btn success-btn back-btn next-run"-->
            <!--              type="primary"-->
            <!--              :loading="false"-->
            <!--              @click="nextFun(-1)"-->
            <!--            >上一步-->
            <!--            </el-button>-->
            <el-button
              class="btn success-btn next-run"
              type="primary"
              :loading="false"
              @click="nextFun(4)"
              style="width: 100%;"
            >确认开通
            </el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getBankList } from '@/api/work'
import { phoneMask } from '@/filters'
export default {
  name: 'AutographContent',
  components: {},
  props: ['autographItem', 'loading', 'form', 'addform' ,'inputError', 'isRead'],
  data() {
    return {
      isread: false,
      banklist: getBankList()
    }
  },
  created() {
  },
  watch: {
    isread() {
      this.$emit("isReadFun", this.isread)
    },
    isRead() {
      this.isread = this.isRead
    }
  },
  computed: {
    customerTel () {
      return this.form.customerTel? phoneMask(this.form.customerTel) : this.form.customerTel
    }
  },
  methods: {
    nextFun(val) {
      this.$emit('nextFun', val)
    },
    agreementFun(val) {
      this.$emit('agreementFun', val)
    }
  }
}
</script>

<style lang="less">
  .form-autograph-box{
    .el-input.is-disabled .el-input__inner{
      color: #666;
      opacity: .7;
    }
  }
</style>

<style lang="less" scoped>
  .autograph-content {
    margin-bottom: 20px;
    .autograph-content-box {
      width: 600px;
      margin: auto;
      margin-top: 45px;
      padding-bottom: 20px;
      .back-btn {
        width: calc(100% - 60px);
      }

      .btn-box {
        margin-top: 20px;
      }

      .success-btn {
        height: 38px;
        width: 100%;
        padding: 9px;
        font-size: 16px;
        line-height: 18px;
      }

      .autograph-content-item {
        .item-title{
          height:28px;
          font-size:20px;
          font-weight:500;
          color:rgba(44,44,44,1);
          line-height:28px;
          text-align: center;
        }
        .form-autograph-box {
          width: 350px;
          margin: auto;
          margin-top: 30px;
          .form-group{
            margin-bottom: 20px;
            .form-read-box{
              margin-bottom: 0px;
              .checkbox-inline{
                margin-bottom: 0px;
                font-size:14px;
                font-weight: 400;
                line-height: 22px;
                color:#666666;
              }
            }
          }
          label {
            font-weight: 500;
            margin-bottom: 8px;
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

