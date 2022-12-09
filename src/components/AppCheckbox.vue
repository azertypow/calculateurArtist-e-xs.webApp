<template>
  <div
      class="v-app-checkbox"
  >
    <label
        class="v-app-checkbox__label"
    >
      <input
          @input="checkboxClicked"
          v-model="activated"
          class="v-app-checkbox__input"
          type="checkbox"
      ><span class="v-app-checkbox__text"
    >{{ textValue }}
      <template v-if="description">
        <br><span class="v-app-checkbox__description" >{{description}}</span>
      </template>
      <transition name="v-transition-fade">
        <span
            v-if="info && showInfo"
            class="v-app-checkbox__info"
        >{{info}}</span>
    </transition>
      <span class="v-app-checkbox__i"
            v-if="info"
            @mouseenter="showInfo = true"
            @mouseleave="showInfo = false"
      >i</span>
    </span>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppCheckbox',
  components: {},

  data() {
    return {
      showInfo: false,
      activated: false,
    }
  },

  props: {
    'textValue': {
      required: true,
      type: String,
    },
    'description': {
      required: false,
      type: String,
    },
    'info': {
      required: false,
      type: String,
    },
  },

  methods: {
    checkboxClicked() {
      this.$emit('toggle', {activated: this.activated, textValue: this.textValue})
    }
  },
});
</script>

<style lang="scss" scoped>
.v-app-checkbox {
  display: inline-block;
  user-select: none;
}

.v-app-checkbox__label {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.v-app-checkbox__input {
  all: unset;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border-radius: 2rem;
  margin-right: 1rem;
  box-shadow: inset 0 0 0 2px black;

  &:checked {
    box-shadow: inset 0 0 0 2px black, inset 0 0 0 5px var(--app-color-main);
    background-color: black;
  }
}

.v-app-checkbox__text {
  background: white;
  padding: 1rem 3rem 1rem 1rem;
  border-radius: 2rem;
  position: relative;
}

.v-app-checkbox__description {
  line-height: 2rem;
  font-size: 1.4rem;
}

.v-app-checkbox__info {
  position: absolute;
  width: calc(100% - 4rem);
  background-color: white;
  top: 100%;
  left: 2rem;
  border-radius: 2rem;
  z-index: 10;
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: 1rem;
  box-shadow: 0 10px 10px -10px black;
}

.v-app-checkbox__i {
  position: absolute;
  background: black;
  color: white;
  font-size: 1.2rem;
  bottom: -.5rem;
  right: -.5rem;
  padding: .5rem;
  border-radius: 1rem;
  text-align: center;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  z-index: 10;
}
</style>