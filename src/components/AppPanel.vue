<template>
  <div class="v-app-panel">
    <div class="v-app-panel__container" >
      <div class="app-with-gutter">
        <slot name="left" ></slot>
      </div>

      <div class="app-with-gutter" >
        <slot name="right" ></slot>
      </div>

        <div class="">
            <slot name="left-bottom"></slot>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useGlobalStore} from "../stores/globalStore";

export default defineComponent({
  name: 'AppPanel',

    mounted() {
      window.addEventListener('keyup', this.listernerEscapeKeyUp)
    },

    unmounted() {
        window.removeEventListener('keyup', this.listernerEscapeKeyUp)
    },

    components: {},

    data() {
        return {
            globalStore: useGlobalStore(),
        }
    },


    methods: {
        listernerEscapeKeyUp(ev: KeyboardEvent) {
            if (ev.code === 'Escape') {
                this.globalStore.showInfo     = false
                this.globalStore.showLexical  = false
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.v-app-panel {
  height: calc(100% - 2rem - 4rem - 1px);
  width: 100%;
  background: var(--app-color-main);
  position: fixed;
  top: 4rem;
  left: 0;
  overflow: auto;
  z-index: 10;
}

.v-app-panel__container {
  margin: auto;
  max-width: var(--app-max-width);
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 50%;
    box-sizing: border-box;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
.v-app-panel__container {
  h4 {
    margin-top: 6rem;
  }
}
</style>
