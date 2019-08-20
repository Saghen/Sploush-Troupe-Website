<template>
  <div class="manage-teams">
    <router-link to="edit?schema=team" class="button">New Team</router-link>
    <h1>Teams</h1>
    <div class="teams-items">
      <team-card v-for="team in teams" :team="team" :key="team._id" />
    </div>
  </div>
</template>

<script>
import TeamCard from "Components/TeamCard";

export default {
  name: "manage-teams",
  components: {
    TeamCard
  },
  data() {
    return {
      teams: []
    };
  },
  async created() {
    const teams = await this.$http("/teams/list");
    this.teams = teams.data.map(val => {
      val.url = `edit?schema=team&id=${val._id}`;
      return val;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globalAdmin.scss";

.manage-teams {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.teams-items {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background: $dark;
  align-self: center;
  justify-content: space-around;
}
</style>
