<template>
  <div class="v-app" :class="{'is-home': isHome}">
    <header>
      <app-header></app-header>
    </header>

    <main
        class="v-app__main"
    >
      <router-view v-slot="{ Component }">
        <transition name="vue-transition-page">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppHeader from "./components/AppHeader.vue";
import AppToggleHeader from "./components/AppToggleHeader.vue";

export default defineComponent({
  name: 'App',
  components: {
    AppToggleHeader,
    AppHeader,
  },

  computed: {
    isHome(): boolean {
      return this.$route.name === 'home'
    }
  }

});
</script>

<style lang="scss" scoped>
.v-app {
}

.v-app__main {
  margin: auto;
  max-width: var(--app-max-width);
}
</style>