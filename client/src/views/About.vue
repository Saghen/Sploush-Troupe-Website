<template>
  <div id="about">
    <container header="About Us">
      <div id="about-container">
        <image-component :image="image" width="900"></image-component>
        <separator></separator>
        <div v-html="content"></div>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "../components/core/Container";
import ImageComponent from "../components/core/Image.vue";
import Separator from "../components/core/Separator.vue";

export default {
  name: "about",
  components: {
    ImageComponent,
    Separator,
    Container
  },
  data() {
    return {
      image: "",
      content: ""
    };
  },
  created() {
    this.$http("/about/get").then(({ data }) => {
      this.image = data.image;
      this.content = data.content;
    });
  }
};
</script>

<style lang="scss">
#about-container {
  max-width: 900px;
  margin: auto;

  > * + * {
    margin-top: 32px;
  }
}

.emphasize {
  font-size: 1.2em;
  font-style: italic;
  font-weight: bold;
}
</style>
