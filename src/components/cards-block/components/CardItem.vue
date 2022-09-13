<template>
  <div class="card-item">
    <div
      ref="delete-modal"
      class="card-item__delete-modal"
      v-show="deleteModalShown"
      v-click-outside="hideDeleteModal"
    >
      <button @click="deleteItem" class="card-item__delete-btn">
        <object
          type="image/svg+xml"
          :data="require('@/assets/img/icons/trash.svg')"
        >
          Trash icon
        </object>
        <span>удалить</span>
      </button>
    </div>
    <div class="card-item__header">
      <p class="card-item__id">{{ data.id }}</p>
      <button @click="toggleDeleteModal" class="card-item__options-btn">
        <img src="@/assets/img/icons/dots.svg" alt="Options">
      </button>
    </div>
    <div class="card-item__body">
      <p class="card-item__descr">Номер накладной:</p>
      <p class="card-item__value">{{ data.number }}</p>
      <p class="card-item__descr">Тип заказа:</p>
      <p class="card-item__value">{{ definitions[data.type] }}</p>
      <p class="card-item__descr">Дата создания:</p>
      <p class="card-item__value">{{ convertDateFormat(data.creationDate) }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import convertDateFormat from '@/assets/script/convertDateFormat';

export default {
  name: 'CardItem',
  props: ['data'],
  data() {
    return {
      deleteModalShown: false,
    };
  },
  computed: {
    ...mapGetters({
      definitions: 'definitions',
    }),
  },
  methods: {
    convertDateFormat,
    toggleDeleteModal() {
      this.deleteModalShown = !this.deleteModalShown;
    },
    hideDeleteModal(e) {
      if (e.target.closest('.card-item__options-btn')) return;
      this.deleteModalShown = false;
    },
    deleteItem() {
      this.$store.commit('deleteItem', this.data);
      this.deleteModalShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  width: 290px;
  background: #F6FAFB;
  box-shadow: 0px 4px 12px #EBEBEB;
  border-radius: 3px;
  position: relative;
  &__body {
    display: grid;
    grid-template-columns: 123px 111px;
    padding: 16px;
    row-gap: 16px;
    column-gap: 8px;
  }
  &__id {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &__descr {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #647A8C;
  }
  &__value {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &__header {
    background: rgba(237, 232, 245, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
  }
  &__delete-modal {
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
    border-radius: 2px;
    padding: 12px 16px;
    width: 148px;
    top: 32px;
    right: 22px;
  }
  &__delete-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #2B2839;
    transition: .3s all;
    & object {
      width: 10px;
      height: auto;
      & path {
        transition: .3s all;
      }
    }
    &:hover {
      color: #045DA7;
      & path {
        fill: #045DA7 !important;
      }
    }
  }
  &__options-btn {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: auto;
      height: auto;
    }
  }
}
</style>
