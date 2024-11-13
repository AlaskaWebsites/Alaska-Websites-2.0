import { defineStore } from "pinia";

export const modeTemplate = defineStore("mode-template", () => {
  const cookieModeTemplate = useCookie("mode-template");
  const modeTemplateState = ref(cookieModeTemplate);

  const changeModeTemplate = (payload) => {
    modeTemplateState.value = payload;
    cookieModeTemplate.value = payload;
  };

  return { modeTemplateState, changeModeTemplate };
});
