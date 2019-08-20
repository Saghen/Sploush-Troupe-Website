<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>


<style lang="scss">
@import "@/styles/_normalize.scss";
@import "@/styles/_global.scss";

@font-face {
  font-family: Bebas;
  src: url("./assets/bebas.otf") format("opentype");
}

body {
  font-family: $primary-font;
  overflow: hidden;
}

.toasted-container.top-right {
  top: 0 !important;
  right: 2% !important;
  max-width: 400px;
}
</style>
