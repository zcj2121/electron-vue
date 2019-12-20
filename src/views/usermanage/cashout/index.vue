<template>
  <UsermanageNav>
  <div class="cashout">
    <div class="content-box">
      <div class="cashout-box" v-loading.fullscreen.lock="loading">
        <div class="content-item">
          <div class="box-title">提现申请</div>
          <div class="box-panel" style="margin-top: 25px;">
            <div class="whitelist-form-box">
              <el-form
                :inline="true"
                :model="form"
                class="demo-form-inline"
                size="medium"
                label-position="left"
                label-width="130px"
              >
<!--                <el-form-item class="form-item-required" label="提现申请编号:" style="width:100%;margin-bottom: 0px;">-->
<!--                  TA201910100001-->
<!--                </el-form-item>-->
                <el-form-item class="form-item-required" label="提现类型:" style="width:100%;margin-bottom: 0px;">
                  <el-radio-group v-model="form.type">
                    <el-radio label="ACS_TRANS">提现至易宝</el-radio>
                    <el-radio label="BANK_TRANS">提现至银行账户</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item class="form-item-required" label="出账账户:">
                  <el-select
                    v-model="form.czzh"
                    value-key="accountNo"
                    style="width:260px;"
                  >
                    <el-option label="请选择" value=""></el-option>
                    <el-option
                      v-for="(item,index) in outOptions"
                      :key="index" :value="item"
                      :label="item.bankCardNo | afterFourMask('',item.bankName)"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="可用余额:">
                  {{form.kyye | NumFormat}}元
                </el-form-item>
                <el-form-item v-show="form.type=='BANK_TRANS'" class="form-item-required" label="入账银行账户:">
                  <el-select v-model="form.rzzh" style="width:260px;">
                    <el-option label="请选择" value=""></el-option>
                    <el-option
                      v-for="(item,index) in inOptions"
                      :key="index"
                      :value="item.accountNo"
                      :label="item.accountNo"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-show="form.type=='ACS_TRANS'" class="form-item-required" label="入账易宝商编:">
                  <el-select v-model="form.ybsb" style="width:260px;">
                    <el-option label="请选择" value=""></el-option>
                    <el-option
                      v-for="(item,index) in customerNumberOptions"
                      :key="index"
                      :value="item.yeepayId"
                      :label="item.yeepayId +'-'+item.customerName"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="form-item-required" label="提现金额:">
                  <el-input v-model="form.txje" placeholder="请输入提现金额" style="width:260px;"></el-input>
                </el-form-item>
                <el-form-item v-show="form.type=='BANK_TRANS'" label="账户名称:" style="width:100%;margin-bottom: 0px;">
                  {{inOptionsFun(form.rzzh, 'accountName')}}
                </el-form-item>
                <el-form-item v-show="form.type=='BANK_TRANS'" label="所属银行:" style="width:100%;margin-bottom: 0px;">
                  {{inOptionsFun(form.rzzh, 'bankName')}}
                </el-form-item>
                <el-form-item class="width-lgger" label="" style="width:100%;    margin-top: 7px;">
                  <div class="btn-box" style="margin-top:30px;">
                    <el-button
                      class="btn default-btn"
                      type="default"
                      @click="toUserdetail"
                    >取消
                    </el-button>
                    <el-button
                      class="btn success-btn sub-btn"
                      type="primary"
                      @click="subCashoutApplyFun"
                    >确认
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
            <div class="cashout-info">
              <div class="cashout-info-title">温馨提示：</div>
              <div>
                <p>1. 提现至浦发银行账户，单笔提现0元；</p>
                <p>2. 提现至其他银行账户，单笔提现手续费参看下表。手续费由银行在T+1月的5日统一时间进行扣取（T为交易发生月）；</p>
                <table>
                  <tr>
                    <td>0-1万元（含）</td>
                    <td>5元</td>
                  </tr>
                  <tr>
                    <td>1万元-10万元（含）</td>
                    <td>10元</td>
                  </tr>
                  <tr>
                    <td>10万元-50万元（含）</td>
                    <td>15元</td>
                  </tr>
                  <tr>
                    <td>50万元-100万元（含）</td>
                    <td>20元</td>
                  </tr>
                  <tr>
                    <td>100万元以上</td>
                    <td>汇划金额的0.02‰，最高不超过200元</td>
                  </tr>
                </table>
                <p style="margin-top: 5px;">3. 提现手续费明细文件T+1月更新，可登录系统查看。</p>
                <p>4. 注节假日跨行提现金额小于50万可实时到账。大于50万以到账真实时间为准。</p>
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
import {
  selectWthdrawBorrowerAccount,
  selectWhiteListByCustomerNo,
  selectBorrowerAccountBalance,
  getBusinessUsableInfoByCustomerNumber,
  withdrawApply
} from '@/api/usermanage'
import { debounce } from '@/utils/validate'
import { moneyFormatter } from '@/filters'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'cashout',
  components: {
    UsermanageNav
  },
  data() {
    return {
      loading: false,
      form: {
        type: 'ACS_TRANS',
        czzh: '',
        kyye: 0,
        txje: '',
        rzzh: '',
        ybsb: ''
      },
      customerNumberOptions: [],
      outOptions: [],
      inOptions: []
    }
  },

  computed: {},

  watch: {
    // 监听 出账账户
    'form.czzh': {
      handler(val) {
        if (val) {
          this._useAccountFun()
        } else {
          this.form.kyye = ''
        }
      },
      deep: true
    }
  },

  created() {
    // 延迟 输入金额 请求 还款计划
    this.$watch('form.txje', debounce((val) => {
      this.form.txje = moneyFormatter(val)
      if (parseFloat(val) > parseFloat(this.form.kyye)) {
        this.form.txje = ''
        this.$message({
          message: '请输入不大于可用余额的有效金额',
          type: 'error',
          duration: 1800
        })
      }
    }, 600))
  },

  mounted() {
    this._outAccountFun()
    this._inAccountFun()
    this._customerNumberFun()
  },

  destroyed() {
  },

  methods: {
    // 获取 出账账户 列表
    _outAccountFun() {
      this.loading = true
      selectWthdrawBorrowerAccount().then(response => {
        if (response.success) {
          if (response.data) {
            this.outOptions = response.data
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 获取 入账账户 列表
    _inAccountFun() {
      this.loading = true
      selectWhiteListByCustomerNo().then(response => {
        if (response.success) {
          if (response.data) {
            this.inOptions = response.data
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 获取 易宝商编 列表
    _customerNumberFun() {
      this.loading = true
      getBusinessUsableInfoByCustomerNumber().then(response => {
        if (response.success) {
          if (response.data) {
            this.customerNumberOptions = response.data
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 获取 可用金额
    _useAccountFun() {
      this.loading = true
      selectBorrowerAccountBalance({
        accountNo: this.form.czzh.accountNo
      }).then(response => {
        if (response.success) {
          this.form.kyye = response.data
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 提交 提现申请
    subCashoutApplyFun() {
      if (!this.form.czzh) {
        this.$message({
          message: '请选择出账账户',
          type: 'error',
          duration: 1800
        })
        return false
      }

      if (!parseFloat(this.form.txje)) {
        this.$message({
          message: '请输入有效提现金额',
          type: 'error',
          duration: 1800
        })
        return false
      }
      if (!this.form.rzzh && this.form.type == 'BANK_TRANS') {
        this.$message({
          message: '请选择入账账户',
          type: 'error',
          duration: 1800
        })
        return false
      }
      if (!this.form.ybsb && this.form.type == 'ACS_TRANS') {
        this.$message({
          message: '请选择入账易宝商编',
          type: 'error',
          duration: 1800
        })
        return false
      }
      this.loading = true
      withdrawApply({
        withdrawType: this.form.type,
        outerAccountNum: this.form.czzh.bankCardNo,
        inerAccountNum: this.form.type == 'BANK_TRANS' ? this.form.rzzh : '',
        yeepayId: this.form.type == 'ACS_TRANS' ? this.form.ybsb : '',
        requestAmount: this.form.txje
      }).then((response) => {
        if (response.success) {
          this.$message({
            message: '申请成功',
            type: 'success',
            duration: 1800
          })
          this.$router.push({ path: '/usermanage/userdetail' })
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
    // 取消 返回 账户中心
    toUserdetail() {
      this.$router.push({ path: '/usermanage/userdetail' })
    },
    inOptionsFun(num,type) {
      let n = null

      for (let val of this.inOptions) {
        if (val&&val.accountNo == num) {
          n = val
        }
      }
      return n ? n[type] : n
    }
  }
}
</script>

<style lang="less">
  .cashout {
    .whitelist-form-box {
      overflow: hidden;

      .el-form-item {
        overflow: hidden;
        float: left;
        width: 48.5%;
        padding-left: 10px;
        margin-bottom: 10px;
      }

      .el-form-item__content {
        width: calc(100% - 180px);
        color: #606266;
      }

      .width-lgger {
        .el-form-item__content {
          width: 100%;
        }
      }

      .el-form-item__label {
        margin-bottom: 12px;
        position: relative;
        text-align-last: auto;
        text-align: right;
      }
    }
  }
</style>

<style lang="less" scoped>
  .cashout {
    .content-box {
      overflow: hidden;
    }

    .cashout-box {
      float: none;
      width: 100%;

      .content-item {
        position: relative;
        padding: 25px 20px;

        .box-title {
          height: 16px;
          padding-left: 10px;
          line-height: 18px;
          font-size: 18px;
          border-left: 4px solid #2f81ff;

        }

        .cashout-info {
          margin-top: 15px;
          padding: 15px;
          font-size: 12px;
          line-height: 1.8;
          color: #606266;
          border-top: 1px solid #F5F5F5;

          .cashout-info-title {
            font-size: 14px;
            margin-bottom: 5px;
            color: #f94f4d;
          }

          table {
            width: 400px;
            margin-left: 1em;
            font-size: 12px;
            color: #606266;
            border-collapse: collapse;

            tr {
              td {
                padding: 4px 6px;
                line-height: 20px;
                border: 1px solid #ebeef5;

              }

              th {
                border: 1px solid #ebeef5;
              }
            }
          }
        }
      }
    }
  }
</style>
