<template>
  <div class="filters">
    <p class="filters__title">Фильтр</p>
    <div class="filters__filters-container">
      <app-input
        v-model="searchedNumber"
        title="Номер накладной:"
        placeholder="Введите фрагмент"
        @handle-input="updateStoredNumberFilter"
      >
      </app-input>
      <select-block
        v-for="(filter, i) in filters"
        :key="i"
        :settings="filter"
        @handle-select="updateStoredTypeFilter"
      >
      </select-block>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/base/AppInput.vue';

export default {
  name: 'FilterBlock',
  components: { AppInput },
  data() {
    return {
      searchedNumber: '',
    };
  },
  computed: {
    filters() {
      const storedTypeFilters = this.$store.getters.definedCards;
      const flags = [];
      const uniqueTypes = storedTypeFilters.filter((item) => {
        if (flags.indexOf(item.human) !== -1) {
          return false;
        }
        flags.push(item.human);
        return true;
      });
      return [
        {
          placeholder: 'Выберите из списка',
          title: {
            text: 'Тип заказа:',
            titleAsPlaceholder: false,
          },
          elements: uniqueTypes.map((item) => (
            { text: item.human, img: null, raw: item.raw }
          )),
        },
      ];
    },
  },
  methods: {
    updateStoredNumberFilter(value) {
      this.$store.commit('setNumberFilter', value);
    },
    updateStoredTypeFilter(value) {
      this.$store.commit('setTypeFilter', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 280px;
  min-width: 280px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25));
  height: max-content;
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: $super-dark-blue;
    padding: 8px 16px;
    border-bottom: 1px solid #F8F8F8;
  }
  &__filters-container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
