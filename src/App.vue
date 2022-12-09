<template>
  <div class="v-app">
    <header>
      <app-header></app-header>
    </header>

    <main
        class="v-app__main"
    >
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppHeader from "./components/AppHeader.vue";

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
  },

});
</script>

<style lang="scss" scoped>
.v-app {
}

.v-app__main {
  margin: auto;
  max-width: 100rem;
}
</style>