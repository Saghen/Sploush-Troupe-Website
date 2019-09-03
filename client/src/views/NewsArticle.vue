<template>
  <container :header="item.title" column="true">
    <image-component :image="item.bannerImage" style="width: 100%" />
    <div v-html="item.content"></div>
  </container>
</template>

<script>
import Container from "../components/core/Container";
import ImageComponent from "Components/core/Image";

export default {
  name: "news-article",
  components: {
    Container,
    ImageComponent
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
