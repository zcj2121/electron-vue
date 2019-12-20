import router from '@/router'
import Cookies from 'js-cookie'
const user = {
  state: {
    info: null
  },

  mutations: {
    SET_INFO: (state, info) => {
      state.info = info
      localStorage.setItem('info', JSON.stringify(info))
    }
  },

  actions: {
    // 前端 退出登录
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_INFO', null)
        let toUrl = window.location.href
        Cookies.remove('sendCode')
        Cookies.remove('sendCodes')
        router.push({
          path: '/login',
          query: { redirect: toUrl }
        })
        resolve()
      })
    }
  }
}

export default user
