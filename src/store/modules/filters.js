export default {
  state: {
    numberFilter: '',
    typeFilter: '',
    sort: '',
  },
  mutations: {
    setNumberFilter(state, value) {
      state.numberFilter = value;
    },
    setTypeFilter(state, value) {
      state.typeFilter = value;
    },
    setSortMethod(state, value) {
      state.sort = value;
    },
  },
};
