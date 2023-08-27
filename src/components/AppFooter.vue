<template>
  <div
      class="v-app-footer"
  >

      <div
              v-if="!isHome && !waitPDFExport"
              class="app-button  v-app-footer__button v-app-footer__button-html"
              @click="onClickOnExportPDF"
      >copy to clipboard</div>

      <div
              v-if="!isHome && !waitPDFExport"
              class="app-button  v-app-footer__button v-app-footer__button-html"
              @click="onClickOnExportPDF"
      >version texte</div>

    <div
        v-if="!isHome && !waitPDFExport"
        class="app-button v-app-footer__button v-app-footer__button-export"
        @click="onClickOnExportPDF"
    >exporter en PDF</div>

    <div
        class="v-app-footer__result"
    >
      <div
          class="v-app-footer__content"
          v-if="router().currentRoute.value.name === 'calculator' "
      >
        <div v-if="typeof globalTotal === 'number'" >résultat: {{globalTotal}}.— CHF</div>
        <div v-else                                 >{{globalTotal.errorMessage}}</div>
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
            class="v-app-footer__status__items app-with-circle-status app-with-circle-status--white"
            v-for="(section, index) of sections"
            :class="{
              'app-with-circle-status--active': section.status !== 'empty',
            }"
        ><span class="v-app-footer__status__items__name" >{{section.title}}</span><span class="v-app-footer__status__items__index" >{{index + 1}}</span></div>
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
              <p>
                  Au niveau fédéral, cantonal et municipal, l’amélioration des conditions de travail des artistes est aujourd’hui une préoccupation des collectivités publiques, en particulier les aspects de la rémunération des artistes, leur prévoyance sociale ainsi que leur statut et reconnaissance en tant que professionnels de manière plus générale.
              </p>
              <p>
                  Cette grille de rémunération est basée sur le guide Honoraires des artistes réalisé par Visarte en 2020 et en propose une version augmentée avec une liste précise des différents cas de figure et tarifs adaptés aux réalités des artistes à Genève.
              </p>
              <p>
                  Elle s’applique à tous types de structures, notamment les Centres d’art et les musées, les espaces d’exposition publics ou privés, subventionnés ou non par la Ville de Genève ou le canton de Genève.
              </p>
              <p>
                En étant librement diffusé, ce document a pour ambition de devenir une norme en Suisse et de permettre ainsi aux structures et aux artistes de délimiter précisément leur cadre de travail avec des conditions harmonisées.
              </p>
          </template>

          <template v-slot:right >
              <h4>Comment cela fonctionne&nbsp;?</h4>

              <p>La grille de rémunération</p>
              <p>L’objectif de cette grille est de proposer une rémunération pour le travail fourni par chaque artiste dans le cadre d’une invitation à réaliser une exposition et/ou autres prestations. Ces directives sont utiles autant pour les artistes que pour les structures présentant des projets artistiques.</p>
              <p>La grille indique la rémunération minimum par artiste et par exposition, le montant est défini en fonction de cinq critères principaux&nbsp;:</p>
              <ul>
                <li>La nature de l’œuvre (nouvelle production, adaptation ou œuvre existante)</li>
                <li>Le nombre d’artistes participant à l’exposition</li>
                <li>Le budget global de la structure (hors frais fixes de loyer)</li>
                <li>Le nombre annuel de visiteur·euse·x·s de la structure</li>
                <li>La durée de l’exposition</li>
              </ul>
              <p>Cette grille propose des recommandations minimales pour la rémunération, il est donc tout à fait envisageable de mieux rétribuer l’artiste que les montants proposés.</p>
              <p>Afin de déterminer la catégorie qui s’applique à une structure, il convient d’utiliser celle étant la plus favorable pour l’artiste. Si une structure a peu de visiteur·euse·x·s mais un budget la plaçant dans une catégorie supérieure, c’est la catégorie relevant du budget qui est appliquée.</p>
          </template>

            <template v-slot:left-bottom>
                <h4>Crédits</h4>
                <p>
                    <br>Projet piloté par :
                    <br><a href="https://www.visarte-geneve.ch/" >Visarte.Genève</a>
                </p>

                <p>Grille de rémunération :
                    <br>Clovis Duran, Julie Marmet, Ramaya Tegegne
                </p>

                <p>Rédaction du contrat-modèle :
                    <br>Lab-of-Arts
                </p>

                <p>Développement :
                    <br>Nicolas Baldran
                </p>

                <p>Bibliothèques :
                    <br><a href="https://vuejs.org/">Vue.js
                    </a>
                    <br><a href="">html2pdf.js</a>
                    <br>
                </p>

                <p>Graphisme :
                    <br>Clovis Duran
                </p>

                <p>Communication :
                    <br>Camille Dumond
                </p>

                <p>Typographies :
                    <br>Christiana, Gudrun Zapf-von Hesse
                    <br>Suisse Intl, Swiss Typefaces
                </p>

                <p>Les noms des personnes sont organisés ci-dessus par ordre alphabétique.</p>
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
               @click="openLexical"
               :class="{'app-with-circle-status--active': globalStore.showLexical}"
          >Lexique</div>
          <div class="app-with-circle-status"
               v-if="!isHome"
               @click="openInfo"
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
            <a style="text-decoration: none; box-shadow: none" target="_blank" href="mailto:webmaster@example.com?subject=Suggestion%20webApplication" >Suggestion&nbsp;?</a>
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
                  }, 1_000)
              })
          }, 500)
      },

      async pdfExport() {
          const htmlToExport = document.querySelector('.v-app-contract-content')
          if (!(htmlToExport instanceof HTMLElement)) return

          const containerForHtmlToExport = document.createElement('div')

          containerForHtmlToExport.appendChild(htmlToExport.cloneNode(true))
          containerForHtmlToExport.classList.add('to-export')


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
                  const imageHeader = 'data:image/png;base64,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t1/H43/wwQcL4ZHfM8wwQ5p//vnTYostlj7xiU90XOdwuRAPyzvvvDPdd9996VOf+lQxtsUXXzxNMskkw6WL9kMCEhilBEbz2jpKb5nDkoAEJCABCUhAAhIYgQQUCEfgTbPLEpCABCQgAQlIQALNCUw55ZQtxcBmV+A9iBdhrr3xxhtpxx13TGefffZHLv3yl7+czjrrrDT33HPnVjssyv/vf/9LRxxxRBozZkx6//33x+nTtNNOm04++eS06qqrDou+2gkJSGB0ERjNa+voulOORgISkIAEJCABCUhgNBBQIBwNd9ExSEACEpCABCQgAQkUBKaaaqr0yiuvhGmccMIJaeuttw6Xp+Cbb76ZFlxwwfTYY4+1vG6CCSZIt956a0IsHGm2zjrrpIsvvrhtt48++ui0ww47jLSh2V8JSGAYExjta+swRm/XJCABCUhAAhKQgAQGlIAC4YDeeIctAQlIQAIS6JTAe++9l1588cWP/Lz00kvpYx/7WJpooonShBNOWPzmZ/LJJ09zzjlnmm222UZF2MVOuXldfwh8/vOfbyvcNfbinHPOSRtvvHFW5zbffPN0+umnl17zhS98oQg/ilg4Ugwem2yySWl3CTl67733Fs+2JoGRSIAcpDfddFOaZppp0te//vWROIRR1+fRvLaOupvlgCQgAQlIQAISkIAERgUBBcJRcRsdhAQkIAEJSKB3BJ599tl0zTXXpKuuuirdcsst6bXXXuuosfHGGy/NPvvsCdHkK1/5SlpmmWXSvPPOmz7+8Y93VJ8XSaAZgQUWWKDImRe1Sy65JK2xxhrR4umRRx5Jc8wxR7j8mWeemTbddNNw+U4LPv/882m66abr9PKx15FHkdyDEdtss83SGWecESlqGQkMOYGXX365eIchCvJDjjtspZVWSldfffWQ928kd6CK9We4rq0j4b7897//LTznp5566pHQXfsoAQlIQAISkIAEJDCMCCgQDqObYVckIAEJSEACw4EA+cfuuOOOQhBk0zRHbMnt/xRTTJG+8Y1vpFVWWSWtttpqadJJJ82twvISGIfAEksskX73u9+FqVx//fVpueWWC5c///zz04YbbhguT57Cn//85+HyOQXJD/jLX/4yHXvssYUnH95/3Rib/NNPP324CgT++++/P1zeghLoJ4HXX399HEHwgQceSB9++OFHuoCHL+IKnu9anEDV689wWlvjFIa2JKL3Kaeckk488cT0wx/+MOGBqUlAAhKQgAQkIAEJSCCHgAJhDi3LSkACEpCABEY5AfKO7bPPPunhhx/u60jZoH388ccr8YDqa8dtbNgRWHHFFdN1110X7tfvf//7wqM1avvvv3864IADosUT/cEDt0p7+umniw1hNoYJ7YvttNNO6aijjuqqmZtvvjkr1CLP7bvvvttVm14sgV4QeOihh9KXvvSlxIGXiF1xxRVp1VVXjRQd+DK9Wn+Gw9o6Um7uH//4x+JgyAUXXJAQarFLL700rb766iNlCPZTAhKQgAQkIAEJSGCYEFAgHCY3wm5IQAISkIAEhpIAYdf22GOPdNddd7XtBiEM2YAizxs/5BWcddZZ0wcffJCeeuqp9OSTTxa/yU2GNwD5CiPWSy+rSPuWGT0E1lxzzWKjNGrM1fnnnz9aPJ199tlZIUO32267YiO3CiMsInVdfvnliZBy9XbggQemMWPGdNXMP/7xjzTzzDOH6/jiF7+Y/vKXv4TLW1AC/SKw5557psMOOyzc3FZbbZVOOumkcPlBLNjr9Wco19aRcD/5zrrwwguLd8Cdd975kS7feuutackllxwJQ7GPEpCABCQgAQlIQALDiIAC4TC6GXZFAhKQgAQk0G8ChFxjI7Us/xJhGxE61lprrUQuwYjh2XTccccVP4TBamWf/OQn0xNPPJEV2jDSvmUGk8AGG2xQeFVE7a9//WuRFzNqhNTMERTx8ttiiy2i1X+k3FtvvVWEDuU5oq+tjE1jntFubfLJJ0+EZozYRhttlM4999xIUctIoG8E8BqcaaaZEvlzo0buzWeeeSZafGDK9XP96ffaOlJuIvOy5jH+4osvtuw2hzU4tKFJQAISkIAEJCABCUggh4ACYQ4ty0pAAhKQgARGEYGjjz467bLLLm1DsM0+++yFOLHooot2PHJCEOIheOqppzatY9NNN01nnnlmx/V7oQTqCWy22WbprLPOCkN55JFHCm/YqJHDjJyFv/3tb0svwRvvz3/+c5pkkklKyzYWeOyxxxLPKM/Gm2++WXo9Hrvrr79+abmyAgcddFCRy6rMPvGJTxS5ShdaaKGyov5dAn0lQF7RFVZYIbvNe+65Jy2wwALZ143GC4Zi/enX2jpS7tdtt91W5K/FY/w///lPabfJITvttNOWlrOABCQgAQlIQAISkIAE6gkoEDofJCABCUhAAgNGAO+KXXfdtdh4amcbb7xxOuGEE9LEE09cCSHyo+22224fCY3opmwleK3k/xEgVCBee1EjrOZnP/vZaPGiHGF055lnnvSvf/2r5XUf+9jHChHx61//elbdtcJ4Ax5//PHhaxFFEC67NTaiORDAc9nOyBe23377dduc10ugcgLrrbdeEYox1xDGc/KL5tY/ksoP1frTj7V1pNwHvAEffPDBcHcJQRqN8BCu1IISkIAEJCABCUhAAqOegALhqL/FDlACEpCABCTw/wm88847acMNNyxOpLezY445Jm2//faVo7vmmmuKMKV4FWILL7xwuvvuuytvxwoHl8AOO+yQlfPvn//8Z5pmmmmygT300EMJb8VmeTs/97nPpdNPPz0tvfTS2fXWLvjBD36QfvKTn4SvJyfVIossEi7fruBrr72Wdtppp8J7uNEmmmiiol/bbLNNQgTVJDCcCBDaesYZZyzy4ubavPPOmwhzqaU0lOtPr9fWkXJ/OahRlhe6NpZPfepTie87TQISkIAEJCABCUhAArkEFAhziVleAhKQgAQkMEIJvPDCC2nVVVctFeT23XffRJjBXtnFF1+c1l133UQ4sV4Jkb3qu/UOfwLf//73089+9rNwR1999dVE3r1O7L///W8htuNtx6Y2noiEKEQE79bzNhrqs9ZvPE3mnnvuTobR8prbb7898YNoMuGEE6YFF1wwffOb30yETtUkMBwJHH744WmPPfbouGuE1px11lk7vn60XDjU608v19aRco+WXXbZdOONN4a6O/XUUye+8TQJSEACEpCABCQgAQnkElAgzCVmeQlIQAISkMAIJPD222+nL3/5y4WI0c7wLjz33HN77hl0yCGHFHnOnn32WXPmjMD5NJy7vPfee6cf/ehH4S7ybCB+DTf76U9/mnbfffdwt55++unCc0qTwKAS4NDJnHPOmcgr2qkdccQRRQjuQTfXn6GfARzGuOqqq0IdmW222dKjjz4aKmshCUhAAhKQgAQkIAEJ1BNQIHQ+SEACEpCABAaAwHe+85105plnth3pdNNNl/72t7+lSSaZpC9ETj755ES+OE0CVRIgN15OHrF///vf6ROf+ESVXaikLnKE7rzzzuG6CAs62WSThctbUAKjjcBNN92UlllmmbHDwov3rbfeyhrmkksu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CjG30aM62jc8GQkzHGUWrddyEpCABCQgAQmMbAIKhCP7/tl7CUhAAhKQQEEAcWDNNdfMonHkkUemnXfeOeuaoSpMeFHCu0U2nOhjbv6/yLgIR5nrbZYjqkVz6dT6imiR48nWOEZYsgH6v//9LzL8IpRhjkCY47Hxq1/9Knv+tup0jkCIYMTcyrHc3D/0h1xzuXbKKaeEBXyefRhWYXga/fOf/wxVRY4scmFGrd6jqewahK/77ruvrFjW37/73e8mBNscI88bYjoCTZmRBzLqMUxdVYQFxPuWwwJRG4kCYWMuttrme3TM7crlCnXTTjttITJHPfFatU0uXXLqRq2TnLOs7Z32cyjWn16urXiOdSqgcZAET18OHnXKM3qf68sh7J533nmhSxkfHnLDwVjX+J6JWLf9fumllxLhOiOWm1O2VidhmRdaaKF0//33R5oZW4axwQIRs2brrbdewvuvW+skakitzYkmmqgQvbfffvvKPPS7HY/XS0ACEpCABCQwtAQUCIeWv61LQAISkIAEKiFAuMlvfetbWXWxQfnDH/4w65qhKszpeEJwRq2KjffGthB5csIpcj0CHN5YEXFhn332SYceemh0iOnBBx9Mc889d7h8s4I53mI5IUYJechGOsJKxO69997E5l0VliMQTj/99NkeZYjEiMVR6zRXJB6+iKwRW2edddKFF14YKVpaBiEeD5CI5eTQQ+xbYIEFItUWZarMq1hrFJGlk3CvCH8rrrhiad8JgUkozKgdf/zxaZtttokWb1oO0YJ8slEbaSFGX3zxxYRAU597tsr8uX/729+y11FysSLMdmN4TuW8f6sKbRrt81CsP71cW3OfzWac8IrjeUWw5t3ZayOEZFRMOu6449K2227b6y6F6s/pNyEvozkEmzX+5ptvJnIYR4yICa+88kqk6EfK4Am4+OKLhw+pNWuEUKUcskKg69YIv/2Zz3wmlJO7VVuEKia6ATmSczyTu+2710tAAhKQgAQkMPwIKBAOv3tijyQgAQlIQALZBDrZ/PrOd76TyLEzEoxQlYSsjFpObqJonT/60Y/S3nvvHS0+ttw999wTEkbYLGbTOGqION2Gicrx6PrqV7+abr/99lD32EAnB1HU8FjLCX/Xrt4cgZA2o95ytTYJScpGcdQuuuiitPbaa0eLjy13wgknhDd8119//YQQWYV97nOf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kIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQAQXCAbrZDlUCEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACCoTOAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQAQXCAbrZDlUCEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACCoTOAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQAQXCAbrZDlUCEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACCoTOAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQAQXCAbrZDlUCEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACCoTOAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQAQXCAbrZDlUCEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACCoTOAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQAQXCAbrZDlUCEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACCoTOAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMEAEFwgG62Q5VAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAgqEzgEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJDBABBcIButkOVQISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIKhM4BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCQwQgY+llD4coPE6VAlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQkMNAEFwoG+/Q5eAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhg0Aj8X36/66PAJzZnAAAAAElFTkSuQmCC'
                  const totalPages = pdf.internal.getNumberOfPages()

                  for (let i = 1; i <= totalPages; i++) {
                      pdf.setPage(i)
                      pdf.addImage(imageHeader, "PNG", 0, 0, 790, 74)
                      pdf.text(50, 1100, `P. ${i}/${totalPages}`)
                  }
              })
              .save()
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
    padding: 0 1rem;
    line-height: 2rem;
    font-size: 1.4rem;
    margin: auto;

    @media (max-width: 1280px) { // footer special breakpoint
      justify-content: flex-start;
      max-width: var(--app-max-width);
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
    display: none;

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
}

