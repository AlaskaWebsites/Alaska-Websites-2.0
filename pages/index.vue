<template>
  <div :class="`container ${defineContainerTemplate}`">
    <section :class="`qualifications`" aria-label="Qualificações">
      <div class="qualifications-apresentations">
        <h1>Desenvolvedor Frontend, Backend e Fullstack</h1>
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
          <div class="card">
            <div>X</div>
            <div>
              <h3>Desenvolvedor Front-end</h3>
              <p>
                Gosto de programar coisas do zero e gosto de dar vida a ideias
                no navegador.
              </p>
            </div>
            <div>
              <h3>Tecnologias que uso:</h3>
              <p>
                HTML, CSS, JavaScript, Bootstrap, Vue.js, Vuex, Vue Router,
                Vuetify, Nuxt, Pinia, React.js, Material-UI, Chakra-Ui, Next.js,
                React Hooks, Redux, ContextAPI, Next.js, Typescript, Storybook e
                Electron.
              </p>
            </div>
            <div>
              <h3>Ferramentas do Desenvolvedor</h3>
              <p>
                Bitbucket, Github, Vercel, Netlifly, Digital Ocean, Google
                Cloud, Firebase, Git e VS Code
              </p>
            </div>
          </div>
          <div class="card">
            <div>X</div>
            <div>
              <h3>Desenvolvedor Back-end</h3>
              <p>
                Gosto de desenvolver servidores do zero, com bancos de dados
                relacionais e não relacionais.
              </p>
            </div>
            <div>
              <h3>Tecnologias que uso:</h3>
              <p>
                Node.js, Express.js, JSON Web Token, Axios, Socket.io, MQTT,
                Token, API REST e RESTful.
              </p>
            </div>
            <div>
              <h3>Ferramentas do Desenvolvedor</h3>
              <p>Sequelize, PM2 e Mongoose</p>
            </div>
          </div>
          <div class="card">
            <div>X</div>
            <div>
              <h3>Banco de Dados</h3>
              <p>
                Trabalho com bancos de dados relacionais e não relacionais,
                dependendo da necessidade do projeto.
              </p>
            </div>
            <div>
              <h3>Tecnologias que uso:</h3>
              <p>MySQL, PostgreSQL, SQLight e MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const storeMT = modeTemplate();

const { modeTemplateState } = storeToRefs(storeMT);

const defineContainerTemplate = computed(() => {
  return !modeTemplateState.value
    ? "mode-template-primary"
    : "mode-template-secondary";
});
</script>
<style lang="scss" scoped>
@import url("styles.scss");
</style>
