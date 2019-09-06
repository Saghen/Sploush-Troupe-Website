<template>
  <a :href="sponsor.url" class="sponsor-card no-underline" :class="{ 'alt-color': altColor }">
    <image-component :image="sponsor.logoImage" size="512" width="500"></image-component>
    <div v-html="sponsor.content"></div>
    <image-component :image="sponsor.image" size="512" width="500" height="280"></image-component>
  </a>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "sponsor-card",
  props: ["sponsor", "altColor"],
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
  justify-content: space-between;

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


