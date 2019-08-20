<template>
  <div class="editor">
    <div>
      <h2 style="text-align: center">Image Manager</h2>
      <image-manager />
    </div>
    <editor-component :schema="schema" :id="id" />
  </div>
</template>

<script>
import getSchema from "Root/schemas";
import ImageManager from "Components/admin/images/ImageManager";
import EditorComponent from "Components/admin/Editor";

export default {
  name: "editor",
  components: {
    ImageManager,
    EditorComponent
  },
  data() {
    return {
      params: {},
      id: this.$route.query.id
    };
  },
  computed: {
    schema() {
      let schema = getSchema(this.$route.query.schema);
      addCapitalizedWordsToSchema(schema);
      return schema;
    }
  }
};

function addCapitalizedWordsToSchema(schema) {
  schema.params = schema.params.map(val => {
    val.nameReadable = toCapitalizedWords(val.name);
    if (val.schema) addCapitalizedWordsToSchema(val.schema)
    return val;
  });
}

function toCapitalizedWords(name) {
  var words = name.match(/[A-Za-z][a-z]*/g) || [];
  return words.map(capitalize).join(" ");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
</script>
