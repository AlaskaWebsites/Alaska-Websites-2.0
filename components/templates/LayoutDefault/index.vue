<template>
  <ClientOnly>
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
        @click="changeModeTemplate(!modeTemplateState)"
        :class="`controller-mode-template ${defineControllerBackgroundTemplate}`"
      >
        <div>
          <i
            :class="`controller-mode-template-icon-primary ${
              !modeTemplateState ? 'fa-solid fa-sun ' : 'fa-solid fa-moon'
            }`"
          ></i>
        </div>
        <div>
          <i
            :class="`fa-solid fa-chevron-right ${
              !modeTemplateState
                ? 'controller-arrow-icon-template-primary'
                : 'controller-arrow-icon-template-secondary'
            }`"
          ></i>
        </div>
        <div>
          <i
            :class="`controller-mode-template-icon-secondary ${
              !modeTemplateState ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
            } `"
          ></i>
        </div>
      </button>
    </div>
  </ClientOnly>
</template>
<script setup>
import Nav from "./Partials/Nav/index";
import Footer from "./Partials/Footer/index";

const storeMT = modeTemplate();

const { changeModeTemplate } = storeMT;

const { modeTemplateState } = storeToRefs(storeMT);

const defineControllerBackgroundTemplate = computed(() => {
  return modeTemplateState
    ? "controller-mode-template-primary"
    : "controller-mode-template-secondary";
});
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
