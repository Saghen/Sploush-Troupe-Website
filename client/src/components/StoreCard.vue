<template>
  <a :href="item.url" class="no-underline">
    <image-component :image="item.image" size="512"></image-component>
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
  color: $text;
  font-size: 1.5em;
  font-family: $header-font;
  letter-spacing: 0.06em;
  transition: 0.2s all;

  &:hover {
    color: $accent;
    transform: scale(1.05);
  }
}

a > span {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: underline;
  text-align: center;
}
</style>

