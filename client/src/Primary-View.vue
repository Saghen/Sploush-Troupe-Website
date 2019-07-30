<template>
    <div id="primary-view">
      <side-nav id="side-nav"></side-nav>
      <div id="router-view">
        <router-view />
      </div>
    </div>
</template>

<script>
import SideNav from "@/components/Side-Nav.vue";

export default {
  name: "primary-view",
  components: {
    SideNav
  }
};
</script>

<style lang="scss" scoped>
#primary-view {
  display: flex;
  max-width: 1600px;
  width: 100%;
  margin: auto;
}

#side-nav {
  position: sticky;
  left: 0;
  top: 0;
}

#router-view {
  margin: 16px;
  transform: translateZ(0);
  width: 100%;
}
</style>
