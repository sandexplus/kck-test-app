<template>
  <div class="input">
    <p v-if="title" class="input__title">{{ title }}</p>
    <input
      :value="value"
      @input="input($event.target.value)"
      :placeholder="placeholder"
      class="input__input"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: ['placeholder', 'title', 'value'],
  emits: ['handle-input'],
  methods: {
    input(value) {
      this.$emit('input', value);
      this.$emit('handle-input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  &__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $black;
    margin-bottom: 4px;
  }
  &__input {
    width: 100%;
    padding: 8px 12px;
    background: $white;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $super-dark-blue;
    &::placeholder {
      color: #A5A5A5;
    }
  }
}
</style>
