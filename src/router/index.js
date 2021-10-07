// import Vue from 'vue'
// import Router from 'vue-router'

// // 解决vue-router在3.0版本以上重复点击菜单报错的问题
// // const originalPush = Router.prototype.push
// // Router.prototype.push = function push(location) {
// //   return originalPush.call(this, location).catch(err => err)
// // }

// const Home = () => import('views/home/Home')
// const Category = () => import('views/category/Category')
// const Cart = () => import('views/cart/Cart')
// const Profile = () => import('views/profile/Profile')

// Vue.use(Router)

// const routes = [
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/category',
//     component: Category
//   },
//   {
//     path: '/cart',
//     component: Cart
//   },
//   {
//     path: '/profile',
//     component: Profile
//   }
// ]

// const router = new Router({
//   mode: "history",
//   routes
// })

// export default router


import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Login = () => import('views/profile/childComps/Login')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
