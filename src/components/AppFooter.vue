<template>
  <div
      class="v-app-footer"
  >

<!--      <div-->
<!--              v-if="!isHome && !waitPDFExport"-->
<!--              class="app-button  v-app-footer__button v-app-footer__button-html"-->
<!--              @click="onClickOnExportPDF"-->
<!--      >copy to clipboard</div>-->

<!--      <div-->
<!--              v-if="!isHome && !waitPDFExport"-->
<!--              class="app-button  v-app-footer__button v-app-footer__button-html"-->
<!--              @click="onClickOnExportPDF"-->
<!--      >version texte</div>-->

    <div
        v-if="isContrat && !waitPDFExport"
        style="background: var(--app-color-main)"
        class="app-button v-app-footer__button v-app-footer__button-export"
    >Export PDF en développement  (^o^)</div>

    <div
        v-if="isCalculateur"
        class="v-app-footer__result"
    >
      <div
          class="v-app-footer__content"
          v-if="router().currentRoute.value.name === 'calculator' "
      >
          <div
                  v-if="typeof globalTotal === 'number'"
                  class="app-g app-g--align-center app-g--justify-end"
                  style="gap: 2rem"
          >
              <div style="font-size: 2rem; line-height: 4rem" >TOTAL&emsp;CHF {{globalTotal}}<template v-if="globalTotal % 1 === 0">.—</template></div>
          </div>
        <div v-else                                 >{{globalTotal.errorMessage}}</div>
          <div
              v-if="typeof globalTotal === 'number'"
              class="v-app-footer__content__artiste-option"
          >
              <div
                      class="app-button--toggle app-button--toggle--is-small"
                      @click="globalStore.isACollective = !globalStore.isACollective"
                      :class="{'is-active': globalStore.isACollective}"
              ></div>
              <div>
                  Collectif d’artiste?
              </div>
          </div>
      </div>
    </div>
    <div
        class="v-app-footer__status"
        v-if="curentPageName === 'calculator'"
    >
      <div
          class="v-app-footer__status__container"
      >
        <div
            class="v-app-footer__status__items app-with-circle-status app-with-circle-status--xs-rm app-with-circle-status--white"
            v-for="(section, index) of sections"
            :class="{
              'app-with-circle-status--active': section.status !== 'empty',
            }"
        >
          <span class="v-app-footer__status__items__name"         >{{section.title}}</span>
          <span
              class="v-app-footer__status__items__index__phone"
              :class="{
              'v-app-footer__status__items__index__phone--active': section.status !== 'empty',
            }"
          >{{index + 1}}</span>
        </div>
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
              <h4>Introduction</h4>

              <p>Dans l’optique d’améliorer le financement des projets en arts visuels, notamment les budgets affectés aux rémunérations des artistes, ce site met à disposition un calculateur de rémunération, un contrat-modèle d’exposition et des ressources téléchargeables.</p>

              <p>Ces outils s’adressent aux artistes, curateur·rice·x·s, aux structures et institutions privées et publiques d’accueil et/ou de subventionnement, ayant des relations de travail avec des artistes dans le domaine des arts visuels.</p>

              <p>La base de ces rémunérations s’inspire des recommandations de Visarte Suisse publiées en 2020. Ces recommandations concernent uniquement la rémunération et non les frais de production matérielle, qui font l’objet d’un calcul basé sur les frais effectifs et qui figurent dans le contrat.</p>

              <p>Ces outils ont pour objectifs :</p>
              <ul>
                <li>La prise en considération des coûts réels d’un projet en arts visuels</li>
                <li>L’amélioration des pratiques de rémunération des artistes</li>
                <li>Une harmonisation des pratiques pour l’ensemble des acteur·ice·x·s</li>
                <li>L’établissement des termes de négociation de leurs engagements.</li>
              </ul>

              <h4>Le calculateur et la grille de rémunération</h4>
              <p>Les montants du calculateur sont basés sur ceux indiqués dans la grille. Grille et calculateur indiquent la rémunération minimum par artiste, définie en fonction de quatre critères principaux&nbsp;:</p>
              <ul>
                  <li>Le budget annuel de la structure ou du projet (hors frais fixes de loyer)</li>
                  <li>La nature de l’œuvre (nouvelle production, adaptation ou œuvre existante)</li>
                  <li>Le nombre d’artistes participant à l’exposition</li>
                  <li>La durée de l’exposition</li>
              </ul>
              <p>Le calculateur de rémunération prend la forme d’un dérouleur et permet un calcul automatique et circonstancié, pour l’établissement du montant de la rémunération de l’artiste. La grille de rémunération est présentée sous forme de tableau pdf, à&nbsp;la&nbsp;demande des structures, pour l’établissement de leurs budgets.</p>


              <p>→ Ces chiffres offrent une base de référence à laquelle doit s’ajouter la prise en compte du contexte
                  spécifique à chaque collaboration. Il s’agit de montants minimaux qui permettent la négociation des
                  parties sur une base commune.</p>
              <p>→ Les montants sont toujours compris en coût total d’embauche (ou super-brut), indifféremment si
                  salarié·e·x·s, indépendant·e·x·s, en association, location de services ou honoraire libre.</p>

              <p>→ La rémunération de l’artiste est constituée d’un montant forfaitaire pour la conception de l'œuvre,
                  ainsi que d’un montant pour la réalisation de cette dernière (qui peut être forfaitaire ou
                  horaire).</p>

              <p>→ Le taux horaire est évalué par l’artiste, en discussion avec la structure. Dans tous les cas, il ne
                  doit pas être inférieur au minimum légal en vigueur (à Genève, il est de 24 CHF brut en 2023 pour les
                  salarié·e·x·s (coût total d’embauche en fonction des cotisations payées ± 28.50 CHF) et de 90 CHF
                  minimum pour les indépendant·e·x·s selon les recommandations de Visarte Suisse.</p>
              <p>→ Le montant final de rémunération proposé représente le coût total du travail de l’artiste pour une
                  exposition, hors frais de production.</p>
              <p>→ Il est possible pour l’artiste et la structure de s’engager vers un modèle de co-financement ou de
                  co-production entre la structure et l’artiste. Dans ce cas, l’un et l’autre collaborent à des demandes
                  de soutien supplémentaires et s’engagent à les mener à bien.</p>


              <p>Les collectifs d’artistes sont rémunérés selon un coefficient de 1,5.</p>

              <h4>Le contrat d’exposition</h4>
              <p>Ce générateur de contrats-modèles est une base qui vise à préciser les conditions de travail des artistes, ainsi qu’à favoriser la négociation de leurs engagements. Le contrat détaille les éléments essentiels qui devraient être négociés en amont des prestations artistiques. Il permet ainsi de clarifier le cadre dans lequel les parties évoluent afin d'anticiper de potentiels malentendus et litiges.</p>
              <p>Le contrat cherche à apporter un cadre légal protégeant aussi bien les artistes que les structures et prend ainsi en compte les intérêts des deux parties. Toutefois, dans la mesure où chaque situation est particulière, vous avez la possibilité d’adapter le modèle à vos besoins. En cas de doute, n’hésitez pas à consulter une permanence ou à prendre des conseils juridiques.</p>
          </template>

          <template v-slot:right >
              <h4>Crédits</h4>
              <p>
                  Plateforme pilotée par&nbsp;:
                  <br><a target="_blank" href="https://www.visarte-geneve.ch/" >Visarte.Genève</a>, en collaboration avec <a target="_blank" href="https://visarte.ch/fr/">Visarte Suisse</a>
              </p>

              <p>Grille de rémunération :
                  <br>GARAGe (référentes : Julie Marmet et Ramaya Tegegne)
                  <br>Rosa Brux (référent : Clovis Duran)
              </p>

              <p>Rédaction du contrat-modèle :
                  <br>Lab-of-Arts (référent·e·s : Lancelot Dandelot et Zoé Seiler)
              </p>

              <p>Coordination :
                  <br>Hélène Mariéthoz
              </p>

              <p>Communication :
                  <br>Camille Dumond
              </p>

              <p>Développement :
                  <br>Nicolas Baldran
              </p>

              <p>Graphisme :
                  <br>Clovis Duran
              </p>

              <p>Typographies :
                  <br>Christiana, Gudrun Zapf-von Hesse
                  <br>Suisse Intl, Swiss Typefaces
              </p>

              <p>Bibliothèques pour la création du PDF:
                  <br><a target="_blank" href="https://ekoopmans.github.io/html2pdf.js/">html2pdf.js</a>
              </p>

              <p>travaildesartistes.ch est le résultat de mandats du Service culturel de la <a href="https://www.geneve.ch/fr" target="_blank" >Ville de Genève</a> et de <a href="https://www.ge.ch/organisation/office-cantonal-culture-du-sport" target="_blank" >l'Office cantonal de la culture et du sport.</a>.</p>

              <h4>Note</h4>
              <p>Visarte.Genève / les auteur·ices déclinent toute responsabilité du succès ou du non-succès de cette
                  plateforme. Ces modèles ne dispensent pas de négociations et ne prémunissent pas contre tout problème
                  qui pourrait survenir lors de leur usage.
                  <br>Le contrat a été créé sur la base d'un document revu par Lab-of-arts, et adopté par
                  Visarte.Genève.
              </p>

              <h4>Version</h4>
              <p>v 0.9.1
                <br>Dernière mise à jour : 20 septembre 2023
              </p>

          </template>

            <template v-slot:left-bottom>
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
                  <h4>Artiste</h4>
                  <p>
                      L’artiste est créateur·rice·x de propriété intellectuelle en vertu de la législation suisse sur
                      le droit
                      d’auteur. L’artiste dispose des droits de la personnalité et des droits patrimoniaux sur ses
                      œuvres. L’artiste
                      a une activité professionnelle dans le domaine de l’art contemporain et fournit des contenus et
                      des services
                      dans un contexte de présentation des arts visuels. Cette grille de rémunération concerne notamment :
                  </p>

                  <ul>
                      <li>les artistes visuel·le·x·s</li>
                      <li>les performeur·euse·x·s</li>
                      <li>les chercheur·euse·x·s</li>
                      <li>les artistes sonores</li>
                      <li>les artistes conceptuel·le·x·s</li>
                      <li>les curateur·rice·x·s</li>
                      <li>etc.</li>
                  </ul>


                  <h4>Adaptation d’une ou plusieurs œuvre(s) existante(s)</h4>
                  <p>Œuvre(s) ayant déjà été réalisée(s), qu’elle(s) ai(en)t été présentée(s) publiquement ou non et
                      qui nécessite(nt) des modifications.
                      <br>↦ Afin de déterminer quelle catégorie s’applique à une
                      œuvre, il convient d’utiliser celle étant la plus favorable pour l’artiste. Si une exposition
                      regroupe des œuvres déjà existantes et de nouvelles créations, alors c’est la catégorie relevant
                      de la nouvelle œuvre qui est appliquée.
                  </p>

                  <h4>Collectif d’artistes</h4>
                  <p>
                      Groupe d’artistes se définissant sous une même entité. Dans le cadre de ce document, à chaque
                      fois que le terme «artiste» apparaît de manière générique, il peut être remplacé par « collectif d’artistes ».
                  </p>

                  <h4>Conception d’une ou plusieurs nouvelles œuvres</h4>
                  <p>Œuvre(s) inédite(s) et non encore réalisée(s), n’ayant jamais été présentée(s) publiquement et/ou
                      développée(s) à la demande de la structure.
                      <br>↦ Afin de déterminer quelle catégorie s’applique à une
                      œuvre, il convient d’utiliser celle étant la plus favorable pour l’artiste. Si une exposition
                      regroupe des œuvres déjà existantes et de nouvelles créations, alors c’est la catégorie relevant
                      de la nouvelle œuvre qui est appliquée.
                  </p>


                  <h4>Événement avec préparation</h4>
                  <p>Présentation publique nécessitant un temps de préparation.</p>
                  <p>Exemples : lecture, conférence, workshop, modération de rencontre, etc.</p>

                  <h4>Événement sans préparation</h4>
                  <p>Présentation publique ne nécessitant pas de temps de préparation.</p>
                  <p>Exemples : présence lors de visite guidée, projection en présence de l’artiste, Participation à une
                      table ronde, etc.</p>


                  <h4>Exposition</h4>
                  <p>La présentation publique d’une ou plusieurs œuvres réalisées par l’artiste et/ou des personnes auxiliaires.</p>
                  <h4>Exposition individuelle</h4>
                  <p>Exposition présentant le travail d’un·e·x seul·e·x artiste ou
                      d’un collectif d’artistes.</p>

                  <h4>Exposition collective</h4>
                  <p>Exposition présentant le travail de plusieurs artistes qui exposent ensemble leurs travaux sans les
                      concevoir conjointement.</p>

                  <h4>Montant forfaitaire supplémentaire</h4>
                  <p>Montant forfaitaire supplémentaire par mois au-delà du premier mois. Le montant forfaitaire
                      supplémentaire mensuel compense la non-disponibilité de l’œuvre pour une autre utilisation pendant
                      l’exposition. Il s’applique au-delà d’un mois d’exposition.</p>

              </template>

              <template v-slot:right>
                  <h4>Honoraires de conception</h4>
                  <p>La rémunération est entendue pour les prestations et services suivants :</p>
                  <ul>
                      <li>Recherches, conception des œuvres et/ou adaptation aux conditions de présentation</li>
                      <li>Préparation, suivi, coordination, correspondance</li>
                      <li>Rendez-vous présentiels ou virtuels, visites des lieux, temps de déplacement</li>
                      <li>Supervision de l’installation du projet (en cas d’un travail important pour l’installation par
                          l’artiste, une rémunération supplémentaire doit être prévue par jour de travail sur place)
                      </li>
                      <li>La mise à disposition d’œuvres le temps de l’exposition.</li>
                  </ul>

                  <p>Sont inclus dans les honoraires de conception :</p>
                  <ul>
                      <li>les cotisations aux assurances sociales</li>
                      <li>les frais d’infrastructure de l’artiste (loyer de l’atelier, ordinateur, etc.)</li>
                  </ul>

                  <p>Les honoraires de conception ne comprennent pas :</p>
                  <ul>
                      <li>La réalisation, fabrication, production des œuvres elles-mêmes (qu’elles soient réalisées par
                          l’artiste ou par une personne auxiliaire).
                      </li>
                      <li>Les coûts et services de programmation de base</li>
                      <li>Les dépenses de production, de déplacement et d’hébergement</li>
                      <li>L’achat d’œuvres d’art ou les droits d’auteur·rice·x</li>
                      <li>La TVA pour les services assujettis à la TVA</li>
                      <li>La réalisation d’un catalogue ou autre publication d’envergure</li>
                      <li>La réalisation de prestations telles que : présentation publique, visite guidée, conférences,
                          workshop, table ronde, etc.
                      </li>
                  </ul>

                  <p>Dans tous les cas, les honoraires sont compris comme une rémunération forfaitaire et les montants
                      calculés a minima.</p>
                  <p>La forme sous laquelle sont versés ces honoraires dépend du statut de l’artiste en matière
                      d’assurances sociales. Les honoraires des personnes indépendantes enregistrées sont versés contre
                      facture. En ce qui concerne les personnes employées par une association, la loi exige que les
                      honoraires soient versés comme salaire en tenant compte des cotisations aux assurances
                      sociales.</p>

                  <h4>Montant final</h4>
                  <p>Les montants sont compris en coût total employeur·euse·x, pour les salarié·e·x·s comme pour les
                      indépendant·e·x·s.</p>

                  <h4>Œuvre(s)</h4>
                  <p>Toute création de l’esprit, littéraire ou artistique, qui a un caractère individuel, quelles qu’en
                      soient la valeur ou la destination. (selon l’art. 2 de la Loi fédérale sur le droit d’auteur et
                      les droits voisins (LDA)). L’œuvre peut donc être constituée d’œuvres physiques, de performances,
                      de projections ou de la programmation-même dans le cadre du travail d’un·e·x curateur·rice·x
                      indépendant·e·x.</p>

                  <h4>Œuvre(s) existante(s)</h4>
                  <p>Œuvre(s) ayant déjà été réalisée(s), qu’elle(s) ai(en)t été présentée(s) publiquement ou non et
                      qui ne nécessite(nt) aucune modification.
                      <br>↦ Afin de déterminer quelle catégorie s’applique à une
                      œuvre, il convient d’utiliser celle étant la plus favorable pour l’artiste. Si une exposition
                      regroupe des œuvres déjà existantes et de nouvelles créations, alors c’est la catégorie relevant
                      de la nouvelle œuvre qui est appliquée.
                  </p>

                  <h4>Prestations supplémentaires</h4>
                  <p>Ensemble de prestations qui débordent le cadre fixé par les honoraires de conception et qui font
                      l’objet d’une rémunération supplémentaire.</p>


                  <h4>Structure</h4>
                  <p>
                      Organisation avec ou sans buts lucratifs, publique ou privée, qui mandate, subventionne et/ou présente des projets
                      artistiques&nbsp;:
                  </p>

                  <ul>
                      <li>Musées</li>
                      <li>Centres d’Art</li>
                      <li>Espaces d’exposition</li>
                      <li>Offspaces (petits espaces d’art autogérés)</li>
                      <li>Galeries commerciales</li>
                      <li>Festivals</li>
                      <li>Manifestation</li>
                      <li>Services publics</li>
                      <li>etc.</li>
                  </ul>

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
               @click="openLexical"
               :class="{'app-with-circle-status--active': globalStore.showLexical}"
          >Lexique</div>
          <div class="app-with-circle-status"
               v-if="!isHome"
               @click="openInfo"
               :class="{'app-with-circle-status--active': globalStore.showInfo}"
          >À propos</div>
          <div
              style="user-select: none; display: flex; align-items: center; gap: .5rem;"
               v-if="isCalculateur"
               @click="globalStore.showHelpers = !globalStore.showHelpers"
               :class="{'app-with-circle-status--active': globalStore.showHelpers}"
          >
              <div
                      class="app-button--toggle app-button--toggle--is-small"
                      :class="{'is-active': globalStore.showHelpers}"
              ></div>
              Aide</div>
        </div>
        <div
            class="v-app-footer__info__container__box"
        >
          <div>
            <div  style="
                        text-decoration: none;
                        box-shadow: none;
                        cursor: pointer;
                    "
                  @click="sendUserMsg"
            >Suggestion&nbsp;?</div>
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
import * as html2pdf from 'html2pdf.js';
import router from "../router";

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

    waitPDFExport(): boolean {
        return this.globalStore.waitPDFExport
    },

    isContrat(): boolean {
      return this.$router.currentRoute.value.path === '/contrat'
    },

    isCalculateur(): boolean {
      return this.$router.currentRoute.value.path === '/calculateur'
    },

    curentPageName(): string {
      return this.$router.currentRoute.value.name as string | ''
    },

    sections(): OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[] {
      return this.globalStore.calculatorSections as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[]
    },

    globalTotal(): number | {errorMessage: string} {
      return this.globalStore.globalTotal
    },
  },

  methods: {

    sendUserMsg() {
      const user = "communication+calculateur"
      const domain = "visarte-geneve.ch"
      window.open(`mailto:${user}@${domain}?subject=travaildesartistes.ch`)
    },

      router() {
          return router
      },
      openLexical() {
          this.globalStore.showInfo = false
          this.globalStore.showLexical = !this.globalStore.showLexical
      },

      openInfo() {
          this.globalStore.showLexical = false
          this.globalStore.showInfo = !this.globalStore.showInfo
      },
  },


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
    padding-left: 1rem;
    padding-right: 1rem;
    box-shadow: 0 10px 20px 10px hsl(114.8deg 100% 75%);
  }

  .v-app-footer__content {
    display: flex;
    flex-direction: row-reverse;
    margin: auto;
    justify-content: center;
    position: relative;

      .v-app-footer__content__artiste-option {
        user-select: none;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
        display: flex;
        align-items: center;
        gap: 1rem;
      }
  }

  .v-app-footer__status {
    position: relative;
    width: 100%;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);
      z-index: 1;
  }

  .v-app-footer__status__container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
    line-height: 2rem;
    font-size: 1.4rem;
    margin: auto;

    @media (max-width: 1280px) { // footer special breakpoint
      justify-content: flex-start;
      max-width: var(--app-max-width);
      padding-top: .5rem;
      padding-bottom: .5rem;
    }
  }

  .v-app-footer__status__items {
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    @media (max-width: 1280px) { // footer special breakpoint
      margin-right: 2rem;
    }
  }

  .v-app-footer__status__items__name {
    display: block;

    @media (max-width: 1280px) { // footer special breakpoint
      display: none;
    }
  }

  .v-app-footer__status__items__index {
    display: block;

    @media (max-width: 1280px) { // footer special breakpoint
      display: none;
    }
  }

  .v-app-footer__status__items__index__phone {
    background: white;
    display: none;
    height: 2rem;
    width: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 50%;

    &.v-app-footer__status__items__index__phone--active {
      background: var(--app-color-secondary);
    }

    @media (max-width: 1280px) { // footer special breakpoint
      display: block;
    }
  }

  .v-app-footer__status__separator {
    padding-right: .5em;
  }

  .v-app-footer__info {
    position: relative;
    width: 100%;
    background: var(--app-color-main);
    border-top: solid 1px var(--app-color-border);
    box-shadow: 0 10px 20px 10px hsl(114.8deg 100% 75%);

    .v-app-footer__info__container {
      max-width: var(--app-max-width);
      margin: auto;
      display: flex;
      line-height: 2rem;
      font-size: 1.4rem;
      align-items: center;
      justify-content: space-between;
      padding: 0 .5rem;
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

.v-app-footer__button {
  position: absolute;
  top: 0;
  transform: translateY( calc(-100% - 2rem) );
  z-index: 1000;
  font-size: 1.2rem;
}

.v-app-footer__button-html {
  right: 15rem;
}

.v-app-footer__button-export {
  right: 2rem;
    .stickers {
        position: absolute;
        top: 50%;
        left: 50%;
        white-space: nowrap;
        transform: translate(-50%, -50%) rotate(0);
    }
}

.v-app-footer__panel__signature {
  margin-top: 10rem;
  padding-left: 5rem;
}
</style>

<style
  lang="scss">
.to-export {
  --page-width: 790px;
  --padding-left: calc( var(--page-width) / 5 );
  --padding-right: 10px;
  --font-size: 15px;
  --line-height: 20px;

  background-color: white !important;
  position: relative !important;
  box-sizing: content-box !important;
  width: calc( var(--page-width) - var(--padding-left) - var(--padding-right) )!important;
  padding-left: var(--padding-left) !important;
  padding-right: 0 !important;



  //* {
  //  font-size: var(--font-size) !important;
  //  line-height: var(--line-height) !important;
  //  margin: 0 !important;
  //  padding: 0 !important;
  //  border: none !important;
  //}

  // todo ici
  // https://github.com/eKoopmans/html2pdf.js#progress-tracking

  h2 {
    margin-top:   0 !important;
    font-size:    calc( var(--font-size) * 2)!important;
    line-height:  calc( var(--line-height) *2)!important;
  }

  h3 {
    margin-top: calc( var(--line-height) * 2)!important;
    font-size:    calc( var(--font-size) * 1.5)!important;
    line-height:  calc( var(--line-height) * 2)!important;
  }

  h4 {
    margin-top: calc( var(--line-height) * 2)!important;
  }

  p {
    font-size: var(--font-size) !important;
    line-height: var(--line-height) !important;
    margin-top: 0 !important;
    margin-bottom: var(--line-height) !important;
  }

  ul.v-app-contract-content__lexical {
    font-weight: 400 !important;
    margin-top: 0;

    > li {
      margin-bottom: 0 !important;

      &:before {
        font-size:    calc( var(--font-size) * 1)!important;
        line-height:  calc( var(--line-height) * 1)!important;
      }

      &:first-child {
        > h3 {
          margin-top: 0 !important;
        }
      }

      > h3 {
        margin-top: calc( var(--line-height) * 1)!important;
        font-size:    calc( var(--font-size) * 1)!important;
        line-height:  calc( var(--line-height) * 1)!important;
      }
      > ul {
        padding-top: 0 !important;
        margin-bottom: 0;

        > li {
          font-size:    calc( var(--font-size) * 1)!important;
          line-height:  calc( var(--line-height) * 1)!important;

          &:before {
            font-size:    calc( var(--font-size) * 1)!important;
            line-height:  calc( var(--line-height) * 1)!important;
          }

          ul {
            margin: 0;

            li {
              padding-left: 1rem !important;
            }
          }
        }
      }
    }
  }

  p {
    margin-top: calc( var(--line-height) * 1)!important;
  }

  a {
    box-shadow: none !important;
    font-size: inherit !important;
    line-height: inherit !important;
  }


  // todo: corriger le display none
  input {
    display: none !important;
  }

  button {
    display: none !important;
  }

  .app-button--check {
    display: none !important;
  }

  .app-font-remove {
    display: none !important;
  }

  > * {
    &:first-child {
      margin-top: 0 !important;
    }
  }

  .to-export__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 !important;
  }

  .v-app-contract-content__list-oeuvre {
    > * {
      width: 100% !important;
    }
  }

  .remove-for-pdf-export {
    display: none !important;
  }

  .v-app-contract-content__content > h2::before,
  .v-app-contract-content__content__subsection > h3::before {
    top: 0 !important;
    padding-top: 1rem;
    font-size:  calc( var(--font-size) )!important;
    line-height: calc( var(--line-height)) !important;
  }

}
</style>
