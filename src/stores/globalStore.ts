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

const calculatorSection_1 = new OptionCalculatorSection(
    1,
    'Taille de la structure',
    true
).addSubSection(
    new OptionCalculatorSubsection('01', 'Petit', '< 50 000 CHF /année'),
    new OptionCalculatorSubsection('02', 'Moyen', '50K–250K CHF /année'),
    new OptionCalculatorSubsection('03', 'Grand', '250K–500K CHF /année'),
    new OptionCalculatorSubsection('04', 'Très grande', '> 500K CHF /année'),
)

const calculatorSection_2 = new OptionCalculatorSection(
        2,
        'Type d’exposition',
        true
    ).addSubSection(
        new OptionCalculatorSubsection('01', 'Solo'),
        new OptionCalculatorSubsection('02', '2 à 6 pers.'),
        new OptionCalculatorSubsection('03', '7 et plus', ),
    )

export const useGlobalStore = defineStore('globalStore', {
    state() {
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
                    new OptionCalculatorSubsection('01', 'Emploi d’une ou plusieurs œuvres existantes'),
                    new OptionCalculatorSubsection('02', 'Emploi d’une ou plusieurs œuvres existantes'),
                    new OptionCalculatorSubsection('03', 'Emploi d’une ou plusieurs œuvres existantes'),
                ),
                // ----------



                // ----------
                new NumberCalculatorSection(
                    4,
                    "Durée de l'exposition (en mois)",
                ).addSubSection(
                    new NumberCalculatorSubsection()
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



            ] as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[],
        }
    },


})
