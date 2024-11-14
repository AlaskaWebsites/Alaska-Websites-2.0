<template>
  <div :class="`container ${defineContainerTemplate}`">
    <section :class="`qualifications`" aria-label="Qualificações">
      <div class="qualifications-apresentations">
        <h1>Desenvolvedor Front-end, Backend e Fullstack</h1>
        <p>
          Código Limpo, Arquitetura limpa, Escalabilidade, Responsividade,
          Projeto Padronizado, Testes de Qualidade
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
        <h2>Olá, sou Danilo. Prazer em conhecê-lo.</h2>
        <p>
          Olá, sou um Desenvolvedor de Software experiente, especializado em
          estruturação limpa, arquitetura baseada em atomic design, organização
          e escalabilidade. Meu compromisso é fornecer tecnologias atualizadas e
          de qualidade para a melhor experiência do usuário.
        </p>
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
