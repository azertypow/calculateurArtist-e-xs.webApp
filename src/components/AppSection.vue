<template>
  <div class="v-app-section">
    <div class="v-app-section__required-info">
      <span v-if="classifiedSection.value.required" class="v-app-section__required-info__true">*</span>
      <span v-else          class="v-app-section__required-info__false">Facultatif</span>
    </div>
    <div
        class="app-g app-g--align-center"
    >
      <div
          class="app-g__coll-sm-auto app-g__coll-2-12"
      >
        <div
            :class="{'is-empty': classifiedSection.value.status === 'empty'}"
            class="v-app-section__index"
        >{{classifiedSection.value.index}}</div>
      </div>

      <div
          class="app-g__coll-8-12 app-with-gutter"
      >
        <div>{{classifiedSection.value.title}}</div>
      </div>
    </div>
    <div
        class="app-g"
    >
      <div
          class="app-g__coll-12-12"
      >
        <subsection-number
            v-if="sectionIsNumber"
            v-for="numberSubsection of sectionIsNumber.subSections"
            :numberSubsection="numberSubsection"
        >
        </subsection-number>
        <subsection-option
            v-if="sectionIsOption"
            v-for="optionSubsection of sectionIsOption.subSections"
            :optionSubsection="optionSubsection"
        ></subsection-option>
      </div>
    </div>
    <div
        class="app-g"
    >
      <div class="app-g__coll-sm-0-12 app-g__coll-2-12" ></div>
      <div
          class="app-g__coll-sm-12-12 app-g__coll-10-12 v-app-section__help"
          v-html="section.help"
          v-if="showHelpers"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {NumberCalculatorSection, OptionCalculatorSection} from "../gloabal/CalculatorSection";
import SubsectionOption from "./SubsectionOption.vue";
import SubsectionNumber from "./SubsectionNumber.vue";
import {useGlobalStore} from "../stores/globalStore";

export default defineComponent({
  name: 'AppSection',
  components: {SubsectionNumber, SubsectionOption},

  props: {
    section: {
      required: true,
      type: Object as PropType<NumberCalculatorSection | OptionCalculatorSection>,
    },
  },

  computed: {

    showHelpers(): boolean {
      return useGlobalStore().showHelpers
    },

    sectionIsNumber(): NumberCalculatorSection | null {
      if(this.section.type !== 'number') return null
      return this.section as NumberCalculatorSection
    },

    sectionIsOption(): OptionCalculatorSection | null {
      if(this.section.type !== 'option') return null
      return this.section as OptionCalculatorSection
    },


    classifiedSection(): {type: 'option', value: OptionCalculatorSection} | {type: 'number', value: NumberCalculatorSection}  {
        if(this.section.type === 'number') return {
          type: 'number',
          value: this.section as NumberCalculatorSection,
        }

        return {
          type: 'option',
          value: this.section as OptionCalculatorSection,
        }
    }
  }
});
</script>

<style lang="scss">
.v-app-section {
  box-sizing: border-box;
  border-top: solid 1px var(--app-color-border);
  padding: 2rem 1rem 3rem;
  position: relative;

  .app-g__coll-12-12 {
    > .app-g + .app-g {
      margin-top: 4rem;
    }
  }
}

.v-app-section__required-info__true {
  //font-size:    calc( var(--app-font-size) );
  //line-height:  1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.v-app-section__required-info__false {
  font-size:    var(--app-font-size);
  line-height:  1rem;
  position: absolute;
  top: 2rem;
  right: 1rem;
}

.v-app-section__index {
  background: var(--app-color-secondary);
  padding: 1rem;
  line-height: 1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.5rem;

  &.is-empty {
    background: white;
  }
}

.v-app-section__help {
  padding-top: 2rem;
  line-height: 2rem;
  font-size: 1.4rem;
  max-width: 40em;
  position: relative;

  &:before {
    content: 'Aide';
    position: absolute;
    top: 4rem;
    left: 0;
    transform: translateX( calc(-100% - 1rem ));
    padding-left: 3rem;
    width: 1rem;
    height: 2rem;
    background-image: url("../assets/icons/lightbulb.svg");
    background-size: 9.268px auto;
    background-position: center center;
    background-repeat: no-repeat;

    @media (max-width: 700px) {
      top: 1.5rem;
      left: 0;
      transform: none;
      width: 2.5rem;
      height: 2rem;
      background-size: 12px auto;
      background-position: 10px center;
    }
  }

  > ul {
    padding-left: 0;

    > li {
      display: block;
      position: relative;
      padding-left: 2rem;

      &:before {
        content: '—';
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>
