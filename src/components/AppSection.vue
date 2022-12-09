<template>
  <div class="v-app-section">
    <div
        class="app-g"
    >
      <div
          class="app-g__coll-2-12"
      >
        <div class="v-app-section__index">{{index}}</div>
      </div>

      <div
          class="app-g__coll-4-12"
      >
        <div>{{title}}</div>
      </div>

      <div
          class="app-g__coll-6-12"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppSection',
  components: {},

  props: {
    index: {
      required: true,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.v-app-section {
  box-sizing: border-box;
  border-top: solid 1px var(--app-color-border);
  padding: 3rem 1rem;
}

.v-app-section__index {
  background: var(--app-color-secondary);
  padding: 1rem;
  line-height: 1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.5rem;
}
</style>