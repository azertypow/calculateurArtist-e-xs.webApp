<template>
  <div class="v-view-calculator">
    <app-nav></app-nav>
    <h2>RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE EXPOSITION</h2>

    <app-section
        v-for="section of sections"
        :title="section.value.title"
        :index="section.value.index"
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

    <h1>new system class</h1>

    <app-section
        :index="1"
        title="Taille de la structure"
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
          <app-checkbox textValue="Petite"  description="< 50 000 CHF /année"></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-6-12"
        ></div>
        <div
            class="app-g__coll-6-12"
        >
          <app-checkbox textValue="Moyenne" description="50K–250K CHF /année"></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-6-12"
        ></div>
        <div
            class="app-g__coll-6-12"
        >
          <app-checkbox textValue="Grande"  description="250K–500K CHF /année"></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-6-12"
        ></div>
        <div
            class="app-g__coll-6-12"
        >
          <app-checkbox textValue="Très"    description="> 500K CHF /année"></app-checkbox>
        </div>
      </div>
    </app-section>

    <app-section
        :index="2"
        title="Type d’exposition"
    >
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12"></div>
        <div class="app-g__coll-6-12">
          <app-checkbox @toggle="checkBoxToggle" textValue="Solo"        ></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12"></div>
        <div class="app-g__coll-6-12">
          <app-checkbox @toggle="checkBoxToggle" textValue="2 à 6 pers." ></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12"></div>
        <div class="app-g__coll-6-12">
          <app-checkbox @toggle="checkBoxToggle" textValue="7 et plus"   ></app-checkbox>
        </div>
      </div>
    </app-section>

    <app-section
        :index="3"
        title="Honoraires de participation et/ou de conception"
    >
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12" ></div>
        <div class="app-g__coll-6-12" >
          <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12" ></div>
        <div class="app-g__coll-6-12" >
          <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12" ></div>
        <div class="app-g__coll-6-12" >
          <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
        </div>
      </div>
    </app-section>

    <app-section
        :index="4"
        title="Durée de l’exposition (en mois)"
    >
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12" ></div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>
    </app-section>

    <app-section
        :index="5"
        title="Honoraires de réalisation (si réalisé par l’artiste)"
    >
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle app-circle--is-active" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Coût horaire</p>
          <p>↳ nombre d’heures</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle app-circle--is-active" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Forfait de réalisation</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>
    </app-section>

    <app-section
        :index="6"
        title="Per Diem"
    >
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Per Diem</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="true" ></app-number-value>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Nombre d'heures</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>
    </app-section>

    <app-section
        :index="7"
        title="Honoraires de montage et transport"
    >
      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Honoraires de montage et transport</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>↳ nombre d’heures</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>

    </app-section>

    <app-section
        :index="8"
        title="Forfait par performance"
    >

      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Forfait par performance</p>
          <p>↳ nombre d’occurences</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Évènement avec préparation</p>
          <p>↳ nombre d’occurences</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>


      <div
          class="app-g"
      >
        <div
            class="app-g__coll-2-12"
        >
          <div
              class="v-view-calculator__circle-state-container"
          >
            <div class="app-circle" ></div>
          </div>
        </div>
        <div class="app-g__coll-4-12 app-remove-child-margin" >
          <p>Évènement sans préparation</p>
          <p>↳ nombre d’occurences</p>
        </div>
        <div class="app-g__coll-6-12" >
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
          <app-number-value :numberSubsection="10" :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>

    </app-section>

    <app-section
        :index="9"
        title="Forfait texte / 1000 frappes"
    >
      <div
          class="app-g"
      >
        <div class="app-g__coll-6-12" ></div>
        <div class="app-g__coll-6-12" ></div>
      </div>
    </app-section>
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

  methods: {
    checkBoxToggle(value: {activated: boolean, textValue: string}) {
      console.log(value)
    },
  },

});
</script>

<style lang="scss" scoped>
.v-view-calculator {
  padding-top: 2rem;
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
</style>