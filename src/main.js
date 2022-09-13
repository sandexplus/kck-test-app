import Vue from 'vue';
import registerComponents from '@/components/register-components/register-components';
import registerDirectives from '@/directives';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/style/main.scss';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

registerDirectives(Vue);
registerComponents(Vue);

app.$mount('#app');
