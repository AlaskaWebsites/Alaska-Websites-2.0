<template>
  <div :class="`container ${defineContainerTemplate}`">
    <section :class="`qualifications`" aria-label="Qualificações">
      <div class="qualifications-apresentations">
        <h1>Desenvolvimento Frontend, Backend e Fullstack</h1>
        <p>
          Código Limpo, Arquitetura limpa, Escalabilidade, Responsividade,
          Acessibilidade, Projeto Padronizado, Testes de Qualidade
        </p>
      </div>
      <div class="box-coffe-animation">
        <div class="steam" id="steam1"></div>
        <div class="steam" id="steam2"></div>
        <div class="steam" id="steam3"></div>
        <div class="steam" id="steam4"></div>
        <div id="cup">
          <div id="cup-body">
            <div id="cup-shade"></div>
          </div>
          <div id="cup-handle"></div>
        </div>
        <div id="saucer"></div>
        <div id="shadow"></div>
      </div>
    </section>
    <section class="profile-description">
      <div class="profile-description-apresentations">
        <div class="profile-description-apresentations-text">
          <h2>Olá, sou Danilo. Prazer em conhecê-lo.</h2>
          <p>
            Desenvolvendo Software a mais de 4 anos, meu compromisso é fornecer
            tecnologias atualizadas e de qualidade para a melhor experiência do
            usuário.
          </p>
        </div>
        <div class="card-skills">
          <div :class="`card ${defineCardTemplate}`">
            <div class="card-content">
              <Img
                :src="Frontend_img_white"
                :alt="'Ícone Frontend do cartão'"
                class="card-icon"
              />
            </div>
            <div class="card-content">
              <h3>Front-end</h3>
              <p>
                Gosto de programar coisas do zero e gosto de dar vida a ideias
                no navegador.
              </p>
            </div>
            <div class="card-content">
              <h3>Tecnologias que uso:</h3>
              <p>
                HTML, CSS, JavaScript, Bootstrap, Bulma, Tailwind, Vue.js, Vuex,
                Vue Router, Vuetify, Nuxt, Pinia, React.js, Material-UI,
                Chakra-Ui, Next.js, React Hooks, Redux, ContextAPI, Next.js,
                Typescript, Storybook e Electron.
              </p>
            </div>
            <div class="card-content">
              <h3>Ferramentas do Desenvolvedor</h3>
              <p>
                Bitbucket, Github, Vercel, Netlifly, Digital Ocean, Google
                Cloud, Firebase, Git e VS Code
              </p>
            </div>
          </div>
          <div :class="`card ${defineCardTemplate}`">
            <div class="card-content">
              <Img
                :src="Server_img_white"
                :alt="'Ícone Frontend do cartão'"
                class="card-icon"
              />
            </div>
            <div class="card-content">
              <h3>Back-end</h3>
              <p>
                Gosto de desenvolver servidores do zero, com bancos de dados
                relacionais e não relacionais.
              </p>
            </div>
            <div class="card-content">
              <h3>Tecnologias que uso:</h3>
              <p>
                Node.js, Express.js, JSON Web Token, Axios, Socket.io, MQTT,
                Token, API REST e RESTful, TypeScript.
              </p>
            </div>
            <div class="card-content">
              <h3>Ferramentas do Desenvolvedor</h3>
              <p>
                Sequelize, PM2, Mongoose, Bitbucket, Github, Google Cloud,
                Firebase, Git e VS Code
              </p>
            </div>
          </div>
          <div :class="`card ${defineCardTemplate}`">
            <div class="card-content">
              <Img
                :src="Db_img_white"
                :alt="'Ícone Frontend do cartão'"
                class="card-icon"
              />
            </div>
            <div class="card-content">
              <h3>Banco de Dados</h3>
              <p>
                Trabalho com bancos de dados relacionais e não relacionais,
                dependendo da necessidade do projeto.
              </p>
            </div>
            <div class="card-content">
              <h3>Tecnologias que uso:</h3>
              <p>MySQL, PostgreSQL, SQLight e MongoDB</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-recent-work">
      <div class="my-recent-work-header">
        <h2>Meus trabalhos recente</h2>
        <p>
          Aqui estão alguns projetos de Frontend, Backend e também Fullstack
          anteriores em que trabalhei. Quer ver mais?
          <a
            href="mailto:dan.trabalho94@gmail.com?subject=Dúvidas sobre seus serviços&body=Olá, Danilo! Venho através do seu site, tenho duvidas sobre seus serviços. Por favor, entre em contato com este E-mail, obrigado!"
            target="_blank"
            >Envie-me um e-mail
          </a>
          .
        </p>
      </div>
      <div class="my-recent-work-content">
        <ul>
          <a
            v-for="(apiGames, id) in listRecentWorls"
            :key="id"
            target="_blank"
            :href="apiGames.href"
          >
            <li :class="`${apiGames.class} ${defineCardTemplate}`">
              <h4><i class="fa-brands fa-github"></i> {{ apiGames.name }}</h4>
              <Img :src="apiGames.src" :apiGames.alt />
              <ul>
                <h4>Linguagens:</h4>
                <li
                  class="my-recent-work-content-languages"
                  v-for="(lg, id) in apiGames.languages"
                  :key="id"
                >
                  <p>
                    {{ lg.name
                    }}<i
                      :class="`fa-solid fa-circle ${lg.iconLanguageColor}`"
                    ></i>
                  </p>
                </li>
              </ul>
            </li>
          </a>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import Img from "@/components/atoms/Img/index.vue";
