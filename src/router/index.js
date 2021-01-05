/*import Vue from 'vue'  Added and removed */
/*import VueRouter from 'vue-router' Added and removed */
import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard' /*Dashboard to dashboard , removed .vue */
import VendorSupplier from '../views/VendorSupplier.vue'
import Customer from '../views/Customer.vue'

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
           {path: '/vendorsupplier',
           component: VendorSupplier,
            children: [
              {
                path: '/vendorsupplier/addvendor',
                component: () => import ('../views/VendorAdd.vue')
              },
              {
                path: '/vendorsupplier/editvendor',
                component: () => import ('../views/VendorEdit.vue')
              },
              {
                path: '/vendorsupplier/viewvendor',
                component: () => import ('../views/VendorView.vue')
              },
              {
                path: '/vendorsupplier/deletevendor',
                component: () => import ('../views/VendorDelete.vue')
              }
            ]},
          {
            path: 'customer',
            component: () => import(/* webpackChunkName: "Customer" */ '../views/Customer')
          },
          {path: '/customer',
           component: Customer,
            children: [
              {
                path: '/customer/addcustomer',
                component: () => import ('../views/CustomerAdd.vue')
              },
              {
                path: '/customer/editcustomer',
                component: () => import ('../views/CustomerEdit.vue')
              },
              {
                path: '/customer/viewcustomer',
                component: () => import ('../views/CustomerView.vue')
              },
              {
                path: '/customer/deletecustomer',
                component: () => import ('../views/CustomerDelete.vue')
              }
            ]},
          {
            path: 'purchase',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/Purchase')
          },
          {
            path: 'inventory',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/Inventory')
          },
          {
            path: 'sales',
            component: () => import(/* webpackChunkName: "Sales" */ '../views/Sales.vue')
          },
          {
            path: 'accounts',
            component: () => import(/* webpackChunkName: "Accounts" */ '../views/Accounts.vue')
          }]
  }] 
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
