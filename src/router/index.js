/*import Vue from 'vue'  Added and removed */
/*import VueRouter from 'vue-router' Added and removed */
import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard' /*Dashboard to dashboard , removed .vue */

/*Vue.use(VueRouter)  Added and removed */

const routes = [
  {
    path: '/',
      component: dashboard, /* Dashboard to dashboard */
        children: [
          {
            path: '', /* / removed from all path - which has no impact, and components changed to component which s d major issue,  and .vue added which is working with or without vue*/
            component: () => import(/* webpackChunkName: "VendorSupplier" */ '../views/VendorSupplier')
          },
          {
            path: 'customer',
            component: () => import(/* webpackChunkName: "Customer" */ '../views/Customer')
          },
          {
            path: 'purchase',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/Purchase')
          },
          {
            path: 'sales',
            component: () => import(/* webpackChunkName: "Sales" */ '../views/Sales.vue')
          },
          {
            path: 'accounts',
            component: () => import(/* webpackChunkName: "Accounts" */ '../views/Accounts.vue')
          }
        ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
