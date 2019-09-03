<template>
  <a
    @click="openModal"
    class="streamer-card"
    :class="{ 'alt-color': altColor, offline: !isOnline }"
  >
    <image-component :image="imageUrl" width="400" height="225" />
    <div class="title-container">
      <h3 class="title">{{ streamer.name }}</h3>
      <span class="streamer-status" :class="{ online: isOnline, offline: !isOnline }">
        <svg
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          style="margin-right: 8px;"
        >
          <circle cx="9" cy="9" r="9" />
        </svg>
      </span>
    </div>
    <span class="content" v-html="streamer.description"></span>
  </a>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "streamer-card",
  props: ["streamer", "altColor"],
  components: {
    ImageComponent
  },
  computed: {
    isOnline() {
      return this.streamer.twitchProfile.type === "live";
    },
    imageUrl() {
      if (!this.streamer.twitchProfile.thumbnail_url) return "offline.png";
      return this.streamer.twitchProfile.thumbnail_url.replace(
        "{width}x{height}",
        "400x280"
      );
    }
  },
  methods: {
    openModal() {
      this.$modal.show("streamer", { streamer: this.streamer });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.streamer-card {
  width: 400px;
  display: flex;
  flex-direction: column;
  color: $accent;
  text-decoration: none !important;
  border-bottom: 2px solid $accent;
  margin: 8px;
  padding-bottom: 6px;
  transition: 0.2s all;

  > * {
    margin: 6px 0;
  }

  .title {
    margin: 0;
  }

  &:hover {
    color: $accent-alt;
    border-bottom-color: $accent-alt;
  }

  &.offline {
    filter: brightness(0.6);
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

    > * {
      margin: 0;
    }
  }

  .title-container {
    display: flex;
  }
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


