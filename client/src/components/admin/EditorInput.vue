<template>
  <div>
    <h2 v-if="options.type === 'editor'">{{options.nameReadable}}</h2>
    <rich-text-editor v-if="options.type === 'editor'" :value="value" @input="emit" />
    <h2 v-if="options.type === 'array'">{{options.nameReadable}}</h2>
    <array-editor
      v-if="options.type === 'array'"
      :schema="options.schema"
      :value="value"
      @input="emit"
    />
    <input
      v-if="options.type === 'number'"
      :max="options.max"
      :min="options.min"
      :class="{ large: options.large }"
      type="number"
      :value="value"
      :placeholder="options.nameReadable"
      @input="emit"
    />
    <input
      v-if="options.type === 'password'"
      :class="{ large: options.large }"
      :placeholder="options.nameReadable"
      type="password"
      :value="value"
      @input="emit"
    />
    <input
      v-if="options.type === 'url'"
      :class="{ large: options.large }"
      :placeholder="options.nameReadable"
      type="text"
      :value="value"
      @keypress="urlInput"
      @input="emit"
    />
    <input
      v-if="!options.type || options.type === 'image'"
      :class="{ large: options.large }"
      :placeholder="options.nameReadable"
      type="text"
      :value="value"
      @input="emit"
    />
    <span style="color: red"></span>
  </div>
</template>

<script>
import RichTextEditor from "Components/admin/inputs/RichText";
import ArrayEditor from "Components/admin/inputs/Array";

export default {
  name: "editor-input",
  props: ["value", "options"],
  components: {
    RichTextEditor,
    ArrayEditor
  },
  methods: {
    emit(e) {
      if (e.target) this.$emit("input", e.target.value);
      else this.$emit("input", e);
    },
    urlInput(e) {
      if (!/^[a-z-]*$/.test(e.key)) {
        this.$toasted.error("URL only accepts lowercase letters and -");
        e.preventDefault();
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  text-align: center;
}

.large {
  font-size: 2em;
}
</style>
