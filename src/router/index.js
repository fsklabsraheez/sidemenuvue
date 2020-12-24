import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
      component: Dashboard,
        children: [
          {
            path: '/',
            components: () => import(/* webpackChunkName: "vendorsupplier" */ '../views/VendorSupplier')
          },
          {
            path: '/customer',
            components: () => import(/* webpackChunkName: "customer" */ '../views/Customer')
          },
          {
            path: '/purchase',
            components: () => import(/* webpackChunkName: "purchase" */ '../views/Purchase')
          },
          {
            path: '/sales',
            components: () => import(/* webpackChunkName: "sales" */ '../views/Sales')
          },
          {
            path: '/accounts',
            components: () => import(/* webpackChunkName: "accounts" */ '../views/Accounts')
          }
        ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
