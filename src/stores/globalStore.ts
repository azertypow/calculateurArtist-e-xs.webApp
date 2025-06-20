import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {OptionOrNumberCalculatorSection, OptionOrNumberCalculatorSubsection} from '../gloabal/CalculatorSection'
import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection,
    OptionCalculatorSection, OptionCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {calculatorSection_3} from "./calculatorSection_3";
import {calculatorSection_1} from "./calculatorSection_1";
import {calculatorSection_2} from "./calculatorSection_2";
import {calculatorSection_5} from "./calculatorSection_5";
import {calculatorSection_6} from "./calculatorSection_6";
import {calculatorSection_8} from "./calculatorSection_8";
import {calculatorSection_9} from "./calculatorSection_9";
import {calculatorSection_10} from "./calculatorSection_10";
import {calculatorSection_6_2} from "./calculatorSection_6_2";

export const calculatorSection_0_title = {
    ind:    'indépendant·e·x',
    sal:    'salarié·e·x par la structure',
    asso:   'salarié·e·x par une association',
}

export const listeOfMessages = {
    [calculatorSection_0_title.ind]:    "Message global ind",
    [calculatorSection_0_title.asso]:   "Message global asso",
    [calculatorSection_0_title.sal]:    "Message global salarié structure",
}

export const listeOfSubtitle = {
    [calculatorSection_0_title.ind]:    `
    <p>L’artiste est indépendant·e·x et facture sa prestation directement à la structure.</p>
    <p>Les montants sont indiqués toutes charges comprises.</p>
    `,
    [calculatorSection_0_title.asso]:   `
    <p>L’artiste est salarié·e·x par une association productrice qui facture la prestation à la structure.</p>
    <p>Les montants sont indiqués en coût total employeur.</p>
    `,
    [calculatorSection_0_title.sal]:    `
    <p>L’artiste est salarié·e·x directement par la structure.</p>
    <p>Les montants sont indiqués en salaire brut.</p>
    `,
}


export const calculatorSection_0: OptionCalculatorSection = new OptionCalculatorSection(
    {
        index : 1,
        title : 'Modalité de rémunération',
        required : true,
        help: `
        <p>Les taux de cotisation proposés d’office correspondent aux taux en vigueur à Genève en 2025, ainsi que selon une affiliation auprès de Artes & Comoedia, caisse de prévoyance de référence pour le domaine culturel en Suisse Romande.</p>
        `
    }
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: calculatorSection_0_title.ind,       subtitle: listeOfSubtitle[calculatorSection_0_title.ind]     || undefined   }),
    new OptionCalculatorSubsection({uniqueID: '02', titre: calculatorSection_0_title.sal,       subtitle: listeOfSubtitle[calculatorSection_0_title.sal]     || undefined   }),
    new OptionCalculatorSubsection({uniqueID: '03', titre: calculatorSection_0_title.asso,      subtitle: listeOfSubtitle[calculatorSection_0_title.asso]    || undefined   }),
)

calculatorSection_0.addOnChangeListener((section_0) => {
    // todo: generate this in backend
    const uuidForMessage = '100648302'
    updateConditionOnToTalValue(section_0, uuidForMessage)
})

export function updateConditionOnToTalValue(section: OptionCalculatorSection, uuidForMessage: string) {
    if( ! section._value) return

    useGlobalStore().setConditionOnTotalValue(
        uuidForMessage,
        listeOfMessages[section._value.titre], //todo: clean: add value system by ID, not string in value property
        section._value.titre,
    )
}

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
                calculatorSection_6_2,
                calculatorSection_8,
                calculatorSection_9,
                calculatorSection_10,
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

        globalConceptionPartTotal(): number | null {

            const multiply = this.isACollective ? 1.5 : 1

            const toReturn = this.calculatorSections.slice(0, 5).reduce((acc: number, currentSection) => {

                // console.log('currentSection.title: ', currentSection.title)
                // console.log(currentSection)

                let total = 0

                currentSection.subSections.forEach((currentSubsection) => {
                    total += currentSubsection.result
                })

                return total + acc
            }, 0)

            console.log( 'toReturn: ', toReturn )

            return toReturn * multiply
        },

      globalTotal(): IGlobalTotal | {errorMessage: string} {

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

          const toReturn: IGlobalTotal = {
              OUT_ofFinalPercentCalc: 0,
              IN_finalPercentCalc: 0,
          }

        this.calculatorSections.forEach((currentSection) => {
          (currentSection.subSections as unknown[])
            .forEach((currentSubsection) => {
              if (
                  currentSubsection
                  && typeof currentSubsection === 'object'
                  && 'result' in currentSubsection
              )  {
                  if(currentSection.needToBeExcludeOfFinalPercentValue) {
                      toReturn.OUT_ofFinalPercentCalc = toReturn.OUT_ofFinalPercentCalc + (currentSubsection.result as number)
                  } else {
                      toReturn.IN_finalPercentCalc = toReturn.IN_finalPercentCalc + (currentSubsection.result as number)
                  }
              }
            }, 0)
        }, 0)

          return {
            IN_finalPercentCalc: toReturn.IN_finalPercentCalc * multiply,
            OUT_ofFinalPercentCalc: toReturn.OUT_ofFinalPercentCalc * multiply,
          }
      },

      globalMessageForTotalResult(): string {
        return Object.values(this.conditionOnTotalValue).map(value => value.message).join(' ')
      },

    }
})

export interface IGlobalTotal {OUT_ofFinalPercentCalc: number, IN_finalPercentCalc: number}
