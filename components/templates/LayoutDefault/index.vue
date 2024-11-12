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
    <button
      :class="`controller-mode-template ${defineControllerBackgroundTemplate}`"
    >
      <div>
        <i
          :class="`controller-mode-template-icon-primary ${
            false ? 'fa-solid fa-sun ' : 'fa-solid fa-moon'
          }`"
        ></i>
      </div>
      <div>
        <i
          :class="`fa-solid fa-chevron-right ${
            false
              ? 'controller-arrow-icon-template-primary'
              : 'controller-arrow-icon-template-secondary'
          }`"
        ></i>
      </div>
      <div>
        <i
          :class="`controller-mode-template-icon-secondary ${
            false ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
          } `"
        ></i>
      </div>
    </button>
  </div>
</template>
<script setup>
import Nav from "./Partials/Nav/index";
import Footer from "./Partials/Footer/index";


const defineControllerBackgroundTemplate = computed(() => {
  return false
    ? "controller-mode-template-primary"
    : "controller-mode-template-secondary";
});
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
