<template>
  <a :href="url">
    <image-component :image="image" size="512"></image-component>
    <span>BUY NOW</span>
  </a>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "store-item",
  props: ["url", "image"],
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
  color: $text;
  font-size: 2em;
  font-family: $header-font;
  letter-spacing: 0.06em;

  &:hover {
    color: $accent;
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