import Frontend_img_white from "@/assets/img/front-end-white.png";
import Server_img_white from "@/assets/img/server-white.png";
import Db_img_white from "@/assets/img/banco-de-dados-em-nuvem-white.png";
import Game_api_img from "@/assets/img/game-api-img.png";
import Logo_Img from "@/assets/img/logo_black.png";
import Logo_Img_2 from "@/assets/img/logo.png";

const storeMT = modeTemplate();

const { modeTemplateState } = storeToRefs(storeMT);

const defineContainerTemplate = computed(() => {
  return !modeTemplateState.value
    ? "mode-template-primary"
    : "mode-template-secondary";
});

const defineCardTemplate = computed(() => {
  return !modeTemplateState.value
    ? "mode-template-primary-card"
    : "mode-template-secondary-card";
});

const defineLogoTemplate = computed(() => {
  return !modeTemplateState.value ? Logo_Img : Logo_Img_2;
});

const listRecentWorls = ref([
  {
    name: "Aplicação Alaska Websites",
    href: "https://github.com/AlaskaWebsites/Alaska-Websites-2.0",
    src: defineLogoTemplate,
    alt: "Aplicação Alaska Websites",
    class: "card",
    imgClass: "",
    languages: [
      {
        name: "Vue",
        iconLanguageColor: "vue-circle-icon",
      },
      {
        name: "SCSS",
        iconLanguageColor: "scss-circle-icon",
      },
      {
        name: "JavaScript",
        iconLanguageColor: "js-circle-icon",
      },
      {
        name: "TypeScript",
        iconLanguageColor: "ts-circle-icon",
      },
    ],
  },
  {
    name: "Aplicação Para Agendar Consultas Médicas",
    href: "https://github.com/AlaskaWebsites/app_MV_desafio_front-end",
    src: defineLogoTemplate,
    alt: "Aplicação Para Agendar Consultas Médicas",
    class: "card",
    imgClass: "",
    languages: [
      {
        name: "Vue",
        iconLanguageColor: "vue-circle-icon",
      },
      {
        name: "JavaScript",
        iconLanguageColor: "js-circle-icon",
      },
      {
        name: "HTML",
        iconLanguageColor: "html-circle-icon",
      },
      {
        name: "CSS",
        iconLanguageColor: "css-circle-icon",
      },
    ],
  },
  {
    name: "Aplicação Para Delivery de comidas",
    href: "https://github.com/AlaskaWebsites/app_food_deliver",
    src: defineLogoTemplate,
    alt: "Aplicação Para Delivery de comidas",
    class: "card",
    imgClass: "",
    languages: [
      {
        name: "React",
        iconLanguageColor: "react-circle-icon",
      },
      {
        name: "JavaScript",
        iconLanguageColor: "js-circle-icon",
      },
      {
        name: "HTML",
        iconLanguageColor: "html-circle-icon",
      },
      {
        name: "CSS",
        iconLanguageColor: "css-circle-icon",
      },
    ],
  },
  {
    name: "Aplicação Mini E-commerce",
    href: "https://github.com/AlaskaWebsites/app_ecommerce_v2",
    src: defineLogoTemplate,
    alt: "Aplicação Mini E-commerce",
    class: "card",
    imgClass: "",
    languages: [
      {
        name: "Vue",
        iconLanguageColor: "vue-circle-icon",
      },
      {
        name: "JavaScript",
        iconLanguageColor: "js-circle-icon",
      },
      {
        name: "TypeScript",
        iconLanguageColor: "ts-circle-icon",
      },
      {
        name: "HTML",
        iconLanguageColor: "html-circle-icon",
      },
      {
        name: "CSS",
        iconLanguageColor: "css-circle-icon",
      },
    ],
  },
  {
    name: "Aplicação Stock Tracker, compra e venda de ações",
    href: "https://github.com/AlaskaWebsites/app_ecommerce_v2",
    src: defineLogoTemplate,
    alt: "Aplicação Stock Tracker, compra e venda de ações",
    class: "card",
    imgClass: "",
    languages: [
      {
        name: "Vue",
        iconLanguageColor: "vue-circle-icon",
      },
      {
        name: "JavaScript",
        iconLanguageColor: "js-circle-icon",
      },
      {
        name: "HTML",
        iconLanguageColor: "html-circle-icon",
      },
      {
        name: "CSS",
        iconLanguageColor: "css-circle-icon",
      },
    ],
  },
]);
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
