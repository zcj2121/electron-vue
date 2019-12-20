<template>
  <div class="header">
    <div class="logo-box">
      <a class="logo-box__pic" @click="toWorkFun" title="和智量化">
        <img src="../../../assets/img/logo-1.png" alt="和智量化" title="和智量化">
      </a>
      <el-dropdown :hide-on-click="false" class="work-content-header-set">
        <span class="el-dropdown-link">
          <img class="work-content-header-setimg" src="../../../assets/img/work-set-banner.png" alt="管理">
        </span>
        <el-dropdown-menu slot="dropdown" class="work-set-panel">
          <a class="work-set-panel-item" v-for="(item, index) in operateData" :key="index" @click="workheadeFun(index)">
            <img class="work-set-panel-item-img" :src="item.img" :alt="item.name">
            <img
              class="work-set-panel-item-activeimg"
              :src="item.imgActive"
              :alt="item.name"
            >
            <span>{{item.name}}</span>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
      <el-tooltip effect="light" content="退出登录" placement="bottom-end">
        <span class="work-content-header-logout" @click="workheadeFun(2)">
          <img class="work-content-header-setimg" src="../../../assets/img/work-logout-banner.png" alt="退出登录">
        </span>
      </el-tooltip>
    </div>
    <!-- 修改密码 模态框 -->
    <el-dialog title="修改密码"
               top="30vh"
               width="500px"
               :visible.sync="modalEditPwd"
               @close="closeEditPwd"
    >
      <div v-loading="loading">
        <form class="form-horizontal" id="myModalEditPwd">
          <div class="form-group form-group-sm form-group-sm-modal">
            <label class="control-label label-sm col-modal-label">原密码：</label>
            <div class="no-pl col-modal-box">
              <el-input
                type="password"
                size="mini"
                v-model="form.old_password"
                class="oldpassword"
                placeholder="请输入原密码"
              />
            </div>
          </div>
          <div class="form-group form-group-sm form-group-sm-modal">
            <label class="control-label label-sm col-modal-label">设置新密码：</label>
            <div class="no-pl col-modal-box">
              <el-input
                type="password"
                size="mini"
                v-model="form.new_password"
                class="password"
                placeholder="请输入新密码,6~12位,包含大小写字母、数字"
              />
            </div>
          </div>
          <div class="form-group form-group-sm form-group-sm-modal">
            <label class="control-label label-sm col-modal-label">确认新密码：</label>
            <div class="no-pl col-modal-box">
              <el-input
                type="password"
                size="mini"
                v-model="form.con_password"
                class="confirmpassword"
                placeholder="请再次输入新密码"
              />
            </div>
          </div>
          <div class="form-group form-group-sm form-group-sm-modal">
            <label class="control-label label-sm col-modal-label"></label>
            <div class="no-pl col-modal-box">
              <div class="input-error">
                <transition name="el-fade-in">
                  <div v-show="inputError">{{inputError}}</div>
                </transition>
              </div>
            </div>
          </div>
        </form>
        <div class="btn-box">
          <el-button class="btn default-btn" type="default" @click="closeEditPwd">取消</el-button>
          <el-button class="btn success-btn sub-btn"
                     type="primary"
                     @click="editPwdFun">保存
          </el-button>
        </div>
      </div>

    </el-dialog>
    <!-- 修改密码 模态框 -->

    <!-- 确认退出 模态框 -->
    <el-dialog title="提示" :visible.sync="closeAlert" top="30vh" width="350px">
      <div v-loading="loading">
        <div class="el-message-box__content" style="margin-bottom: 0px;">
          <div class="el-message-box__status el-icon-warning"></div>
          <div class="el-message-box__message">
            <p>确认退出登录吗?</p>
          </div>
        </div>
        <div class="btn-box text-r" style="margin-top: 10px;">
          <el-button class="btn default-btn" type="default" @click="closeAlert = false">取消</el-button>
          <el-button class="btn success-btn sub-btn" type="primary" @click="closeAlertFun">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 确认退出 模态框 -->
  </div>
</template>

<script>
import md5 from 'js-md5'
import { logout, updatePassword } from '@/api/user'
import { validatePwd } from '@/utils/validate'

