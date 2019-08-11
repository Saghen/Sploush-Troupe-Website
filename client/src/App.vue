<template>
  <div id="app">
    <div id="primary-view">
      <header-nav id="header-nav"></header-nav>
      <side-nav id="side-nav"></side-nav>
      <div>
        <div id="router-view">
          <router-view />
        </div>
        <footer-nav></footer-nav>
      </div>
    </div>
  </div>
</template>

<script>
import config from "./config";

import SideNav from "@/components/SideNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
  mounted() {
    document.querySelector(
      "#app"
    ).style.backgroundImage = `url(//${config.api.domain}${config.images.path}/homebg.jpg)`;
  },
  components: {
    SideNav,
    HeaderNav,
    FooterNav
  }
};
</script>


<style lang="scss">
@import "@/styles/_normalize.scss";
@import "@/styles/_global.scss";

/* Global Stuff */

@font-face {
  font-family: Bebas;
  src: url("./assets/bebas.otf") format("opentype");
}

body {
  font-family: $primary-font;
  color: $text;
  background-size: cover;
  overflow: hidden;
}

#app {
  overflow-y: scroll;
  transform: translateZ(0);
  width: 100vw;
  height: 100vh;
  position: relative;
}

h1,
h2,
h3 {
  font-family: $header-font;
  letter-spacing: 0.06em;
  font-weight: normal;
}

p {
  letter-spacing: 0.05em;
  line-height: 1.5em;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
  background: $dark;
}

::-webkit-scrollbar-thumb {
  background: lighten($dark, 10);
}

/* Layout */

.content {
  line-height: 1.4em;
}

#primary-view {
  display: grid;
  grid-template-columns: 240px auto;
  max-width: 1600px;
  width: 100%;
  margin: auto;
}

#primary-view > div {
  display: flex;
  flex-direction: column;
}

#header-nav {
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: none;
}

#side-nav {
  position: sticky;
  left: 0;
  top: 0;
}

#router-view {
  box-sizing: border-box;
  padding: 16px;
  transform: translateZ(0);
  width: 100%;
}

@media only screen and (max-width: 900px) {
  #primary-view {
    display: block;
  }

  #header-nav {
    display: block;
  }

  #side-nav {
    display: none;
  }
}
</style>
