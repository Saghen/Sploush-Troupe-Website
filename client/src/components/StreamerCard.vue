<template>
  <a :href="url" class="streamer-card" :class="{ 'alt-color': altColor, offline: !isOnline }">
    <image-component :image="image" size="512" width="400" height="280"></image-component>
    <div class="title-container">
      <h3 class="title">{{ title }}</h3>
      <span class="streamer-status" :class="{ online: isOnline, offline: !isOnline }">
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="margin-right: 8px;">
          <circle cx="9" cy="9" r="9" />
        </svg>
      </span>
    </div>
    <span class="content">{{ content }}</span>
  </a>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "streamer-card",
  props: ["url", "image", "title", "content", "altColor", "isOnline"],
  components: {
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.streamer-card {
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

  &.offline {
    filter: brightness(0.6);
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

.title-container {
  display: flex;
}

.streamer-status {
  margin-left: auto;
  display: flex;
  float: right;
  font-family: $header-font;
  align-items: center;
  letter-spacing: 0.06em;

  &.online {
    color: #9bf874;
    fill: #9bf874;

    &::after {
      content: "ONLINE";
    }
  }

  &.offline {
    color: #d81120;
    fill: #d81120;

    &::after {
      content: "OFFLINE";
    }
  }
}
</style>


