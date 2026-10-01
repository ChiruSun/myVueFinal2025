import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
          path: 'product/:id',
          name: 'single_product',
          component: () => import('../views/user/UserSingleProduct.vue'),
          props: true,
        },
        {
          path: 'no_this_product',
          component: () => import('../views/user/UserNoThisProduct.vue'),
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
          path: 'shopping_cart',
          name: 'cart',
          component: () => import('../views/user/UserCartView.vue'),
        },
        {
          path: 'checkout/:id',
          name: 'checkout',
          component: () => import('../views/user/CheckOutView.vue'),
        },
        {
          path: 'back_home',
          name: 'back_home',
          component: () => import('../views/user/BackHomeView.vue'),
        },
      ],
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
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 瀏覽器上一頁/下一頁時，保留原本位置
    if (savedPosition) {
      return savedPosition
    }

    // 一般導頁時，回到頂部
    return {
      top: 0,
      left: 0,
      behavior: 'smooth', // 可改成 'auto' 或省略
    }
  },
})

export default router
