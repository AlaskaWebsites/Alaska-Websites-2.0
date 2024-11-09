<template>
  <Nav />
  <slot />
  <Footer />
  <a
    href="https://wa.me/5511969124940?text=Ol%C3%A1%21+Venho+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os."
    target="_blank"
    ><i class="fa-brands fa-square-whatsapp icon-whatsapp"></i
  ></a>
</template>
<script setup>
import Nav from "./Partials/Nav/index";
import Footer from "./Partials/Footer/index";
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
