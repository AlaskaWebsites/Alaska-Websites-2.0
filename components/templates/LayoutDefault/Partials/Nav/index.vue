<template>
  <div class="container">
    <div class="header">
      <Img :src="Logo_Img" :alt="'Logo Alaska Websites'" />
      <nav aria-label="Menu principal">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <NuxtLink :to="item.href" :class="item.class">{{
              item.label
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import Img from "@/components/atoms/Img/index";
import Logo_Img from "@/assets/img/logo_black.png";

const { t } = useI18n();

const navItems = ref([
  { label: t("contact"), href: "/contact", class: "primary-buttom" },
]);
</script>
<style lang="scss">
@import url("styles.scss");
</style>
