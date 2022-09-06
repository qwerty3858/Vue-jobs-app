import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobList from '../views/JobList.vue';
import JobDetail from '../views/JobDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/joblist',
      name: 'joblist',
      component: JobList,
    },
    {
      path: '/jobdetail/:id',
      name: 'jobdetail',
      component: JobDetail,
    },
  ],
});

export default router;
