<template>
  <div
      class="v-subsection-number app-subsection"
  >
    <div
        v-if="multiplier"
        class="app-g"
    >
      <div class="app-g__coll-2-12 app-with-gutter"></div>
      <div class="app-g__coll-4-12 app-with-gutter" >{{ multiplier.text }}</div>
      <div class="app-g__coll-6-12 app-with-gutter" >{{ multiplier.value }}</div>
    </div>

    <div
        class="app-g"
    >
      <div class="app-g__coll-2-12 app-with-gutter"></div>
      <div class="app-g__coll-4-12 app-with-gutter" >
        <span v-if="numberSubsection.hasMultiplier" >↳</span>{{ numberSubsection.text }}
      </div>
      <div class="app-g__coll-6-12" >
        <app-number-value
            :numberSubsection="numberSubsection"
            :is-c-h-f-value="false"
        ></app-number-value>
      </div>
    </div>

    <h6 class="app-subsection__result" >result: {{numberSubsection.result}}</h6>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {NumberCalculatorSubsection} from "../gloabal/CalculatorSection";
import AppNumberValue from "./AppNumberValue.vue";

export default defineComponent({
  name: 'SubsectionNumber',
  components: {AppNumberValue},

  data() {
    return {
      multiplier: undefined as {
        text: string,
        value: number,
      } | undefined
    }
  },

  props: {
    numberSubsection: {
      required: true,
      type: Object as PropType<NumberCalculatorSubsection>
    }
  },

  mounted() {
    this.$nextTick(() => {

      this.numberSubsection.onValueMultiplierChange = () => {

        console.log(this.numberSubsection.multiplier)
        this.multiplier = this.numberSubsection.multiplier
      }

    })
  }

});
</script>

<style lang="scss" scoped>
.v-subsection-number {

}
</style>