<template>
  <container class="team-member-modal" column="true" separator="24px">
    <container :header="member.name">
      <image-component :image="member.image" width="300px" />
      <container class="social-links" column="true" wrap="true">
        <a v-if="member.twitchId" :href="`//www.twitch.tv/${member.twitchId}`" class="no-underline">
          <font-awesome-icon :icon="['fab', 'twitch']" size="4x"></font-awesome-icon>
        </a>
        <a v-if="member.youtubeId" :href="member.youtubeUrl" class="no-underline">
          <font-awesome-icon :icon="['fab', 'youtube']" size="4x"></font-awesome-icon>
        </a>
        <a
          v-if="member.twitterHandle"
          :href="`//twitter.com/${member.twitterHandle}`"
          class="no-underline"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" size="4x"></font-awesome-icon>
        </a>
        <a
          v-if="member.instagramHandle"
          :href="`//www.instagram.com/${member.instagramHandle}`"
          class="no-underline"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" size="4x"></font-awesome-icon>
        </a>
      </container>
    </container>
    <separator />
  </container>
</template>

<script>
// TODO: Add twitch, youtube, and twitter when present
import Container from "Components/core/Container";
import Separator from "Components/core/Separator";
import ImageComponent from "Components/core/Image";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitch,
  faYoutube,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTwitch, faYoutube, faTwitter, faInstagram);

export default {
  name: "team-member-modal",
  props: ["member"],
  components: { Container, Separator, FontAwesomeIcon, ImageComponent },
  mounted() {
    console.log(this.member);
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.team-member-modal > div > * + * {
  margin-top: 24px;
}

.social-links {
  margin-left: 24px;
}

.social-links a {
  color: $text;
  margin: 8px;
  padding: 8px;
}
</style>
