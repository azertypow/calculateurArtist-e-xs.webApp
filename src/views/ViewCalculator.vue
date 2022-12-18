<template>
  <div class="v-view-calculator">
    <app-nav></app-nav>
    <h2>RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE EXPOSITION</h2>
    <app-section
        v-for="section of sections"
        :title="section.value.title"
        :index="section.value.index"
        :required="section.value.required"
    >
      <subsection-number
          v-if="section.type === 'number'"
          v-for="numberSubsection of section.value.subSections"
          :numberSubsection="numberSubsection"
      >
      </subsection-number>
      <subsection-option
          v-if="section.type === 'option'"
          v-for="optionSubsection of section.value.subSections"
          :optionSubsection="optionSubsection"
      ></subsection-option>
    </app-section>

    <div
        class="v-view-calculator__status"
    >
      <span
          class="v-view-calculator__status__items"
          v-for="(section, index) of sections"
          :class="{
            'is-empty': section.value.status === 'empty',
          }"
      ><span
          v-if="index > 0"
      > |&nbsp;</span><span
          class="v-view-calculator__status__items__icon"
      ></span>&nbsp;{{section.value.title}}</span>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "../components/AppNav.vue";
import AppCheckbox from "../components/AppCheckbox.vue";
import AppSection from "../components/AppSection.vue";
import AppNumberValue from "../components/AppNumberValue.vue";
import {useGlobalStore} from "../stores/globalStore";
import type {
  NumberCalculatorSection,
  OptionCalculatorSection
} from "../gloabal/CalculatorSection";
import SubsectionOption from "../components/SubsectionOption.vue";
import SubsectionNumber from "../components/SubsectionNumber.vue";

export default defineComponent({
  name: 'ViewCalculator',
  components: {SubsectionNumber, SubsectionOption, AppNumberValue, AppSection, AppCheckbox, AppNav},

  data() {
    return {
      globalStore: useGlobalStore(),
      proto: true,
      checkeds: [],
    }
  },

  computed: {
    sections(): {[key: number]: {type: 'option', value: OptionCalculatorSection} | {type: 'number', value: NumberCalculatorSection}}  {
      return this.globalStore.calculatorSections.map(subsection => {
        if(subsection.type === 'number') return {
          type: 'number',
          value: subsection as NumberCalculatorSection,
        }

        return {
          type: 'option',
          value: subsection as OptionCalculatorSection,
        }
      })
    }
  },

});
</script>

<style lang="scss" scoped>
.v-view-calculator {
  padding-top: 2rem;
  padding-bottom: 33.33333vh;
}

h2 {
  text-align: center;
  border-top: solid 1px var(--app-color-border);
  padding-top: 2rem;
}

.v-view-calculator__circle-state-container {
  display: flex;
  justify-content: right;
}

.v-view-calculator__status {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 1.5rem;
  font-size: 1.5rem;
  box-sizing: border-box;
  background: var(--app-color-main);
  padding: 1rem;
  text-align: center;
}

.v-view-calculator__status__items {
}

.v-view-calculator__status__items__icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;

  background-color: var(--app-color-secondary);

  .is-empty & {
    background-color: var(--app-color-border);
  }
}

</style>