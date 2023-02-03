<template>
  <div class="v-app-toggle-header" :class="{'is-open': isOpen}">
    <div class="v-app-toggle-header__content">
      <p>Au niveau fédéral, cantonal et municipal,
        l’amélioration des conditions de travail des artistes est aujourd’hui une préoccupation
        des collectivités publiques, en particulier les aspects de la rémunération des artistes,
        leur prévoyance sociale ainsi que leur statut et reconnaissance en tant que professionnel·le·x·s
        de manière plus générale.
      </p>

        <p>Suite à L’enquête sur les conditions de travail des artistes* à Genève,
        publiée en septembre 2020 et réalisée par Garage, Clovis Duran (anciennement membre du groupe Rosa Brux),
        Hélène Mariéthoz, Lab-of-Arts sous mandat du canton et de la Ville de Genève,
        les mandants souhaitent faire évoluer et contribuer à l’amélioration des conditions de travail des artistes.
        Garage, Rosa Brux et Lab-of-Arts ont été mandatés pour réaliser un contrat modèle contenant les éléments
        qui devraient figurer en priorité dans un contrat entre un·e·x artiste et une structure,
          ainsi qu’une grille tarifaire.</p>

      <p>Cette dernière proposition est basée sur le guide Honoraires
        des artistes réalisé par Visarte en 2020, elle en reprend la base tarifaire et les éléments constituant
        et en propose une version affinée, avec une liste des différents cas de figure, notamment :
      </p>

      <ul>
        <li>Distinction de la typologie du projet (œuvre existante, adaptation d’une œuvre existante et conception d’une nouvelle œuvre)</li>
        <li>Prise en compte de la durée de l’exposition</li>
        <li>Introduction d’un forfait de conception pour chaque type d’exposition</li>
        <li>Application d’une rémunération horaire pour la réalisation de chaque type d’exposition La grille de rémunération a pour but de s’appliquer à tout type de structures (les Centres d’art et les musées, les espaces d’exposition publics ou privés, subventionnés ou non par la Ville de Genève ou le canton de Genève), distingués dans la grille tarifaire annexe.</li>
      </ul>

      <p>Au niveau fédéral, cantonal et municipal, l’amélioration des conditions de travail des artistes est aujourd’hui une préoccupation des collectivités publiques, en particulier les aspects de la rémunération des artistes, leur prévoyance sociale ainsi que leur statut et reconnaissance en tant que professionnel·le·x·s de manière plus générale.</p>

      <p class="v-app-toggle-header__signature">Site réalisé par Clovis Duran (graphisme) et Nicolas Baldran (développement)</p>
    </div>
    <div class="v-app-toggle-header__toggle" @click="isOpen = !isOpen">[{{buttonContent}}]</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppToggleHeader',
  components: {},

  data() {
    return {
      isOpen: false,
    }
  },

  computed: {
    buttonContent(): string {
      return this.isOpen ? '—' : '+'
    }
  }

});
</script>

<style lang="scss" scoped>
.v-app-toggle-header {
  box-sizing: border-box;
  overflow: hidden;
  height: 3rem;
  position: fixed;
  border-bottom: 3rem;
  width: 100%;
  left: 0;
  top: 10rem;
  z-index: 100;
  background-color: var(--app-color-main);
  transition: height .5s .5s ease-in-out;

  &.is-open {
    height: calc(100% - 13.5rem);
    transition: height .5s 0s ease-in-out;
  }
}

.v-app-toggle-header__toggle {
  text-align: center;
  line-height: 3rem;
  user-select: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--app-color-main);
  border-bottom: solid 1px var(--app-color-border);
}

.v-app-toggle-header__content {
  position: relative;
  column-count: 2;
  height: 100%;
  font-size: 1.5rem;
  box-sizing: border-box;
  padding: 2rem;
  transition: opacity .5s 0s ease-in-out;
  opacity: 0;

  > *:first-child {
    margin-top: 0;
  }

  .is-open & {
    opacity: 1;
    transition: opacity .5s .5s ease-in-out;
  }
}

.v-app-toggle-header__signature {
  margin-top: 10rem;
  padding-left: 5rem;
}
</style>