<template>
  <div class="manage-news">
    <router-link to="edit?schema=news" class="button">New News Item</router-link>
    <h1>News</h1>
    <div class="news-items">
      <news-card v-for="item in newsItems" :item="item" :key="item._id" />
    </div>
    <div>
      <div v-if="isEditing"></div>
    </div>
  </div>
</template>

<script>
import NewsCard from "Components/NewsCard";

export default {
  name: "manage-news",
  components: {
    NewsCard
  },
  data() {
    return {
      newsItems: [],
      isEditing: false
    };
  },
  methods: {
    async updateNews() {
      const newsItems = await this.$http("/news/list");
      this.newsItems = newsItems.data.map(val => {
        val.url = `edit?schema=news&id=${val._id}`;
        return val;
      });
    }
  },
  created() {
    this.updateNews();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globalAdmin.scss";

.manage-news {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.news-items {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background: $dark;
  align-self: center;
  justify-content: space-around;
}
</style>
