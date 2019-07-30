<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
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
  color: $text;
  background-image: url("//localhost:8080/images/homebg.jpg");
  background-size: cover;
  overflow: hidden;
}

#app {
  overflow-y: scroll;
  transform: translateZ();
  width: 100vw;
  height: 100vh;
  position: relative;
}

h1, h2, h3 {
  font-family: $header-font;
  letter-spacing: 0.06em;
  font-weight: normal;
}

.content {
  line-height: 1.4em;
}
</style>
