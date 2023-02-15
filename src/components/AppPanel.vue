<template>
  <div class="v-app-panel">
    <slot></slot>
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
  height: calc(100%);
  position: fixed;
}
</style>