<template>
  <div id="sponsors">
    <container header="Sponsors" wrap="true">
      <sponsor-card v-for="sponsor of sponsors" :sponsor="sponsor" :key="sponsor._id" />
    </container>
  </div>
</template>

<script>
import Container from "../components/core/Container";
import SponsorCard from "../components/SponsorCard";

export default {
  name: "sponsors",
  components: {
    SponsorCard,
    Container
  },
  data() {
    return {
      sponsors: []
    };
  },
  created() {
    this.$http("/sponsors/list").then(({ data }) => (this.sponsors = data));
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
</style>
