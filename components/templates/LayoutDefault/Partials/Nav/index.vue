<template>
  <div class="container">
    <div class="box-animate">
      <Img :src="Logo_Img" :alt="'Logo Alaska Websites'" />
      <Img :src="Satellite_Img" :width="'40px'" :alt="'Satélite logo Alaska Websites'" />
    </div>
    <div>
      <nav aria-label="Menu principal">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
1;
import Img from "@/components/atoms/Img/index";
import Logo_Img from "@/assets/img/montain_black.png";
import Satellite_Img from "@/assets/img/satellite_black.png";

const navItems = ref([{ label: "contact", href: "/contact" }]);
</script>
<style lang="scss">
@import url("styles.scss");
</style>
