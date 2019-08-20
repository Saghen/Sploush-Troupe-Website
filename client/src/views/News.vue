<template>
  <container header="News" wrap="true">
    <news-card v-for="(item, index) in news" :item="item" :key="item._id" :altColor="index % 2 === 1"></news-card>
  </container>
</template>

<script>
import NewsCard from "../components/NewsCard";
import Container from "../components/core/Container";

export default {
  name: "news",
  components: {
    NewsCard,
    Container
  },
  data() {
    return {
      news: []
    };
  },
  created() {
    this.$http.get("/news/list").then(data => {
      this.news = data.data;
    });
  }
};
</script>
