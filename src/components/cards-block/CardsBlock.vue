<template>
  <div class="cards">
    <card-item
      v-for="item in tableData"
      :data="item"
      :key="item.id"
    ></card-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardItem from '@/components/cards-block/components/CardItem.vue';

export default {
  name: 'CardsBlock',
  components: { CardItem },
  data() {
    return {
      deleteModalShown: false,
      itemToDelete: null,
    };
  },
  computed: {
    ...mapGetters({
      types: 'definedCards',
      tableData: 'filteredCards',
      definitions: 'definitions',
    }),
  },
  methods: {
    stringDateToDate(date) {
      return new Date(date);
    },
    toggleDeleteModal(item, e) {
      this.itemToDelete = item;
      console.log(e.target.offsetTop);
      const container = e.target.closest('tr');
      this.$refs['delete-modal'].style.top = `${container.offsetTop}px`;
      this.deleteModalShown = !this.deleteModalShown;
    },
    hideDeleteModal(e) {
      if (e.target.closest('.table__options-btn')) return;
      this.deleteModalShown = false;
    },
    deleteItem() {
      this.$store.commit('deleteItem', this.itemToDelete);
      this.deleteModalShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
