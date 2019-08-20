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
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import { ToggleButton } from "vue-js-toggle-button";

export default {
  name: "rich-text",
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return { editor: ClassicEditor, config: {} };
  },
  props: ["value"],
  methods: {
    emit(e) {
      this.$emit('input', e)
    }
  }
};
</script>
