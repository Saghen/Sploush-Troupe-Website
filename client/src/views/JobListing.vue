<template>
  <div id="job-listing">
    <container :header="listing.name" column="true" center="true">
      <div v-html="listing.content"></div>
      <a class="link no-underline" :href="listing.applyUrl">APPLY NOW</a>
    </container>
  </div>
</template>

<script>
import Container from "../components/core/Container";

export default {
  name: "job-listing",
  components: {
    Container
  },
  data() {
    return {
      listing: {}
    };
  },
  created() {
    this.$http(`/applications/get?url=${this.$route.params.url}`).then(
      data => (this.listing = data.data)
    );
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

#job-listing {
  max-width: 900px;
  margin: auto;
}

.link {
  display: block;
  position: relative;
  color: $text;
  font-family: $header-font;
  letter-spacing: 0.06em;
  text-decoration: underline;
  font-size: 1.2em;
  transition: 0.2s color;

  &:hover {
    color: $accent;
  }
}

.title {
  font-size: 2em;
}
</style>
