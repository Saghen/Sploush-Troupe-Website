<template>
  <nav>
    <div>
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
      <router-link to="/">
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
        <span>About Us</span>
      </router-link>
      <router-link to="/store">
        <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
        <span>Store</span>
      </router-link>
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
  faShoppingCart
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
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

nav {
  display: flex;
  background-color: $dark;
  border-left: 2px solid $accent;
  border-right: 2px solid $accent;
  height: 100vh;

  > div {
    max-height: 500px;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}

nav a {
  font-family: $header-font;
  color: $text;
  font-size: 1.2em;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: 0.2s color;
  display: flex;
  justify-content: center;

  &:hover {
    color: $accent;
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
