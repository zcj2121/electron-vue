import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/forget', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.getters.info) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  } else if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    next()
  } else {
    store.dispatch('FedLogOut').then(() => {
      next({
        path: '/login',
        query: { redirect: window.location.href }
      })
    })
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})
