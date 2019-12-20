import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import importDirective from '@/directive'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/base.less'

import '@/permission'

Vue.use(ElementUI)

importDirective(Vue)

import * as filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
