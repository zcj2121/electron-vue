<template>
  <div id="app">
    <Header v-if="this.$route.path == '/login' || this.$route.path == '/register' || this.$route.path == '/forget'"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    Header
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
  }

  #nprogress .bar {
    background: #2f81ff !important;
  }
</style>
