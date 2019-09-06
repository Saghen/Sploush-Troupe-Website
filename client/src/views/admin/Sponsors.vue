<template>
  <div class="manage-sponsors">
    <router-link to="edit?schema=sponsor" class="button">New Sponsor</router-link>
    <h1>Sponsors</h1>
    <div class="sponsors">
      <router-link
        :to="`/manage/edit?schema=sponsor&id=${sponsor._id}`"
        v-for="sponsor in sponsors"
        :key="sponsor._id"
      >
        <sponsor-card :sponsor="sponsor" />
      </router-link>
    </div>
  </div>
</template>

<script>
import SponsorCard from "Components/SponsorCard";

export default {
  name: "manage-sponsors",
  components: {
    SponsorCard
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
@import "@/styles/_globalAdmin.scss";

.manage-sponsors {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sponsors {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background: $dark;
  align-self: center;
  justify-content: space-around;
}

a {
  text-decoration: none;
}
</style>
