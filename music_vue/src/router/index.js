import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import layout from "../views/layout.vue"

const routes = [
  {
    Path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/topic',
        name: 'Topic',
        component: () => import("../views/topic.vue")
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import("../views/mine.vue")
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import("../views/search.vue")
      },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active"
})

export default router
