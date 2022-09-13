<template>
  <div class="home-page page">
    <div class="container">
      <div class="home-page__inner">
        <filter-block></filter-block>
        <div class="home-page__content">
          <sort-block></sort-block>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBlock from '@/components/filters-block/FilterBlock.vue';
import SortBlock from '@/components/sort/SortBlock.vue';

export default {
  name: 'HomeView',
  components: { SortBlock, FilterBlock },
};
</script>

<style lang="scss" scoped>
.home-page {
  height: 100%;
  min-height: 1px;
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: stretch;
  }
  &__inner {
    padding: 32px 0;
    display: flex;
    gap: 16px;
    height: 100%;
  }
}
</style>
