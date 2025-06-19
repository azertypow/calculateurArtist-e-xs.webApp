<template>
  <div class="v-app-ticket-price">
    <div class="v-app-ticket-price__title">
      {{name}}
    </div>

    <div class="v-app-ticket-price__value">
      <div class="v-app-ticket-price__value__prefix">
        CHF
      </div>
      <div class="v-app-ticket-price__value__suffix">
        {{formatCHF(value)}}
      </div>
    </div>

    <footer>

    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {formatCHF} from "@/gloabal/formatCurency";

export default defineComponent({
    methods: {formatCHF},
    props: {
        name: {type: String, required: true},
        value: {type: Number, required: true}
    },

})</script>

<style lang="scss" scoped>
.v-app-ticket-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .5rem;
}
.v-app-ticket-price__title {
  font-size: 1.15rem;
  line-height: 1.25em;
  text-transform: uppercase;
  width: 100%;
  font-weight: 500;
}

.v-app-ticket-price__value {
  font-size: 1.5rem;
  line-height: 1.25em;
  position: relative;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 10rem;
}

</style>
