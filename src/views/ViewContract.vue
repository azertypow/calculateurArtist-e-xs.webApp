<template>
  <div class="v-view-contract">
    <app-nav></app-nav>
    <h2>GÉNÉRATEUR DE CONTRAT-MODÈLE POUR UNE EXPOSITION</h2>

    <div
        class="v-view-contract__form-intro"
    >
      <div
          class="app-g"
          v-for="(section, key) of contractSection.values"
      >
        <div
            class="app-g__coll-4-12"
        >{{key}}</div>
        <div
            class="app-g__coll-6-12"
        >
          <div v-for="subsection of section.subsections">
            {{subsection.name}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "../components/AppNav.vue";
import {useGlobalStore} from "../stores/globalStore";

export default defineComponent({
  name: 'ViewContract',
  components: {AppNav},

  data() {
    return {
      contractSection: useGlobalStore().contractSection
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
</style>