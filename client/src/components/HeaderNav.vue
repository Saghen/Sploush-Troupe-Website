<template>
  <header>
    <nav>
      <div id="top">
        <router-link class="no-underline" to="/" id="logo">
          <image-component image="logo.png" size="256"></image-component>
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <div
          class="hamburger"
          :class="{ selected: isExpanded }"
          @click.prevent="isExpanded = !isExpanded"
        ></div>
      </div>
      <div id="bottom" v-if="isExpanded">
        <div>
          <router-link to="/news">News</router-link>
          <router-link to="/teams">Teams</router-link>
          <router-link to="/streamers">Streamers</router-link>
          <router-link to="https://sectorsixapparel.com/collections/sploush-troupe">Store</router-link>
        </div>
        <div>
          <router-link to="/applications">Applications</router-link>
          <router-link to="/sponsors">Sponsors</router-link>
          <router-link to="//sectorsixapparel.com/collections/sploush-troupe">Store</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "header-nav",
  components: {
    ImageComponent
  },
  data() {
    return {
      isExpanded: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

nav {
  font-family: $header-font;
  font-size: 1.3em;
  letter-spacing: 0.06em;
  background: $dark;
  padding: 8px 32px;

  a {
    color: $text;
    text-decoration: none;
    transition: 0.2s color;

    &:hover {
      color: $accent;
    }
  }
}

#top {
  display: flex;
  align-items: center;

  > #logo img {
    height: 72px;
  }

  > * + * {
    margin-left: 24px;
  }

  > .hamburger {
    margin-left: auto;
  }
}

#bottom {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin-top: 8px;
  }

  > div + div,
  > div > * + * {
    margin-left: 16px;
  }
}

.hamburger {
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 12px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: $text;
    height: 2px;
    left: 0;
    right: 0;
    transition: 0.2s all;
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }

  &.selected::after {
    top: 5px;
    transform: rotate(45deg);
  }

  &.selected::before {
    bottom: 5px;
    transform: rotate(-45deg);
  }
}
</style>
