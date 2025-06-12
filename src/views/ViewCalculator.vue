<template>
  <div class="v-view-calculator app-view">
    <div class="v-view-calculator__nav-box" >
        <app-nav
        ></app-nav>
    </div>
    <h2 class="app-with-gutter">RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE EXPOSITION</h2>

    <div class="v-view-calculator__wrap">
      <main class="v-view-calculator__wrap__main">
        <app-section
            v-for="section of sections"
            :section="section"
        ></app-section>
      </main>
      <aside class="v-view-calculator__wrap__aside">
        <div class="v-view-calculator__ticket-container">
          <AppTicket/>
        </div>
      </aside>
    </div>

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
          <h6 style="margin: 0" v-if="'errorMessage' in globalTotal">{{globalTotal.errorMessage}}</h6>
          <div
              v-else
          >CHF {{globalTotal.OUT_ofFinalPercentCalc + globalTotal.IN_finalPercentCalc}}<template v-if="(globalTotal.OUT_ofFinalPercentCalc + globalTotal.IN_finalPercentCalc) % 1 === 0">.—</template>

            <template v-if="conditionOnTotalValue">
              <div v-if="conditionOnTotalValue === calculatorSection_0_title.asso" >(CHF {{ globalTotalNetForAssociation }}net)</div>
              <div v-if="conditionOnTotalValue === calculatorSection_0_title.sal" >(CHF {{ globalTotalNetForSalarierStruct }}net)</div>
            </template>

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
import {calculatorSection_0_title, type IGlobalTotal, useGlobalStore} from "../stores/globalStore";
import type {
  NumberCalculatorSection,
  OptionCalculatorSection
} from "../gloabal/CalculatorSection";
import SubsectionOption from "../components/SubsectionOption.vue";
import SubsectionNumber from "../components/SubsectionNumber.vue";
import type {OptionOrNumberCalculatorSection} from "../gloabal/CalculatorSection";
import AppPanel from "../components/AppPanel.vue";
import {formatCHF} from "../gloabal/formatCurency";
import type {NumberCalculatorSubsection} from "../gloabal/CalculatorSection";
import AppTicket from "@/components/AppTicket.vue";

export default defineComponent({
  name: 'ViewCalculator',
  components: {AppTicket, AppPanel, SubsectionNumber, SubsectionOption, AppNumberValue, AppSection, AppCheckbox, AppNav},

  mounted() {
    this.$nextTick(() => {
      document.querySelector('#app')!.addEventListener('scroll', this.getResultPosition)
    })

    //@ts-ignore
    gtag('event', 'page_view', {
        page_title: 'ViewCalculator',
        page_location: '/#/calculateur'
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
    formatCHF,
    useGlobalStore,
    getResultPosition() {
      if( !(this.$refs.total instanceof HTMLDivElement)) return
      this.globalStore.showFixedResult = this.$refs.total.getBoundingClientRect().top >= window.innerHeight;
    },
  },

  computed: {
    calculatorSection_0_title() {
      return calculatorSection_0_title
    },
    sections(): OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[] {
      return this.globalStore.calculatorSections as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[]
    },

    globalTotal(): IGlobalTotal | {errorMessage: string} {
      return this.globalStore.globalTotal
    },

    globalMessage(): string {
      return this.globalStore.globalMessageForTotalResult
    },

    conditionOnTotalValue(): string {
      return Object.values(this.globalStore.conditionOnTotalValue)[0].value
    },

    globalTotalNetForAssociation(): string {
      if('errorMessage' in this.globalTotal) return ''

      const inPercent = this.globalTotal.IN_finalPercentCalc / 100 * 72.41

      return formatCHF( inPercent + this.globalTotal.OUT_ofFinalPercentCalc )
    },

    globalTotalNetForSalarierStruct(): string {
      if('errorMessage' in this.globalTotal) return ''

      const inPercent = this.globalTotal.IN_finalPercentCalc / 100 * 85.44

      return formatCHF( inPercent + this.globalTotal.OUT_ofFinalPercentCalc )
    }

  }

});

useGlobalStore().$onAction(context => {
  if( context.name !== 'setConditionOnTotalValue' ) return


  if(context.args[2] === calculatorSection_0_title.ind) {
    ;(useGlobalStore().calculatorSections[5].subSections[0] as NumberCalculatorSubsection).conseilValue = "Pour les indépendant·e·x·s, Visarte recommande un tarif horaire de 90 CHF."
    ;(useGlobalStore().calculatorSections[7].subSections[0] as NumberCalculatorSubsection).conseilValue = "Pour les indépendant·e·x·s, Visarte recommande un tarif horaire de 60 CHF minimum."
  }
  else if(context.args[2] === calculatorSection_0_title.asso) {
    ;(useGlobalStore().calculatorSections[5].subSections[0] as NumberCalculatorSubsection).conseilValue = "À Genève, le salaire minimum horaire est de 24 CHF en 2024. Cela représente un coût employeur de 28.30 CHF."
    ;(useGlobalStore().calculatorSections[7].subSections[0] as NumberCalculatorSubsection).conseilValue = "À Genève, le salaire minimum horaire brut est de 24 CHF en 2024. Cela représente un coût employeur de 28.30 CHF. Visarte recommande un tarif journalier de minimum 300 CHF brut, correspondant à 353 CHF coût employeur."
  }
  else if(context.args[2] === calculatorSection_0_title.sal) {
    ;(useGlobalStore().calculatorSections[5].subSections[0] as NumberCalculatorSubsection).conseilValue = 'À Genève, le salaire minimum horaire est de 24 CHF en 2024.'
    ;(useGlobalStore().calculatorSections[7].subSections[0] as NumberCalculatorSubsection).conseilValue = "À Genève, le salaire minimum horaire brut est de 24 CHF en 2024. Visarte recommande un tarif journalier de minimum 300 CHF brut."
  }
  else if (context.args[2] === calculatorSection_0_title.unknown) {
    ;(useGlobalStore().calculatorSections[5].subSections[0] as NumberCalculatorSubsection).conseilValue = "Pour les indépendant·e·x·s, Visarte recommande un tarif horaire de 90 CHF. À Genève, le salaire minimum horaire est de 24 CHF en 2024. Cela représente un coût employeur de 28.30 CHF."
    ;(useGlobalStore().calculatorSections[7].subSections[0] as NumberCalculatorSubsection).conseilValue = "Pour les indépendant·e·x·s, Visarte recommande un tarif horaire de 60 CHF minimum et de 300 CHF brut par jour minimum pour les salarié·e·x·s. À Genève, le salaire minimum horaire est de 24 CHF en 2024. Cela représente un coût employeur de 28.30 CHF."
  }

})
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


.v-view-calculator__wrap {
  display: flex;
}

.v-view-calculator__wrap__main {
  box-sizing: border-box;
  width: calc(100% - 30rem);
}
.v-view-calculator__wrap__aside {
  box-sizing: border-box;
  width: 30rem;
}

.v-view-calculator__ticket-container {
  position: sticky;
  top: 0;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
