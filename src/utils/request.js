import Qs from 'qs'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'

// 是否 不提示错误
let isErrorShow, changeUrl, ip_addr = document.location.hostname

if (ip_addr.indexOf('ycenc') != -1) {
  changeUrl = 'http://59.151.52.16:30531/fs-factoring-web'
} else if (ip_addr.indexOf('ycetest') != -1 || ip_addr.indexOf('fhave') != -1) {
  changeUrl = 'http://ycetest.yeepay.com:30531/fs-factoring-web'
} else if (ip_addr.indexOf('shangfu') != -1) {
  changeUrl = 'http://ota.hezhilianghua.com/fs-factoring-web'
} else {
  changeUrl = '/fs-factoring-web'
}
// 创建axios实例
const service = axios.create({
  withCredentials: true,
  baseURL: changeUrl, // api 的 base_url
  timeout: 150000, // 请求超时时间
  method: 'post',
  cache: false
})

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  config.headers['Cache-Control'] = 'no-cache, no-store' // 清除缓存
  // config.headers['Content-Disposition'] = 'attachment;filename=FileName.pdf' // 清除缓存
  config.headers['Pragma'] = 'no-cache' // 清除缓存
  isErrorShow = config.isErrorShow | false
  if (!config.isFormData) {
    config.data = Qs.stringify({
      ...config.data
    })
  }
  return config
}, () => {})


// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    let messageLength = document.querySelectorAll('.el-message').length

    if (res.returnCode == '100013' || res.returnCode == '100012') {
      if (!messageLength) {
        Message({
          message: '登录失效，请重新登录',
          type: 'error',
          duration: 1800
        })
      }
      store.dispatch('FedLogOut')
      return
    }
    if (messageLength > 1) {
      let elems = document.querySelectorAll('.el-message')
      let index = 0, length = elems.length;
      for ( ; index < length; index++) {
        elems[index].style.display = "none";
      }
    }
    return res
  },
  error => {
    let messageLength = document.querySelectorAll('.el-message').length
    if (!isErrorShow) {
      if (!messageLength) {
        Message({
          message: '网络异常，请稍后再试',
          type: 'error',
          duration: 1800
        })
      }
    }
    return Promise.reject(error)
  }
)

export default service
// respone拦截器

// 下载、查看等 base_url
export function downURL() {
  return changeUrl
}
