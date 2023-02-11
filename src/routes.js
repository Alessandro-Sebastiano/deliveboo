import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Restaurants from './pages/Restaurants.vue';
import Menu from './pages/Menu.vue';
import CheckOutPage from './pages/CheckOutPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ReviewPage from './pages/ReviewPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants,
    },

    {
      path: '/restaurants/:slug',
      name: 'menu',
      component: Menu,
    },

    {
      path: '/check-out',
      name: 'check-out',
      component: CheckOutPage,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundPage,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component:ReviewPage, 
    }
    
  ]
})

export default router
