<template>
  <div
      class="v-subsection-number app-subsection"
  >
    <div
        v-if="multiplier && multiplier.status === 'reg'"
        class="app-g"
    >
      <div class="app-g__coll-2-12 app-with-gutter"></div>
      <div class="app-g__coll-4-12 app-with-gutter" >{{ multiplier.text }}</div>
      <div class="app-g__coll-6-12 app-with-gutter" v-if=" !multiplier.isEditable">{{ multiplier.value }}</div>
      <div class="v-subsection-number__multiplier-editable" v-else>
        <div>
          <icon-pen></icon-pen>
        </div>
        <div
            v-if="multiplier.unit === 'CHF'"
        >CHF</div>
        <input  class="app-g__coll-6-12 app-with-gutter app-value-number"
                v-model.number="multiplier.value"
                type="number"
                min="0"
        >
        <div
            v-if="multiplier.unit === 'CHF'"
        >&nbsp;&nbsp;&nbsp;.—</div>
        <div
            v-else-if="multiplier.unit"
        >{{numberSubsection.unit}}</div>
      </div>
    </div>

    <div
        class="app-g app-g--align-end"
    >
      <div class="app-g__coll-2-12 app-with-gutter"></div>
      <div class="app-g__coll-4-12 app-with-gutter" >
        <span v-if="numberSubsection.hasMultiplier && numberSubsection.text" >↳ </span>{{ numberSubsection.text }}
      </div>
      <div class="app-g__coll-6-12" >
        <app-number-value
            :numberSubsection="numberSubsection"
            :is-c-h-f-value="false"
        ></app-number-value>
      </div>

    </div>
      <div
          v-if="multiplier && multiplier.status === 'info'"
          class="app-g v-subsection-number__multiplier--is-info"
      >
        <div class="app-g__coll-2-12 app-with-gutter"></div>
        <div class="app-g__coll-4-12 app-with-gutter" ></div>
        <div class="app-g__coll-6-12 app-with-gutter" >{{ multiplier.text }}<span v-if="multiplier.unit === 'CHF'">CHF</span> {{ multiplier.value }}<span v-if="multiplier.unit === 'CHF'">.–</span><span v-else-if="multiplier.unit">&nbsp;{{multiplier.unit}}</span></div>
      </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {NumberCalculatorSubsection} from "../gloabal/CalculatorSection";
import AppNumberValue from "./AppNumberValue.vue";
import IconPen from "./IconPen.vue";

export default defineComponent({
  name: 'SubsectionNumber',
  components: {IconPen, AppNumberValue},

  data() {
    return {
      multiplier: undefined as {
        text: string,
        value: number,
        status: 'info' | 'reg'
        unit?: 'CHF' | 'mois' | 'heures'
        isEditable: boolean
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

      if(this.numberSubsection.hasMultiplier) this.multiplier = this.numberSubsection.multiplier

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

.v-subsection-number__multiplier--is-info {
  line-height: 2rem;
  font-size: 1.4rem;
  padding-top: 1rem;
}

.v-subsection-number__multiplier-editable {
  display: flex;
}
</style>