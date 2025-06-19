<template>
  <section class="v-app-ticket">

    <header class="v-app-ticket__header">
      <div>travaildesartistes.ch</div>
    </header>

    <main class="v-app-ticket__main">

      <div class="v-app-ticket__main__date">
        <div>{{(new Date()).toLocaleDateString().replace(/\//g, '.')}}</div>
        <div>{{time}}</div>
      </div>

      <div class="v-app-ticket__main__prices">
        <div class="v-app-ticket__main__prices__item">
          <AppTicketPrice
                  name="Honoraires de conception"
                  :value="5000"
          />
        </div>

        <div class="v-app-ticket__main__prices__item">
          <AppTicketPrice
                  name="Honoraires de réalisation"
                  :value="300"
          />
        </div>
      </div>

      <div class="v-app-ticket__main__total">
        <div class="v-app-ticket__main__total__label">
          TOTAL
        </div>
        <div class="v-app-ticket__main__total__result">
          <div>CHF</div><div>9 000.—</div>
        </div>
      </div>

    </main>

  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, type Ref, ref} from "vue"
import AppTicketPrice from "@/components/AppTicketPrice.vue";

export default defineComponent({
    components: {AppTicketPrice},
    props: {
        // name: String,
        // msg: {type: String, required: true}
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
  width: 10rem;
  justify-content: space-between;
  border-top: dotted 2px;
  padding-top: 1rem;
}

</style>
