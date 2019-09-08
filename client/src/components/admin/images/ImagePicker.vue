<template>
  <div id="picker">
    <a @click="refresh" class="button">Refresh</a>
    <div id="images">
      <a v-for="(image, key) of activeImages" :key="key">
        <font-awesome-icon class="delete" icon="trash" @click="() => deleteImage(image)" />
        <image-component :image="image" size="512" height="200" @click="copyToClipboard(image)" />
      </a>
    </div>
    <pagination v-if="maxPage > 1" v-model="page" :maxPage="maxPage"></pagination>
  </div>
</template>

<script>
import Pagination from "Components/Pagination";
import ImageComponent from "Components/core/Image";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrash);

export default {
  components: {
    Pagination,
    ImageComponent,
    FontAwesomeIcon
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
    },
    deleteImage(name) {
      this.$http
        .get(`/images/delete?filename=${name}`)
        .then(() => {
          this.$sendToast("Successfully deleted image")
          this.refresh();
        })
        .catch(err => this.$sendToastError(err.response.data.message));
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
@import "@/styles/_globalAdmin.scss";

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
    position: relative;
    display: block;
    // margin: 16px 8px 0 8px;
    cursor: pointer;

    > .delete {
      display: none;
      position: absolute;
      top: 4px;
      right: 4px;
      padding: 4px;
      background: #000;
    }

    > img {
      max-height: 200px;
      height: 100%;
    }

    &:hover > .delete {
      display: block;
    }
  }
}
</style>
