<template>
  <a :href="item.url" class="no-underline">
    <image-component :image="item.image" size="512"></image-component>
    <span>BUY NOW</span>
  </a>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "store-item",
  props: ["item"],
  components: {
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

img {
  width: 300px;
}

a {
  display: block;
  position: relative;
  color: $accent;
  font-size: 2em;
  font-family: $header-font;
  letter-spacing: 0.06em;
  transition: 0.2s color;

  &:hover {
    color: $accent-alt;
  }
}

a > span {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-decoration: underline;
  text-align: center;
}
</style>

