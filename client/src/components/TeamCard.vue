<template>
  <router-link :to="/edit\?/.test(team.url) ? team.url : `/teams/${team.url}`">
    <image-component :image="team.image" size="512"></image-component>
    <span>VIEW TEAM</span>
  </router-link>
</template>

<script>
import ImageComponent from './core/Image.vue';

export default {
  name: 'team-card',
  props: ['team'],
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
  color: $accent;
  transition: 0.2s color;

  &:hover {
    color: $accent-alt;
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

