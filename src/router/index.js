import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/* middleware */
import isjwtlogin from "../middlewares/isjwtlogin";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: () => import('../views/StocksView.vue'),
      meta: {
        middleware: [isjwtlogin]
      }
    }
  ]
})

export default router
