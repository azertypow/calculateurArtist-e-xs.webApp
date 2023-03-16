<template>
  <div
      class="v-app-footer"
  >

    <div
        v-if="!isHome"
        class="app-button v-app-footer__button-export"
    >exporter en PDF [comming soon]</div>

    <div
        class="v-app-footer__result"
        v-if="total > 0 && globalStore.showFixedResult && !isHome"
    >
      <div
          class="v-app-footer__content"
      >
        <div>résultat: {{total}}.— CHF</div>
      </div>
    </div>
    <div
        class="v-app-footer__status"
        v-if="curentPageName === 'calculator'"
    >
      <div
          class="v-app-footer__status__container"
      >
        <span
            class="v-app-footer__status__items app-with-circle-status app-with-circle-status--white"
            v-for="(section, index) of sections"
            :class="{
              'app-with-circle-status--active': section.status !== 'empty',
            }"
        >{{section.title}}</span>
      </div>
    </div>
    <div
        class="v-app-footer__info"
    >
      <transition
          name="v-transition-fade"
      >
        <app-panel
            v-if="globalStore.showInfo"
        >
          <template v-slot:left >
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
          </template>

          <template v-slot:right >
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

            <p class="v-app-footer__panel__signature">Site réalisé par Clovis Duran (graphisme) et Nicolas Baldran (développement)</p>
          </template>

        </app-panel>
      </transition>

      <transition
          name="v-transition-fade"
      >
        <app-panel
            v-if="globalStore.showLexical"
        >

          <template v-slot:left>
            <h3>Artiste</h3>
            <p>
              L’artiste est créateur·trice·x de propriété intellectuelle en vertu de la législation suisse sur le droit
              d’auteur. L’artiste dispose des droits de la personnalité et des droits patrimoniaux sur ses œuvres. L’artiste
              a une activité professionnelle dans le domaine de l’art contemporain et fournit des contenus et des services
              dans un contexte de présentation des arts visuels. Le présent barème concerne notamment :
            </p>

            <ul>
              <li>les artistes visuel·le·x·s</li>
              <li>les performeur·euse·x·s</li>
              <li>les chercheur·euse·x·s</li>
              <li>les artistes sonores</li>
              <li>les artistes conceptuel·le·x·s</li>
              <li>les artistes curateurs·x·trices</li>
              <li>etc.</li>
            </ul>

            <h3>Collectif d’artistes</h3>
            <p>
              Groupe de personnes se définissant sous une même entité. Dans le cadre de ce document, à chaque fois que le
              terme «artiste» apparaît de manière générique, il peut être remplacé par « collectif d’artistes ».
            </p>

            <h3>Structure</h3>
            <p>
              Organisation avec ou sans buts lucratifs, publique ou privée, qui mandate et présente des projets artistiques&nbsp;:
            </p>

            <ul>
              <li>Musées</li>
              <li>Centres d’Art</li>
              <li>Espaces d’exposition</li>
              <li>Offspaces (petits espaces d’art autogérés)</li>
              <li>Galeries commerciales</li>
              <li>Festivals</li>
              <li>Manifestation</li>
              <li>Services publiques</li>
              <li>etc.</li>
            </ul>
          </template>

          <template v-slot:right >
            <h4>Œuvre(s)</h4>
            <p>Toute création de l’esprit, littéraire ou artistique, qui a un caractère individuel, quelles qu’en soient la valeur ou la destination. (selon l’art. 2 de la Loi fédérale sur le droit d’auteur et les droits voisins (LDA)). L’œuvre peut donc être constituée d’œuvres physiques, de performances, de projections ou de la programmation-même dans le cadre du travail d’un·e·x curateur·trice·x indépendant·e·x.</p>

            <h4>Œuvre(s) existante(s)</h4>
            <p>Œuvre(s) ayant déjà été réalisée(s), qu’elle(s) ai(en)t été présentée(s) publique- ment ou non et qui ne nécessite(nt) aucune modification.</p>

            Adaptation d’une ou plusieurs œuvre(s) existante(s)
            <p>Œuvre(s) ayant déjà été réalisée(s), qu’elle(s) ai(en)t été présentée(s) publique- ment ou non et qui nécessite(nt) des modifications. Conception d’une ou plusieurs nouvelles œuvres Œuvre(s) inédite(s) et non encore réalisée(s), n’ayant jamais été présentée(s) publiquement et/ou développée(s) à la demande de la structure. ↦ Afin de déterminer quelle catégorie s’applique à une œuvre, il convient d’utiliser celle étant la plus favorable pour l’artiste. Si une exposition regroupe des œuvres déjà existantes et des nouvelles créations, alors c’est la catégorie relevant de la nouvelle œuvre qui est appliquée.</p>

            <h4>Exposition</h4>
            <p>La présentation publique d’une ou plusieurs œuvres réalisées par l’artiste et/ou des personnes auxiliaires. Exposition individuelle Exposition présentant le travail d’un·e·x seul·e·x artiste ou d’un collectif d’artistes.</p>

            <h4>Exposition collective</h4>
            <p>Exposition présentant le travail de plusieurs artistes qui exposent ensemble leurs travaux sans les concevoir conjointement. Si l’exposition ne se déroule pas dans la totalité de la surface de la structure, alors il convient d’appliquer la catégorie d’espace la plus adaptée à la surface spécifique au sein de la structure.</p>

            <p>Montant forfaitaire supplémentaire par mois au-delà du premier mois Le montant forfaitaire supplémentaire mensuel compense la non-disponibilité de l’œuvre pour une autre utilisation pendant l’exposition. Il s’applique au-delà d’un mois d’exposition.</p>
          </template>

        </app-panel>
      </transition>

      <div
          class="v-app-footer__info__container"
      >
        <div
            class="v-app-footer__info__container__box"
        >
          <div class="app-with-circle-status"
               v-if="!isHome"
               @click="globalStore.showLexical = !globalStore.showLexical"
               :class="{'app-with-circle-status--active': globalStore.showLexical}"
          >Lexique</div>
          <div class="app-with-circle-status"
               v-if="!isHome"
               @click="globalStore.showInfo = !globalStore.showInfo"
               :class="{'app-with-circle-status--active': globalStore.showInfo}"
          >Information</div>
          <div class="app-with-circle-status"
               v-if="!isHome"
               @click="globalStore.showHelpers = !globalStore.showHelpers"
               :class="{'app-with-circle-status--active': globalStore.showHelpers}"
          >Aide</div>
        </div>
        <div
            class="v-app-footer__info__container__box"
        >
          <div>
            <span>Site en version beta</span>
          </div>
          <div>
            <span>Suggestion&nbsp;?</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPanel from "./AppPanel.vue";
