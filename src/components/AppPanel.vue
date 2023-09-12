<template>
  <div class="v-app-panel">
      <div
              class="v-app-panel__close"
              @click="closeLexicAndInfoPanels"
      ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m258.423-218.693-38.922-39.73L440.27-480 219.501-701.577l38.922-39.73L480-519.73l221.577-221.577 38.922 39.73L519.73-480l220.769 221.577-38.922 39.73L480-440.27 258.423-218.693Z"/></svg></div>
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
        closeLexicAndInfoPanels() {
            this.globalStore.showInfo     = false
            this.globalStore.showLexical  = false
        },
        listernerEscapeKeyUp(ev: KeyboardEvent) {
            console.log('key pressed', ev.code === 'Escape')
            if (ev.code === 'Escape') this.closeLexicAndInfoPanels()
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
}

.v-app-panel__close {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  box-sizing: content-box;
  padding: .5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
  user-select: none;

  > svg {
    display: block;
    height: 100%;
    width: auto;
    margin: auto;
  }
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
