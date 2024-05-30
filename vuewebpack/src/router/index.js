import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/View/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/View/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('@/View/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('@/View/ComponentsA.vue')
      },
      {
        path: 'b',
        component: () => import('@/View/ComponentsB.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
