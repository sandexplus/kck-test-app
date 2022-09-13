import cards from '../cards.json';

export default {
  state: {
    cards,
    definitions: {
      Delivery: 'Курьерская доставка',
      Pickup: 'Самовывоз',
      'Pick-point': 'Доставка в пункт выдачи',
    },
  },
  getters: {
    definedCards(state) {
      return state.cards.map((item) => ({ human: state.definitions[item.type], raw: item.type }));
    },
    definitions(state) {
      return state.definitions;
    },
    filteredCards(state, _, rootState) {
      const { numberFilter, typeFilter, sort } = rootState.filters;

      function checkNumber(item) {
        const lcItem = item.number.toLowerCase();
        return !numberFilter || (lcItem.includes(numberFilter.toLowerCase()));
      }
      function checkType(item) {
        return !typeFilter || typeFilter.raw === item.type;
      }

      const filtered = state.cards.filter((item) => (checkNumber(item) && checkType(item)));

      if (!sort) {
        return filtered;
      }

      function sortTopToBottom() {
        return filtered.sort((prev, cur) => {
          if (prev.number < cur.number) {
            return 1;
          }
          if (prev.number > cur.number) {
            return -1;
          }
          return 0;
        });
      }

      function sortBottomToTop() {
        return filtered.sort((prev, cur) => {
          if (prev.number < cur.number) {
            return -1;
          }
          if (prev.number > cur.number) {
            return 1;
          }
          return 0;
        });
      }

      if (sort === 'small-big') {
        return sortBottomToTop();
      }
      if (sort === 'big-small') {
        return sortTopToBottom();
      }
      return filtered;
    },
  },
  mutations: {
    deleteItem(state, item) {
      state.cards = state.cards.filter((cardItem) => cardItem.id !== item.id);
    },
  },
};
