<template>
  <div class="app-wrapper">
    <div class="main-container">
      <sidebar class="sidebar-container" :isCollapse="isCollapse" :active="active" />
      <navbar />
      <app-main :isCollapse="isCollapse" />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  data() {
    return {
      isCollapse: true,
      active:null
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  watch:{
    $route:{
      handler(val) {
        this.active = val.path
        if(
          val.path == '/' ||
          val.path == '/work/index' ||
          val.path == '/autograph/index'
        ){
          this.isCollapse = false
        }else{
          this.isCollapse = true
        }
      }
    }
  },
  created() {
    if(
      this.$route.path == '/' ||
      this.$route.path == '/work/index' ||
      this.$route.path == '/autograph/index'
    ){
      this.isCollapse = false
    }else{
      this.isCollapse = true
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>


.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .scroll-container.sidebar-container{
    margin-top:80px;
  }
}
</style>

