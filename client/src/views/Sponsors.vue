<template>
  <div id="sponsors">
    <container header="Sponsors" wrap="true">
      <sponsor-card url="//rogueenergy.com/" banner="footersponsor1.png" image="sponsor1large.jpg"></sponsor-card>
      <sponsor-card url="//sectorsixapparel.com/" banner="footersponsor2.png" image="sponsor2large.jpg"></sponsor-card>
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
      listing: {
        title: "Job Position Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: "listing"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
</style>
