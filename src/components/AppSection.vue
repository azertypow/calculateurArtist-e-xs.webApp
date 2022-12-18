<template>
  <div class="v-app-section">
    <div class="v-app-section__required-info">
      <span v-if="required" class="v-app-section__required-info__true">*</span>
      <span v-else          class="v-app-section__required-info__false">Facultatif</span>
    </div>
    <div
        class="app-g app-g--align-center"
    >
      <div
          class="app-g__coll-2-12"
      >
        <div class="v-app-section__index">{{index}}</div>
      </div>

      <div
          class="app-g__coll-8-12"
      >
        <div>{{title}}</div>
      </div>
    </div>
    <div
        class="app-g"
    >
      <div
          class="app-g__coll-12-12"
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
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.v-app-section {
  box-sizing: border-box;
  border-top: solid 1px var(--app-color-border);
  padding: 2rem 1rem 3rem;
  position: relative;

  .app-g__coll-12-12 {
    > .app-g + .app-g {
      margin-top: 4rem;
    }
  }
}

.v-app-section__required-info__true {
  //font-size:    calc( var(--app-font-size) );
  //line-height:  1rem;
  position: absolute;
  top: 1rem;
  right: 0;
}

.v-app-section__required-info__false {
  font-size:    var(--app-font-size);
  line-height:  1rem;
  position: absolute;
  top: 2rem;
  right: 0;
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