<template>
  <div class="content content-work">
    <div class="work-content" >
      <!--        操作-->
      <WorkHeader :user="user" :info="infoDetail" :loading="loading" />
      <!--        面板-->
      <WorkContent :money="money" :prodct="prodctList" @toCredit="toCredit" />
    </div>
    <!-- 数字证书未开通 模态框 -->
    <el-dialog title="提示" :visible.sync="modalCollectShow" top="30vh" width="450px">
      <div style="padding:10px 40px;">
        <div style="color: #2C2C2C;text-align: left;margin-top: 10px;">为了提升您的工作效率，和智商服平台携手CFCA，上线电子签约功能，为了方便您的融资，请您开通数字证书。</div>
        <div class="dialog-footer" style="margin-top: 40px;">
          <div class="btn-box">
            <el-button class="btn default-btn" type="default" @click="modalCollectShow = false">取消</el-button>
            <el-button
              class="btn success-btn sub-btn"
              type="primary"
              @click="toAutographFun"
            >立即开通
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 数字证书未开通 模态框 -->
  </div>
</template>

<script>
import { queryAccountCreditByNumber, getProductLineByCustomerNumber } from '@/api/usermanage'
import { checkOpenAccount } from '@/api/work'

import WorkHeader from '@/views/work/components/WorkHeader'
import WorkContent from '@/views/work/components/WorkContent'

export default {
  name: 'work',

  components: {
    WorkContent,
    WorkHeader
  },

  data() {
    return {
      loading: false,
      modalCollectShow: false,
      infoDetail: {
        isOpenAccount: false,
        data: '',
        idNo: '',
        mail: '',
        mobile: '',
        name: ''
      },
      user: {
        customerName: null,
        contractNum: null,
        idNumber: null,
        customerTel: null,
        contactMail: null
      },
      money: 0,
      prodctList: []
    }
  },

  computed: {},
  created() {
    this.user = this.$store.getters.info
  },

  mounted() {
    this.checkOpenAccountFun()
    this.queryAccountFun()
    this.fetchData()
  },

  destroyed() {
  },

  methods: {
    // 可借额度
    queryAccountFun() {
      queryAccountCreditByNumber().then(response => {
        if (response.success &&response.data) {
          this.money = response.data.usableAccount
        } else {
          this.money = 0
        }
      })
    },
    // 授信产品
    fetchData() {
      getProductLineByCustomerNumber().then(response => {
        if (response.success &&response.data) {
          this.prodctList = response.data
        } else {
          this.prodctList = []
        }
      })
    },
    toCredit(val) {
      if (val == 'CREDIT_APPLY') {
        this.$router.push({ name: 'credit', params: { prodct: val} })
      } else if (val == 'FACTORING') {
        this.$router.push({ name: 'factoring', params: { prodct: val} })
      }
    },
    // 是否开通数字证书
    checkOpenAccountFun() {
      this.loading = true
      checkOpenAccount().then(response => {
        if (response.success && response.data) {
          this.infoDetail = response.data
          if (!response.data.isOpenAccount) {
            this.modalCollectShow = true
          }
        } else {
          this.infoDetail = {
            isOpenAccount: false,
            data: '',
            idNo: '',
            mail: '',
            mobile: '',
            name: ''
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 跳转 数字证书
    toAutographFun() {
      sessionStorage.removeItem('isAutograph')
      this.$router.push({ path: '/autograph' })
    }
  }
}
</script>

<style lang="less" scoped>
  .content-work {
    overflow: hidden;
    margin: 0px auto;
    min-width: 970px;
  }

</style>
