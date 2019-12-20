<template>
  <div class="content content-loading usermanage">
    <div class="content-nav">当前位置：
      <router-link :to="{path:'/work'}">工作台</router-link>
      <span> &gt; 账户管理</span>
    </div>
    <div class="nav-tab-box">
      <div class="nav-tab-panel">
        <div class="nav-tab-item">
          <router-link
            to="userdetail"
            :class="{'active': this.$route.name == 'userdetail' || this.$route.name == 'cashout'}">
            <img class="nav-tab-img" :src="require('../assets/img/usermanage_1.png')">
            <img
              class="nav-tab-img-active"
              :src="require('../assets/img/usermanage_1_active.png')"
            >
            <span>账户中心</span>
          </router-link>
        </div>
        <div class="nav-tab-item">
          <router-link
            to="whitelist"
            :class="{'active': this.$route.name == 'whitelist' || this.$route.name == 'whiteadd' || this.$route.name == 'whitedetail' }"
          >
            <img class="nav-tab-img" style="width: 22px;" :src="require('../assets/img/usermanage_2.png')">
            <img
              class="nav-tab-img-active"
              style="width: 22px;"
              :src="require('../assets/img/usermanage_2_active.png')">
            <span>白名单管理</span>
          </router-link>
        </div>
        <div class="nav-tab-item">
          <router-link class="" to="drawlist" :class="{'active': this.$route.name == 'drawlist'}">
            <img class="nav-tab-img" :src="require('../assets/img/usermanage_3.png')">
            <img class="nav-tab-img-active" :src="require('../assets/img/usermanage_3_active.png')">
            <span>提现记录</span>
          </router-link>
        </div>
        <div class="nav-tab-item">
          <router-link class="" to="feelist" :class="{'active': this.$route.name == 'feelist'}">
            <img
              class="nav-tab-img"
              style="width: 22px;"
              :src="require('../assets/img/usermanage_4.png')">
            <img class="nav-tab-img-active" style="width: 22px;"
                 :src="require('../assets/img/usermanage_4_active.png')">
            <span>手续费记录</span>
          </router-link>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UsermanageNav',
  components: {},
  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {
  },

  mounted() {
  },

  destroyed() {
  },

  methods: {}
}
</script>

<style lang="less" scoped>
  .usermanage {
    .nav-tab-box {
      min-width: 1110px;
      margin: 0 auto;
      padding: 0 20px 14px;
      color: #b7b7b7;

      .nav-tab-panel {
        overflow: hidden;
        background: #ffffff;

        .nav-tab-item {
          width: 25%;
          float: left;

          a {
            display: block;
            padding: 15px;
            text-align: center;
            font-size: 16px;

            img {
              width: 24px;
              height: 24px;
              vertical-align: middle;

              &.nav-tab-img {
                display: initial;
              }

              &.nav-tab-img-active {
                display: none;
              }
            }

            span {
              display: inline-block;
              height: 24px;
              margin-left: 15px;
              vertical-align: middle;
              line-height: 24px;
              color: rgba(148, 148, 148, 1);
            }

            &:hover,
            &.active {
              background: rgba(251, 251, 251, 1);

              span {
                color: rgba(47, 129, 255, 1);
              }

              img {
                &.nav-tab-img {
                  display: none;
                }

                &.nav-tab-img-active {
                  display: initial;
                }
              }
            }
          }
        }
      }
    }

  }
</style>
