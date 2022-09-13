import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SelectBlock from '@/components/select/SelectBlock.vue';

export default function registerComponents(Vue) {
  Vue.component('app-header', AppHeader);
  Vue.component('app-footer', AppFooter);
  Vue.component('select-block', SelectBlock);
}
