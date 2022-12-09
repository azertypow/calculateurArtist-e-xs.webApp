<template>
  <div class="v-app-number-value">
    <div
        v-if="isCHFValue"
        class="v-app-number-value__device"
    >CHF</div>
    <div
        class="v-app-number-value__icon"
    ></div>

    <input
        class="v-app-number-value__value"
        type="number"
    >
    <div
        class="v-app-number-value__end"
        v-if="isCHFValue"
    >.—</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppNumberValue',
  components: {},

  props: {
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
  background: black;
  width:  2rem;
  height: 2rem;
}

.v-app-number-value__value {
  all: unset;
  display: block;
  border-bottom: dashed black 2px;
}

</style>