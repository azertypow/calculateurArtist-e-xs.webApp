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
        class="app-button v-app-footer__button v-app-footer__button-export"
        @click="onClickOnExportPDF"
    >exporter en PDF</div>

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
                  <br>Clovis Duran
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
// import * as html2pdf from 'html2pdf.js';
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

      onClickOnExportPDF() {
          this.globalStore.waitPDFExport = true
          window.setTimeout(() => {
              this.pdfExport().then(() => {
                  window.setTimeout(() => {
                      this.globalStore.waitPDFExport = false
                  }, 2_000)
              })
          }, 500)
      },

      async pdfExport() {

        import("html2pdf.js").then(async (html2pdfImport) => {
            const html2pdf = html2pdfImport.default

            const htmlToExport = document.querySelector('.v-app-contract-content')
            if (!(htmlToExport instanceof HTMLElement)) return

            const containerForHtmlToExport = document.createElement('div')

            containerForHtmlToExport.appendChild(htmlToExport.cloneNode(true))
            containerForHtmlToExport.classList.add('to-export')

            containerForHtmlToExport.querySelectorAll('input').forEach(inputElement => {
                if( ! (inputElement.parentNode instanceof Node) ) return

                const spanToInsert = document.createElement('span')
                spanToInsert.innerText = inputElement.value.length > 0 ? inputElement.value : inputElement.placeholder
                inputElement.parentNode.insertBefore(spanToInsert, inputElement)
                inputElement.parentNode.removeChild(inputElement)
            })

            containerForHtmlToExport.querySelectorAll('.app-font-remove').forEach(value => {
                if( ! (value instanceof HTMLElement) ) return
                if( ! (value.parentNode instanceof Node) ) return
                value.parentNode.removeChild(value)
            })

            const toSaveContainer = html2pdf().set({
                margin: [100, 0, 20, 0],
                html2canvas: {
                    scale: 2,
                },
                jsPDF: {
                    unit: "px",
                    format: [790, 1120],
                },
            }).from(containerForHtmlToExport).toContainer()

            await toSaveContainer

            // toSaveContainer.prop.container.querySelector('.v-app-contract-content').style.color = 'blue'

            toSaveContainer
                .toCanvas()
                .toPdf()
                .get('pdf')
                .then(function (pdf: any) {
                    const imageHeader = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwgAAACoCAIAAAB7Si2xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjEwNjM1Rjk2NDNBMTFFRUIyRDY5RDVFNTcyMEIzQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjEwNjM1RkE2NDNBMTFFRUIyRDY5RDVFNTcyMEIzQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMTA2MzVGNzY0M0ExMUVFQjJENjlENUU1NzIwQjNDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMTA2MzVGODY0M0ExMUVFQjJENjlENUU1NzIwQjNDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtXQGjoAAI8mSURBVHja7H13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A9cZ0wI9/hi2bds2ZMiQH/3oR0FpQN+iY1IDTJgwQXtUpde6+QhNSiI89dRTdiR66XXq1KmoqCjme52c725BajT0+eef70tIaDkv/fKiRYskjyJiPXY9+oief9sRRK5dk17XaWVVo0YN7R1sa2dbp0V/zQq5uv3o4FA0PCYbq+HfR4bqdvmceHd1H/TUE6xSpYo/36B0KH3Gbv7+mOVp5NFHH7UssJ//61//uuWWW+66667169eHLgf/c/3ywYMHH3zwwf79+586dUrzUVLG3qbcc889CxcuvOCCC7SeSXCFQF+x28H4D3qoifcYlQ1Gz9/iXzBnfFEdKtWyNanZ5L4jV01JScny5culxp44ceLIkSN79uzZvHnz1atXh2onqdV/+9vf+vTUf7ds2SKV4ZgxY9599930jAu9Id69e7fc1ySDgtIBPTbLkPznI488MmfOHFupLGYXVADAueg8kgBAPgKj1kzSIFr61HtBeWa0jNM2sDlG/YOvbxT95z//sanx4sQ7bDvjxo2bPXu2PIWH4lz+jHTo4ve///2uXbteeumldmp79+6dPn26NVP1JzfddNNFF10UCpDl6YG7c+fO2ndJB+5pKvnQm3aRmDt37kMPPRR/yjm/wH2PHj1s6k/fUrUp7WT7F154oTQ/rPVeriGEutkJEyaEWuB169aVhmtey7PlTocOHSTLjh49mjEKZgtrSBN6zZo1xcXFdpB+CQgfGE0vhxYKid+7xxp70T/Rs1i2bJnOmGld26QNf/LkSdmjfPg05UQp+XwkJeMG+/bt63viJFV0bTsRzXhLOjnmFStWSIPZoqha+ei/cuT79u07ePDg/v37pbG9efPmQ4cOhSKnNnlokJra4oEHHpDzCpJYdNjP61pmSEK+/Mc//vGqq66yKkI7w55Okc+SHVJxab58kiIfpCj62kw1btz4uuuu89WXfGfUqFGSxXZp+5pZNvLrX/962rRp3/ve93r27NmlS5datWr5kI0k4PLly5csWfLSSy+FlqFXsrvJkydrV00NFIaiq4mT7T/77LMac9Q7i56O1ELJlsZssch69epJWs2bN8/fYnzPTbuQX3nlFY24ZbxRhq5ZOxdfpRw7dizmsWm9qj8fMGDAoEGD5J6lK4lZN2GL5GoNLP9OnDixe/fut912m90gYiagfe3/UvxNQUNLoddCSc1xafdK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'
                    const totalPages = pdf.internal.getNumberOfPages()

                    for (let i = 1; i <= totalPages; i++) {
                        pdf.setPage(i)
                        pdf.addImage(imageHeader, "PNG", 0, 0, 790, 74)
                        pdf.text(50, 1100, `P. ${i}/${totalPages}`)
                    }
                    console.log("8")
                })
                .save()

            console.log("7")
        })

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

          @media (max-width: 700px) {// align with grid
              display: none;
          }
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

      @media (max-width: 700px) {
          margin-right: 1rem;
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
      font-size: var(--font-size) !important;
      line-height: var(--line-height) !important;
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
    //display: none !important;
  }

  .app-value-string {
      border-bottom: none !important;
  }

  button {
    display: none !important;
  }

  .app-button--check {
    display: none !important;

      &.is-active {
          display: block !important;
          padding-left: 2em;
          position: relative;

          &:before {
              all: unset;
              content: '—';
              position: absolute;
              left: 0;
          }
      }
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
