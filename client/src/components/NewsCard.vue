<template>
  <router-link
    :to="/\//.test(item.url) ? item.url : `/news/${item.url}`"
    class="news-card"
    :class="{ 'alt-color': altColor }"
  >
    <image-component :image="item.image" size="512" width="400" height="280"></image-component>
    <h3 class="title">{{ item.title }}</h3>
    <p class="content" v-html="item.description"></p>
  </router-link>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "news-card",
  props: ["item", "altColor"],
  components: {
    ImageComponent
  }
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.news-card {
  width: 400px;
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

.news-card.alt-color {
  color: $accent-alt;
  border-bottom-color: $accent-alt;

  &:hover {
    color: $accent;
    border-bottom-color: $accent;
  }
}

.content {
  color: $text;

  > * {
    margin: 0;
  }
}
</style>


