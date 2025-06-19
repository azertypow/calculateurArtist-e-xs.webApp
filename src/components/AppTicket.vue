<template>
  <section class="v-app-ticket">
    <header class="v-app-ticket__header">
      <div>travaildesartistes.ch</div>
    </header>

      <main class="v-app-ticket__main">

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
            <div class="v-app-ticket__main__prices__item">
              <AppTicketPrice
                      name="Honoraires de conception"
                      :value="globalConceptionPartTotal"
              />
            </div>


            <template v-if="conditionOnTotalValue" >
              <template v-for="section of globalStore.calculatorSections.slice(5, 100)" >
                <div class="v-app-ticket__main__prices__item"
                     v-if="section.value > 0"
                >
                  <template v-if="conditionOnTotalValue === calculatorSection_0_title.asso">
                    <AppTicketPrice
                            :name="section.title"
                            :value="section.value * (117.634 / 100)"
                    />
                  </template>
                  <template v-else-if="conditionOnTotalValue === calculatorSection_0_title.sal">
                    <AppTicketPrice
                            :name="section.title"
                            :value="section.value * (117.634 / 100)"
                    />
                  </template>
                  <template v-else>
                    <AppTicketPrice
                            :name="section.title"
                            :value="section.value * (100 / 100)"
                    />
                  </template>
                </div>
              </template>
            </template>



          </div>
          <div class="v-app-ticket__main__total">
            <div class="v-app-ticket__main__total__result">
              <div>
                TOTAL
              </div>
              <div>
                CHF&nbsp;
                <template v-if="conditionOnTotalValue">
                  <div v-if="conditionOnTotalValue === calculatorSection_0_title.asso"
                  >{{ globalTotalForAssociation }}</div>
                  <div v-else-if="conditionOnTotalValue === calculatorSection_0_title.sal"
                  >{{ globalTotalForSalarierStruct }}</div>
                  <template v-else>
                    {{ globalTotalForIndependent }}
                  </template>
                </template>
                <template v-else>
                  {{globalTotalForIndependent}}
                </template>
              </div>
            </div>
          </div>
        </template>



      </main>

  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, type Ref, ref, type UnwrapRef} from "vue"
import AppTicketPrice from "@/components/AppTicketPrice.vue";
import {totalWithPercent} from "@/utlis/totalCalculation";
import {calculatorSection_0_title, type IGlobalTotal, useGlobalStore} from "@/stores/globalStore";

export default defineComponent({
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
            return totalWithPercent(this.globalTotal, 100)
        },

        globalTotalForAssociation(): string {
            return totalWithPercent(this.globalTotal, 117.634)
        },

        globalTotalForSalarierStruct(): string {
            return totalWithPercent(this.globalTotal, 117.634)
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
  gap: 4rem;
  background: white;
}

.v-app-ticket__main__prices {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

</style>
