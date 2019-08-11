<template>
  <div id="about">
    <container header="About Us">
      <div id="about-container">
        <image-component image="about.png" width="900"></image-component>
        <separator></separator>
        <p>
          <span class="emphasize">OUR AIM</span> as a company is to bring the action to you, with our specialised teams in game such as Fortnite, Dota 2, and CSGO.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ltierature from 45 BC, making it over 2000 years old.
        </p>
        <p>
          <span class="emphasize">OUR VISION</span> are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <p>
          <span class="emphasize">OUR IDEAL</span> desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>
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
