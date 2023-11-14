import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '@/views/Profile.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/profile/:user_name',
      name: 'profile',
      component: Profile
    }
  ]
})

const privateRoutes = ['profile', 'home']

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (privateRoutes.includes(to.name)) {
    if (!authStore.isAuthenticated) {
      next(`/login`)
    }
  }

  // redirect to home page if user is already logged in
  if (to.name === 'login') {
    if (authStore.isAuthenticated) {
      next('/')
    }
  }

  next()
})

export default router