import type {
  NumberCalculatorSection,
  OptionCalculatorSection,
  OptionOrNumberCalculatorSection
} from "../gloabal/CalculatorSection";
import {useGlobalStore} from "../stores/globalStore";

export default defineComponent({
  name: 'AppFooter',
  components: {AppPanel},

  data() {
    return {
      globalStore: useGlobalStore(),
    }
  },

  computed: {
    isHome(): boolean {
      return this.$router.currentRoute.value.path === '/'
    },

    curentPageName(): string {
      return this.$router.currentRoute.value.name as string | ''
    },

    sections(): OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[] {
      return this.globalStore.calculatorSections as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[]
    },

    total(): number {
      return this.globalStore.total
    },
  }


});
</script>

<style lang="scss" scoped>
.v-app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;

  .v-app-footer__result {
    position: relative;
    width: 100%;
    line-height: 2rem;
    font-size: 1.4rem;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .v-app-footer__content {
    display: flex;
    flex-direction: row-reverse;
    margin: auto;
    max-width: var(--app-max-width);
  }

  .v-app-footer__status {
    position: relative;
    width: 100%;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);
  }

  .v-app-footer__status__container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
    line-height: 1.5rem;
    font-size: var(--app-font-size);
    max-width: var(--app-max-width);
    margin: auto;
  }

  .v-app-footer__status__items {
    white-space: nowrap;
  }

  .v-app-footer__status__separator {
    padding-right: .5em;
  }

  .v-app-footer__info {
    position: relative;
    width: 100%;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);

    .v-app-footer__info__container {
      max-width: var(--app-max-width);
      margin: auto;
      display: flex;
      line-height: 1.5rem;
      font-size: var(--app-font-size);
      align-items: center;
      justify-content: space-between;
      padding: 1rem .5rem;
      box-sizing: border-box;
    }

    .v-app-footer__info__container__box {
      display: flex;

      > div {
        padding-left: .5rem;
        padding-right: .5rem;
      }
    }
  }
}

.v-app-footer__button-export {
  position: absolute;
  right: 2rem;
  top: 0;
  transform: translateY( calc(-100% - 2rem) );
  z-index: 1000;
  font-size: 1.2rem;
}

.v-app-footer__panel__signature {
  margin-top: 10rem;
  padding-left: 5rem;
}
</style>