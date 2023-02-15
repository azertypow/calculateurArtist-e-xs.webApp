<template>
  <div class="v-view-calculator app-view">
    <h2>RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE EXPOSITION</h2>
    <app-section
        v-for="section of sections"
        :section="section"
    ></app-section>

    <div
        class="v-view-calculator__result"
    >
      <div
          class="app-g"
          ref="total"
      >
        <div class="app-g__coll-2-12 app-with-gutter"></div>
        <div class="app-g__coll-4-12 app-with-gutter" >TOTAL</div>
        <div class="v-view-calculator__result__result-container app-g__coll-6-12 app-with-gutter"
        >
          <div v-if="total>0">résultat: {{total}}.— CHF
            <div class="v-view-calculator__result__option">Collectif d’artiste?
              <div
                  class="app-button--toggle"
                  @click="globalStore.isACollective = !globalStore.isACollective"
                  :class="{'is-active': globalStore.isACollective}"
              ></div>
            </div>
          </div>
          <h6 v-else>Complétez l’ensemble des options pour afficher le résultat</h6>
        </div>
      </div>

    </div>

    <div
        class="v-view-calculator__footer"
    >
      <div
          class="v-view-calculator__footer__result"
          v-if="total > 0 && showFixedResult"
      >
        <div
            class="v-view-calculator__footer__content"
        >
          <div>résultat: {{total}}.— CHF</div>
        </div>
      </div>
      <div
          class="v-view-calculator__footer__status"
      >
        <span
            class="v-view-calculator__footer__status__items app-with-circle-status"
            v-for="(section, index) of sections"
            :class="{
              'app-with-circle-status--active': section.status !== 'empty',
            }"
        >{{section.title}}</span>
      </div>
      <div
          class="v-view-calculator__footer__info"
      >
        <app-lexical-bottom></app-lexical-bottom>
        <div
            class="v-view-calculator__footer__info__container"
        >
          <div>
            <span class="app-with-circle-status" style="cursor: pointer" @click="toggleLexical">Lexique</span>
          </div>
        </div>
        <div
            class="v-view-calculator__footer__info__container"
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

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "../components/AppNav.vue";
import AppCheckbox from "../components/AppCheckbox.vue";
import AppSection from "../components/AppSection.vue";
import AppNumberValue from "../components/AppNumberValue.vue";
import {useGlobalStore} from "../stores/globalStore";
import type {
  NumberCalculatorSection,
  OptionCalculatorSection
} from "../gloabal/CalculatorSection";
import SubsectionOption from "../components/SubsectionOption.vue";
import SubsectionNumber from "../components/SubsectionNumber.vue";
import type {OptionOrNumberCalculatorSection} from "../gloabal/CalculatorSection";
import AppLexicalBottom from "../components/AppLexicalBottom.vue";

export default defineComponent({
  name: 'ViewCalculator',
  components: {AppLexicalBottom, SubsectionNumber, SubsectionOption, AppNumberValue, AppSection, AppCheckbox, AppNav},

  mounted() {
    this.$nextTick(() => {
      document.querySelector('#app')!.addEventListener('scroll', this.getResultPosition)
    })
  },

  beforeUnmount() {
    document.querySelector('#app')!.removeEventListener('scroll', this.getResultPosition)
  },

  data() {
    return {
      globalStore: useGlobalStore(),
      proto: true,
      checkeds: [],
      showFixedResult: true,
      showLexical: false,
    }
  },

  methods: {
    getResultPosition() {
      if( !(this.$refs.total instanceof HTMLDivElement)) return
      this.showFixedResult = this.$refs.total.getBoundingClientRect().top >= window.innerHeight;
    },

    toggleLexical() {

    }
  },

  computed: {
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
.v-view-calculator {
  padding-top: 2rem;
  padding-bottom: 33.33333vh;
}

h2 {
  text-align: center;
  border-top: solid 1px var(--app-color-border);
  padding-top: 2rem;
}

.v-view-calculator__circle-state-container {
  display: flex;
  justify-content: right;
}

.v-view-calculator__footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
}

.v-view-calculator__footer__status {
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

.v-view-calculator__footer__status__items {
  white-space: nowrap;
}

.v-view-calculator__footer__status__separator {
  padding-right: .5em;
}

.v-view-calculator__footer__result {
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

.v-view-calculator__footer__info {
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

  .v-view-calculator__footer__info__container {
    display: flex;

    > div {
      padding-left: .5rem;
      padding-right: .5rem;
    }
  }
}

.v-view-calculator__footer__content {
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
  max-width: var(--app-max-width);
}

.v-view-calculator__result {
  border-top: solid 1px var(--app-color-border);
  margin-top: 10rem;
  padding-top: 2rem;
}

.v-view-calculator__result__result-container {
  text-align: right;
}

.v-view-calculator__result__option {
  line-height: 2rem;
  font-size: 1.4rem;
  user-select: none;
  margin-top: 1rem;
}
</style>
