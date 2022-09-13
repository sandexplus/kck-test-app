<template>
  <div class="sort">
    <div class="sort__container">
      <select-block :settings="sortData" @handle-select="selectSort"></select-block>
    </div>
    <div class="sort__togglers">
      <router-link class="sort__toggler" to="./table">
        <img src="@/assets/img/icons/table-view.svg" alt="Table view">
      </router-link>
      <router-link class="sort__toggler" to="./cards">
        <img src="@/assets/img/icons/cards-view.svg" alt="Cards view">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortBlock',
  data() {
    return {
      sortData: {
        placeholder: 'Сортировка',
        title: {
          text: 'Сортировка',
          titleAsPlaceholder: true,
        },
        elements: [
          {
            text: 'Номер накладной',
            // eslint-disable-next-line global-require
            img: require('@/assets/img/icons/small-big.svg'),
            raw: 'small-big',
          },
          {
            text: 'Номер накладной',
            // eslint-disable-next-line global-require
            img: require('@/assets/img/icons/big-small.svg'),
            raw: 'big-small',
          },
        ],
      },
    };
  },
  methods: {
    selectSort(value) {
      this.$store.commit('setSortMethod', value.raw);
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  &__container {
    background: #FFFFFF;
    box-shadow: 0px 4px 12px #E7E7E7;
    border-radius: 3px;
    padding: 16px;
    width: 100%;
    &::v-deep {
      & .select {
        max-width: 232px;
      }
    }
  }
  &__togglers {
    display: flex;
  }
  &__toggler {
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #647A8C;
    display: flex;
    justify-content: center;
    align-items: center;
    &.router-link-exact-active {
      background: #E5E9EC;
    }
    & img {
      width: 16px;
      height: auto;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
