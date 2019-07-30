<template>
  <container header="News" wrap="true">
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
      newsTitle: "Title of Recent News",
      newsContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    };
  }
};
</script>
