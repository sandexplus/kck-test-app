import Vue from 'vue';
import Vuex from 'vuex';

import cards from '@/store/modules/cards';
import filters from '@/store/modules/filters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cards,
    filters,
  },
});
