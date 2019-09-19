<template>
  <container column="true" center="true" :header="team.title">
    <container wrap="true">
      <div class="member" v-for="member of team.members" :key="member._id" @click="() => openModal(member)">
        <image-component :image="member.image" width="200" height="200" />
        <separator />
        <div class="member-primary">
          <span class="gamer-tag">{{ member.gamerTag }}</span>
          <span class="position">{{ member.position }}</span>
        </div>
        <span class="name">{{ member.name }}</span>
      </div>
    </container>
    <div class="achievements" v-if="team.achievements.length > 0">
      <h1>Achievements</h1>
      <h3 class="achievement" v-for="achievement of team.achievements" :key="achievement._id">
        {{ `${achievement.title}: ` }}
        <span
          :class="{first: achievement.place === 1, second: achievement.place === 2, third: achievement.place === 3}"
        >{{ toPlace(achievement.place) }} PLACE</span>
      </h3>
    </div>
    <modal name="team-member">
      <team-modal :member="selectedMember"></team-modal>
    </modal>
  </container>
</template>

<script>
import Container from "Components/core/Container";
import ImageComponent from "Components/core/Image";
import Separator from "Components/core/Separator";
import TeamModal from "Components/TeamModal";

export default {
  name: "team",
  components: {
    Container,
    ImageComponent,
    Separator,
    TeamModal
  },
  data() {
    return {
      selectedMember: {},
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
    },
    openModal(member) {
      console.log(member);
      this.selectedMember = member;
      console.log(this.selectedMember);
      this.$modal.show("team-member");
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.member {
  font-size: 0.8em;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 8px;
  }

  > .member-primary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gamer-tag {
    font-family: $header-font;
    color: $accent;
    font-size: 1.5em;
  }

  .position {
    color: lighten($accent-alt, 10);
  }
}

.member + .member {
  margin-left: 32px;
}

.achievements {
  font-size: 1.3em;
  > h1 {
    text-decoration: underline;
  }
  > h1,
  p {
    text-align: center;
  }

  .achievement {
    .first {
      color: #ffae39;
    }

    .second {
      color: #aaaaaa;
    }

    .third {
      color: #70351f;
    }
  }
}

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
