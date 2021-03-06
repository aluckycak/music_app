import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home"
import layout from "../views/layout.vue"

const routes = [
  {
    Path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: '/home',
        name: 'Home',
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
  },
  {
    path: '/itemMusic',
    name: 'itemMusic',
    component: () => import("../views/itemMusic.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active"
})

export default router
