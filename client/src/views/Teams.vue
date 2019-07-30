<template>
  <container header="Teams">
    <team-card url="temp-url" image="fortniteteamlogo.png"></team-card>
    <team-card url="temp-url" image="csgoteamlogo.png"></team-card>
    <team-card url="temp-url" image="dota2teamlogo.png"></team-card>
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
  }
};
</script>
