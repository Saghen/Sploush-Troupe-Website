<template>
  <div class="job-listing">
    <span class="title">{{ listing.name }}</span>
    <div v-html="listing.description"></div>
    <router-link class="link" :to="`/applications/${listing.url}`">READ MORE AND APPLY</router-link>
  </div>
</template>

<script>
export default {
  name: "application-card",
  props: ["listing"]
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.job-listing {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  color: $text;
}

.link,
.title {
  display: block;
  position: relative;
  color: $text;
  font-family: $header-font;
  letter-spacing: 0.06em;
  text-decoration: underline;
}

.link {
  font-size: 1.2em;
  align-self: flex-end;
  transition: 0.2s all;

  &:hover {
    color: $accent;
  }
}

.title {
  font-size: 2em;
}
</style>
