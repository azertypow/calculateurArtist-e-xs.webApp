<template>
  <div class="v-home-view">
    <app-nav></app-nav>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNav from "../components/AppNav.vue";

export default defineComponent({
  name: 'HomeView',
  components: {AppNav},

});
</script>

<style lang="scss" scoped>
.v-home-view {

}
</style>