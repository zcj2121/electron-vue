<template>
  <div class="content contractsign">
    <div class="content-nav">
      <span>当前位置：</span>
      <router-link :to="{path:'/work'}">工作台</router-link>
      &gt;
      <router-link :to="{path:'/contract'}">合同管理</router-link>
      &gt;
      合同签署
    </div>
    <div class="content-box">
      <div class="contractsign-box">
        <div class="content-item" style="margin-top: 0px;">
          <div class="box-panel">
            <div class="box-panel-pdf" v-loading="loading" element-loading-text="加载中">
              <iframe class="prism-player" type="application/pdf" :src="src" width="100%" height="100%"  frameborder="0"></iframe>
<!--              <embed class="pdf-view-box" id="pdfView" type="application/pdf" style="overflow: auto; width: 100%; height: 100%;" internalinstanceid="88">-->
            </div>
            <div class="btn-box">
              <el-button
                class="btn default-btn"
                style="width:104px;"
                type="default"
                @click="toContract"
              >返回
              </el-button>
              <el-button
                class="btn success-btn sub-btn"
                style="width:104px;"
                type="primary"
                @click="signConfirmFun"
              >确认签署
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合同签署确认 模态框 -->
    <el-dialog :visible.sync="modalConfirmShow" title="合同签署确认" top="30vh" width="500px">
      <div v-loading="boxLoading">
        <div class="modal-confirm-box">
          <div class="modal-confirm-info">
            <p>本公司 {{messageForm.customerName}} 同意使用本公司的数字证书对以下合同进行电子签名：
              《{{messageForm.contractStr}}》</p>
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
    <el-dialog title="提示" class="confirm-result" :visible.sync="modalResultShow" @close="toContract" top="30vh" width="450px">
      <div v-loading="boxLoading" style="padding:10px 40px;">
        <div class="confirm-result-img">
          <img src="../../assets/img/work-result.png" alt="">
        </div>
        <div class="confirm-result-title" style="text-align: center;line-height:28px;">合同签署成功</div>
        <div class="btn-box" style="margin-top: 35px;margin-bottom: 10px;">
          <el-button
            @click="toContract"
            class="btn success-btn sub-btn"
            type="primary"
            style="width:60%"
          >返回合同管理
          </el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 借款确认提交成功 模态框 -->
  </div>
</template>

<script>
import { downURL } from '@/utils/request'
import { validateSixCode } from '@/utils/validate'
import {
  startSign,
  cfcaSendSms,
  cfcaSmsChecking,
  selectFactoringAgreementMessage
} from '@/api/contract'
import Cookies from 'js-cookie'

const defSecond = 120
export default {
  name: 'contractsign',
  components: {
  },
  data() {
    return {
      loading: false, // 加载动画
      boxLoading: false, // 加载动画
      modalConfirmShow: false,
      modalResultShow: false,
      code: null,
      src: null,
      downrul: downURL(),
      second: JSON.parse(JSON.stringify(defSecond)),
      flag: false,
      form: {
        halfStorageUrl: '',
        contractNum: ''
      },
      messageForm: {
        contractStr: '',
        customerName: '',
        customerTel: ''
      },
      customerNumber: ''
    }
  },

  computed: {},

  watch: {

  },

  created() {
    this.initTime()
    const contractsign = JSON.parse(sessionStorage.getItem('contractsign'))
    if (!contractsign || !contractsign.contractNum) {
      this.$router.back(-1)
      return false
    }
    this.form = contractsign
    this.getDate()
  },

  mounted() {
    this._getMessageFun()
  },

  destroyed() {
  },

  beforeDestroy() {
  },

  methods: {
    getDate() {
      this.loading = true
      startSign({
        contractNum: this.form.contractNum,
        halfStorageUrl: this.form.halfStorageUrl
      }).then(response => {
        if (response && response.success == false) {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        } else {
          let blob = new Blob([response], { type: 'application/pdf' })
          let url = window.URL.createObjectURL(blob)
          this.src = `/static/pdf/web/viewer.html?file=${encodeURIComponent(url)}`
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    signConfirmFun() {
      if (!this.flag) {
        this.getCfcaSendSmsFun()
      } else {
        this.verCodeFun()
      }
      this.code = ''
      this.modalConfirmShow = true
    },
    // 发送验证码
    getCfcaSendSmsFun() {
      if (this.flag) {
        return false
      }
      this.boxLoading = true
      cfcaSendSms({
        contractNum: this.form.contractNum
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
        this.timer1 = setInterval(() => {
          this.second--
          if (this.second < 1) {
            this.second = defSecond;
            this.flag = false;
            clearInterval(this.timer1);
          }
        },1000)
      }
    },
    setCookie() {
      Cookies.set('sendCodes', new Date().getTime(), { expires: 1/(24*30), path: '' })
    },
    initTime() {
      let _time = Cookies.get("sendCodes")
      if (_time) {
        this.flag = true;
        // eslint-disable-next-line radix
        let secTime = parseInt(
          this.second - (new Date().getTime() - _time) / 1000
        );
        if (secTime > 0) {
          this.second = secTime
          this.timers1 = setInterval(() => {
            this.second--
            if (this.second < 1) {
              this.second = defSecond;
              this.flag = false;
              clearInterval(this.timers1);
            }
          },1000)
        }
      }
    },
    // 获取 签署信息
    _getMessageFun() {
      selectFactoringAgreementMessage({
        contractNum: this.form.contractNum
      }).then(response => {
        if (response.success && response.data) {
          this.messageForm = response.data
        } else {
          this.messageForm= {
            contractStr: '',
            customerName: '',
            customerTel: ''
          }
        }
      }).catch(() => {
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
      this._confirmSubmitFun()
    },
    // 确认 合同签署确认 方法
    _confirmSubmitFun() {
      this.boxLoading = true
      cfcaSmsChecking({
        contractNum: this.form.contractNum,
        checkCode: this.code
      }).then(response => {
        if (response.success) {
          this.modalConfirmShow = false
          this.modalResultShow = true
          Cookies.remove('sendCodes')
          clearInterval(this.timer1)
          clearInterval(this.timers1)
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
    // 返回 用款管理
    toContract() {
      this.$router.push({ path: '/contract' })
    }
  }
}
</script>

<style lang="less">
  .contractsign {
    .search-box {
      overflow: hidden;

      .el-form-item {
        float: left;
        width: 32%;
        padding-left: 10px;
        margin-bottom: 22px;
        &:nth-child(3),
        &:nth-child(4) {
          margin-bottom: 10px;
        }
        &:nth-child(1) {
          width: 65%;
        }
      }

      .el-form-item__content {
        width: calc(100% - 100px);
      }

      .el-form-item.pl-10 {
        padding-left: 10px;
      }

      .el-form-item__label {
        text-align: justify;
        text-align-last: justify;
      }
    }
  }
</style>

<style lang="less" scoped>
  .contractsign {
    .content-box {
      overflow: hidden;
      .contractsign-box {
        width: 100%;

        .content-item {
          position: relative;
          padding: 30px;
          .box-panel {
            overflow: hidden;
            width: 700px;
            margin: auto;
            margin-top: 0px;
            border:1px solid rgba(204,204,204,1);
            .box-panel-pdf{
              width: 100%;
              height: 640px;
              padding: 10px;
            }
            .btn-box{
              padding: 16px;
              background:rgba(247,247,247,1);
              border-top:1px solid rgba(204,204,204,1);
            }
          }
        }
      }
    }
  }
</style>

