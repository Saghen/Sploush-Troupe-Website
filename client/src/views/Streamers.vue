<template>
  <div>
    <container header="Streamers" wrap="true">
      <streamer-card v-for="streamer in streamers" :key="streamer._id" :streamer="streamer" />
      <modal name="streamer" @before-open="modalOpen">
        <streamer-modal :streamer="selectedStreamer"></streamer-modal>
      </modal>
    </container>
  </div>
</template>

<script>
import StreamerCard from "../components/StreamerCard";
import Container from "../components/core/Container";
import StreamerModal from "Components/StreamerModal";

export default {
  name: "streams",
  components: {
    StreamerCard,
    StreamerModal,
    Container
  },
  data() {
    return {
      streamers: [],
      selectedStreamer: {}
    };
  },
  created() {
    this.$http
      .get("/streamers/list")
      .then(data => (this.streamers = data.data));
  },
  methods: {
    modalOpen(event) {
      this.selectedStreamer = event.params.streamer;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.v--modal-background-click {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
}

.v--modal {
  border-radius: 0;
  padding: 16px;
  background: transparent;
  top: 0 !important;
  left: 0 !important;
  width: auto !important;
  height: auto !important;
  box-shadow: none;
}
</style>
