<template>
  <Nav />
  <slot />
  <Footer />
</template>
<script setup>
import Nav from "./Partials/Nav/index";
import Footer from "./Partials/Footer/index";
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
