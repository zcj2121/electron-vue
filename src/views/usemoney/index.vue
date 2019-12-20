<template>
  <div class="content content-loading">
    <div class="content-nav">当前位置：
      <router-link :to="{path:'/work'}">工作台</router-link>
      &gt; 用款管理
    </div>
    <div class="content-box">
      <div class="content-item" style="padding: 30px;">
        <el-tabs v-model="activeName">
          <el-tab-pane label="在途用款列表" name="first"></el-tab-pane>
          <el-tab-pane label="已完成用款列表" name="second"></el-tab-pane>
          <el-tab-pane label="还款记录" name="third"></el-tab-pane>
        </el-tabs>
        <div>
          <UseIntransit v-if="activeName == 'first'"/>
          <UseFinish v-else-if="activeName == 'second'"/>
          <UseHistory v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UseIntransit from '@/views/usemoney/components/UseIntransit.vue'
import UseFinish from '@/views/usemoney/components/UseFinish.vue'
import UseHistory from '@/views/usemoney/components/UseHistory.vue'

export default {
  name: 'usemoney',
  components: {
    UseIntransit,
    UseFinish,
    UseHistory
  },
  data() {
    return {
      activeName: 'first'
    }
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
