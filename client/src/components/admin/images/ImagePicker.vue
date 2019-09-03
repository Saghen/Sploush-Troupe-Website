<template>
  <div id="picker">
    <a @click="refresh" class="button">Refresh</a>
    <div id="images">
      <a v-for="(image, key) of activeImages" :key="key" @click="copyToClipboard(image)">
        <image-component :image="image" size="512" height="200" />
      </a>
    </div>
    <pagination v-if="maxPage > 1" v-model="page" :maxPage="maxPage"></pagination>
  </div>
</template>

<script>
import Pagination from "Components/Pagination";
import ImageComponent from "Components/core/Image";

export default {
  components: {
    Pagination,
    ImageComponent
  },
  data() {
    return {
      images: [],
      page: 1,
      countPerPage: 16
    };
  },
  methods: {
    refresh() {
      this.$http.get("/images/list").then(res => (this.images = res.data));
    },
    copyToClipboard(str) {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.$sendToast("Copied to clipboard");
    }
  },
  computed: {
    activeImages() {
      const activeImages = [];
      const countPerPage = this.countPerPage;
      const page = this.page - 1;

      const startIndex = page * countPerPage;
      const endIndex = Math.min(
        this.images.length,
        page * countPerPage + countPerPage
      );

      for (let i = startIndex; i < endIndex; i++) {
        activeImages.push(this.images[i]);
      }

      return activeImages;
    },
    maxPage() {
      return Math.ceil(this.images.length / this.countPerPage);
    }
  },
  mounted() {
    this.refresh();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

#picker {
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
    margin-top: 16px;
  }
}

#images {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background: $dark;
  padding: 16px;

  > a {
    display: block;
    // margin: 16px 8px 0 8px;
    cursor: pointer;

    > img {
      max-height: 200px;
      height: 100%;
    }
  }
}
</style>
