<template>
  <div class="v-app-nav">
    <router-link :to="{name:'calculator'}" class="app-button" ><icon-calculator></icon-calculator></router-link>
    <router-link :to="{name:'contract'}"   class="app-button" ><icon-contract></icon-contract></router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconCalculator from "./IconCalculator.vue";
import IconContract from "./IconContract.vue";
import IconIsValidate from "./IconIsValidate.vue";
import IconPen from "./IconPen.vue";
import IconDelet from "./IconDelete.vue";

export default defineComponent({
  name: 'AppNav',
  components: {IconDelet, IconPen, IconIsValidate, IconContract, IconCalculator},
});
</script>

<style lang="scss" scoped>
.v-app-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;

  > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>