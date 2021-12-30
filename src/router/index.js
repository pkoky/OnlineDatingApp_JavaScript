import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/user/:userId/chat',
    name: "Chat",
    component: () => import('../views/Chat.vue')
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
