import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('../views/Index.vue')
const About = () => import('../views/About.vue')
const Home = () => import('../views/home/Home.vue')

const routes = [
  {
    path: '/',
    name: 'index',
    alias: '/index',
    component: Index,
    meta: {
      loginCheck: false,
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      loginCheck: true,
      title: '关于'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      loginCheck: true,
      title: '偶遇'
    }
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title
  }
  const loginCheck = to.meta.loginCheck
  if(loginCheck){
    if (to.name !== 'index' && !window.sessionStorage.getItem('isLogin')) {
      next({ name: 'index' })
    }else {
      next()
    }
  }else{
    next()
  }
  
})

export default router
