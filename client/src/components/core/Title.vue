<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "title"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

span {
  display: block;
  position: relative;
  color: $text;
  font-size: 2em;
  font-family: $header-font;
  letter-spacing: 0.06em;
}
</style>
