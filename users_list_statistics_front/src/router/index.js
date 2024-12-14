import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import FilterView from '../views/FilterView.vue'
import StatisticsView from '../views/StatisticsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserView,
    },
    {
      path: '/users',
      name: 'users',
      component: UserView,
    },
    {
      path: '/role',
      name: 'role',
      component: FilterView,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView,
    },
  ],
})

router.beforeEach( async(to) => {
  const initialPages = ['/']
  const homePages = initialPages.includes(to.path)
  if(homePages){
    return '/users'
  }
})

export default router
