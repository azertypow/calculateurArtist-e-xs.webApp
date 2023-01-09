<template>
  <input
      class="app-value-string"
      :placeholder="placeholder"
      :style="{
        width: `${stringLength}ch`,
      }"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ContentEditable',

  components: {
  },

  props: {
    value: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
  },

  computed: {
    stringLength(): number {
      if( !this.value ) return this.placeholder.length
      if(this.value.length < 1) return this.placeholder.length
      return this.value.length
    }
  }

});
</script>

<style lang="scss" scoped>
.v-content-editable {
  display: inline;
  white-space: normal;
}
</style>