<template>
  <div class="v-app-nav">
    <router-link :to="{name:'calculator'}" class="app-button" >calculateur icon</router-link>
    <router-link :to="{name:'contract'}"   class="app-button" >contrat icon</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppNav',
  components: {},
});
</script>

<style lang="scss" scoped>
.v-app-nav {
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    width: 8rem;
    height: 8rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>