.v-app-footer__panel__signature {
  margin-top: 10rem;
  padding-left: 5rem;
}
</style>

<style
  lang="scss">
.to-export {
  --page-height: 1120px;
  --page-width: 590px;
  --margin-top-end-bottom: 120px; //top 100px + bottom 20px
  --font-size: 15px;
  --line-height: 20px;

  background-color: white !important;
  position: relative !important;
  box-sizing: border-box !important;
  width: var(--page-width) !important;
  padding-left: calc( ( var(--page-width) / 5) + 10px) !important;
  padding-right: calc(10px) !important;

  * {
    font-size: var(--font-size) !important;
    line-height: var(--line-height) !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

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

  .v-app-contract-content__lexical h3 {
    margin-top: calc( var(--line-height) * 1)!important;
    font-size:    calc( var(--font-size) * 1)!important;
    line-height:  calc( var(--line-height) * 1)!important;
  }

  h4 {
    margin-top: calc( var(--line-height) * 2)!important;
  }

  .v-app-contract-content__lexical {
    font-weight: 400 !important;
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

  .to-export__line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: red;

    &:nth-child(1)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  0   )}
    &:nth-child(2)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  1   )}
    &:nth-child(3)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  2   )}
    &:nth-child(4)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  3   )}
    &:nth-child(5)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  4   )}
    &:nth-child(6)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  5   )}
    &:nth-child(7)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  6   )}
    &:nth-child(8)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  7   )}
    &:nth-child(9)  {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  8   )}
    &:nth-child(10) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  9   )}
    &:nth-child(11) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  10  )}
    &:nth-child(12) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  11  )}
    &:nth-child(13) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  12  )}
    &:nth-child(14) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  13  )}
    &:nth-child(15) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  14  )}
    &:nth-child(16) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  15  )}
    &:nth-child(17) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  16  )}
    &:nth-child(18) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  17  )}
    &:nth-child(19) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  18  )}
    &:nth-child(20) {top:   calc( ( var(--page-height) - var(--margin-top-end-bottom) ) *  19  )}
  }
}
</style>
