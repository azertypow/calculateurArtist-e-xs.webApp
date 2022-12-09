<template>
  <div class="v-view-calculator">
    <app-nav></app-nav>
    <h2>RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE EXPOSITION</h2>

    <app-section
        :index="1"
        title="Taille de la structure"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Petite"  description="< 50 000 CHF /année"></app-checkbox>
        <app-checkbox textValue="Moyenne" description="50K–250K CHF /année"></app-checkbox>
        <app-checkbox textValue="Grande"  description="250K–500K CHF /année"></app-checkbox>
        <app-checkbox textValue="Très"    description="> 500K CHF /année"></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="2"
        title="Type d’exposition"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox @toggle="checkBoxToggle" textValue="Solo"        ></app-checkbox>
        <app-checkbox @toggle="checkBoxToggle" textValue="2 à 6 pers." ></app-checkbox>
        <app-checkbox @toggle="checkBoxToggle" textValue="7 et plus"   ></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="3"
        title="Honoraires de participation et/ou de conception"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"
                      info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."
        ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="4"
        title="Durée de l’exposition (en mois)"
    >
      <div
          class="v-view-calculator__section"
      >
        <div
            class="v-view-calculator__section__line"
        >
          <app-number-value :is-c-h-f-value="false" ></app-number-value>
        </div>
      </div>
    </app-section>

    <app-section
        :index="5"
        title="Honoraires de réalisation (si réalisé par l’artiste)"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"
                      info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."
        ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="6"
        title="Per Diem"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"
                      info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."
        ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="7"
        title="Per Diem"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"
                      info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."
        ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="8"
        title="Forfait par performance"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"
                      info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."
        ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
      </div>
    </app-section>

    <app-section
        :index="9"
        title="Forfait texte / 1000 frappes"
    >
      <div
          class="v-view-calculator__section"
      >
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"
                      info="Si la pièce a été produite AVANT la proposition de participation à l’exposition et qu’il n’y a pas de modifications à effectuer sur la pièce pour la présenter, cocher cette case."
        ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes" ></app-checkbox>
        <app-checkbox textValue="Emploi d’une ou plusieurs œuvres existantes"   ></app-checkbox>
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

export default defineComponent({
  name: 'ViewCalculator',
  components: {AppNumberValue, AppSection, AppCheckbox, AppNav},

  data() {
    return {
      proto: true,
      checkeds: [],
    }
  },

  methods: {
    checkBoxToggle(value: {activated: boolean, textValue: string}) {
      console.log(value)
    }
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

.v-view-calculator__section {
  display: flex;
  flex-direction: column;
}

.v-view-calculator__section__line {
  display: flex;
  flex-direction: row;
}

.v-view-calculator__section__line__coll {
  display: block;
  box-sizing: border-box;
}

</style>