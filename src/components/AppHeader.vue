<template>
  <div class="v-app-header">
    <div class="v-app-header__top" >
      <router-link class="v-app-header__title" to="/">
        <h1>Condition Artist.exs</h1>
      </router-link>
    </div>
    <div class="v-app-header__nav-box" >
      <app-nav></app-nav>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "./AppNav.vue";

export default defineComponent({
  name: 'AppHeader',
  components: {AppNav},

});
</script>

<style lang="scss" scoped>
.v-app-header {
  padding-top: 9rem;
}

.v-app-header__top {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--app-color-main);
  width: 100%;
}

.v-app-header__title {
  border-bottom: solid 1px var(--app-color-border);
  text-align: center;
  box-sizing: border-box;
  height: 7rem;
  padding-top: 1rem;
  display: block;
  box-shadow: none;

  h1 {
    margin: 0;
  }
}

.v-app-header__nav-box {
  position: relative;
  background: var(--app-color-main);
  z-index: 10;
  transition: transform .75s .25s ease-in-out;
  transform: translate3d(0, 0, 0);

  .is-home & {
    transform: translate3d(0, calc( -10rem + 50vh - 50% ), 0);
    transition: none;
  }
}
</style>
