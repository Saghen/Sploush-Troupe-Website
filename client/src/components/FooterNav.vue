<template>
  <footer>
    <div id="footer">
      <a href="//rogueenergy.com/" class="no-underline">
        <image-component image="footersponsor1.png" size="256"></image-component>
      </a>
      <a href="//sectorsixapparel.com/" class="no-underline">
        <image-component image="footersponsor2.png" size="256"></image-component>
      </a>
      <a href="//twitter.com/sploushtroupe" class="no-underline">
        <image-component image="footertwitter.png" size="256"></image-component>
      </a>
      <a href="//www.instagram.com/sploushtroupe/" class="no-underline">
        <image-component image="footerinstagram.png" size="256"></image-component>
      </a>
    </div>
  </footer>
</template>

<script>
import ImageComponent from "./core/Image.vue";

export default {
  name: "footer-nav",
  components: {
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

footer {
  margin-top: auto;
  transform: translateZ(0);
}

#footer {
  padding: 16px;
  display: flex;
  justify-content: space-around;

  > a {
    transition: 0.2s transform;
    will-change: transform;
  }

  > a:hover {
    transform: scale(1.05);
  }

  > a img {
    height: 48px;
  }
}

@media only screen and (max-width: 760px) {
  #footer {
    align-items: center;
    flex-direction: column;

    * + * {
      margin-top: 16px;
    }
  }
}
</style>