export default {
  name: 'Header',
  props: {},
  data() {
    return {
      inputError: '',
      modalEditPwd: false,
      closeAlert: false,
      loading: false,
      form: {
        old_password: '',
        new_password: '',
        con_password: ''
      },
      user: null,
      operateData: [{
        name: '个人信息',
        img: require('../../../assets/img/work-user.png'),
        imgActive:require('../../../assets/img/work-user-active.png')
      },{
        name: '修改密码',
        img: require('../../../assets/img/work-pwd.png'),
        imgActive:require('../../../assets/img/work-pwd-active.png')
      }]
    }
  },
  watch: {
    'form.old_password': {
      handler(val) {
        this.form.old_password = val.replace(/\s/g, '')
        if (!val) {
          this.inputError = '请输入原始密码'
        } else {
          this.inputError = ''
        }
      },
      deep: true
    },
    'form.new_password': {
      handler(val) {
        this.form.new_password = val.replace(/\s/g, '')
        if (val) {
          if (!validatePwd(val)) {
            this.inputError = '新密码须包含6~12位大小写字母、数字'
          } else if (this.form.new_password != this.form.con_password) {
            this.inputError = '两次密码输入不一致'
          } else {
            this.inputError = ''
          }
        }
      },
      deep: true
    },
    'form.con_password': {
      handler(val) {
        this.form.con_password = val.replace(/\s/g, '')
        if (val) {
          if (!validatePwd(val)) {
            this.inputError = '确认密码须包含6~12位大小写字母、数字'
          } else if (this.form.new_password != this.form.con_password) {
            this.inputError = '两次密码输入不一致'
          } else {
            this.inputError = ''
          }
        }
      },
      deep: true
    }
  },
  methods: {
    // 前往 工作台
    toWorkFun() {
      this.$router.push({ path: '/work?t=' + Math.random() })
    },
    workheadeFun(val) {
      switch (val) {
      case 0:
        // 前往 用户管理
        this.$router.push({ path: '/usermanage' })
        break;
      case 1:
        // 点击 修改密码
        this.inputError = ''
        this.modalEditPwd = true
        break;
      case 2:
        // 退出登录
        this.inputError = ''
        this.loading = false
        this.closeAlert = true
        break;
      default:
        break;
      }
    },
    // 退出登录 确定
    closeAlertFun() {
      this.inputError = ''
      this.loading = true
      logout().then(response => {
        if (response.success) {
          this.$message({
            message: '退出登录成功',
            type: 'success',
            duration: 1800
          })
          this.$store.dispatch('FedLogOut')
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.loading = false
        this.closeAlert = false
      }).catch(() => {
        this.loading = false
        this.closeAlert = false
        return false
      })
    },
    // 点击 修改密码 取消
    closeEditPwd() {
      this.modalEditPwd = false
      this.form = {
        old_password: '',
        new_password: '',
        con_password: ''
      }
      this.inputError = ''
    },
    // 点击 修改密码 保存
    editPwdFun() {
      if (!this.form.old_password) {
        this.inputError = '请输入原始密码'
        return false
      }
      if (
        !validatePwd(this.form.new_password) ||
        !validatePwd(this.form.con_password)
      ) {
        this.inputError = '密码须包含6~12位大小写字母、数字'
        return false
      }
      if (this.form.new_password != this.form.con_password) {
        this.inputError = '两次密码输入不一致'
        return false
      }
      if (this.form.old_password == this.form.new_password || this.form.old_password == this.form.con_password) {
        this.inputError = '新密码不可和原密码一致'
        return false
      }
      this.inputError = ''
      this.loading = true
      // 修改密码
      updatePassword({
        customerNumber: this.user.customerNumber,
        oldPwd: md5(this.form.old_password),
        newPwd: md5(this.form.new_password)
      }).then(response => {
        if (response.success) {
          this.$message({
            message: '密码修改成功，请重新登录',
            type: 'success',
            duration: 1800
          })
          this.$store.dispatch('FedLogOut').then(() => {
            this.$router.push({ path: '/login' })
          })
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
        this.loading = false
        this.modalEditPwd = false
      }).catch(() => {
        this.loading = false
        this.modalEditPwd = false
        return false
      })
    }
  },
  created() {
    this.user = this.$store.getters.info
  }
}
</script>

<style scoped lang="less">
  .header {
    padding: 15px 0;
    background: #2F81FF;
    margin: 0 auto;
    line-height: 0;
    .logo-box {
      margin: 0 auto;
      padding: 0 20px;
      .logo-box__pic{
        img {
          width: 98px;
          height: 28px;
        }
      }
    }
    .el-dropdown{
      display: inline-block;
      height: 30px;
      line-height: 30px;
      right: -6px;
      float: right;
      padding-right: 6px;
    }
  }
  .work-content-header-set {
    .work-content-header-setimg {
      display: initial;
      width: 18px;
      margin-bottom: -4px;
      cursor: pointer;
    }
  }
  .work-content-header-logout{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    right: -6px;
    float: right;
    padding-right: 6px;
    img{
      display: initial;
      width: 18px;
      margin-bottom: -5px;
      cursor: pointer;
    }
  }
  .work-set-panel {
    position: absolute;
    right: 0px;
    width: 140px;
    line-height: 25px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-top: none;
    cursor: pointer;

    .work-set-panel-item {
      display: block;
      padding: 2px;
      text-align: center;
      text-decoration: none !important;
      color: #2c2c2c !important;
      cursor: pointer;

      .work-set-panel-item-activeimg {
        display: none;
      }

      .work-set-panel-item-img {
        display: initial;
      }

      &:hover,
      &:active {
        color: #2f81ff !important;
        background: #f9f9f9;
        cursor: pointer;

        .work-set-panel-item-img {
          display: none;
        }

        .work-set-panel-item-activeimg {
          display: initial;
        }
      }

      span {
        margin-left: 4px;
        margin-right: 10px;
        font-size: 12px;
        vertical-align: middle;
        cursor: pointer;
      }

      img {
        vertical-align: middle;
      }
    }
  }

  #myModalEditPwd {
    .col-modal-label {
      width: 30% !important;
      padding-top: 4px;
      text-align: right;
      line-height: 24px;
    }

    .col-modal-box {
      width: 60% !important;
    }

    .form-group-sm-modal {
      margin-bottom: 15px;

      .input-error {
        margin-top: 0px;
        padding: 0px;
        line-height: 15px;
      }

      &:nth-child(3) {
        margin-bottom: 6px !important;
      }

      &:last-child {
        margin-bottom: 10px;
      }
    }
  }
</style>
