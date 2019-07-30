<template>
  <div id="home">
    <container header="Merchandise">
      <store-card url="temp-url" image="store1menu.png"></store-card>
      <store-card url="temp-url" image="store2menu.png"></store-card>
      <store-card url="temp-url" image="store3menu.png"></store-card>
    </container>
    <container header="Teams">
      <team-card url="temp-url" image="fortniteteamlogo.png"></team-card>
      <team-card url="temp-url" image="csgoteamlogo.png"></team-card>
      <team-card url="temp-url" image="dota2teamlogo.png"></team-card>
    </container>
    <container header="Recent News" wrap="true">
      <news-card url="temp-url" :title="newsTitle" :content="newsContent" image="dreamhack2.jpg"></news-card>
      <news-card
        url="temp-url"
        :title="newsTitle"
        :content="newsContent"
        image="dreamhack.jpg"
        altColor="true"
      ></news-card>
      <news-card url="temp-url" :title="newsTitle" :content="newsContent" image="dreamhack2.jpg"></news-card>
      <news-card
        url="temp-url"
        :title="newsTitle"
        :content="newsContent"
        image="dreamhack.jpg"
        altColor="true"
      ></news-card>
      <news-card url="temp-url" :title="newsTitle" :content="newsContent" image="dreamhack2.jpg"></news-card>
      <news-card
        url="temp-url"
        :title="newsTitle"
        :content="newsContent"
        image="dreamhack.jpg"
        altColor="true"
      ></news-card>
      <news-card url="temp-url" :title="newsTitle" :content="newsContent" image="dreamhack2.jpg"></news-card>
      <news-card
        url="temp-url"
        :title="newsTitle"
        :content="newsContent"
        image="dreamhack.jpg"
        altColor="true"
      ></news-card>
      <news-card url="temp-url" :title="newsTitle" :content="newsContent" image="dreamhack2.jpg"></news-card>
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
      newsTitle: "Title of Recent News",
      newsContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    };
  }
};
</script>

<style lang="scss" scoped>
#home > * + * {
  margin-top: 32px;
}
</style>
