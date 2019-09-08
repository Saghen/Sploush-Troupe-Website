<template>
  <div class="manage-applications">
    <router-link to="edit?schema=application" class="button">New Application</router-link>
    <h1>Applications</h1>
    <div class="applications">
      <router-link
        class="no-underline"
        :to="`/manage/edit?schema=application&id=${listing._id}`"
        v-for="listing in listings"
        :key="listing.url"
      >
        <application-card :listing="listing"></application-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import ApplicationCard from "Components/ApplicationCard";

export default {
  name: "manage-news",
  components: {
    ApplicationCard
  },
  data() {
    return {
      listings: []
    };
  },
  methods: {
    async updateListings() {
      const listings = await this.$http("/applications/list");
      this.listings = listings.data.map(val => {
        val.url = `edit?schema=application&id=${val._id}`;
        return val;
      });
    }
  },
  created() {
    this.updateListings();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globalAdmin.scss";

.manage-applications {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.applications {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background: $dark;
  align-self: center;
  justify-content: space-around;
  width: 100%;
  > a {
    width: 100%;
  }
}

a {
  text-decoration: none;
}
</style>
