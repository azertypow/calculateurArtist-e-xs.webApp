<template>
  <div
          class="v-app-nav"
          :class="{
            'remove-description-mobile-version': removeDescriptionMobileVersion,
          }"
  >
    <router-link
            :to="{name:'calculator'}"
            class="v-app-nav__link app-button"
    >
        <icon-calculator></icon-calculator>
        <div
                class="app-button__desc"
        >RECOMMANDATIONS DE&nbsp;RÉMUNÉRATION POUR UNE&nbsp;EXPOSITION</div>
    </router-link>
    <router-link
            :to="{name:'contract'}"
            class="v-app-nav__link app-button"
    >
        <icon-contract></icon-contract>
        <div
                class="app-button__desc"
        >GÉNÉRATEUR DE&nbsp;CONTRAT&#8209;MODÈLE POUR UNE&nbsp;EXPOSITION</div>
    </router-link>
    <router-link
            :to="{name:'ressources'}"
            class="v-app-nav__link app-button"
    >
        <icon-folder/>
        <div
                class="app-button__desc"
        >Ressources à télécharger</div>
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
import IconFolder from "./IconFolder.vue";

export default defineComponent({
  name: 'AppNav',
  components: {IconFolder, IconDelet, IconPen, IconIsValidate, IconContract, IconCalculator},

    props: {
        removeDescriptionMobileVersion: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
});
</script>

<style lang="scss" scoped>
.v-app-nav {
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
    padding-top: 0;
    padding-bottom: 1rem;
    align-items: center;
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

.remove-description-mobile-version {
  .app-button__desc {
    @media (max-width: 700px) {
      display: none;
    }
  }
}

</style>
