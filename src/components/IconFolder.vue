<template>
    <div class="v-icon-folder">
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             viewBox="0 0 94.3 84.5" style="enable-background:new 0 0 94.3 84.5;" xml:space="preserve">
            <g>
                <path class="st12" d="M35.2,35l-4.4,31.2C30.7,66.6,31,67,31.4,67c0.1,0,0.1,0,0.2,0l34.2-13.2c0.3-0.1,0.5-0.3,0.5-0.6l4.1-29.1
                  c0.1-0.4-0.3-0.8-0.7-0.8c0,0-0.1,0-0.1,0l-33.9,11C35.5,34.4,35.2,34.7,35.2,35z"/>
                              <path class="st12" d="M33.6,34.8c0.1-1,0.8-1.7,1.8-1.9l26.3-8.5v-2c0-0.5-0.4-0.8-0.9-0.7l-16.1,4.9c-0.4,0.1-0.9-0.2-0.9-0.7
                  v-6.1c0-0.5-0.4-0.8-0.9-0.7L28,23.5c-0.3,0.1-0.5,0.4-0.5,0.7V64c0,0.5,0.5,0.8,0.9,0.6l0.9-0.3L33.6,34.8z"/>
            </g>
        </svg>

    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IconFolder',
  components: {},

});
</script>

<style lang="scss" scoped>
.v-icon-folder {
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

svg {
  display: block;
  margin: auto;
  width: auto;
  height: 8rem;
}
</style>
