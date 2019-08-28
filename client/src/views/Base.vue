<template>
  <div id="primary-view">
    <div>
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
import config from "Config";

import SideNav from "@/components/SideNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
  mounted() {
    document.querySelector(
      "#primary-view"
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
@import "@/styles/_global.scss";

/* Global Stuff */

#primary-view {
  height: 100vh;
  overflow: auto;
  transform: translateZ(0);
  color: $text;
  background-color: desaturate($dark, 0.2);
  background-size: cover;

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
}

#primary-view::-webkit-scrollbar {
  width: 12px;
}

#primary-view::-webkit-scrollbar-track {
  background: $dark;
}

#primary-view::-webkit-scrollbar-thumb {
  background: lighten($dark, 10);
}

/* Layout */

.content {
  line-height: 1.4em;
}

#primary-view > div {
  display: grid;
  grid-template-columns: 240px auto;
  max-width: 1600px;
  width: 100%;
  margin: auto;
}

#primary-view > div > div {
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
  #primary-view > div {
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
