<template>
  <input
      class="v-content-editable app-value-string"
      :placeholder="placeholder"
      :style="{
        width: `${stringLength}ch`,
      }"
      :value="value"
      @input="inputUpdate($event)"
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

  methods: {
    inputUpdate(e: Event) {
      if(e.target instanceof HTMLInputElement) this.$emit('update:value', e.target.value)
    }
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
  font-family: Suisse_Mono, monospace;
}
</style>