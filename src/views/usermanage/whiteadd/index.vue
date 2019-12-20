<template>
  <UsermanageNav>
  <div class="whiteadd">
    <div class="content-box">
      <div class="whiteadd-box" v-loading.fullscreen.lock="loading">
        <div class="content-item">
          <div class="box-title">白名单变更申请</div>
          <div class="box-panel" style="margin-top: 25px;">
            <div class="whitelist-form-box">
              <el-form
                :inline="true"
                :model="form"
                class="demo-form-inline"
                size="medium"
                label-position="left"
                label-width="105px"
              >
                <el-form-item class="form-item-required" label="变更:" style="width:100%;margin-bottom: 10px;">
                  <el-radio-group v-model="form.type">
                    <el-radio label="ADD">新增</el-radio>
                    <el-radio label="DEL">删除</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item class="form-item-required" label="白名单账户:">
                  <el-input v-model="form.bgzhh" placeholder="请输入账户号" @blur="blurFun('blur')"></el-input>
                </el-form-item>
                <el-form-item class="form-item-required" label="户名:">
                  <el-input v-model="form.name" placeholder="请输入户名"></el-input>
                </el-form-item>
                <el-form-item class="form-item-required" label="证件类型:">
                  <el-select v-model="form.cardType" placeholder="请选择证件类型" style="width:100%;">
                    <el-option label="请选择" value=""></el-option>
                    <el-option label="统一社会信用代码" value="UNIFIED_CODE"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="form-item-required" label="证件号码:">
                  <el-input v-model="form.card" :maxlength="18" placeholder="请输入证件号码"></el-input>
                </el-form-item>
                <el-form-item class="form-item-required" label="所属银行:">
                  <el-input v-model="form.bank" placeholder="请输入所属银行"></el-input>
                </el-form-item>
                <el-form-item class="form-item-required" label="网点名称:">
                  <el-autocomplete
                    v-model="form.ssfh"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入网点名称"
                    style="width: 100%;"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item class="form-item-required width-lg" label="变更原因:" style="width:100%;">
                  <el-input
                    type="textarea"
                    style="width:100%;"
                    :maxlength="200"
                    :autosize="{ minRows: 4, maxRows: 8}"
                    v-model="form.reason"
                    placeholder="限200字以内"
                  ></el-input>
                </el-form-item>
                <el-form-item class="form-item-required" label="变更申请单:" style="width:100%;margin-top: 4px;">
                  <div class="whiteadd-upload-box">
                    <div class="upload-box-item" @click="imgUp">
                      <img class="upload-box-img" v-if="changeImg" :src="changeImg" alt="变更申请单">
                      <div class="upload-box-btn">
                        <img src="../../../assets/img/drawlist-upload-img.png" alt="变更申请单">
                        <span>{{changeImg ? "重新上传" : "点击上传"}}</span>
                      </div>
                      <input
                        class="file"
                        ref="changePic"
                        name="file"
                        type="file"
                        accept="image/jpg,image/jpeg,image/png"
                        @change="imgChange"
                        style="display: none"/>
                    </div>
                    <div class="upload-box-item" style="margin-left: 24px;" v-img-show:img="123">
                      <img class="upload-box-img" src="../../../assets/img/drawlist-upload-img-demo.png" alt="示例图">
                      <div class="upload-box-btn">
                        <span class="example-title">点击查看示例图</span>
                      </div>
                    </div>
                    <div class="upload-box-info">
                      <div class="upload-box-info-title">
                        <span>示例图</span>
                      </div>
                      <div class="upload-box-info-content">
                        图片所有信息需清晰可见，内容真实有效支 持.jpg.jpeg.png格式，大小不超过10M
                      </div>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item class="width-lgger" label="" style="width:100%;margin-top: 7px;">
                  <div class="btn-box" style="margin-top:30px;">
                    <el-button
                      class="btn default-btn"
                      type="default"
                      @click="toWhitelist"
                    >取消
                    </el-button>
                    <el-button
                      class="btn success-btn sub-btn"
                      type="primary"
                      @click="subChangeWhiteFun"
                    >确认
                    </el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </UsermanageNav>
