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
@import "@/styles/button.scss";

@font-face {
  font-family: Bebas;
  src: url("./assets/bebas.otf") format("opentype");
}

body {
  font-family: $primary-font;
  overflow: hidden;
}

a:not(.button) {
  position: relative;
  color: $accent;
  text-decoration: none;
  &::after {
    content: "";
    background-color: $accent;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 0;
    transition: 0.2s width;
  }

  &:hover::after {
    width: 100%;
  }
}

a.no-underline::after {
  content: none;
}

.toasted-container.top-right {
  top: 0 !important;
  right: 2% !important;
  max-width: 400px;
}
</style>
