import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/recordExpense',
    name: 'recordExpense',
    component: function () {
      return import('../views/RecordExpenseView.vue')
    }
  },
  {
    path: '/createCategory',
    name: 'createCategory',
    component: function () {
      return import('../views/CreateCategoryView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top when navigating to a new page
    return { top: 0 }
  },
})

export default router
