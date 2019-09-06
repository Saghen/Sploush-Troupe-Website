<template>
  <container :header="header">
    <container>
      <div v-for="member of members" :key="member._id">
        <image-component :image="member.image" width="128" height="128" />
        <separator/>
        <span class="gamer-tag">{{ member.gamerTag }}</span>
        <span class="name">{{ member.name }}</span>
      </div>
    </container>
    <div v-if="achievements.length > 0">
      <h1>Achievements</h1>
      <div v-for="achievement of achievements" :key="achievement._id">

      </div>
    </div>
  </container>
</template>

<script>
import Container from "Components/core/Container";
import ImageComponent from "Components/core/Image";
import Separator from "Components/core/Separator";

export default {
  name: "team",
  components: {
    Container,
    ImageComponent,
    Separator
  },
  data() {
    return {
      header: "",
      members: [],
      achievements: []
    };
  }
};
</script>
