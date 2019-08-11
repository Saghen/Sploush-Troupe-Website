<template>
  <a :href="url" class="sponsor-card" :class="{ 'alt-color': altColor }">
    <image-component :image="banner" size="512" width="500"></image-component>
    <span class="content">{{ content }}</span>
    <image-component :image="image" size="512" width="500" height="280"></image-component>
  </a>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "sponsor-card",
  props: ["url", "banner", "image", "title", "content", "altColor"],
  components: {
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.sponsor-card {
  width: 500px;
  display: flex;
  flex-direction: column;
  color: $accent;
  text-decoration: none;
  border-bottom: 2px solid $accent;
  margin: 8px;
  padding-bottom: 6px;
  transition: 0.2s all;

  > * {
    margin: 6px 0;
  }

  &:hover {
    color: $accent-alt;
    border-bottom-color: $accent-alt;
  }
}

.alt-color {
  color: $accent-alt;
  border-bottom-color: $accent-alt;

  &:hover {
    color: $accent;
    border-bottom-color: $accent;
  }
}

.content {
  color: $text;
}
</style>


