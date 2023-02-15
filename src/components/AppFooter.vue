<template>
  <div
      class="v-app-footer"
  >
    <div
        class="v-app-footer__result"
        v-if="total > 0 && globalStore.showFixedResult"
    >
      <div
          class="v-app-footer__content"
      >
        <div>résultat: {{total}}.— CHF</div>
      </div>
    </div>
    <div
        class="v-app-footer__status"
        v-if="curentPageName === 'calculator'"
    >
        <span
            class="v-app-footer__status__items app-with-circle-status"
            v-for="(section, index) of sections"
            :class="{
              'app-with-circle-status--active': section.status !== 'empty',
            }"
        >{{section.title}}</span>
    </div>
    <div
        class="v-app-footer__info"
    >
      <app-panel></app-panel>
      <div
          class="v-app-footer__info__container"
      >
        <div>
          <span class="app-with-circle-status" style="cursor: pointer" @click="globalStore.showLexical = !globalStore.showLexical">Lexique</span>
          <span class="app-with-circle-status" style="cursor: pointer" @click="globalStore.showInfo = !globalStore.showInfo">Information</span>
          <span class="app-with-circle-status" style="cursor: pointer" @click="globalStore.showHelpers = !globalStore.showHelpers">Aide</span>
        </div>
      </div>
      <div
          class="v-app-footer__info__container"
      >
        <div>
          <span>Site en version beta</span>
        </div>
        <div>
          <span>Suggestion&nbsp;?</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPanel from "./AppPanel.vue";
import type {
  NumberCalculatorSection,
  OptionCalculatorSection,
  OptionOrNumberCalculatorSection
} from "../gloabal/CalculatorSection";
import {useGlobalStore} from "../stores/globalStore";

export default defineComponent({
  name: 'AppFooter',
  components: {AppPanel},

  data() {
    return {
      globalStore: useGlobalStore(),
    }
  },

  computed: {
    curentPageName(): string {
      return this.$router.currentRoute.value.name as string | ''
    },

    sections(): OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[] {
      return this.globalStore.calculatorSections as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[]
    },

    total(): number {
      return this.globalStore.total
    },
  }


});
</script>

<style lang="scss" scoped>
.v-app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;

  .v-app-footer__result {
    position: relative;
    width: 100%;
    line-height: 2rem;
    font-size: 1.4rem;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .v-app-footer__content {
    display: flex;
    flex-direction: row-reverse;
    margin: auto;
    max-width: var(--app-max-width);
  }

  .v-app-footer__status {
    position: relative;
    width: 100%;
    line-height: 1.5rem;
    font-size: var(--app-font-size);
    box-sizing: border-box;
    background: var(--app-color-main);
    padding: 1rem;
    text-align: center;
    border-top: solid 1px var(--app-color-border);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .v-app-footer__status__items {
    white-space: nowrap;
  }

  .v-app-footer__status__separator {
    padding-right: .5em;
  }

  .v-app-footer__info {
    display: flex;
    line-height: 1.5rem;
    font-size: var(--app-font-size);
    position: relative;
    width: 100%;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);
    align-items: center;
    justify-content: space-between;
    padding: 1rem .5rem;
    box-sizing: border-box;

    .v-app-footer__info__container {
      display: flex;

      > div {
        padding-left: .5rem;
        padding-right: .5rem;
      }
    }
  }
}
</style>