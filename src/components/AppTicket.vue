<template>
  <section class="v-app-ticket">
    <header class="v-app-ticket__header">
      <div>travaildesartistes.ch</div>
    </header>

      <main class="v-app-ticket__main">

        <div v-if="modalitySelected">Modalité de rémunération selectionné&nbsp;: {{ modalitySelected }}</div>

        <template v-if="'errorMessage' in globalTotal" >
          <p style="margin: 0"
          >{{globalTotal.errorMessage}}</p>
        </template>

        <template v-else>
          <div class="v-app-ticket__main__date">
            <div>{{(new Date()).toLocaleDateString().replace(/\//g, '.')}}</div>
            <div>{{time}}</div>
          </div>
          <div class="v-app-ticket__main__prices">
            <template v-if="conditionOnTotalValue">
              <div class="v-app-ticket__main__prices__item">
                <template v-if="conditionOnTotalValue === calculatorSection_0_title.asso">
                  <AppTicketPrice
                          name="Honoraires de conception"
                          :value="globalConceptionPartTotal * (117.634 / 100)"
                  />
                </template>
                <template v-else-if="conditionOnTotalValue === calculatorSection_0_title.sal">
                  <AppTicketPrice
                          name="Honoraires de conception"
                          :value="globalConceptionPartTotal * (100 / 100)"
                  />
                </template>
                <template v-else>
                  <AppTicketPrice
                          name="Honoraires de conception"
                          :value="globalConceptionPartTotal * (117.634 / 100)"
                  />
                </template>

              </div>
            </template>


            <template v-if="conditionOnTotalValue" >
              <template v-for="section of globalStore.calculatorSections.slice(5, 100)" >
                <template v-if="calculateTotalResultOfSubsections(section) > 0">
                  <div class="v-app-ticket__main__prices__item">
                    <template v-if="conditionOnTotalValue === calculatorSection_0_title.asso">
                      <AppTicketPrice
                              :name="section.title"
                              :value="calculateTotalResultOfSubsections(section) * (117.634 / 100)"
                      />
                    </template>
                    <template v-else-if="conditionOnTotalValue === calculatorSection_0_title.sal">
                      <AppTicketPrice
                              :name="section.title"
                              :value="calculateTotalResultOfSubsections(section) * (100 / 100)"
                      />
                    </template>
                    <template v-else>
                      <AppTicketPrice
                              :name="section.title"
                              :value="calculateTotalResultOfSubsections(section) * (117.634 / 100)"
                      />
                    </template>
                  </div>
                </template>
              </template>
            </template>



          </div>
          <div class="v-app-ticket__main__total">
            <div class="v-app-ticket__main__total__result">
              <div>
                TOTAL
              </div>
              <div class="v-app-ticket__main__total__result__value">
                <div>
                  CHF&nbsp;
                </div>
                <template v-if="conditionOnTotalValue">
                  <div v-if="conditionOnTotalValue === calculatorSection_0_title.asso"
                  >{{ globalTotalForAssociation }}</div>
                  <div v-else-if="conditionOnTotalValue === calculatorSection_0_title.sal"
                  >{{ globalTotalForSalarierStruct }}</div>
                  <div v-else>
                    {{ globalTotalForIndependent }}
                  </div>
                </template>
                <div v-else>
                  {{globalTotalForIndependent}}
                </div>
              </div>
            </div>

          </div>
          <div>
            <template v-if="conditionOnTotalValue === calculatorSection_0_title.ind">
              Les montant sont indiqués toutes charges comprises.
            </template>
            <template v-if="conditionOnTotalValue === calculatorSection_0_title.sal">
              Les montant sont indiqués en salaire brut.
            </template>
            <template v-if="conditionOnTotalValue === calculatorSection_0_title.asso">
              Les montant sont indiqués en coût total employeur (incl. 17.634% de charges patronales).
            </template>
            <template v-if="globalStore.isACollective">
              <br>Les collectifs d’artistes sont rémunérés selon un coefficient de 1,5.
            </template>
          </div>

          <div class="v-app-ticket__main__footer" >
            <a href="mailto:communication+calculateur@visarte-geneve.ch"
               target="_blank"
            >communication@visarte-geneve.ch</a>
          </div>
        </template>



      </main>

  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, type Ref, ref, type UnwrapRef} from "vue"
import AppTicketPrice from "@/components/AppTicketPrice.vue";
import {calculateTotalResultOfSubsections, totalWithPercent} from "@/utlis/totalCalculation";
import {calculatorSection_0_title, type IGlobalTotal, useGlobalStore} from "@/stores/globalStore";
import {NumberCalculatorSubsection, OptionCalculatorSubsection} from "@/gloabal/CalculatorSection";

export default defineComponent({
    methods: {calculateTotalResultOfSubsections},
    components: {AppTicketPrice},
    props: {
        // name: String,
        // msg: {type: String, required: true}
    },

    data() {
        return {
            globalStore: useGlobalStore(),
        }
    },

    setup() {
        const time = ref('')

        let intervalId: number

        const updateTime = () => {
            const now = new Date()
            time.value = now.toLocaleTimeString(
                'fr-FR',
                {hour: '2-digit', minute: '2-digit'}
            )
        }

        onMounted(() => {
            updateTime() // appel initial
            intervalId = window.setInterval(updateTime, 30_000)
        })

        onUnmounted(() => {
            clearInterval(intervalId)
        })

        return {time}
    },

    computed: {
        modalitySelected(): string | null {
            return this.globalStore?.calculatorSections[0]._value?.titre ? this.globalStore?.calculatorSections[0]._value?.titre : null
        },

        NumberCalculatorSubsection() {
            return NumberCalculatorSubsection
        },
        OptionCalculatorSubsection() {
            return OptionCalculatorSubsection
        },

        calculatorSection_0_title() {
            return calculatorSection_0_title
        },

        conditionOnTotalValue(): string {
            return (Object.values(this.globalStore.conditionOnTotalValue)[0] as any).value
        },

        globalConceptionPartTotal(): string {
            return this.globalStore.globalConceptionPartTotal
        },

        globalTotal(): IGlobalTotal | {errorMessage: string} {
            return this.globalStore.globalTotal
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
    },
})

</script>

<style lang="scss" scoped>
.v-app-ticket {
  box-sizing: border-box;
  font-size: 1.15rem;
  line-height: 1.25em;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: .25rem;
    background-image: url('@/assets/icons/ticket_de_caisse_tda.svg');
    background-size: auto 100%;
    background-repeat: repeat-x;
  }

  &:after {
    transform-origin: center center;
    transform: rotate(180deg);
  }
}

.v-app-ticket__header {
  box-sizing: border-box;
  padding: 1rem;
  border-bottom: dotted 2px;
  background: white;
}

.v-app-ticket__main {
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: white;
}

.v-app-ticket__main__prices {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.v-app-ticket__main__total {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  line-height: 1.25em;
  font-weight: 900;
  gap: 2rem;
  align-items: flex-end;
}


.v-app-ticket__main__total__result {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: dotted 2px;
  padding-top: 1rem;
}

.v-app-ticket__main__total__result__value {
  width: 12rem;
  display: flex;
  justify-content: space-between;
}

.v-app-ticket__main__footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: dotted 2px;
  padding-top: 1rem;

  a {
    display: block;
    box-shadow: none;
    //text-align: center;
    width: 100%;
    font-size: 1rem;
  }
}

</style>
