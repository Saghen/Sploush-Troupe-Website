<template>
  <a :href="url">
    <image-component :image="image" size="512"></image-component>
    <span>VIEW TEAM</span>
  </a>
</template>

<script>
import ImageComponent from './core/Image.vue';

export default {
  name: 'team-card',
  props: ['url', 'image'],
  components: {
    ImageComponent
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

img {
  width: 300px;
}

a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $text;

  &:hover {
    color: $accent;
  }
}

a > span {
  font-family: $header-font;
  letter-spacing: 0.06em;

  font-size: 1.2em;
  margin-top: 16px;
  text-decoration: underline;
}
</style>

