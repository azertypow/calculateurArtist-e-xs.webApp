<template>
  <div class="v-home-view">
      <div class="v-home-view__nav-box" >
          <app-nav
                  :with-description = 'true'
          ></app-nav>
      </div>
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
