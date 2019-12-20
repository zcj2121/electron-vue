<template>
  <div class="content content-loading">
    <div class="content-nav">当前位置：
      <router-link :to="{path:'/work'}">工作台</router-link>
      &gt; 保理池管理
    </div>
    <div class="content-box">
      <div class="content-item" style="padding: 30px;">
        <el-tabs v-model="activeName">
          <el-tab-pane label="有效池" name="first"></el-tab-pane>
          <el-tab-pane label="失效池" name="second"></el-tab-pane>
        </el-tabs>
        <div>
          <FactoringValid v-if="activeName == 'first'"/>
          <FactoringInvalid v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FactoringValid from '@/views/factoring/components/FactoringValid.vue'
import FactoringInvalid from '@/views/factoring/components/FactoringInvalid.vue'

export default {
  name: 'factoring',
  components: {
    FactoringValid,
    FactoringInvalid
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
