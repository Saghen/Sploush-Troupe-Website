<template>
  <div id="applications">
    <container class="job-listing-container" header="Applications" column="true">
      <application-card v-for="listing of listings" :key="listing.url" :listing="listing"></application-card>
    </container>
  </div>
</template>

<script>
import Container from "../components/core/Container";
import ApplicationCard from "Components/ApplicationCard";

export default {
  name: "applications",
  components: {
    Container,
    ApplicationCard
  },
  data() {
    return {
      listings: []
    };
  },
  created() {
    this.$http.get("/applications/list").then(data => {
      this.listings = data.data;
    });
  }
};
</script>


