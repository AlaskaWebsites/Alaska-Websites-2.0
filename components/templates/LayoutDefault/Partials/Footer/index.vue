<template>
  <footer :class="`footer ${defineContainerTemplate}`">
    <Img :src="defineLogoTemplate" :alt="'Logo Alaska Websites'" />
    <h2>Vivendo, aprendendo e evoluindo um dia de cada vez.</h2>
    <ul class="social-media-list">
      <li v-for="(media, id) in socialMedia" :key="id">
        <a
          :href="media.link"
          :aria-label="`Acesse nosso ${media.name}`"
          target="_blank"
          ><i
            :aria-hidden="!modeTemplateState"
            :class="`${media.icon} social-media ${defineSocialMediaTemplate}`"
          ></i
        ></a>
      </li>
    </ul>
  </footer>
</template>
<script setup>
import Img from "@/components/atoms/Img/index";
import Logo_Img from "@/assets/img/logo_black.png";
import Logo_Img_2 from "@/assets/img/logo.png";

const storeMT = modeTemplate();

const { modeTemplateState } = storeToRefs(storeMT);

const defineContainerTemplate = computed(() => {
  return !modeTemplateState.value ? "mode-template-1" : "mode-template-2";
});

const defineLogoTemplate = computed(() => {
  return !modeTemplateState.value ? Logo_Img : Logo_Img_2;
});

const defineSocialMediaTemplate = computed(() => {
  return !modeTemplateState.value
    ? "social-media-primary"
    : "social-media-secondary";
});

const socialMedia = ref([
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/danilogozzi/",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "Github",
    link: "https://github.com/AlaskaWebsites",
    icon: "fa-brands fa-github",
  },
  {
    name: "Email",
    link: "mailto:dan.trabalho94@gmail.com?subject=Dúvidas sobre seus serviços&body=Olá, Danilo! Venho através do seu site, tenho duvidas sobre seus serviços. Por favor, entre em contato com este E-mail, obrigado!",
    icon: "fa-solid fa-envelope",
  },
]);

await changeModeTemplate()
</script>
<style lang="scss">
@import url("styles.scss");
</style>
