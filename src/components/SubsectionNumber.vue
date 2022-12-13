<template>
  <div
      class="v-subsection-number app-subsection"
  >
    <div
        v-if="numberSubsection.hasMultiplier"
        class="app-g"
    >
      <div class="app-g__coll-2-12"></div>
      <div class="app-g__coll-4-12" >{{ numberSubsection.multiplier.text }}</div>
      <div class="app-g__coll-6-12" >{{ numberSubsection.multiplier.value }}</div>
    </div>

    <div
        class="app-g"
    >
      <div class="app-g__coll-2-12"></div>
      <div class="app-g__coll-4-12" >
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

  props: {
    numberSubsection: {
      required: true,
      type: Object as PropType<NumberCalculatorSubsection>
    }
  }

});
</script>

<style lang="scss" scoped>
.v-subsection-number {

}
</style>