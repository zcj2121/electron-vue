import request from '@/utils/request'

// 请求 借款申请列表数据
export function selectPoolLoanApply(data) {
  return request({
    url: '/loan/selectPoolLoanApply',
    method: 'post',
    data
  })
}

// 请求 保理池列表数据
export function getBorrowerPoolList(data) {
  return request({
    url: '/user/borrowerPool/getBorrowerPoolList',
    method: 'post',
    data
  })
}
