<template>
  <img :src="url" :alt="image" :width="width" :height="height" style="object-fit:cover;"/>
</template>

<script>
import isUrl from 'is-url';
import config from "Root/config";

export default {
  name: "image-component",
  props: ["image", "size", 'width', 'height'],
  computed: {
    url() {
      if (isUrl(this.image)) return this.image;
      let url = `//${config.api.domain}${config.images.path}/${this.image}`;
      if (this.size) url += `?size=${this.size}`;

      return url;
    }
  }
};
</script>
