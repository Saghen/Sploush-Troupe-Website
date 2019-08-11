<template>
  <div id="job-listing">
    <container :header="listing.title" column="true">
      <div></div>
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

#job-listing {
  max-width: 900px;
  margin: auto;
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
}

.title {
  font-size: 2em;
}
</style>
