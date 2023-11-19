import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/HomePage.vue';
import ShuttlePage from './components/ShuttlePage.vue'

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
    // Add more routes for different pages
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;