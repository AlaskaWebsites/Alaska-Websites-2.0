<template>
  <img :width="props.width" :src="props.src" :alt="props.alt" />
</template>
<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "140px",
  },
  src: {
    type: String,
  },
  alt: {
    type: String,
    default: "Not Image",
  },
});
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
