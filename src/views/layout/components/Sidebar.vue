<template>
  <div class="menu-nav" :class="{close: isCollapse}">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      background-color="#333333"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
    >
      <router-link :to="'/work/index'" class="work-item-box">
        <el-menu-item index="3">
          <i class="el-icon-location"></i>
          <img class="def-img" src="../../../assets/img/work-img.png" alt="">
          <img class="active-img" src="../../../assets/img/work-img-1.png" alt="">
          <span slot="title">工作台</span>
        </el-menu-item>
      </router-link>
      <router-link :to="'/credit/index'">
        <el-menu-item :index="'/credit/index'">
          <i class="el-icon-location"></i>
          <img class="def-img" src="../../../assets/img/work-menu-1.png" alt="">
          <img class="active-img" src="../../../assets/img/work-menu-1-1.png" alt="">
          <span slot="title">额度管理</span>
        </el-menu-item>
      </router-link>
      <router-link :to="'/factoring/index'">
        <el-menu-item :index="'/factoring/index'">
          <i class="el-icon-menu"></i>
          <img class="def-img" src="../../../assets/img/work-menu-2.png" alt="">
          <img class="active-img" src="../../../assets/img/work-menu-2-1.png" alt="">
          <span slot="title">保理池管理</span>
        </el-menu-item>
      </router-link>
      <router-link :to="'/usemoney/index'">
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <img class="def-img" src="../../../assets/img/work-menu-3.png" alt="">
          <img class="active-img" src="../../../assets/img/work-menu-3-1.png" alt="">
          <span slot="title">用款管理</span>
        </el-menu-item>
      </router-link>
      <router-link :to="'/usermanage/userdetail'">
        <el-menu-item index="1">
          <i class="el-icon-setting"></i>
          <img class="def-img" src="../../../assets/img/work-menu-4.png" alt="">
          <img class="active-img" src="../../../assets/img/work-menu-4-1.png" alt="">
          <span slot="title">账户管理</span>
        </el-menu-item>
      </router-link>
<!--      <router-link :to="'/contract/index'">-->
<!--        <el-menu-item index="4">-->
<!--          <i class="el-icon-setting"></i>-->
<!--          <img class="def-img" src="../../../assets/img/work-menu-6.png" alt="">-->
<!--          <img class="active-img" src="../../../assets/img/work-menu-6-1.png" alt="">-->
<!--          <span slot="title">合同管理</span>-->
<!--        </el-menu-item>-->
<!--      </router-link>-->
      <a href="../static/files/manual.pdf"
         download="和智商服借款操作手册.pdf">
        <el-menu-item class="work-item-down">
          <i class="el-icon-setting"></i>
          <img class="def-img" src="../../../assets/img/work-menu-5.png" alt="">
          <img class="active-img" src="../../../assets/img/work-menu-5-1.png" alt="">
          <span slot="title">下载教程</span>
        </el-menu-item>
      </a>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  props: {
    isCollapse: {

    }
  },
  data() {
    return {
      routers: null,
      activeRouter: null,
      usermanage: null,
      active:null
    }
  },
  methods: {
    // 前往 工作台
    toWorkFun() {
      this.$router.push({ path: '/work?t=' + Math.random() })
    },
    activeFun(val) {
      if (
        val == '/usermanage/userdetail' ||
        val == '/usermanage/whitelist' ||
        val == '/usermanage/drawlist' ||
        val == '/usermanage/whiteadd' ||
        val == '/usermanage/whitedetail' ||
        val == '/usermanage/cashout' ||
        val == '/usermanage/feelist'
      ) {
        this.active = '1'
      } else if (
        val == '/usemoney/index' ||
        val == '/usemoney/loanconfirm'
      ) {
        this.active = '2'
      } else if (
        val == '/' ||
        val == '/work/index' ||
        val == '/autograph/index'
      ) {
        this.active = '3'
      } else if (
        val == '/' ||
        val == '/contract/index' ||
        val == '/contract/contractsign'
      ) {
        this.active = '4'
      } else {
        this.active = val
      }
    }
  },
  watch: {
    $route: {
      handler(val) {
        this.activeFun(val.path)
      }
    }
  },
  created() {
    this.routers = this.$router.options.routes
    this.activeFun(this.$route.path)
  }
}
</script>

<style lang="less">
  .menu-nav{
    width: 200px;
    height: 100%;
    transition: width .3s;
    background-color: #333333;
    position: fixed;
    font-size: 0;
    top: 58px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    &.close{
      transition: width .34s;
      width: 60px;
    }
  }
  .el-menu{
    margin-top: 1px;
    border: none !important;
    .el-submenu__title,
    .el-tooltip{
      padding-left: 18px !important;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item,
  .el-submenu__title{
    height: 50px !important;
    line-height: 50px !important;
    padding-left: 18px !important;
    img{
      &.def-img {
        display: initial;
      }
      &.active-img {
        display: none;
      }
    }

    &:hover {
      background-color: #1E1E1E !important;
      span{
        color: #2F81FF;
      }
      img{
        &.def-img {
          display: none;
        }
        &.active-img {
          display: initial;
        }
      }
    }
    i{
      color: #FFFFFF !important;
      display: none;
    }
    img{
      margin-right: 5px;
      width: 26px;
      text-align: center;
      font-size: 18px;
      vertical-align: middle;
      padding: 0 2px;
      vertical-align: middle;
    }
    span{
      height: 14px;
      line-height: 15px;
      display: inline-block;
    }
  }
  .el-menu-item.is-active{
    background-color: #1E1E1E !important;
    span{
      color: #2F81FF;
    }
    img{
      &.def-img {
        display: none;
      }
      &.active-img {
        display: initial;
      }
    }
  }
  .el-menu--collapse{
    width: 60px !important;
  }
  .el-tooltip__popper.is-dark{
    color: #FFFFFF !important;
    background:#303133 !important;
    border: none !important;
  }
  .work-item-down{
    background-color: rgb(51, 51, 51) !important;
    &.is-active{
      background-color: rgb(51, 51, 51) !important;
      &:hover {
        background-color: #2F81FF !important;
      }
    }
  }
  .work-item-box{
    .el-menu-item{
      height: 66px !important;
      line-height: 66px !important;
      /*background-color: rgb(51, 51, 51) !important;*/
      img{
        width: 36px;
        padding: 0 7px;
      }
      span{
        font-size: 18px;
        height: 16px;
        line-height: 18px;
        display: inline-block;
      }
      padding-left: 13px !important;
      .el-tooltip{
        padding-left: 13px !important;
      }
      /*&:before{*/
      /*  content: '';*/
      /*  position: absolute;*/
      /*  left: 18px;*/
      /*  top: auto;*/
      /*  bottom: 0;*/
      /*  right: auto;*/
      /*  height: 2px;*/
      /*  width: calc(100% - 36px);*/
      /*  background-color: #4A4A4A;*/
      /*}*/
    }
  }
</style>
