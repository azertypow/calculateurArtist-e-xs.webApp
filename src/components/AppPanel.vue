<template>
  <div class="v-app-panel">
    <div class="v-app-panel__container" >
      <div class="app-with-gutter">
        <slot name="left" ></slot>
      </div>

      <div class="app-with-gutter" >
        <slot name="right" ></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppPanel',
  components: {},

});
</script>

<style lang="scss" scoped>
.v-app-panel {
  height: calc(100% - 6.6rem - 4rem);
  width: 100%;
  background: var(--app-color-main);
  position: fixed;
  top: 7rem;
  left: 0;
  overflow: auto;
}

.v-app-panel__container {
  margin: auto;
  max-width: var(--app-max-width);
  display: flex;

  > div {
    width: 50%;
  }
}
</style>
