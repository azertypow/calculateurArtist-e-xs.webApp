import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {OptionOrNumberCalculatorSection} from '../gloabal/CalculatorSection'
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

const calculatorSection_1 = new OptionCalculatorSection(
    1,
    'Taille de la structure',
    true
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: 'Petite', subtitle: '< 50 000 CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: 'Moyenne', subtitle: '50K–250K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: 'Grande', subtitle: '250K–500K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '04', titre: 'Très grande', subtitle: '> 500K CHF /année'}),
)

const calculatorSection_2 = new OptionCalculatorSection(
        2,
        'Type d’exposition',
        true
    ).addSubSection(
        new OptionCalculatorSubsection({uniqueID: '01', titre: 'Solo'}),
        new OptionCalculatorSubsection({uniqueID: '02', titre: '2 à 6 pers.'}),
        new OptionCalculatorSubsection({uniqueID: '03', titre: '7 et plus'}, ),
    )

export const useGlobalStore = defineStore('globalStore', {
    state: function () {
        return {
            isACollective: false,
            showFixedResult: true,
            calculatorSections: [
                // ----------
                calculatorSection_1,
                calculatorSection_2,
                // ----------


                // ----------
                new OptionCalculatorSection(
                    3,
                    'Emploi d’une ou plusieurs œuvres existantes',
                    true
                ).addSubSection(
                    new OptionCalculatorSubsection({
                        uniqueID: '01',
                        titre: 'Œuvre existante',
                        subtitle: undefined,
                        subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                            [
                                calculatorSection_1,
                                calculatorSection_2,
                            ],
                            () => conditionalLogicSection_3_option_1(calculatorSection_1, calculatorSection_2),
                            0,
                        )
                    }),
                    new OptionCalculatorSubsection(
                        {
                            uniqueID: '02',
                            titre: 'adaptation d\'une œuvre existante (x1.5)',
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
                            titre: 'conception d\'une ou plusieurs nouvelles œuvres (x2)',
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
                    4,
                    "Durée de l’exposition",
                    true,
                    'Montant forfaitaire supplémentaire par mois au-delà du premier mois',
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
                    5,
                    'Honoraires de réalisation (si réalisé par l’artiste)',
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’heures",
                        0,
                        "heures",
                    ).setAMultiplier({
                        text: 'Coût horaire',
                        isEditable: true,
                        unit: 'CHF',
                        value: new ConditionalValueFromSubsectionOption(
                            [
                                calculatorSection_1,
                                calculatorSection_2,
                            ],
                            () => {
                                const newValueAfterChange = conditionalLogicSection_5(
                                    calculatorSection_1,
                                    calculatorSection_2,
                                )
                                console.log(newValueAfterChange)
                                return newValueAfterChange
                            },
                        )
                    })
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'Forfait de réalisation',
                        0,
                "CHF",
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    6,
                    'Per Diem',
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "Nombre de jours",
                        0,
                        'jours',
                    ).setAMultiplier({
                        value: 50,
                        text: 'Montant du pier diem: ',
                        unit: 'CHF',
                        status: 'info',
                    }),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    7,
                    'Honoraires de montage et transport',
                    false,
                    "recommandation de 60 CHF/h, minimum 23 CHF/h",
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'nombre d’heures',
                        0,
                    ).setAMultiplier({
                        value: 60,
                        text: 'Coût horaire',
                        isEditable: true,
                        unit: 'heures',
                    })
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    8,
                    "Évenement.s et préparation",
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier({
                        value: new ConditionalValueFromSubsectionOption([
                            calculatorSection_1,
                        ], () => conditionalLogicSection_8(calculatorSection_1)),
                        text: "Evénement avec préparation",
                        unit: 'CHF',
                    }),
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier(
                        {value: 500, text: "Évènement avec préparation"}
                    ),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    9,
                    "Forfait texte / 1000 frappes",
                    false,
                    'source?'
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’incidences",
                    ).setAMultiplier(
                        {
                            value: 30,
                            text: "Coût forfait text"
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
        total(): number {
            const multiply = this.isACollective ? 1.5 : 1

            return this.calculatorSections.reduce((previousTotalOfSection, currentSection) => {
                return previousTotalOfSection + (currentSection
                    .subSections as unknown[])
                    .reduce((previousSubsectionValue: number, currentSubsection) => {
                        if(
                            currentSubsection
                            && typeof currentSubsection === 'object'
                            && 'result' in currentSubsection
                        )   return previousSubsectionValue + (currentSubsection.result as number)
                        else return 0
                    }, 0)
            }, 0) * multiply
        }
    },

})
