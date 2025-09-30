import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userhome',
      component: () => import('../views/user/UserView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/user/UserHome.vue'),
        },
        {
          path: 'products',
          component: () => import('../views/user/UserProducts.vue'),
        },
        {
          path: 'story',
          component: () => import('../views/user/UserStory.vue'),
        },
        {
          path: 'connect_us',
          component: () => import('../views/user/UserContentUs.vue'),
        },
        {
          path: 'test',
          component: () => import('../views/TestView.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/dashboard/ProductsView.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/dashboard/OrderView.vue'),
        },
        {
          path: 'coupon',
          component: () => import('../views/dashboard/CouponView.vue'),
        },
        {
          path: 'test',
          component: () => import('../views/TestView.vue'),
        },
      ],
    },
  ],
})

export default router
