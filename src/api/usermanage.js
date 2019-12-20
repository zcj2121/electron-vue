import request from '@/utils/request'

/** **  账户中心  ****/
// 获取 个人账户数据
export function selectBorrowerAccount(data) {
  return request({
    url: '/borrowerAccount/selectBorrowerAccount',
    method: 'post',
    data
  })
}

// 获取 个人账户数据 右侧详情
export function selectBorrowerInfo(data) {
  return request({
    url: '/borrowerAccount/selectBorrowerInfo',
    method: 'post',
    data
  })
}

// 获取 资金记录 列表数据
export function selectAccountStatement(data) {
  return request({
    url: '/borrowerAccount/selectAccountStatement',
    method: 'post',
    data
  })
}

// 获取 出账账户 列表数据
export function selectWthdrawBorrowerAccount(data) {
  return request({
    url: '/borrowerAccount/selectWthdrawBorrowerAccount',
    method: 'post',
    data,
    isErrorShow: true
  })
}

// 获取 入账账户、白名单账户 列表数据
export function selectWhiteListByCustomerNo(data) {
  return request({
    url: '/white/selectWhiteListByCustomerNo',
    method: 'post',
    data,
    isErrorShow: true
  })
}

// 获取 可用金额
export function selectBorrowerAccountBalance(data) {
  return request({
    url: '/borrowerAccount/selectBorrowerAccountBalance',
    method: 'post',
    data
  })
}

// 提交 提现申请
export function withdrawApply(data) {
  return request({
    url: '/withdraw/withdrawApply',
    method: 'post',
    data
  })
}

// 获取易宝商编
export function getBusinessUsableInfoByCustomerNumber(data) {
  return request({
    url: '/borrowerAccount/getBusinessUsableInfoByCustomerNumber',
    method: 'post',
    data
  })
}

// 信用账户
export function queryAccountCreditByNumber(data) {
  return request({
    url: '/accountCredit/queryAccountCreditByNumber',
    method: 'post',
    data
  })
}

// 信用账户 授信产品信息
export function getProductLineByCustomerNumber(data) {
  return request({
    url: '/borrowerAccount/getProductLineByCustomerNumber',
    method: 'post',
    data
  })
}

/** **  账户中心  ****/

/** ** 白名单管理 ****/

// 获取 白名单管理 列表数据
export function selectWhiteApplyOrderList(data) {
  return request({
    url: '/white/selectWhiteApplyOrderList',
    method: 'post',
    data
  })
}

// 获取 白名单信息
export function queryWhiteListByAccountNoAndCustomerNum(data) {
  return request({
    url: '/white/queryWhiteListByAccountNoAndCustomerNum',
    method: 'post',
    data,
    isErrorShow: true
  })
}

// 提交 变更白名单
export function whiteApply(data) {
  return request({
    url: '/white/whiteApply',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
    isFormData: true
  })
}

// 查看 变更白名单详情
export function selectWhiteApplyOrder(data) {
  return request({
    url: '/white/selectWhiteApplyOrder',
    method: 'post',
    data
  })
}

// 查看 变更白名单 日志 列表
export function selectWhiteApplyOrderLog(data) {
  return request({
    url: '/white/selectWhiteApplyOrderLog',
    method: 'post',
    data
  })
}


// 新增 变更白名单 网点名称
export function addWhiteListAndWdmcByActorFullName(data) {
  return request({
    url: '/white/addWhiteListAndWdmcByActorFullName',
    method: 'post',
    data
  })
}

/** ** 白名单管理 ****/

/** **  提现记录  ****/

// 获取 提现记录 列表数据

export function selectWithdrawByCustomerNo(data) {
  return request({
    url: '/withdraw/selectWithdrawByCustomerNo',
    method: 'post',
    data
  })
}
/** **  提现记录  ****/

/** ** 手续费记录 ****/
export function selectFeelist(data) {
  return request({
    url: '/poundage/poundageFileList',
    method: 'post',
    data
  })
}
/** ** 手续费记录 ****/
