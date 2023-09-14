<template>
  <div class="v-view-calculator app-view">
    <div class="v-view-calculator__nav-box" >
        <app-nav
        ></app-nav>
    </div>
    <h2 class="app-with-gutter">RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE EXPOSITION</h2>
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
        <div class="app-g__coll-2-12 app-g__coll-sm-0-12 app-with-gutter"></div>
        <div class="app-g__coll-2-12 app-g__coll-sm-3-12 app-with-gutter" >TOTAL</div>
        <div class="v-view-calculator__result__result-container app-g__coll-8-12 app-g__coll-sm-9-12 app-with-gutter"
        >
          <div
              v-if="typeof globalTotal === 'number'"
          >CHF {{globalTotal}}<template v-if="globalTotal % 1 === 0">.—</template>
            <div class="v-view-calculator__result__option">
              <div
                  class="app-button--toggle"
                  @click="globalStore.isACollective = !globalStore.isACollective"
                  :class="{'is-active': globalStore.isACollective}"
              ></div>
                Collectif d’artiste?
            </div>
            <div
                    v-if="globalStore.isACollective"
                    class="v-view-calculator__result__option_info"
                    style="text-align: right; max-width: none"
            >
              Les collectifs d’artistes sont rémunérés selon un coefficient de 1,5.
            </div>
          </div>
          <h6 style="margin: 0" v-else>{{globalTotal.errorMessage}}</h6>
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
import AppPanel from "../components/AppPanel.vue";

export default defineComponent({
  name: 'ViewCalculator',
  components: {AppPanel, SubsectionNumber, SubsectionOption, AppNumberValue, AppSection, AppCheckbox, AppNav},

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
    }
  },

  methods: {
    getResultPosition() {
      if( !(this.$refs.total instanceof HTMLDivElement)) return
      this.globalStore.showFixedResult = this.$refs.total.getBoundingClientRect().top >= window.innerHeight;
    },
  },

  computed: {
    sections(): OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[] {
      return this.globalStore.calculatorSections as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[]
    },

    globalTotal(): number | {errorMessage: string} {
      return this.globalStore.globalTotal
    },
  }

});
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  border-top: solid 1px var(--app-color-border);
  padding-top: 2rem;
}

.v-view-calculator__circle-state-container {
  display: flex;
  justify-content: right;
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
.v-view-calculator__result__option_info {
  line-height: 2rem;
  font-size: 1.4rem;
  max-width: 40em;
  margin-top: 1rem;
}
</style>
