import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
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
  },
  {
    path: '/chat-list',
    name: "ChatList",
    component: () => import('../views/MessageList.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
