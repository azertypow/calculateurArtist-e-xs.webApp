<template>
  <div class="v-app-number-value">
    <div
        class="v-app-number-value__icon"
    >
      <icon-pen></icon-pen>
    </div>
    <div
        v-if="isCHFValue"
        class="v-app-number-value__device"
    >CHF</div>
    <input
        class="v-app-number-value__value"
        type="number"
        v-model="numberSubsection?.value"
    >
    <div
        class="v-app-number-value__end"
        v-if="isCHFValue"
    >.—</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import IconPen from "./IconPen.vue";
import type {NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export default defineComponent({
  name: 'AppNumberValue',
  components: {IconPen},

  props: {
    numberSubsection: {
      // required: true,
      type: Object as PropType<NumberCalculatorSubsection>,
    },
    isCHFValue: {
      required: false,
      default: false,
      type: Boolean,
    }
  },

});
</script>

<style lang="scss" scoped>
.v-app-number-value {
  display: flex;
}

.v-app-number-value__icon {
}

.v-app-number-value__value {
  all: unset;
  display: block;
  border-bottom: dashed black 2px;
}

</style>