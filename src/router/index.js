import Vue from 'vue'
import Router from 'vue-router'


// 处理 vue-router 升级后报错 Uncaught (in promise) 问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/views/login/index')
  },
  {
    path: '/forget',
    name: 'forget',
    meta: { title: '忘记密码' },
    component: () => import('@/views/forget/index')
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '注册' },
    component: () => import('@/views/register/index')
  },


  {
    path: '/',
    component: Layout,
    redirect: '/work',
    hidden: true
  },
  {
    path: '/work',
    component: Layout,
    redirect: 'work/index',
    meta: { title: '工作空间', icon: 'home' },
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'work',
        component: () => import('@/views/work/index')
      }
    ]
  },

  {
    path: '/autograph',
    component: Layout,
    redirect: 'autograph/index',
    meta: { title: '数字证书'},
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'autograph',
        component: () => import('@/views/autograph/index')
      }
    ]
  },

  {
    path: '/credit',
    component: Layout,
    redirect: 'credit/index',
    meta: { title: '额度管理'},
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'credit',
        component: () => import('@/views/credit/index')
      }
    ]
  },

  {
    path: '/factoring',
    component: Layout,
    redirect: 'factoring/index',
    meta: { title: '保理池管理'},
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'factoring',
        component: () => import('@/views/factoring/index')
      }
    ]
  },

  {
    path: '/contract',
    component: Layout,
    redirect: 'contract/index',
    meta: { title: '合同管理'},
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'contract',
        component: () => import('@/views/contract/index')
      },
      {
        path: 'contractsign',
        name: 'contractsign',
        meta: { title: '合同签署' },
        component: () => import('@/views/contractsign/index')
      }
    ]
  },

  {
    path: '/usemoney',
    component: Layout,
    redirect: 'usemoney/index',
    meta: { title: '用款管理'},
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'usemoney',
        component: () => import('@/views/usemoney/index')
      },
      {
        path: 'loanconfirm',
        name: 'loanconfirm',
        meta: { title: '借款信息确认' },
        component: () => import('@/views/loanconfirm/index')
      }
    ]
  },
  {
    path: '/usermanage',
    name: 'usermanage',
    redirect: 'usermanage/userdetail',
    meta: { title: '账户管理' },
    // component: () => import('@/views/usermanage/index'),
    component: Layout,
    hidden: false,
    children: [
      {
        path: 'userdetail',
        name: 'userdetail',
        meta: { title: '账户中心' },
        component: () => import('@/views/usermanage/userdetail/index')
      },
      {
        path: 'whitelist',
        name: 'whitelist',
        meta: { title: '白名单管理' },
        component: () => import('@/views/usermanage/whitelist/index')
      },
      {
        path: 'drawlist',
        name: 'drawlist',
        meta: { title: '提现记录' },
        component: () => import('@/views/usermanage/drawlist/index')
      },
      {
        path: 'feelist',
        name: 'feelist',
        meta: { title: '手续费记录' },
        component: () => import('@/views/usermanage/feelist/index')
      },
      {
        path: 'whiteadd',
        name: 'whiteadd',
        meta: { title: '变更白名单申请' },
        component: () => import('@/views/usermanage/whiteadd/index')
      },
      {
        path: 'whitedetail',
        name: 'whitedetail',
        meta: { title: '变更白名单申请详情' },
        component: () => import('@/views/usermanage/whitedetail/index')
      },
      {
        path: 'cashout',
        name: 'cashout',
        meta: { title: '提现申请' },
        component: () => import('@/views/usermanage/cashout/index')
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  linkActiveClass: 'is-active',
  routes: constantRouterMap
})
