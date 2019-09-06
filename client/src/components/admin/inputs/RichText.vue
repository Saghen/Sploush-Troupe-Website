<template>
  <div class="rich-text-editor">
    <ckeditor :value="value" :editor="editor" @input="emit" :config="config"></ckeditor>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

$width: 1200px;

.ckeditor {
  width: 100%;
  max-width: $width;
}
</style>

<script>
// import { ToggleButton } from "vue-js-toggle-button";

export default {
  name: "rich-text",
  components: {
    ckeditor: import("@ckeditor/ckeditor5-vue").component
  },
  data() {
    return { editor: import("@saghen/ckeditor5-build-custom"), config: { } };
  },
  props: ["value"],
  methods: {
    emit(e) {
      this.$emit("input", e);
    }
  }
};
</script>
