<template>
  <div class="manage-news">
    <router-link to="edit?schema=streamer" class="button">New Streamer</router-link>
    <h1>Streamers</h1>
    <div class="news-items">
      <a
        :href="`/manage/edit?schema=streamer&id=${streamer._id}`"
        v-for="streamer in streamers"
        :key="streamer._id"
      >
        <streamer-card :streamer="streamer" />
      </a>
    </div>
  </div>
</template>

<script>
import StreamerCard from "Components/StreamerCard";

export default {
  name: "manage-news",
  components: {
    StreamerCard
  },
  data() {
    return {
      streamers: []
    };
  },
  async created() {
    const streamers = await this.$http("/streamers/list");
    this.streamers = streamers.data.map(val => {
      val.url = `edit?schema=streamer&id=${val._id}`;
      return val;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globalAdmin.scss";

.manage-news {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.news-items {
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
