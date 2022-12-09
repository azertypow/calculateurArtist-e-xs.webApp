<template>
  <div class="v-icon-pen">
    <svg   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.849" height="13.85" viewBox="0 0 13.849 13.85">
      <g   clip-path="url(#clip-path)">
        <path   d="M3.461.433A2.163,2.163,0,0,0,.433,3.463l.867.866L4.326,1.3Z" fill="#060708"/>
        <path   d="M2.161,0h0Z" fill="#060708"/>
        <path   d="M12.984,9.95l-8.006-8L1.948,4.973l8.008,8.011,3.894.866ZM9.892,12.309,2.622,5.036,5.04,2.623l7.269,7.265Z" fill="#060708"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IconPen',
  components: {},

});
</script>

<style lang="scss" scoped>
.v-icon-pen {
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