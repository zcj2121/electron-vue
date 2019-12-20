import request from '@/utils/request'

// 请求 授信列表数据
export function uploadPage() {
  return request({
    url: '/credit/uploadPage',
    method: 'post'
  })
}

// 请求 授信列表数据  可用额度
export function finishedCredits(data) {
  return request({
    url: '/credit/finishedCredits',
    method: 'post',
    data
  })
}

// 请求 授信列表数据  驳回申请
export function queryRejectedCredits(data) {
  return request({
    url: '/credit/queryRejectedCredits',
    method: 'post',
    data
  })
}

// 请求 授信列表数据 失效额度
export function removeCredits(data) {
  return request({
    url: '/credit/removeCredits',
    method: 'post',
    data
  })
}

// 请求 授信列表数据 完结额度
export function selectCompletedCreditByStatus(data) {
  return request({
    url: '/credit/selectCompletedCreditByStatus',
    method: 'post',
    data
  })
}


// 请求 授信列表数据 完结额度 查看
export function selectCreditSpecific(data) {
  return request({
    url: '/credit/selectCreditSpecific',
    method: 'post',
    data
  })
}

// 文件上传
export function dealRangeFile(data) {
  return request({
    url: '/credit/dealBatchRefund',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
    isFormData: true
  })
}

// 生成额度
export function calculateAmount(data) {
  return request({
    url: '/credit/calculateAmount',
    method: 'post',
    data
  })
}
// 申请 可用额度 请求数据
export function applyCredit(data) {
  return request({
    url: '/credit/applyCredit',
    method: 'post',
    data
  })
}
// 申请 可用额度 确认提交
export function insertCreditApply(data) {
  return request({
    url: '/credit/insertCreditApply',
    method: 'post',
    data
  })
}

// 获取 单条 授信信息
export function applyForLoanPageData(data) {
  return request({
    url: '/loan/applyForLoanPageData',
    method: 'post',
    data
  })
}

// 申请借款
export function applyForLoan(data) {
  return request({
    url: '/loan/applyForLoan',
    method: 'post',
    data
  })
}
