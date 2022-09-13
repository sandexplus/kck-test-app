<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Тестовое задание</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
.header {
  height: 260px;
  width: 100vw;
  display: flex;
  align-items: center;
  background:
    linear-gradient(267.21deg, #900793 0.16%,
      rgba(134, 4, 137, 0.785707) 0.16%,
      rgba(159, 12, 162, 0.762269) 43.22%,
      rgba(5, 1, 190, 0.734375) 98.12%,
      rgba(0, 28, 126, 0.619792) 100.15%,
      rgba(6, 77, 142, 0.447917) 102.03%,
      rgba(1, 0, 60, 0) 102.73%);
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: $white;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
