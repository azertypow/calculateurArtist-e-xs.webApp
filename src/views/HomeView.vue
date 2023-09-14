<template>
  <div class="v-home-view app-view">
      <div class="v-home-view__nav-box" >
          <app-nav
                  :remove-description-mobile-version="false"
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
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
