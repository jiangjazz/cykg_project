import Vue from 'vue'
import VueRouter from 'vue-router'

import VueRouterConfig from '@/config/router/index'
// eslint检测命令，勿删！！！！
/* eslint-disable no-new */
Vue.config.productionTip = false

Vue.use(VueRouter)
VueRouterConfig(Vue, VueRouter)
