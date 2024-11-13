<template>
  <ClientOnly>
    <div :class="`container ${defineContainerTemplate}`">
      <div :class="`header`">
        <Img :src="defineLogoTemplate" :alt="'Logo Alaska Websites'" />
        <nav aria-label="Menu principal">
          <ul>
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink :to="item.href" :class="defineButtomTemplate">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import Img from "@/components/atoms/Img/index";
import Logo_Img from "@/assets/img/logo_black.png";
import Logo_Img_2 from "@/assets/img/logo.png";

const storeMT = modeTemplate();

const { modeTemplateState } = storeToRefs(storeMT);

const navItems = ref([{ label: "Diga um Oi", href: "/contact" }]);

const defineContainerTemplate = computed(() => {
  return !modeTemplateState.value ? "mode-template-1" : "mode-template-2";
});

const defineLogoTemplate = computed(() => {
  return !modeTemplateState.value ? Logo_Img : Logo_Img_2;
});

const defineButtomTemplate = computed(() => {
  return !modeTemplateState.value ? "primary-buttom" : "secondary-buttom";
});
</script>
<style lang="scss">
@import url("styles.scss");
</style>
