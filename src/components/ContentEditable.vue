<template>
  <input
      class="app-value-string"
      :placeholder="placeholder"
      :style="{
        width: `${stringLength - 1}ch`,
      }"
      v-model="content"
      @input="handleInput"
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
      // required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      content: this.value
    }
  },

  methods: {
    handleInput($event: any) {
      this.$emit('input', this.content)
    }
  },

  computed: {
    stringLength(): number {
      if( !this.content ) return this.placeholder.length
      if(this.content.length < 1) return this.placeholder.length
      return this.content.length
    }
  }

});
</script>

<style lang="scss" scoped>
.v-content-editable {
  display: inline;
}
</style>