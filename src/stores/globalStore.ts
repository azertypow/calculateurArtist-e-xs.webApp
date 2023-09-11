import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {OptionOrNumberCalculatorSection, OptionOrNumberCalculatorSubsection} from '../gloabal/CalculatorSection'
import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection,
    OptionCalculatorSection, OptionCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {conditionalLogicSection_5} from "./conditionalLogicSection_5";
import {conditionalLogicSection_4} from "./conditionalLogicSection_4";
import {conditionalLogicSection_3_option_1} from "./conditionalLogicSection_3_option_1";
import {conditionalLogicSection_3_option_2} from "./conditionalLogicSection_3_option_2";
import {conditionalLogicSection_3_option_3} from "./conditionalLogicSection_3_option_3";
import {conditionalLogicSection_8} from "./conditionalLogicSection_8";
import {conditionalLogicSection_8_sans} from "./conditionalLogicSection_8_sans"

const calculatorSection_1 = new OptionCalculatorSection(
    {index : 1, title : 'Budget artistique annuel', required : true,
help:`
<p>Choisir la catégorie par rapport au budget annuel artistique de la&nbsp;structure</p>
<p>Les quatre catégories proposées sont :
<ul>
    <li>Petite&nbsp;: moins de 50 000 CHF</li> 
    <li>Moyenne&nbsp;: entre 50 000 et 250&nbsp;000 CHF</li> 
    <li>Grande&nbsp;: entre 250 000 et 500&nbsp;000 CHF</li>
    <li>Très grande&nbsp;: supérieur à 500&nbsp;000 CHF</li> 
</ul>
<p>Il est recommandé aux parties de remplir conjointement le formulaire en ligne.</p>
        `}
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: 'Petite', subtitle: '< 50 000 CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: 'Moyenne', subtitle: '50K–250K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: 'Grande', subtitle: '250K–500K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '04', titre: 'Très grande', subtitle: '> 500K CHF /année'}),
)

const calculatorSection_2 = new OptionCalculatorSection(
        {index : 2, title : 'Exposant·e·x·s', required : true,
help:`
<p>Choisir l'une des options par rapport au nombre de artist.e.x.s invitées. à exposer. 
</br>Un collectif d'artistes est considéré dans ce décompte comme une personne.</p>
`}
    ).addSubSection(
        new OptionCalculatorSubsection({uniqueID: '01', titre: '1 artiste'}),
        new OptionCalculatorSubsection({uniqueID: '02', titre: '2 à 6 personnes'}),
        new OptionCalculatorSubsection({uniqueID: '03', titre: '7 personnes ou plus'}, ),
    )

