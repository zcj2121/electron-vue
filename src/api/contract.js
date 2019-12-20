import request from '@/utils/request'

// 合同管理 列表数据
export function selectFactoringAgreeMent(data) {
  return request({
    url: 'zhongHeFactoring/selectFactoringAgreeMent',
    method: 'post',
    data
  })
}

// 请求 pdf
export function startSign(params) {
  return request({
    url: '/zhongHeFactoring/startSign',
    method: 'get',
    responseType: 'blob',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    params
  })
}

// 获取 信息
export function selectFactoringAgreementMessage(data) {
  return request({
    url: '/zhongHeFactoring/selectFactoringAgreementMessage',
    method: 'post',
    data
  })
}

// 获取 短信验证码
export function cfcaSendSms(data) {
  return request({
    url: '/zhongHeFactoring/cfcaSendSms',
    method: 'post',
    data
  })
}

// 验证短信 并提交
export function cfcaSmsChecking(data) {
  return request({
    url: '/zhongHeFactoring/cfcaSmsChecking',
    method: 'post',
    data
  })
}