</template>

<script>
import { queryWhiteListByAccountNoAndCustomerNum, whiteApply, addWhiteListAndWdmcByActorFullName } from '@/api/usermanage'
import { validateCreditCode } from '@/utils/validate'
import UsermanageNav from "@/components/UsermanageNav";

export default {
  name: 'whiteadd',
  components: {
    UsermanageNav
  },
  data() {
    return {
      loading: false,
      changeImg: '',
      form: {
        type: 'ADD',
        file: '',
        bgzhh: '',
        name: '',
        cardType: '',
        card: '',
        bank: '',
        ssfh: '',
        reason: ''
      },
      errData: [{
        name: 'type',
        error: '请选择变更类型'
      },
      {
        name: 'bgzhh',
        error: '请输入有效变更账户号'
      },
      {
        name: 'name',
        error: '请输入户名'
      },
      {
        name: 'cardType',
        error: '清选择证件类型'
      },
      {
        name: 'card',
        error: '请输入有效证件号'
      },
      {
        name: 'bank',
        error: '请输入所属银行'
      },
      {
        name: 'ssfh',
        error: '请输入网点名称'
      },
      {
        name: 'reason',
        error: '请输入变更原因'
      },
      {
        name: 'file',
        error: '请选择需要上传的变更申请单'
      }
      ],
      user: null,
      timeout: null
    }
  },

  computed: {},

  watch: {
    'form.type': {
      handler() {
        this.form.bgzhh = ''
        this.form.name = ''
        this.form.cardType = ''
        this.form.card = ''
        this.form.bank = ''
        this.form.ssfh = ''
      },
      deep: true
    }
  },

  created() {
    this.user = this.$store.getters.info
  },

  mounted() {
  },

  destroyed() {
  },

  methods: {
    // 选择上传图片
    imgUp() {
      const event = new MouseEvent('click')

      this.$refs.changePic.dispatchEvent(event)
    },
    // 上传图片切换
    imgChange(e) {
      const file = e.target.files[0]

      if (file) {
        // 本地预览
        this.form.file = file
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onload = () => {
          this.changeImg = reader.result
        }
      } else {
        this.changeImg = ''
        this.form.file = ''
        this.$refs.changePic.value = ''
      }
    },
    // 点击 提交 变更白名单
    subChangeWhiteFun() {
      for (let i = 0, len = this.errData.length; i < len; i++) {
        if (this.errData[i].name == 'card') {
          if (!validateCreditCode(this.form.card)) {
            this.$message({
              message: this.errData[i].error,
              type: 'error',
              duration: 1800
            })
            return false
          }
        }
        if (!this.form[this.errData[i].name]) {
          this.$message({
            message: this.errData[i].error,
            type: 'error',
            duration: 1800
          })
          return false
        }
      }
      this.loading = true
      const fd = new FormData()

      fd.append('applyPicture', this.form.file)
      fd.append('changeType', this.form.type)
      fd.append('accountNo', this.form.bgzhh)
      fd.append('accountName', this.form.name)
      fd.append('certificateNo', this.form.card)
      fd.append('certificateType', this.form.cardType)
      fd.append('bankName', this.form.bank)
      fd.append('subBankName', this.form.ssfh)
      fd.append('applyReason', this.form.reason)
      fd.append('customerName', this.user.customerName)
      whiteApply(fd).then((response) => {
        if (response.success) {
          this.$message({
            message: '申请成功',
            type: 'success',
            duration: 1800
          })
          this.$router.push({ path: '/usermanage/whitelist' })
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
    // 返回 白名单管理
    toWhitelist() {
      this.$router.push({ path: '/usermanage/whitelist' })
    },
    // 变更账户号 失去焦点
    blurFun: function () {
      this.form.name = ''
      this.form.cardType = ''
      this.form.card = ''
      this.form.bank = ''
      this.form.ssfh = ''
      if (this.form.type == 'DEL') {
        if (this.form.bgzhh && this.form.bgzhh.length >= 12) {
          queryWhiteListByAccountNoAndCustomerNum({
            accountNo: this.form.bgzhh
          }).then(response => {
            if (response.success) {
              if (response.data) {
                if (this.form.type == 'DEL') {
                  this.form.name = response.data.accountName
                  this.form.cardType = response.data.certificateType
                  this.form.card = response.data.certificateNo
                  this.form.bank = response.data.bankName
                  this.form.ssfh = response.data.subBankName
                }
              }
            }
          }).catch(() => {
          })
        }
      }
    },
    // 网点名称 输入查询
    querySearchAsync(queryString, cb) {
      const restaurants = []

      addWhiteListAndWdmcByActorFullName({
        actorFullName: queryString
      }).then(response => {
        if (response.success) {
          for (let val of response.data) {
            restaurants.push({
              'value': val.actorFullName
            })
          }
          cb(restaurants)
        } else {
          cb([])
        }
      }).catch(() => {
        cb([])
      })
    }
  }
}
</script>

<style lang="less">
  .whiteadd {
    .whitelist-form-box {
      .el-form-item {
        .el-form-item__content {
          width: 78%;
        }
      }

      .width-lg {
        .el-form-item__content {
          width: 87.2%;
        }
      }

      .width-lgger {
        .el-form-item__content {
          width: 100%;
        }
      }

      .el-form-item.pl-20 {
        padding-left: 20px;
      }

      .el-form-item__label {
        position: relative;
        text-align-last: auto;
        text-align: right;
      }
    }
  }
</style>

<style lang="less" scoped>
  .whiteadd {
    .content-box {
      overflow: hidden;
    }

    .whiteadd-box {
      float: none;
      width: 100%;

      .content-item {
        position: relative;
        padding: 30px;

        .box-title {
          height: 16px;
          padding-left: 10px;
          line-height: 18px;
          font-size: 18px;
          border-left: 4px solid #2f81ff;

        }
      }

      .whitelist-form-box {
        overflow: hidden;

        .el-form-item {
          float: left;
          width: 48.5%;
          padding-left: 10px;
          margin-bottom: 22px;
          &:nth-child(3),
          &:nth-child(4) {
            /*margin-bottom: 10px;*/
          }
        }

        .whiteadd-upload-box {
          .upload-box-item {
            overflow: hidden;
            float: left;
            width: 210px;
            height: 130px;
            background: rgba(249, 249, 249, 1);
            border-radius: 4px;
            border: 1px dashed rgba(204, 204, 204, 1);

            .upload-box-img {
              position: absolute;
              width: 208px;
              height: 128px;
              border-radius: 4px;
            }

            .upload-box-btn {
              position: absolute;
              width: 208px;
              height: 128px;
              padding: 48px 0px;
              text-align: center;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 4px;
              cursor: pointer;

              img {
                width: 32px;
                height: 32px;
                vertical-align: middle;
              }

              span {
                display: inline-block;
                margin-left: 10px;
                height: 32px;
                font-size: 16px;
                line-height: 32px;
                color: rgba(47, 129, 255, .8);
                vertical-align: middle;
              }

              span.example-title {
                padding: 0 10px;
                margin-left: 0px;
                background: #fff;
              }
            }
          }

          .upload-box-info {
            float: left;
            width: 228px;
            margin-left: 24px;
            width: 210px;
            height: 130px;
            font-size: 12px;
            line-height: 17px;
            color: rgba(102, 102, 102, 1);

            .upload-box-info-title {
              height: 25px;
              font-size: 18px;
              line-height: 25px;
              color: rgba(255, 173, 55, 1);
              cursor: pointer;
            }

            .upload-box-info-content {
              margin-top: 2px;
            }
          }
        }
      }
    }
  }
</style>