export const useGlobalStore = defineStore('globalStore', {
    state: function () {
        return {

            waitPDFExport: false,

            showLexical: false,
            showInfo: false,
            showHelpers: false,

            isACollective: false,
            showFixedResult: true,
            calculatorSections: [
                // ----------
                calculatorSection_1,
                calculatorSection_2,
                // ----------


                // ----------
                new OptionCalculatorSection(
                    {index : 3, title : 'Œuvres', required : true,
help:`
<p>Préciser la nature des œuvres présentées pour l'exposition. Si différentes œuvres entrent dans différentes catégories, choisir l'option la plus avantageuse pour l'artiste.
Les options sont classées de la moins avantageuse à la plus avantageuse pour l'artiste.</p>

<p>Exemple : Si une exposition regroupe des œuvres déjà existantes et de nouvelles créations d'un artiste, alors c’est la catégorie «conception d'une ou plusieurs nouvelles œuvres» qui est appliquée.</p>
`}
                ).addSubSection(
                    new OptionCalculatorSubsection({
                        uniqueID: '01',
                        titre: 'Œuvre(s) existante(s)',
                        subtitle: undefined,
                        subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                            [
                                calculatorSection_1,
                                calculatorSection_2,
                            ],
                            () => conditionalLogicSection_3_option_1(calculatorSection_1, calculatorSection_2),
                            0,
                        ),
                    }),
                    new OptionCalculatorSubsection(
                        {
                            uniqueID: '02',
                            titre: 'Adaptation d’œuvre(s) existante(s)',
                            subtitle: undefined,
                            subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                                [
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ],
                                () => conditionalLogicSection_3_option_2(calculatorSection_1, calculatorSection_2),
                                0,
                            )
                        },
                    ),
                    new OptionCalculatorSubsection(
                        {
                            uniqueID: '03',
                            titre: 'Conception de nouvelle(s) œuvre(s)',
                            subtitle: undefined,
                            subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                                [
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ],
                                () => conditionalLogicSection_3_option_3(calculatorSection_1, calculatorSection_2),
                                0,
                            )

                        },
                    ),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 4, title : "Durée de l’exposition", required : true, info : 'Montant forfaitaire supplémentaire par mois au-delà du premier mois',
help:`
<p>Les frais liés à la durée correspondent à des frais de location. Ils sont donc progressifs. La durée minimale de ces frais est fixée à un mois. Concernant la progression, arrondir la durée mensuelle à l'unité la plus proche.</p>

<p>Exemples :</p>
 
<ul>
    <li> Exposition de 3 semaines = 1 mois</li>
    <li> Exposition de 9 semaines = 2 mois</li>
</ul>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        '',
                        0,
                        "mois",
                        1,
                    ).setAMultiplier(
                        {
                            value: new ConditionalValueFromSubsectionOption(
                                [
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ],
                                () => conditionalLogicSection_4(
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ),
                            ),
                            text: 'Montant forfaitaire supplémentaire par mois au-delà du premier mois: ',
                            status: "info",
                            unit: "CHF",
                            isActiveIfValueGreaterThan: 1
                        },
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 5, title : 'Honoraires de réalisation',
help:`
<p>Option 1 : Si le ou les œuvres sont produites par l'artiste&nbsp;: 
<ul>
    <li> Soit définir en amont un nombre d'heures nécessaire à la réalisation du travail ainsi que son coût horaire. Conformément aux directives de Visarte Suisse, le montant horaire ne peut être inférieur à 90CHF pour les indépendants et selon la loi genevoise sur le salaire minimum de 24CHF pour les salarié.e.x.s.</li>
    <li> Soit définir en amont un montant forfaitaire </li>
</ul>

<p>Option 2 : Si le ou les œuvres sont produites par l'artiste + une autre personne morale ou physique&nbsp;:  
<ul>
<li> La structure rémunère elle-même l'intervenant.e.x.s externe et cela n'apparaît dans les calculs ci-dessous. Pour la rémunération de l'artiste, se référer à l'option&nbsp;1</li>
<li> L'artiste rémunère les personnes morales ou physiques employées pour la réalisation de ses pièces. Envisager dans ce cas un forfait.</li></ul>

<p>Option 3 : 
<ul>
<li>Si le ou les œuvres ne sont pas produites par l'artiste, le coût de production n'entre pas dans le calcul des honoraires de l'artiste et n'apparaît donc pas dans ce calculateur.</li></ul>

<p>Dans tous les cas, ces décisions doivent se prendre en accord avec la structure. </p>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’heures",
                        0,
                        "heures",
                    ).setAMultiplier({
                        text: 'Coût horaire',
                        isEditable: true,
                        unit: 'CHF',
                        value: 0,
                    })
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'Et/ou forfait de réalisation',
                        0,
                "CHF",
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 6, title : 'Per diem',
help:`
<p>Indemnité forfaitaire visant à dédommager l'artiste pour ses frais de repas et de déplacement lors du montage de l'exposition par exemple.</p>

<p>Le nombre de jours se détermine en accord avec la structure.</p>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "Nombre de jours",
                        0,
                        'jours',
                    ).setAMultiplier({
                        value: 50,
                        text: 'Montant du per diem: ',
                        unit: 'CHF',
                        status: 'info',
                    }),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {
                        index : 7,
                        title : 'Montage et transport',
                        required : true,
                        info : "recommandation de 60 CHF/h, minimum 23 CHF/h",
                        help:`
                            <p>Lorsque l'artiste se charge du montage et/ou du transport de ses pièces, soit :</p>
                             
                            <ul>
                                <li>définir un coût horaire ainsi qu'un nombre d'heures</li>
                                <li>définir un forfait</li> 
                            </ul>
                            
                            <p>Ces décisions se prennent en accord avec la structure.</p>
                        `
                    },
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'nombre d’heures',
                        0,
                    ).setAMultiplier({
                        value: 0,
                        text: 'Coût horaire',
                        isEditable: true,
                        unit: 'CHF',
                    })
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'Forfait',
                        0,
                        "CHF",
                        0,
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 8, title : "Événement",
help: `
<ul>
<li>Événement avec préparation : présentation publique nécessitant un temps de préparation.</li>
<li>Exemples : lecture, conférence, workshop, modération de rencontre, etc.</li>
<li>Événement sans préparation : présentation publique ne nécessitant pas de temps de préparation.</li>
<li>Exemples : présence lors de visite guidée, projection en présence de l’artiste, participation à une table ronde, etc.</li>
</ul>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier({
                        value: new ConditionalValueFromSubsectionOption([
                            calculatorSection_1,
                        ], () => conditionalLogicSection_8(calculatorSection_1)),
                        text: "Événement avec préparation",
                        unit: 'CHF',
                    }),
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier({
                      value: new ConditionalValueFromSubsectionOption([
                        calculatorSection_1,
                      ], () => conditionalLogicSection_8_sans(calculatorSection_1)),
                      text: "Événement sans préparation",
                      unit: 'CHF',
                    }),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 9, title : "Texte", required : false, info : 'source?',
help:`<p>Dans le cas ou la structure propose la rédaction de textes par l'artiste, forfait texte pour 1000 frappes. Le nombre d'incidences détermine la longueur du texte produit arrondis au millier de frappes le plus proche.</p>
<ul>Exemples : 
<li>Si le texte produit contient 1312 caractères espaces compris, compter 1 occurence.</li>
<li>Si le texte produit contient 29’979 caractères espaces compris, compter 30 occurences.</li>
</ul>
`}
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’incidences",
                    ).setAMultiplier(
                        {
                            value: 30,
                            text: "Coût forfait texte / 1000 frappes",
                            unit: "CHF"
                        }
                    ),
                )
                // ----------


            ] satisfies Record<number, OptionCalculatorSection | NumberCalculatorSection>,

            contractSection: {
                values: {
                    'Contrat': {
                        subsections: [
                            {
                                type: 'checkbox',
                                name: "d’exposition",
                                value: false,
                            },
                            {
                                type: 'checkbox',
                                name: "présentation publique",
                                value: false,
                            },
                            {
                                type: 'options',
                                name: "production d’œuvre(s)",
                                options: [
                                    'avec',
                                    'sans',
                                ],
                                value: '',
                            },
                        ],
                    },
                    "entre": {
                        subsections: [],
                    },
                }
            }
        }
    },

    getters: {
      globalTotal(): number | {errorMessage: string} {

        let errorForTotalCalculation: null | {errorMessage: string} = null
        for (const section of this.calculatorSections) {
          if (section.required && section.status === 'empty') {
            errorForTotalCalculation = {
              errorMessage: `Remplir la partie ${section.index}. ${section.title} pour afficher le total.`
            }
            break
          }
        }
        if(errorForTotalCalculation) return errorForTotalCalculation

        const multiply = this.isACollective ? 1.5 : 1

        return this.calculatorSections.reduce((previousTotalOfSection, currentSection) => {
          return previousTotalOfSection + (currentSection
            .subSections as unknown[])
            .reduce((previousSubsectionValue: number, currentSubsection) => {
              if (
                currentSubsection
                && typeof currentSubsection === 'object'
                && 'result' in currentSubsection
              ) return previousSubsectionValue + (currentSubsection.result as number)
              else return 0
            }, 0)
        }, 0) * multiply
      }
    },

})
