<template>
  <container class="streamer-modal" header="Streamer" column="true">
    <iframe
      :src="`https://player.twitch.tv/?channel=${streamer.twitchId}`"
      height="480"
      width="720"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    ></iframe>
    <separator />
    <container wrap="true" class="social-links">
      <a :href="`//www.twitch.tv/${streamer.twitchId}`">
        <font-awesome-icon :icon="['fab', 'twitch']" size="4x"></font-awesome-icon>
      </a>
      <a v-if="streamer.youtubeId" :href="streamer.youtubeUrl">
        <font-awesome-icon :icon="['fab', 'youtube']" size="4x"></font-awesome-icon>
      </a>
      <a v-if="streamer.twitterHandle" :href="`//twitter.com/${streamer.twitterHandle}`">
        <font-awesome-icon :icon="['fab', 'twitter']" size="4x"></font-awesome-icon>
      </a>
    </container>
  </container>
</template>

<script>
// TODO: Add twitch, youtube, and twitter when present
import Container from "Components/core/Container";
import Separator from "Components/core/Separator";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitch,
  faYoutube,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTwitch, faYoutube, faTwitter);

export default {
  name: "streamer-modal",
  props: ["streamer"],
  components: { Container, Separator, FontAwesomeIcon }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.streamer-modal > div > * + * {
  margin-top: 24px;
}

.social-links a {
  color: $text;
}
</style>
