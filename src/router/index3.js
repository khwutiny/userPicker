import Vue from 'vue' // 导入Vue
import Router from 'vue-router' // 导入vue-router 库
import userInfo from '@/components/userInfo'
import users from '@/components/users'

Vue.use(Router) // 全局注册Router组件，它会绑定到Vue实例里面。
export default new Router({
  routes: [
    {
      path: '/info',
      name: 'UserInfo',
      component: userInfo
    },
    {
      path: '/user',
      name: 'users',
      component: users
    }]
})
