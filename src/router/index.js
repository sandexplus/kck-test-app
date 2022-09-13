import Vue from 'vue';
import VueRouter from 'vue-router';
import TableView from '@/views/TableView.vue';
import HomeView from '@/views/HomeView.vue';
import CardsView from '@/views/CardsView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: HomeView,
    redirect: '/table',
    children: [
      {
        path: '/table',
        component: TableView,
      },
      {
        path: '/cards',
        component: CardsView,
      },
    ],
  },
  {
    path: '*',
    redirect: '/table',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
