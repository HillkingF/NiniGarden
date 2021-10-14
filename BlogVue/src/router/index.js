// 1.导入 vue 和 router 包
import Vue from 'vue'
import Router from 'vue-router'
// 2.导入需要跳转连接的vue组件,需要哪个导入哪个
import MainPage from '../views/MainPage'
import Login from '../views/Login'
// 3.必须显式的使用Vue.use声明启用路由功能
Vue.use(Router);

// 4.使用export关联跳转接口
export default new Router({
  // 独立页面跳转的时候,使用router实现,所以必须在路由配置文件中记录这些页面
  routes: [
    {
      path: '/mainpage',  // 请求跳转的url路径
      component: MainPage // 跳转后显示的组件
    },
    {
      path: '/login',
      component: Login
    },
  ]
});
