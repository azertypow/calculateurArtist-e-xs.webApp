<template>
  <div class="v-view-contract">
    <app-nav></app-nav>
    <h2>GÉNÉRATEUR DE CONTRAT-MODÈLE POUR UNE EXPOSITION</h2>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "../components/AppNav.vue";

export default defineComponent({
  name: 'ViewContract',
  components: {AppNav},

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