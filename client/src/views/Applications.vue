<template>
  <div id="applications">
    <container class="job-listing-container" header="Applications" column="true">
      <div class="job-listing" v-for="(listing, key) of listings" :key="key">
        <span class="title">{{ listing.title }}</span>
        <p>{{ listing.description }}</p>
        <router-link class="link" :to="`/applications/${listing.url}`">READ MORE AND APPLY</router-link>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "../components/core/Container";

export default {
  name: "applications",
  components: {
    Container
  },
  data() {
    const listing = {
      title: "Job Position Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      url: "listing"
    };
    return {
      listings: [listing, listing, listing]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.job-listing {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.link, .title {
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
