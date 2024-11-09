<template>
  <Nav />
  <slot />
  <Footer />
  <a
    href="https://wa.me/5511969124940?text=Ol%C3%A1%21+Venho+atrav%C3%A9s+do+seu+site%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os."
    target="_blank"
    ><i class="fa-brands fa-square-whatsapp icon-whatsapp"></i
  ></a>
  <div class="controllers">
    <button class="controller-language">
      <div>
        <p>PT-BR</p>
      </div>
      <div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div>
        <p>EN</p>
      </div>
    </button>
    <button class="controller-mode-template">
      <div>
        <i class="fa-solid fa-sun"></i>
      </div>
      <div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div>
        <i class="fa-solid fa-moon"></i>
      </div>
    </button>
  </div>
</template>
<script setup>
import Nav from "./Partials/Nav/index";
import Footer from "./Partials/Footer/index";
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
