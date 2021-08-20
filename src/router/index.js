import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('@/views/Index.vue')
const About = () => import('@/views/About.vue')
const Home = () => import('@/views/home/Home.vue')

const Meet = () => import('@/views/meet/Index.vue')
const OtherCentre = () => import('@/views/meet/OtherCentre.vue')
const Zone = () => import('@/views/zone/Index.vue')
const ZoneRoom = () => import('@/views/zone/Room.vue')
const ZoneFriend = () => import('@/views/zone/Friend.vue')
const Person = () => import('@/views/Person/index.vue')
const Visitor = () => import('@/views/Visitor.vue')
const Vip = () => import('@/views/vip/index.vue')
const UpgradeVip = () => import('@/views/vip/UpgradeVip.vue')
const RechargeGold = () => import('@/views/vip/RechargeGold.vue')
const TransPackage = ()=> import('@/views/vip/TransPackage.vue')
const DetailsPrivilege = () => import('@/views/vip/DetailsPrivilege.vue')
const Help = () => import('@/views/vip/Help.vue')
const Coupon = () => import('@/views/vip/Coupon.vue')

const TranslateVip = () => import('@/views/vip/TranslateVip.vue')
const Personal = () => import('@/views/Person/personal.vue')
const City =() =>import('@components/personal/City.vue')
const RewardRecord = ()=> import('@/views/vip/RewardRecord.vue')
const RechargeRecord = ()=> import('@/views/vip/RechargeRecord.vue')
const SetLangs = () => import('@/views/vip/SetLangs.vue')


// 避免同一个路由多次添加报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

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
    redirect: 'home/meet',
    component: Home,
    meta: {
      loginCheck: true,
      title: '主页'
    },
    children: [
      {
        path: 'visitor',
        component: Visitor,
        meta: {
          title: '我的访客'
        }
      },
      {
        path: 'vip',
        component: Vip,
        meta: {
          title: '升级'
        },
        children: [
          {
            path: 'UpgradeVip',
            component: UpgradeVip,
            meta: {
              title: '升级会员'
            }
          },
          {
            path: 'RechargeGold',
            component: RechargeGold,
            meta: {
              title: '充值金币'
            }
          },
          {
            path:'TransPackage',
            component:TransPackage,
            meta:{
              title:'翻译包'
            }
          },
          {
            path:'DetailsPrivilege',
            component:DetailsPrivilege,
            meta:{
              title:'特权说明'
            }
          },
          {
            path:'Help',
            component:Help,
            meta:{
              title:'帮助'
            }
          },
          {
            path:'Coupon',
            component:Coupon,
            meta:{
              title:'优惠券'
            }
          },
          {
            path: 'TranslateVip',
            component: TranslateVip,
            meta: {
              title: '翻译VIP'
            }
          },
          {
            path: 'RewardRecord',
            component: RewardRecord,
            meta: {
              title: '打赏记录'
            }
          },
          {
            path: 'RechargeRecord',
            component: RechargeRecord,
            meta: {
              title: '充值记录'
            }
          },
          {
            path: 'SetLangs',
            component: SetLangs,
            meta: {
              title: '语言'
            }
          },
         
        ]
      },
      {
        path: 'meet',
        component: Meet,
        meta: {
          title: '偶遇'
        },

      },
      {
        path: 'otherCentre',
        component: OtherCentre,
        meta: {
          title: '他人主页'
        }
      },

      {
        path: 'zone',
        component: Zone,
        meta: {
          title: '动态'
        },
        children: [
          {
            path: '',
            alias: 'room',
            component: ZoneRoom,
            meta: {
              title: '动态广场'
            }
          },
          {
            path: 'friend',
            component: ZoneFriend,
            meta: {
              title: '朋友圈'
            }
            
          },
        ]
      },
      // 个人主页
      {
        path: 'PersonHome',
        component: Person,
        meta: {
          title: '个人主页'
        }
      },

      //个人资料
      {
        path: 'personal',
        component: Personal,
        meta: {
          title: '个人资料'
        }
      },
      {
        path:'/city',
        component:City
    },
    ]
  },
  {
    path: '/meet',
    name: 'meet',
    component: Meet,
    meta: {
      loginCheck: true,
      title: 'meet'
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
  // const loginCheck = to.meta.loginCheck
  // if(loginCheck){
  //   if (to.name !== 'index' && !window.sessionStorage.getItem('isLogin')) {
  //     next({ name: 'index' })
  //   }else {
  //     next()
  //   }
  // }else{
  next()
  // }

})

export default router
