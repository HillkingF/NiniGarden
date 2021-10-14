// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'    // import VueRouter from "vue-router";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 程序的主入口文件,必须装载配置 router 和 elementui
Vue.use(router)
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // components: { App },
  // template: '<App/>'
})
