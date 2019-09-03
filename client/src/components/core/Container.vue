<template>
  <div class="container">
    <h2 v-if="header">{{ header }}</h2>
    <div class="container-items" :class="{ column, wrap, center }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'container',
  props: ['header', 'column', 'wrap', 'center']
}
</script>

<style lang="scss" scoped>
@import '@/styles/_global.scss';

.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

h2 {
  border-bottom: 2px solid $accent;
  margin: 0;
  margin-bottom: 16px;
  text-align: left;
  font-size: 2em;
}

.container-items {
  display: flex;
  justify-content: space-around;
}

.column {
  flex-direction: column;
}

.wrap {
  flex-wrap: wrap;
}

.center {
  align-items: center;
  justify-content: center;
}
</style>

