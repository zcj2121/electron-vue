<template>
  <section class="app-main" :class="{close: isCollapse}">
    <transition name="fade" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  props: {
    isCollapse: {}
  },
  computed: {
    key() {
      return this.$route.path + Math.random()
    }
  }
};
</script>


<style rel="stylesheet/less" lang="less" scoped>
  .app-main {
    margin-left: 200px;
    transition: all .3s;
    &.close{
      margin-left: 60px;
      transition: all .34s;
    }
    .fade-enter {
      opacity: 0;
    }

    .fade-leave {
      opacity: 1;
    }

    .fade-enter-active {
      transition: opacity 0.25s;
    }

    .fade-leave-active {
      opacity: 0;
      transition: opacity 0.25s;
    }
  }
</style>
