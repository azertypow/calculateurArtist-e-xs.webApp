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
            @click="activeThisSubsection"
            :activated="optionSubsection.isActive"
            :textValue="optionSubsection.titre"
            :description="optionSubsection.subtitle"
        ></app-checkbox>
        <div
            v-if="numberValue > 0"
            class="v-subsection-option__info-value"
        >(&nbsp;{{numberValue}}/heure&nbsp;)</div>
      </div>
    </div>

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

  data() {
    return {
      numberValue: 0
    }
  },

  props: {
    optionSubsection: {
      required: true,
      type: Object as PropType<OptionCalculatorSubsection>
    }
  },

  mounted() {
    this.$nextTick(() => {

      this.numberValue = this.optionSubsection.resultInfo
      this.optionSubsection.onResultChange = () => {
        this.numberValue = this.optionSubsection.resultInfo
      }

    })
  },

  methods: {
    activeThisSubsection() {
      if(this.optionSubsection.parent === undefined) return
      this.optionSubsection.parent.value = this.optionSubsection
    }
  }

});
</script>

<style lang="scss" scoped>
.v-subsection-option {

}

.v-subsection-option__info-value {
  padding-left: 4rem;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
}
</style>