import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Product from "@/views/product/Product.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        layout: "LayoutHome",
        authRequired: true
      }
    },
    {
      path: "/product",
      component: Product,
      name: "product",
      meta: {
        layout: "LayoutProduct",
        authRequired: true
      },
      children: [
        {
          path: "ski",
          name: "product-ski",
          component: () =>
            import("@/views/product/ProductSki.vue"),
          meta: {
            layout: "LayoutProduct",
            authRequired: true
          }
        },
        {
          path: "snowboard",
          name: "product-snowboard",
          component: () =>
            import("@/views/product/ProductSnowboard.vue"),
          meta: {
            layout: "LayoutProduct",
            authRequired: true
          }
        },
        {
          path: "sledge",
          name: "product-sledge",
          component: () =>
            import("@/views/product/ProductSledge.vue"),
          meta: {
            layout: "LayoutProduct",
            authRequired: true
          }
        },
      ]
    }
  ]
})

export default router
