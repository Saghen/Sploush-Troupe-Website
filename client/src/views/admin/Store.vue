<template>
  <div class="manage-store">
    <router-link to="edit?schema=store-item" class="button">New Store Item</router-link>
    <h1>Store Items</h1>
    <div class="store-items">
      <a
        :href="`/manage/edit?schema=store-item&id=${item._id}`"
        v-for="item in storeItems"
        :key="item._id"
      >
        <store-card :item="item" />
      </a>
    </div>
  </div>
</template>

<script>
import Container from "../components/core/Container";
import StoreCard from "../components/StoreCard";

export default {
  name: "manage-sponsors",
  components: {
    StoreCard,
    Container
  },
  data() {
    return {
      storeItems: []
    };
  },
  created() {
    this.$http.get("/store/list").then(({ data }) => (this.storeItems = data));
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globalAdmin.scss";

.manage-store {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.store-items {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background: $dark;
  align-self: center;
  justify-content: space-around;
}

a {
  text-decoration: none;
}
</style>
