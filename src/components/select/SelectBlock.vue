<template>
  <div v-click-outside="closeDropDown" class="select">
    <p
      v-if="!settings.title.titleAsPlaceholder"
      class="select__title">
      {{ settings.title.text }}
    </p>
    <button @click="openDropDown" class="select__value-container">
      <div class="select__value-img-container">
        <img v-if="activeElement && activeElement.img" :src="activeElement.img" alt="">
        <span
          class="select__value"
          :class="{
            'select__placeholder': activeElement,
            'select__title-placeholder': settings.title.titleAsPlaceholder && !activeElement
          }"
        >
        {{ valueElem }}
      </span>
      </div>
      <img
        src="@/assets/img/icons/select-arrow.svg"
        alt="Arrow"
        :style="{transform: dropDownShown ? 'rotate(180deg)' : ''}"
      >
    </button>
    <div class="select__elems" v-show="dropDownShown">
      <button
        class="select__elem"
        v-for="(elem, i) in settings.elements"
        :key="i"
        @click="selectElem(elem.text, elem.img, elem.raw)"
      >
        {{ elem.text }}
        <img v-if="elem.img" :src="elem.img" :alt="elem.text">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBlock',
  props: {
    settings: {
      type: Object,
      default: () => ({
        placeholder: '',
        title: {
          text: '',
          titleAsPlaceholder: false,
        },
        elements: [
          {
            text: '',
            img: null,
            raw: '',
          },
        ],
      }),
    },
  },
  emits: ['handle-select'],
  data() {
    return {
      activeElement: null,
      dropDownShown: false,
    };
  },
  methods: {
    selectElem(elem, img, raw) {
      this.activeElement = {
        text: elem,
        img,
        raw,
      };
      this.dropDownShown = false;
      this.$emit('handle-select', this.activeElement);
    },
    closeDropDown() {
      this.dropDownShown = false;
    },
    openDropDown() {
      this.dropDownShown = true;
    },
  },
  computed: {
    valueElem() {
      if (!this.activeElement) {
        return this.settings.placeholder;
      }
      if (this.activeElement.text) {
        return this.activeElement.text;
      }
      return this.activeElement;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  position: relative;

  &__value-container {
    padding: 8px 12px;
    background: $white;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
      width: 10px;
      height: 10px;
      transition: .3s all;
    }
  }
  &__value-img-container {
    text-align: left;
  }
  &__value {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    text-align: left;
  }

  &__placeholder {
    color: $super-dark-blue;
  }

  &__title, &__title-placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $black;
  }

  &__title {
    margin-bottom: 4px;
  }

  &__elems {
    position: absolute;
    bottom: 0;
    left: 0;
    background: $white;
    border: 1px solid #D9D9D9;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    transform: translateY(100%);
  }

  &__elem {
    padding: 8px 12px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #E0E5E6;
    text-align: left;

    & img {
      width: 16px;
      height: auto;
    }

    &:first-child {
      border-top: none;
    }
  }
}
</style>
