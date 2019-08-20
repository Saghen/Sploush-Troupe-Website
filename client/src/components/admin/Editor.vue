<template>
  <div class="editor">
    <a class="button" @click.prevent="deleteItem">Delete</a>
    <editor-input
      v-for="input in schema.params"
      :key="input.name"
      :options="input"
      v-model="values[input.name]"
    />
    <a class="button" @click.prevent="save">Save Changes</a>
  </div>
</template>

<script>
import EditorInput from "Components/admin/EditorInput";

export default {
  name: "editor-component",
  components: {
    EditorInput
  },
  data() {
    return {
      values: {}
    };
  },
  props: ["schema", "id"],
  async beforeCreated() {
    for (const param of this.schema.params) {
      if (param.type === "array") this.values[param.name] = [];
      else this.values[param.name] = "";
    }
  },
  async created() {
    if (this.id === undefined) return;
    this.values = (await this.$http(
      `${this.schema.endpoint}/get?id=${this.id}`
    )).data;
  },
  methods: {
    async save() {
      try {
        if (this.id)
          await this.$http.post(`${this.schema.endpoint}/update`, {
            id: this.id,
            ...this.values
          });
        else
          await this.$http.post(`${this.schema.endpoint}/insert`, {
            ...this.values
          });
      } catch (err) {
        if (err.response.status === 400) {
          this.$sendToastError(
            "There was an issue while saving. Did you fill in all the values?"
          );
        }
        this.$sendToastError(err.response.data.message);
        return;
      }

      this.$sendToast("Successfully saved");
    },
    async deleteItem() {
      if (!this.id)
        return this.$sendToastError(
          `Cannot delete an item that hasn't been saved`
        );
      try {
        await this.$http.post(`${this.schema.endpoint}/delete`, {
          id: this.id
        });
        this.$sendToast("Successfully deleted item");
        this.$router.go(-1);
      } catch (err) {
        this.$sendToastError(err.response.data.message);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.editor {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;

  > * + * {
    margin-top: 32px;
  }
}
</style>
