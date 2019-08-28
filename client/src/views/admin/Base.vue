<template>
  <div id="manage-base">
    <side-nav id="members-side-nav">
      <router-link to="/manage/news">
        <span>News</span>
      </router-link>
      <router-link to="/manage/streamers">
        <span>Streamers</span>
      </router-link>
      <router-link to="/manage/teams">
        <span>Teams</span>
      </router-link>
      <router-link to="/manage/applications">
        <span>Applications</span>
      </router-link>
    </side-nav>
    <div id="manage-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideNav from 'Components/admin/SideNav.vue';

export default {
  components: {
    SideNav
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/_globalAdmin.scss';

#manage-base {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;

  > #manage-view {
    overflow: auto;
    background: desaturate($background, 10);
  }
}

@media screen and (max-width: 1000px) {
  #manage-base {
    grid-template-columns: auto;
  }
}
</style>
