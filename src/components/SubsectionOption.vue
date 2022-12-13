<template>
  <div
      class="v-subsection-option app-subsection"
  >
    <div
        class="app-g"
    >
      <div
          class="app-g__coll-6-12"
      ></div>
      <div
          class="app-g__coll-6-12"
      >
        <app-checkbox
            :textValue="optionSubsection.titre"
            :description="optionSubsection.subtitle"
        ></app-checkbox>
      </div>
    </div>

  <h6 class="app-subsection__result" >option result</h6>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import AppCheckbox from "./AppCheckbox.vue";
import type {OptionCalculatorSubsection} from "../gloabal/CalculatorSection";

export default defineComponent({
  name: 'SubsectionOption',
  components: {AppCheckbox},

  props: {
    optionSubsection: {
      required: true,
      type: Object as PropType<OptionCalculatorSubsection>
    }
  },

});
</script>

<style lang="scss" scoped>
.v-subsection-option {

}
</style>