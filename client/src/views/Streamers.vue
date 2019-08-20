<template>
  <container header="Streamers" wrap="true">
    <streamer-card v-for="streamer in streamers" :key="streamer._id" :streamer="streamer" />
  </container>
</template>

<script>
import StreamerCard from "../components/StreamerCard";
import Container from "../components/core/Container";

export default {
  name: "streams",
  components: {
    StreamerCard,
    Container
  },
  data() {
    return {
      streamers: []
    };
  },
  created() {
    this.$http
      .get("/streamers/list")
      .then(data => (this.streamers = data.data));
  }
};
</script>
