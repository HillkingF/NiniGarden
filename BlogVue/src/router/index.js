// 1.导入 vue 和 router 包
import Vue from 'vue'
import Router from 'vue-router'
// 2.导入需要跳转连接的vue组件,需要哪个导入哪个
import Main from '../views/Main'
import Login from '../views/Login'
import PageMain from '../views/personInfo/PageMain'
import Knowledge from '../views/personInfo/Knowledge'
import Amusement from '../views/personInfo/Amusement'
import Myinfo from '../views/personInfo/MyInfo.vue'
import Message from '../views/personInfo/Message.vue'
// 3.必须显式的使用Vue.use声明启用路由功能
Vue.use(Router);

// 4.使用export关联跳转接口
export default new Router({
  // 独立页面跳转的时候,使用router实现,所以必须在路由配置文件中记录这些页面
  routes: [
    {
      path: '/main',  // 请求跳转的url路径
      component: Main, // 跳转后显示的组件
      children: [
        // 页面主体部分的异步请求
        {path: '/pagemain', component: PageMain},
        {path: '/knowledge', component: Knowledge},
        {path: '/amusement', component: Amusement},
        {path: '/myinfo', component: Myinfo},
        {path: '/message', component: Message},
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ]
});
