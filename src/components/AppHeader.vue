<template>
  <div class="v-app-header">
    <h1>CONTRAT-MODÈLE ET RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE&nbsp;EXPOSITION</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppHeader',
  components: {},

});
</script>

<style lang="scss" scoped>
.v-app-header {
  border-bottom: solid 1px var(--app-color-border);
  text-align: center;
  box-sizing: border-box;
  height: 10rem;
  padding-top: 1rem;

  h1 {
    margin: 0;
  }
}
</style>