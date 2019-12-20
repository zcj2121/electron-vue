<template>
  <div class="content content-loading">
    <div class="content-nav">当前位置：
      <router-link :to="{path:'/work'}">工作台</router-link>
      &gt; 额度管理
    </div>
    <div class="content-box">
      <el-collapse-transition>
        <div class="tips-nav" v-if="tipsShow && activeName== 'first'">
          <div class="tips-nav__item">
            <span>1</span>申请额度
          </div>
          <div class="tips-nav__item">
            <span>2</span>下载模板
          </div>
          <div class="tips-nav__item">
            <span>3</span>上传模板
          </div>
          <div class="tips-nav__item">
            <span>4</span>生成额度
          </div>
          <div class="tips-nav__item">
            <span>5</span>申请借款
          </div>
          <div class="tips-nav__close" @click="tipsShow = false">✕</div>
        </div>
      </el-collapse-transition>

      <div class="content-item" style="padding: 30px;">
        <el-tabs v-model="activeName">
          <el-tab-pane label="可申请额度" name="first"></el-tab-pane>
          <el-tab-pane label="完结额度" name="second"></el-tab-pane>
        </el-tabs>
        <div>
          <CreditUsable v-if="activeName == 'first'"/>
          <CreditEnd v-if="activeName == 'second'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreditEnd from '@/views/credit/components/CreditEnd.vue'
import CreditUsable from '@/views/credit/components/CreditUsable.vue'

export default {
  name: 'credit',
  components: {
    CreditUsable,
    CreditEnd
  },
  data() {
    return {
      activeName: 'first',
      tipsShow: true
    }
  },

  computed: {},

  watch: {
    activeName:{
      handler(val){
        if (val == 'first') {
          this.tipsShow = true
        }
      }
    }
  },

  created() {

  },

  mounted() {
  },

  destroyed() {
  },

  methods: {
  }
}
</script>


<style lang="less">
  .up-file-show {
    width: 67% !important;
    cursor: pointer;

    input {
      background-color: inherit !important;
      color: #606266 !important;
      border: 1px solid #ccc !important;
      cursor: pointer !important;
    }
  }
</style>

<style lang="less" scoped>
 .tips-nav{
   overflow: hidden;
   padding: 15px 18px 15px 30px;
   border:1px solid rgba(255,211,171,1);
   background: #FFFFFF;
   position: relative;
   z-index: 0;
   &:after{
     content: '';
     position: absolute;
     height: 100%;
     width: 100%;
     top: 0;
     left: 0;
     background: rgba(255,247,234,1);
     z-index: 1;
     animation:tips-nav-frame 1s ease-in-out;
   }

   .tips-nav__item{
     position: relative;
     float: left;
     margin-right: 30px;
     width: calc(20% - 34.5px);
     height: 36px;
     text-align: center;
     line-height: 36px;
     color: #FFFFFF;
     background: rgba(254,188,127,1);
     z-index: 2;
     span:first-child{
       position: relative;
       display: inline-block;
       margin-right: 6px;
       height: 20px;
       width: 20px;
       font-size: 16px;
       vertical-align: text-bottom;
       line-height: 20px;
       border: 1px solid #FFFFFF;
       border-radius: 50%;
       &:before{
         content: '';
         border: 4px solid transparent;
         border-left-color: #FFFFFF;
         border-radius: 0;
         font-size: 0;
         width: 0;
         height: 0;
         padding: 0;
         position: absolute;
         right: -8px;
         top: 5px;
       }
     }
     &:before{
       content: '';
       border: 18px solid transparent;
       border-left-color: rgba(254,188,127,1);
       border-radius: 0;
       font-size: 0;
       width: 0;
       height: 0;
       padding: 0;
       position: absolute;
       right: -36px;
     }
     &:after{
       content: '';
       border: 18px solid rgba(254,188,127,1);
       border-left-color: transparent;
       border-radius: 0;
       font-size: 0;
       width: 0;
       height: 0;
       padding: 0;
       position: absolute;
       left: -18px;
     }
     &:first-child:after{
       display: none;
     }
   }
   .tips-nav__close{
     position: relative;
     float: right;
     width: 20px;
     line-height: 36px;
     font-size: 16px;
     color: #EE894B;
     text-align: center;
     cursor: pointer;
     z-index: 2;
   }
 }

 @keyframes tips-nav-frame {
   from {width:0px;}
   to {width:100%;}
 }
</style>

