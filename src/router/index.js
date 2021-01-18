import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import regist from '../components/regist'
import Home from '../components/Home'
import welcome from "../components/welcome";
import VueSession from 'vue-session'
import Users from "../components/findUser";
import Myconcerned from "../components/Myconcerned";
import Myfans from '../components/Myfans'
Vue.use(VueSession)


Vue.use(ElementUI)
Vue.use(VueRouter)
  const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/regist', component: regist},
    {path: '/Home', component: Home, 
      redirect: '/welcome',
      children: [{ 
        path: '/welcome',
        component: welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/myconcerned',
        component: Myconcerned
      },
      {
        path: '/myfans',
        component: Myfans
      }
    ]}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
