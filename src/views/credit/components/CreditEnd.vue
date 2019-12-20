<template>
  <div class="credit-end">
    <div class="box-panel">
      <!--      搜索-->
      <CreditEndSearch
        :listQuery="listQuery"
        :endPickerOptions="endPickerOptions"
        :startPickerOptions="startPickerOptions"
        @fetchData="fetchData" />
      <!--      列表-->
      <CreditEndList
        :tableData="tableData"
        :getRowKeys="getRowKeys"
        :expands="expands"
        :loading="loading"
        :childTableData="childTableData"
        @expandSelect="expandSelect" />
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      prev-text=" 上一页"
      next-text="下一页 "
      :total="total"
      :current-page="listQuery.curr"
      :page-sizes="pageSizes"
      :page-size="listQuery.limit"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>

import CreditEndList from '@/views/credit/components/endComponents/CreditEndList'
import CreditEndSearch from '@/views/credit/components/endComponents/CreditEndSearch'
import {selectCompletedCreditByStatus, selectCreditSpecific} from '@/api/credit'

export default {
  name: 'CreditEnd',
  components: {
    CreditEndList,
    CreditEndSearch
  },
  data() {
    return {
      loading: false, // 加载动画
      total: 0, // 数据总条数
      pageSizes: [10, 15, 20], // 每页显示条数 规则
      listQuery: {
        curr: 1, // 第几页
        limit: 10, // 每页显示条数
        creditNum: '',
        status: '',
        beginTime: '',
        endTime: ''
      },
      tableData: [], // 列表显示数据
      childTableData: [], // 查看 列表显示数据
      startPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.endTime) {
            return time.getTime() > (new Date(this.listQuery.endTime)).getTime()
          }
          return time.getTime() > Date.now()
        }
      },
      endPickerOptions: {
        disabledDate: (time) => {
          if (this.listQuery.beginTime) {
            return time.getTime() < (new Date(this.listQuery.beginTime)).getTime() || time.getTime() > Date.now()
          }
          return time.getTime() > Date.now()
        }
      },
      expands: [],
      getRowKeys(row) {
        return row.creditNum
      }
    }
  },

  computed: {},

  watch: {

  },

  created() {
  },

  mounted() {
    this.fetchData()
  },

  destroyed() {
  },

  methods: {
    // 列表数据 分页 搜索
    // 获取 列表数据
    fetchData(val) {
      this.loading = true
      val ? this.listQuery.curr = 1 : this.listQuery.curr = this.listQuery.curr
      selectCompletedCreditByStatus(this.listQuery).then(response => {
        if (response.success) {
          if (response.data) {
            this.tableData = response.data.creditApplyVoList2 || []
            this.total = response.data.creditsCount || 0
          }
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    _selectCompletedCreditByStatusDetailFun(val) {
      this.childTableData = []
      selectCreditSpecific({
        creditNum: val
      }).then(response => {
        if (response.success) {
          if (response.data) {
            this.childTableData = response.data.creditSpecificVoList2
            this.expands.push(val)
          }
        } else {
          this.$message({
            message: response.returnMessage,
            type: 'error',
            duration: 1800
          })
        }
      }).catch(() => {
      })
    },
    // 每页 条数
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.fetchData()
    },
    // 第几页
    handleCurrentChange(val) {
      this.listQuery.curr = val
      this.fetchData()
    },
    // 列表数据 分页 搜索

    // 折叠面板每次只能展开一行
    expandSelect(row, expandedRows) {
      let that = this

      if (expandedRows.length) {
        that.expands = []
        if (row) {
          if (row.statusStr == '已使用') {
            that._selectCompletedCreditByStatusDetailFun(row.creditNum)
          } else {
            that.expands.push(row.creditNum)
          }
        }
      } else {
        that.expands = []
      }
    }
  }
}
</script>

<style lang="less">

</style>

<style lang="less" scoped>
  .credit-end {
    .box-panel {
      margin-top: 0px;
      overflow: hidden;
    }
  }
</style>
