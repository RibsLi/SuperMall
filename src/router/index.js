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



import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
