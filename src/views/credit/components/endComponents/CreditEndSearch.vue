<template>
  <div class="search-box search-box-nowrap" style="margin-top: 15px;">
    <el-form
      :inline="true"
      :model="listQuery"
      class="demo-form-inline"
      size="medium"
      label-position="left"
    >
      <el-form-item label="申请编号:">
        <el-input v-model="listQuery.creditNum" placeholder="请输入编号"></el-input>
      </el-form-item>
      <el-form-item class="pl-10" label="状态:">
        <el-select v-model="listQuery.status" placeholder="请选择状态" style="width:100%;">
          <el-option label="全部" value=""></el-option>
          <el-option label="审核不通过" value="审核不通过"></el-option>
          <el-option label="已过期" value="已过期"></el-option>
          <el-option label="已使用" value="已使用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="pl-10 search-box-time" label="申请时间:">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="listQuery.beginTime"
            style="width: 100%;"
            :picker-options="startPickerOptions"
            value-format="yyyy-MM-dd HH:mm:ss"
          ></el-date-picker>
        </el-col>
        <el-col class="line text-c" :span="2">至</el-col>
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="listQuery.endTime"
            style="width: 100%;"
            :picker-options="endPickerOptions"
            value-format="yyyy-MM-dd HH:mm:ss"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item class="pl-10">
        <div class="btn-box" style="text-align: left;">
          <el-button
            class="btn default-btn"
            type="default"
            @click="fetchData(1)">筛选
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'CreditEndSearch',
  components: {
  },
  props: ['listQuery', 'startPickerOptions', 'endPickerOptions'],
  data() {
    return {
    }
  },

  methods: {
    fetchData(val) {
      this.$emit('fetchData', val)
    }
  }
}
</script>

<style lang="less">
  .credit-end {
    .search-box {
      overflow: hidden;
      margin-top: 25px;

      .el-form-item {
        margin-bottom: 15px;
      }

      .el-form-item.pl-10 {
        padding-left: 10px;
      }

      .el-form-item__label {
        text-align-last: auto;
        text-align: right;
      }
    }
  }
</style>

<style lang="less" scoped>

</style>
