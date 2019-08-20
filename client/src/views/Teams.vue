<template>
  <container header="Teams">
    <team-card v-for="team in teams" :key="team._id" :team="team" />
  </container>
</template>

<script>
import TeamCard from "../components/TeamCard";
import Container from "../components/core/Container";

export default {
  name: "teams",
  components: {
    TeamCard,
    Container
  },
  data() {
    return {
      teams: []
    };
  },
  created() {
    this.$http.get("/teams/list").then(data => {
      this.teams = data.data;
    });
  }
};
</script>
