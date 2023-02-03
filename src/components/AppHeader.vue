<template>
  <div class="v-app-header">
    <div class="v-app-header__top" >
      <div class="v-app-header__title">
        <h1>CONTRAT-MODÈLE ET RECOMMANDATIONS DE RÉMUNÉRATION POUR UNE&nbsp;EXPOSITION</h1>
      </div>
    </div>
    <app-toggle-header></app-toggle-header>
    <div class="v-app-header__nav-box" >
      <app-nav></app-nav>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "./AppNav.vue";
import AppToggleHeader from "./AppToggleHeader.vue";

export default defineComponent({
  name: 'AppHeader',
  components: {AppNav, AppToggleHeader},

});
</script>

<style lang="scss" scoped>
.v-app-header {
  padding-top: 13rem;
}

.v-app-header__top {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--app-color-main);
}

.v-app-header__title {
  border-bottom: solid 1px var(--app-color-border);
  text-align: center;
  box-sizing: border-box;
  height: 10rem;
  padding-top: 1rem;

  h1 {
    margin: 0;
  }
}

.v-app-header__nav-box {
  position: relative;
  transform: translate3d(0, 0, 0);
  transition: transform .75s .25s ease-in-out;
  background: var(--app-color-main);
  z-index: 10;

  .is-home & {
    transform: translate3d(0, calc( -10rem + 50vh - 50% ), 0);
  }
}
</style>