<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/_globalAdmin.scss';

.card {
  padding: 16px;
  background: darken($background, 10);
  display: flex;
  flex-direction: column;
}
</style>
