import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import Bar from './views/Bar.vue'
import Left from './views/Left'
import Right from './views/Right'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home-route',
      components:{
        default:Home,
        left:Left,
        right:Right
      },
      alias:'/go'  //给路由起别名go，go执行时也调用的是home路由
    },
    {
      path: '/about-*',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      // redirect:'/'  //重定向
      beforeEnter:(to,from,next)=>{
          // console.log(to);
          // console.log(from);
          next();//next(false)禁止跳转；next()正常跳转
      }
    },{
      path:'/login/:id(\\d+)',//router动态传参可加入正则表达式规范所传参数
      name:'login',
      component:Login,
      children:[
        {
          path:'',
          name:'bar',
          components:{
            a : Bar
          }
        }
      ]
    }
  ]
})
