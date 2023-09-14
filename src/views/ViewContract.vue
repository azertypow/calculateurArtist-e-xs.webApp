<template>
  <div class="v-view-contract app-view">
    <div class="v-view-contract__nav-box" >
        <app-nav
        ></app-nav>
    </div>
    <h2 class="app-with-gutter">GÉNÉRATEUR DE CONTRAT-MODÈLE POUR UNE EXPOSITION</h2>

    <div class="v-view-contract__section">
      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12  app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter"
        >Contrat</div>
        <div class="app-g__coll-6-12 app-with-gutter">
          <div class="app-button--check" :class="{'is-active': contractStore.contract_exposition}" @click="contractStore.contract_exposition = !contractStore.contract_exposition">d’exposition</div>
          <div>
            <div
                class="app-select-style-box"
            >
              <select v-model="contractStore.with_production" >
                <option :value="true">avec</option>
                <option :value="false">sans</option>
              </select>
            </div>production d’œuvre(s)
          </div>

        </div>
      </div>


      <div>
        <div
            class="app-g app-g--with-margin-top-xl"
        >
          <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
          <div class="app-g__coll-4-12 app-with-gutter"
          >Entre la structure</div>
        </div>
        <div class="app-g">
          <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
          <div class="app-g__coll-4-12"></div>
          <div class="app-g__coll-4-12 app-with-gutter"
          >
            <input
                class="app-value-string"
                v-model="contractStore.structure_street"
                placeholder="Rue"
            >
          </div>
          <div class="app-g__coll-2-12 app-with-gutter"
          >
            <input
                class="app-value-string"
                v-model.number="contractStore.structure_number"
                placeholder="Num."
                type="number"
                min="1"
            >
          </div>
        </div>
      </div>

      <div class="app-g">
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.structure_city"
              placeholder="Ville"
          >
        </div>
      </div>
      <div class="app-g">
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.structure_country"
              placeholder="Pays"
          >
        </div>
      </div>

      <div class="app-g app-g--with-margin-top">
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-6-12">
          <div>(ci-après «&nbsp;<content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/>&nbsp;»)
          <br>représenté par:</div>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.struct_representant_firstname"
              placeholder="Prénom"
          >
        </div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.struct_representant_name"
              placeholder="Nom"
          >
        </div>
      </div>

      <div class="app-g app-g--with-margin-top">
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-6-12">
          <div>Agissant en qualité de</div>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.struct_representant_status"
              placeholder="Titre"
          >
        </div>
      </div>

      <div
          class="app-g app-g--with-margin-top-xl"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12">
          <div>et l’artiste/les artistes/le collectif d’artistes/la galerie</div>
        </div>
        <div class="app-g__coll-4-12 app-with-gutter"></div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_firstname"
              placeholder="Prénom"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_name"
              placeholder="NOM"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_nationality"
              placeholder="Nationalité"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_birth"
              placeholder="Date de naissance"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_mail"
              placeholder="Adresse électronique"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_postal"
              placeholder="Adresse postale"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_mobileNumber"
              placeholder="Numéro de mobile"
          >
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.artiste_gallery"
              placeholder="Galerie(s)"
          >
        </div>
      </div>

      <div
              class="app-g"
      >
          <div class="app-g__coll-sm-0-12 app-g__coll-2-12"></div>
          <div class="app-g__coll-4-12"></div>
          <div class="app-g__coll-4-12 app-with-gutter">
              <input
                      class="app-value-string"
                      v-model="contractStore.artiste_represente_par"
                      placeholder="Représenté par"
              >
          </div>
      </div>

    </div>

    <div class="v-view-contract__section">
      <div
          class="app-g"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-10-12">
          <app-contract-content/>
        </div>
        <div class="app-g__coll-2-12">
        </div>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "../components/AppNav.vue";
import {useGlobalStore} from "../stores/globalStore";
import {useContractStore} from "../stores/contractStore";
import type {IStateContractStore} from "../stores/contractStore";
import ContentEditable from "../components/ContentEditable.vue";
import AppContractContent from "../components/AppContractContent.vue";

export default defineComponent({
  name: 'ViewContract',
  components: {AppContractContent, ContentEditable, AppNav},

  data() {
    return {
      contractSection: useGlobalStore().contractSection,
      contractStore: useContractStore() as IStateContractStore,
    }
  },
});
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  border-top: solid 1px var(--app-color-border);
  padding-top: 2rem;
}

.v-view-contract__form-intro {
  margin-bottom: 2rem;
}

.v-view-contract__section {
  box-sizing: border-box;
  border-top: solid 1px var(--app-color-border);
  padding: 2rem 1rem 3rem;
}

div > input,
div > .app-button--check {
  margin-bottom: 1rem !important;
}
</style>
