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

const calculatorSection_1 = new OptionCalculatorSection(
    1,
    'Taille de la structure',
    true
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: 'Petit', subtitle: '< 50 000 CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: 'Moyen', subtitle: '50K–250K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: 'Grand', subtitle: '250K–500K CHF /année'}),
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
                    "Durée de l'exposition (en mois)",
                ).addSubSection(
                    new NumberCalculatorSubsection().setAMultiplier(
                        new ConditionalValueFromSubsectionOption(
                            [
                                calculatorSection_1,
                                calculatorSection_2,
                            ],
                            () => conditionalLogicSection_4(
                                calculatorSection_1,
                                calculatorSection_2,
                            ),
                        )
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    5,
                    'Honoraires de réalisation (si réalisé par l’artiste)',
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d'heures",
                        0,
                        "heures",
                    ).setAMultiplier(
                        new ConditionalValueFromSubsectionOption(
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
                        ),
                        'Coût horaire',
                    )
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'Forfait de réalisation'
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    6,
                    'Per Diem',
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'Per Diem\n',
                        0,
                    )
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "Nombre d'heures"
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    7,
                    'Honoraires de montage et transport',
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'nombre d’heures',
                        0,
                    ).setAMultiplier(
                        1,
                        'Coût horaire [texte à valider, connection avec les choix précédent aussi]'
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    8,
                    "Forfait par performance",
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier(
                        150,
                        "Coût horaire [texte à valider, connection avec les choix précédent aussi]"
                    ),
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier(
                        500,
                        "Évènement avec préparation"
                    ),
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier(
                        250,
                        "Évènement sans préparation"
                    ),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    9,
                    "Forfait texte / 1000 frappes",
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’incidences",
                    ).setAMultiplier(
                        30,
                        "Coût forfait text [texte à valider, connection avec les choix précédent aussi]"
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
                                name: "d'exposition",
                                value: false,
                            },
                            {
                                type: 'checkbox',
                                name: "présentation publique",
                                value: false,
                            },
                            {
                                type: 'options',
                                name: "production d'œvre(s)",
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


})
