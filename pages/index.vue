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
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
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
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
