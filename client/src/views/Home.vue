<template>
  <div id="home">
    <container header="Merchandise" wrap="true">
      <store-card url="temp-url" image="store1menu.png"></store-card>
      <store-card url="temp-url" image="store2menu.png"></store-card>
      <store-card url="temp-url" image="store3menu.png"></store-card>
    </container>
    <container header="Teams" wrap="true">
      <team-card v-for="team in teams" :key="team._id" :team="team"></team-card>
    </container>
    <container header="Recent News" wrap="true">
      <news-card v-for="(item, index) in news" :item="item" :key="item._id" :altColor="index % 2 === 1"></news-card>
    </container>
  </div>
</template>

<script>
import StoreCard from "../components/StoreCard";
import TeamCard from "../components/TeamCard";
import NewsCard from "../components/NewsCard";
import Container from "../components/core/Container";

export default {
  name: "home",
  components: {
    StoreCard,
    TeamCard,
    NewsCard,
    Container
  },
  data() {
    return {
      news: [],
      teams: []
    };
  },
  created() {
    this.$http.get('/news/list').then(data => {
      this.news = data.data
    })
    this.$http.get('/teams/list').then(data => {
      this.teams = data.data
    })
  }
};
</script>

<style lang="scss" scoped>
#home > * + * {
  margin-top: 32px;
}
</style>
