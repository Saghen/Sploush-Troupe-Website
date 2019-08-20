<template>
  <div class="array-editor">
    <a class="button" @click.prevent="add()">New</a>
    <div>
      <div v-for="(item, index) in value" :key="index">
        <a class="button" @click="deleteItem(index)">Delete</a>
        <editor-input
          v-for="input in schema.params"
          :key="input.name"
          :options="input"
          :value="value[index][input.name]"
          @input="emit(input.name, index, $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "array-editor",
  props: ["schema", "value"],
  components: {
    EditorInput: () => import("../EditorInput.vue")
  },
  methods: {
    emit(name, index, e) {
      const values = [...this.value];
      values[index][name] = e;

      this.$emit("input", values);
    },
    add() {
      let values = []
      if (Array.isArray(this.value)) values = [...this.value];
      values.push({});
      this.$emit("input", values);
    },
    deleteItem(index) {
      let values = [...this.value];
      values.splice(index, 1);

      this.$emit("input", values);
    }
  }
};
</script>

<style lang="scss" scoped>
.array-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  > * + * {
    margin-top: 16px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > div {
      padding: 32px;
      box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
      margin: 16px;

      > * + * {
        margin-top: 16px;
      }
    }
  }
}
</style>
