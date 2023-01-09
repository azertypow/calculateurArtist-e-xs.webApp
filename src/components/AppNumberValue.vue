<template>
  <div class="v-app-number-value">
    <div
        class="v-app-number-value__icon"
    >
      <icon-pen></icon-pen>
    </div>
    <div
        v-if="numberSubsection.unit === 'CHF'"
        class="v-app-number-value__device"
    >CHF</div>
    <input
        class="app-value-number"
        type="number"
        v-model="numberSubsection.value"
        :min="numberSubsection.min"
    >
    <div
        class="v-app-number-value__end"
        v-if="numberSubsection.unit === 'CHF'"
    >.—</div>
    <div
        v-else-if="numberSubsection.unit"
        class="v-app-number-value__device"
    >{{numberSubsection.unit}}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import IconPen from "./IconPen.vue";
import {NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export default defineComponent({
  name: 'AppNumberValue',
  components: {IconPen},

  props: {
    numberSubsection: {
      // required: true,
      type: Object as PropType<NumberCalculatorSubsection>,
      default: new NumberCalculatorSubsection(),
    },
  },

});
</script>

<style lang="scss" scoped>
.v-app-number-value {
  display: flex;
}

.v-app-number-value__icon {
}

</style>