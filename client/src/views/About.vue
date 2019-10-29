<template>
  <div id="about">
    <container header="About Us">
      <div id="about-container">
        <image-component class="about--hero" :image="image"></image-component>
        <separator></separator>
        <div v-html="content"></div>
        <separator></separator>
        <div class="socials">
          <a class="socials--twitter" href="//twitter.com/sploushtroupe">
            <img src="../assets/twitter.png" />
            <span>@SPLOUSHTROUPE</span>
          </a>
          <a class="socials--discord" href="https://discord.gg/XFwAXZP ">
            <img src="../assets/discord.png" />
            <span>DISCORD.GG/XFWAXZP</span>
          </a>
          <a class="socials--instagram" href="//www.instagram.com/sploushtroupe/">
            <img src="../assets/instagram.png" />
            <span>@SPLOUSHTROUPE</span>
          </a>
          <a class="socials--patreon" href="https://www.patreon.com/SploushTroupe">
            <img src="../assets/patreon.png" />
            <span>SPLOUSHTROUPE</span>
          </a>
        </div>
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
@import "@/styles/_global.scss";

#about-container {
  max-width: 900px;
  width: 100%;
  margin: auto;

  > * + * {
    margin-top: 32px;
  }

  .about--hero {
    width: 100%;
    max-width: 900px;
  }
}

.socials {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;

  img {
    width: 64px;
    height: 64px;
    margin-right: 8px;
  }

  a {
    display: flex;
    align-items: center;
    font-family: $header-font;
    font-size: 2.5em;
    transition: 0.2s all;
    transform-origin: center;

    &:hover {
      transform: scale(1.05);
    }
  }

  .socials--instagram span {
    color: red;
    background: -webkit-linear-gradient(45deg, yellow, red, purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .socials--twitter span {
    color: #2DAAE1;
  }

  .socials--discord span {
    color: #7289DA;
  }

  .socials--patreon span {
    color: #F96854;
  }

  a::after {
    content: none;
  }
}

.emphasize {
  font-size: 1.2em;
  font-style: italic;
  font-weight: bold;
}

@media screen and (max-width: 1200px) {
  .socials {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * + * {
      margin-top: 16px;
    }
  }
}
</style>
