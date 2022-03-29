import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users/:id',
      name: 'users',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: PostView
    }
  ]
})

export default router
