<template>
  <img :src="url" :alt="image" :width="width" :height="height" style="object-fit:cover;"/>
</template>

<script>
import config from "../../config";

export default {
  name: "image-component",
  props: ["image", "size", 'width', 'height'],
  computed: {
    url() {
      let url = `//${config.api.domain}${config.images.path}/${this.image}`;
      if (this.size) url += `?size=${this.size}`;

      return url;
    }
  }
};
</script>
