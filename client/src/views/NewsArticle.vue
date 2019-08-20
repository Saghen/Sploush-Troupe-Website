<template>
  <container :header="item.title">
    <div v-html="item.content"></div>
  </container>
</template>

<script>
import Container from "../components/core/Container";

export default {
  name: "news-article",
  components: {
    Container
  },
  data() {
    return {
      item: {}
    };
  },
  created() {
    this.$http
      .get(`/news/get?url=${this.$route.params.url}`)
      .then(data => (this.item = data.data));
  }
};
</script>
