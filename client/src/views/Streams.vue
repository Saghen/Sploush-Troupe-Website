<template>
  <container header="Streams" wrap="true">
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack2.jpg" isOnline="true"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack.jpg" isOnline="true"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack2.jpg" isOnline="true"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack.jpg" ></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack2.jpg"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack.jpg"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack2.jpg"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack.jpg"></streamer-card>
    <streamer-card url="temp-url" :title="streamerTitle" :content="streamerContent" image="dreamhack2.jpg"></streamer-card>
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
      streamerTitle: "Streamer Title",
      streamerContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    };
  }
};
</script>
