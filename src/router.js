import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/HomePage.vue';
import ShuttlePage from './components/ShuttlePage.vue'
import BookPage from './components/BookPage.vue'
const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/shuttle',
      name: 'Shuttle',
      component: ShuttlePage,
    },
    {
      path: '/booked',
      name: 'Booked',
      component: BookPage,
    },
    // Add more routes for different pages
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;