<template>
  <footer>
    <div id="footer">
      <router-link to="/sponsor-link">
        <image-component image="footersponsor1.png" size="256"></image-component>
      </router-link>
      <router-link to="/sponsor-link">
        <image-component image="footersponsor2.png" size="256"></image-component>
      </router-link>
      <router-link to="/sponsor-link">
        <image-component image="footertwitch.png" size="256"></image-component>
      </router-link>
      <router-link to="/sponsor-link">
        <image-component image="footertwitter.png" size="256"></image-component>
      </router-link>
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
}

#footer {
  padding: 16px;
  display: flex;
  justify-content: space-around;

  > a img {
    height: 48px;
  }
}

</style>
