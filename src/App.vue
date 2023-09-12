<template>
  <div
        class="v-app"
        :class="{
          'is-home': isHome,
          'wait-pdf-export': waitPDFExport,
        }"
  >
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

      <div
              class="v-app__export-loader"
              v-if="waitPDFExport"
      >
          <div
                  class="v-app__export-loader__background"
          ></div>
          <div
                  class="v-app__export-loader__text"
          >Export PDF
              <div
                      class="v-app__export-loader__animation"
              ><span>.</span><span>.</span><span>.</span></div>
          </div>
      </div>

    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import {useGlobalStore} from "./stores/globalStore";

export default defineComponent({
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  },

  computed: {
    isHome(): boolean {
      return this.$route.name === 'home'
    },

    waitPDFExport(): boolean {
        return useGlobalStore().waitPDFExport
    }
  }

});
</script>

<style lang="scss" scoped>
.v-app {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &.wait-pdf-export {
    user-select: none !important;
    pointer-events: none !important;
  }
}

.v-app__main {
  margin: auto;
  max-width: var(--app-max-width);
}


.v-app__export-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  .v-app__export-loader__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .85;
    background: white;
  }

  .v-app__export-loader__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .v-app__export-loader__animation {
    display: inline-block;

    >* {
      animation-name: pdf-export-animation;
      animation-duration: .75s;
      animation-delay: 0ms;
      animation-iteration-count: infinite;
    }

    >*:nth-child(2) {
      animation-delay: 500ms;
    }
    >*:nth-child(3) {
      animation-delay: 1000ms;
    }
  }
}

@keyframes pdf-export-animation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
