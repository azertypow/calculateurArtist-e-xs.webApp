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


      <transition
              name="close"
      >
        <div
                v-if="globalStore.$state.showLexical || globalStore.$state.showInfo"
                class="v-app__close"
                @click="closeLexicAndInfoPanels"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m258.423-218.693-38.922-39.73L440.27-480 219.501-701.577l38.922-39.73L480-519.73l221.577-221.577 38.922 39.73L519.73-480l220.769 221.577-38.922 39.73L480-440.27 258.423-218.693Z"/>
            </svg>
        </div>
      </transition>

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
  },

  data() {
      return {
          globalStore: useGlobalStore(),
      }
  },

  methods: {
      closeLexicAndInfoPanels() {
          this.globalStore.showInfo     = false
          this.globalStore.showLexical  = false
      },
  },

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


.v-app__close {
  cursor: pointer;
  position: fixed;
  top: 6rem;
  right: 2rem;
  background: white;
  box-sizing: content-box;
  padding: .5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
  user-select: none;
  z-index: 100000;

  > svg {
    display: block;
    height: 100%;
    width: auto;
    margin: auto;
  }
}

.close-enter-active,
.close-leave-active {
  transition: opacity .25s ease, transform .25s ease-in-out;
}

.close-enter-from,
.close-leave-to {
  opacity: 0;
  transform: rotate(45deg) scale(0.90);
}

</style>
