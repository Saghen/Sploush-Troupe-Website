<template>
  <container :header="team.title">
    <container>
      <div v-for="member of team.members" :key="member._id">
        <image-component :image="member.image" width="128" height="128" />
        <separator />
        <span class="gamer-tag">{{ member.gamerTag }}</span>
        <span class="name">{{ member.name }}</span>
      </div>
    </container>
    <div v-if="team.achievements.length > 0">
      <h1>Achievements</h1>
      <div v-for="achievement of team.achievements" :key="achievement._id">
        {{ `-${achievement.title}: ` }}
        <span
          :class="{first: achievement.place === 1, second: achievement.place === 2, third: achievement.place === 3}"
        >{{ toPlace(achievement.place) }} PLACE</span>
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
      team: {
        title: "",
        members: [],
        achievements: []
      }
    };
  },
  created() {
    this.$http(`/teams/get?url=${this.$route.params.url}`).then(
      ({ data }) => (this.team = data)
    );
  },
  methods: {
    toPlace(num) {
      switch (num) {
        case 1:
          return "1st";
        case 2:
          return "2nd";
        case 3:
          return "3rd";
        default:
          return num + "th";
      }
    }
  }
};
</script>
