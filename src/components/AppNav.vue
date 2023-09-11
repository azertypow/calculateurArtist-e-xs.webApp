<template>
  <div class="v-app-nav">
    <router-link
            :to="{name:'calculator'}"
            class="v-app-nav__link app-button"
    >
        <icon-calculator></icon-calculator>
        <div
                v-if="withDescription"
                class="v-app-nav__link__desc"
        >RECOMMANDATIONS DE&nbsp;RÉMUNÉRATION POUR UNE&nbsp;EXPOSITION</div>
    </router-link>
    <router-link
            :to="{name:'contract'}"
            class="v-app-nav__link app-button"
    >
        <icon-contract></icon-contract>
        <div
                v-if="withDescription"
                class="v-app-nav__link__desc"
        >GÉNÉRATEUR DE&nbsp;CONTRAT&#8209;MODÈLE POUR UNE&nbsp;EXPOSITION</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconCalculator from "./IconCalculator.vue";
import IconContract from "./IconContract.vue";
import IconIsValidate from "./IconIsValidate.vue";
import IconPen from "./IconPen.vue";
import IconDelet from "./IconDelete.vue";

export default defineComponent({
  name: 'AppNav',
  components: {IconDelet, IconPen, IconIsValidate, IconContract, IconCalculator},

    props: {
        withDescription: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
});
</script>

<style lang="scss" scoped>
.v-app-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
    padding-top: 0;
    padding-bottom: 1rem;
  }
}

.v-app-nav__link {
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 18rem;
}

.v-app-nav__link__desc {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-family: Christiana_bold, serif;
}

</style>
