<template>
  <nav>
    <div class="social-links">
      <a href="//twitter.com/sploushtroupe">
        <image-component image="footertwitter.png" size="256"></image-component>
      </a>
      <a href="//www.instagram.com/sploushtroupe/" class="no-underline">
        <image-component image="footerinstagram.png" size="256"></image-component>
      </a>
      <a href="//www.patreon.com/SploushTroupe" class="no-underline">
        <img src="../assets/patreon-outline.png" >
      </a>
      <a href="//discord.gg/XFwAXZP" class="no-underline">
        <img src="../assets/discord-outline.png" >
      </a>
    </div>
    <div class="nav-links">
      <router-link to="/">
        <font-awesome-icon icon="home"></font-awesome-icon>
        <span>Home</span>
      </router-link>
      <router-link to="/news">
        <font-awesome-icon icon="newspaper"></font-awesome-icon>
        <span>News</span>
      </router-link>
      <router-link to="/teams">
        <font-awesome-icon icon="users"></font-awesome-icon>
        <span>Teams</span>
      </router-link>
      <router-link to="/streamers">
        <font-awesome-icon :icon="['fab', 'twitch']"></font-awesome-icon>
        <span>Streamers</span>
      </router-link>
      <router-link class="no-underline" to="/">
        <div id="logo">
          <image-component image="logo.png" size="256"></image-component>
        </div>
      </router-link>
      <router-link to="/applications">
        <font-awesome-icon icon="paper-plane"></font-awesome-icon>
        <span>Applications</span>
      </router-link>
      <router-link to="/sponsors">
        <font-awesome-icon icon="handshake"></font-awesome-icon>
        <span>Sponsors</span>
      </router-link>
      <router-link to="/about">
        <img src="../assets/about-us-icon.png" style="height: 24px" />
        <span>About Us</span>
      </router-link>
      <a href="https://sectorsixapparel.com/collections/sploush-troupe">
        <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
        <span>Store</span>
      </a>
    </div>
    <div class="social-links" style="visibility: hidden;">
      <a href="//twitter.com/sploushtroupe">
        <image-component image="footertwitter.png" size="256"></image-component>
      </a>
    </div>
  </nav>
</template>

<script>
import ImageComponent from "./core/Image.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faNewspaper,
  faUsers,
  faPaperPlane,
  faHandshake,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHome,
  faNewspaper,
  faUsers,
  faPaperPlane,
  faHandshake,
  faShoppingCart,
  faTwitch
);

export default {
  name: "side-nav",
  components: {
    FontAwesomeIcon,
    ImageComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: $dark;
  border-left: 2px solid $accent;
  border-right: 2px solid $accent;
  height: 100vh;

  > .social-links {
    margin-bottom: 8px;
    > * + * {
      margin-top: 24px;
    }
    img {
      width: 48px;
      height: 100%;
    }
  }

  > .nav-links {
    max-height: 500px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}

nav a {
  font-family: $header-font;
  color: $text;
  font-size: 1.3em;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  will-change: transform;

  &:hover {
    color: $accent;
    transform: scale(1.1);
  }

  &::after {
    content: none;
  }

  * + * {
    margin-left: 16px;
  }
}

#logo {
  margin: 16px 0;

  > img {
    width: 160px;
  }
}
</style>
