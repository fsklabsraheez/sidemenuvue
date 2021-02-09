/*import Vue from 'vue'  Added and removed */
/*import VueRouter from 'vue-router' Added and removed */
import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard' /*Dashboard to dashboard , removed .vue */
/*import VendorSupplierNew from '../views/VendorSupplier.vue'*/
// import CustomerNew from '../views/CustomerNew.vue'

/*Vue.use(VueRouter)  Added and removed */

const routes = [
  {
    path: '/',
      component: dashboard, /* Dashboard to dashboard */
        children: [
          {
            path: '/vendor', /* / removed from all path - which has no impact, and components changed to component which s d major issue,  and .vue added which is working with or without vue*/
            component: () => import(/* webpackChunkName: "VendorSupplier" */ '../views/VendorSupplierNew')
          },
           /*{
             path: '/vendorsupplier',
             component: VendorSupplierNew,
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
            ]},*/
          {
            path: 'customer',
            component: () => import(/* webpackChunkName: "Customer" */ '../views/CustomerNew')
          },
          // {path: '/customer',
          //  component: Customer,
          //   children: [
          //     {
          //       path: '/customer/addcustomer',
          //       component: () => import ('../views/CustomerAdd.vue')
          //     },
          //     {
          //       path: '/customer/editcustomer',
          //       component: () => import ('../views/CustomerEdit.vue')
          //     },
          //     {
          //       path: '/customer/viewcustomer',
          //       component: () => import ('../views/CustomerView.vue')
          //     },
          //     {
          //       path: '/customer/deletecustomer',
          //       component: () => import ('../views/CustomerDelete.vue')
          //     }
          //   ]},
           {
            path: '/purchaseorder',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/PurchaseOrder')
          },
           {
            path: '/purchaseinvoice',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/PurchaseInvoice')
          },
           {
            path: '/purchaseshipment',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/PurchaseShipment')
          },
          {
            path: '/product',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/InventoryProduct')
          },
          {
            path: 'warehouse',
            component: () => import(/* webpackChunkName: "Purchase" */ '../views/InventoryWarehouse')
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
