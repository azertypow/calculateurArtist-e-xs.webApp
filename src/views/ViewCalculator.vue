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
          >

            <template v-if="conditionOnTotalValue">
              <div v-if="conditionOnTotalValue === calculatorSection_0_title.asso"
              >CHF {{ formatCHF(globalTotalForAssociation) }}</div>
              <div v-else-if="conditionOnTotalValue === calculatorSection_0_title.sal"
              >CHF {{ formatCHF(globalTotalForSalarierStruct) }}</div>
              <template v-else>
                CHF {{ formatCHF(globalTotalForIndependent) }}
              </template>
            </template>
            <template v-else>
              CHF {{ formatCHF(globalTotalForIndependent) }}
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
import {totalWithPercent} from "@/utlis/totalCalculation";

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

    globalTotalForIndependent(): string {
        return totalWithPercent(this.globalTotal, 117.634)
    },

    globalTotalForAssociation(): string {
      return totalWithPercent(this.globalTotal, 117.634)
    },

    globalTotalForSalarierStruct(): string {
        return totalWithPercent(this.globalTotal, 100)
    }

  }

});

useGlobalStore().$onAction(context => {
  if( context.name !== 'setConditionOnTotalValue' ) return


  if(context.args[2] === calculatorSection_0_title.ind) {
  }
  else if(context.args[2] === calculatorSection_0_title.asso) {
  }
  else if(context.args[2] === calculatorSection_0_title.sal) {
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

  @media (max-width: 1150px) {
   width: 100%;
  }
}
.v-view-calculator__wrap__aside {
  box-sizing: border-box;
  width: 30rem;

  @media (max-width: 1150px) {
    display: none;
  }
}

.v-view-calculator__ticket-container {
  position: sticky;
  top: 0;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
