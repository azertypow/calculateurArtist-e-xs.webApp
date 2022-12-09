<template>
  <div class="v-icon-is-validate" >
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
      <g   transform="translate(-739 -1511)">
        <circle    cx="7" cy="7" r="7" style="fill:var(--app-color-secondary)" transform="translate(739 1511)"/>
        <path    style="fill: var(--app-color-black)" d="M8.232,14.328,5.883,11.979l-.783.783,3.132,3.132,6.711-6.711L14.16,8.4Z" transform="translate(735.979 1505.854)"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IconIsValidate',
  components: {},

});
</script>

<style lang="scss" scoped>
.v-icon-is-validate {
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

svg {
  display: block;
  margin: auto;
}

</style>