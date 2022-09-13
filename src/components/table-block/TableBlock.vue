<template>
  <div class="table">
    <div
      ref="delete-modal"
      class="table__delete-modal"
      v-show="deleteModalShown"
      v-click-outside="hideDeleteModal"
    >
      <button @click="deleteItem" class="table__delete-btn">
        <object
          type="image/svg+xml"
          :data="require('@/assets/img/icons/trash.svg')"
        >
          Trash icon
        </object>
        <span>удалить</span>
      </button>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>Номер накладной</th>
        <th>Тип заказа</th>
        <th>Дата создания</th>
        <th></th>
      </tr>
      <tr v-for="tr in tableData" :key="tr.id">
        <td>{{ tr.id }}</td>
        <td>{{ tr.number }}</td>
        <td>{{ definitions[tr.type] }}</td>
        <td>{{ convertDateFormat(tr.creationDate) }}</td>
        <td>
          <button @click="toggleDeleteModal(tr, $event)" class="table__options-btn">
            <img src="@/assets/img/icons/dots.svg" alt="Options">
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import convertDateFormat from '@/assets/script/convertDateFormat';

export default {
  name: 'TableBlock',
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
      dates: 'convertedDates',
    }),
  },
  methods: {
    convertDateFormat,
    stringDateToDate(date) {
      return new Date(date);
    },
    toggleDeleteModal(item, e) {
      this.itemToDelete = item;
      console.log(e.target.offsetTop);
      const container = e.target.closest('tr');
      this.$refs['delete-modal'].style.top = `${container.offsetTop + 31}px`;
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
.table {
  width: 100%;
  position: relative;
  &__delete-modal {
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
    border-radius: 2px;
    padding: 12px 16px;
    width: 148px;
    right: 30px;
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
    margin: 0 auto;
    & img {
      width: auto;
      height: auto;
    }
  }
  & table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #E6E6E6;
    & tr {
      border-spacing: 3px;
    }
    & td {
      padding: 12px 0;
      background: #FFFFFF;
      border-bottom: 1px solid #E6E6E6;
      &:first-child {
        padding: 12px 16px;
      }
      &:last-child {
        width: 65px;
      }
    }
    & th {
      background: $gray;
      padding: 12px 0;
      border-right: 3px solid $white;
      &:last-child {
        width: 65px;
        border-right: none;
      }
    }
  }
}
</style>
