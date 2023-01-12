<template>
  <div class="v-view-contract">
    <app-nav></app-nav>
    <h2>GÉNÉRATEUR DE CONTRAT-MODÈLE POUR UNE EXPOSITION</h2>

    <div class="v-view-contract__section">
      <div
          class="app-g"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter"
        >Contrat</div>
        <div class="app-g__coll-6-12 app-with-gutter">
          <div class="app-button--check" :class="{'is-active': contractStore.contract_exposition}" @click="contractStore.contract_exposition = !contractStore.contract_exposition">d'exposition</div>
          <div class="app-with-bottom-spacing" style="padding-left: 3rem">et/ou</div>
          <div class="app-button--check" :class="{'is-active': contractStore.contract_public}" @click="contractStore.contract_public = !contractStore.contract_public">présentation publique</div>
          <div>
            <select v-model="contractStore.with_production" >
              <option :value="true">avec</option>
              <option :value="false">sans</option>
            </select> production d'œvre(s)
          </div>

        </div>
      </div>

      <div
          class="app-g app-with-bottom-spacing"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter"
        >Entre</div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter"
        >
          <div class="app-select-style">la structure</div>
        </div>
        <div class="app-g__coll-4-12 app-with-gutter"
        >
          <input
              class="app-value-string"
              v-model="contractStore.structure_name"
              placeholder="Nom de la structure"
          >
        </div>
      </div>
      <div class="app-g">
        <div class="app-g__coll-2-12"></div>
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
              v-model="contractStore.structure_street"
              placeholder="Num."
          >
        </div>
      </div>
      <div class="app-g">
        <div class="app-g__coll-2-12"></div>
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
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.structure_country"
              placeholder="Pays"
          >
        </div>
      </div>

      <div class="app-g">
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-6-12">
          <p>(ci-après «&nbsp;<content-editable placeholder="Nom de la structure" :value="contractStore.structure_name" @update:value="contractStore.structure_name = $event"/>&nbsp;»)
          <br>représenté par:</p>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.user_name"
              placeholder="Nom"
          >
        </div>
      </div>
      <div
          class="app-g"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.user_firstname"
              placeholder="Prénom"
          >
        </div>
      </div>

      <div class="app-g">
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-6-12">
          <p>Agissant en qualité de</p>
        </div>
      </div>

      <div
          class="app-g"
      >
        <div class="app-g__coll-2-12"></div>
        <div class="app-g__coll-4-12"></div>
        <div class="app-g__coll-4-12 app-with-gutter">
          <input
              class="app-value-string"
              v-model="contractStore.user_status"
              placeholder="Titre"
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
.v-view-contract {
  padding-top: 2rem;
  padding-bottom: 33.33333vh;
}

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
