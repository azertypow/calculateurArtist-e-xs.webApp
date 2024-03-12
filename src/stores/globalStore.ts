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
import {conditionalLogicSection_9} from "./conditionalLogicSection_9";
import {calculatorSection_3} from "./calculatorSection_3";
import {calculatorSection_1} from "./calculatorSection_1";
import {calculatorSection_2} from "./calculatorSection_2";
import {calculatorSection_5} from "./calculatorSection_5";
import {calculatorSection_6} from "./calculatorSection_6";

export const calculatorSection_0_title = {
    ind:    'indépendant',
    sal:    'salariat',
    asso:   'association',
}

export const listeOfMessages = {
    [calculatorSection_0_title.ind]:    "Les montants actuels sont les montants pour les indépendants",
    [calculatorSection_0_title.asso]:   "Les montants pour les associations sont recalculés selon les taux en vigueur et les charges employeur",
    [calculatorSection_0_title.sal]:    "Les montants pour les salariés sont recalculés selon les taux en vigueur",
}

export const calculatorSection_0: OptionCalculatorSection = new OptionCalculatorSection(
    {
        index : 1,
        title : 'Modalité de rémunération',
        required : true,
        help: `
        <p>De quelle manière la rémunération de l’artiste sera-t-elle versée ou perçue ?</p>
        <ul>
            <li>indépendant
                <br>→ l’artiste est indépendant et facture sa prestation directement à la structure</li>
            <li>salariat
                <br>→ l’artiste est salarié directement par la structure</li>
            <li>association
                <br>→ l’artiste est salarié par une association productrice, qui facture la prestation à la structure</li>
        </ul>
        `
    }
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: calculatorSection_0_title.ind}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: calculatorSection_0_title.sal}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: calculatorSection_0_title.asso}),
)

calculatorSection_0.addOnChangeListener((section_0) => {
    // todo: generate this in backend
    const uuidForMessage = '100648302'

    if( ! section_0._value) return

    useGlobalStore().setConditionOnTotalValue(
        uuidForMessage,
        listeOfMessages[section_0._value.titre], //todo: clean: add value system by ID, not string in value property
        section_0._value.titre,
    )
})

export const useGlobalStore = defineStore('globalStore', {
    state: function () {
        return {

            waitPDFExport: false,

            showLexical: false,
            showInfo: false,
            showHelpers: true,

            isACollective: false,
            showFixedResult: true,

            conditionOnTotalValue: {} as {
                [key: string]: {
                    value: string
                    message: string
                }
            },

            calculatorSections: [
                // ----------
                calculatorSection_0,
                calculatorSection_1,
                calculatorSection_2,
                calculatorSection_3,
                calculatorSection_5,
                calculatorSection_6,
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 7, title : 'Per diem',
help:`
<p>Indemnité forfaitaire visant à dédommager l’artiste pour ses frais de repas et de déplacement lors du montage de l'exposition par exemple.</p>

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
                        index : 8,
                        title : 'Montage et transport',
                        required : false,
                        info : "recommandation de 60 CHF/h, minimum 23 CHF/h",
                        help:`
                            <p>Lorsque l’artiste se charge du montage et/ou du transport de ses pièces&nbsp;:</p>
                             
                            <ul>
                                <li>soit compléter par le nombre d’heures estimées</li>
                                <li>soit définir un forfait</li> 
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
                        'Et/ou forfait',
                        0,
                        "CHF",
                        0,
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 9, title : "Événement",
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
                    {index : 10, title : "Texte", required : false, info : 'source?',
help:`<p>Les textes commandés par la structure à l’artiste sont rémunérés par 1000 frappes (espaces compris). Le coût forfaitaire par 1000 frappes est calculé automatiquement selon la taille de la structure d’accueil. La longueur du texte final est arrondie au millier de frappes le plus proche.</p>
<ul>Exemples : 
<li>Si le texte produit contient 1312 caractères espaces compris, compter 1 occurence.</li>
<li>Si le texte produit contient 29’979 caractères espaces compris, compter 30 occurences.</li>
</ul>
`}
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurrences",
                    ).setAMultiplier(
                        {
                            value: new ConditionalValueFromSubsectionOption([
                                calculatorSection_1,
                            ], () => conditionalLogicSection_9(calculatorSection_1)),
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

    actions: {
        setConditionOnTotalValue(uuidForMessage: string, message: string, value: string) {
            const conditionOnTotalValueToEdite = this.conditionOnTotalValue

            conditionOnTotalValueToEdite[uuidForMessage] = {
                message: message,
                value: value,
            }

            this.conditionOnTotalValue = conditionOnTotalValueToEdite
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
      },

      globalMessageForTotalResult(): string {
        return Object.values(this.conditionOnTotalValue).map(value => value.message).join(' ')
      },

    }
})
