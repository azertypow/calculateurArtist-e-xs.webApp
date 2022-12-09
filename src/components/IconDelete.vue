<template>
  <div class="v-icon-delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16.054" height="20.641" viewBox="0 0 16.054 20.641">
      <path
            d="M8.647,22.848a2.3,2.3,0,0,0,2.293,2.293h9.174a2.3,2.3,0,0,0,2.293-2.293V9.087H8.647Zm2.821-8.165,1.617-1.617L15.527,15.5l2.431-2.431,1.617,1.617-2.431,2.431,2.431,2.431-1.617,1.617-2.431-2.431L13.1,21.162l-1.617-1.617,2.431-2.431Zm8.073-9.036L18.394,4.5H12.66L11.514,5.647H7.5V7.94H23.554V5.647Z"
            transform="translate(-7.5 -4.5)"/>
    </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IconDelet',
  components: {},

});
</script>

<style lang="scss" scoped>
.v-icon-delete {
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