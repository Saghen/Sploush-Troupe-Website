<template>
  <div class="manage-streamers">
    <router-link to="edit?schema=streamer" class="button">New Streamer</router-link>
    <h1>Streamers</h1>
    <div class="streamers">
      <router-link
        class="no-underline"
        :to="`/manage/edit?schema=streamer&id=${streamer._id}`"
        v-for="streamer in streamers"
        :key="streamer._id"
      >
        <streamer-card :streamer="streamer" />
      </router-link>
    </div>
  </div>
</template>

<script>
import StreamerCard from "Components/StreamerCard";

export default {
  name: "manage-streamers",
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

.manage-streamers {
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.streamers {
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
