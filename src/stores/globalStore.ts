import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {OptionOrNumberCalculatorSection} from '../gloabal/CalculatorSection'
import {
    NumberCalculatorSection,
    NumberCalculatorSubsection,
    OptionCalculatorSection, OptionCalculatorSubsection
} from "../gloabal/CalculatorSection";

export const useGlobalStore = defineStore('globalStore', {
    state() {
        return {
            calculatorSections: [
                // ----------
                new OptionCalculatorSection(
                    1,
                    'Taille de la structure',
                    true
                ).addSubSection(
                    new OptionCalculatorSubsection('01', 'Petit', '< 50 000 CHF /année'),
                    new OptionCalculatorSubsection('02', 'Moyen', '50K–250K CHF /année'),
                    new OptionCalculatorSubsection('03', 'Grand', '250K–500K CHF /année'),
                    new OptionCalculatorSubsection('04', 'Très grande', '> 500K CHF /année'),
                ),
                // ----------



                // ----------
                new OptionCalculatorSection(
                    2,
                    'Type d’exposition',
                    true
                ).addSubSection(
                    new OptionCalculatorSubsection('01', 'Solo'),
                    new OptionCalculatorSubsection('02', '2 à 6 pers.'),
                    new OptionCalculatorSubsection('03', '7 et plus', ),
                ),
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
                        50,
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

            ] as OptionOrNumberCalculatorSection<OptionCalculatorSection | NumberCalculatorSection>[],
            calculatorData: {
                '1_taille_structure': {
                    title: 'Taille de la structure',
                    type: 'checkbox',
                    value: null,
                    options: {
                        "1_taille_structure_petite": {
                            title: 'Petit',
                        },
                        "1_taille_structure_moyen": {
                            title: 'Moyen',
                        },
                        "1_taille_structure_grand": {
                            title: 'Grand',
                        },
                        "1_taille_structure_large": {
                            title: 'Très grande',
                        },
                    }
                },
                "2_Type_exposition": {
                    title: 'Type d’exposition',
                    type: 'checkbox',
                    value: null,
                    options: {
                        "2_Type_exposition_solo": {
                            title: "Solo",
                        },
                        "2_Type_exposition_2a6": {
                            title: "2 à 6 pers."
                        },
                        "2_Type_exposition_7etPlus": {
                            title: "7 et plus"
                        },
                    },
                },
                "3_Honoraires_participation": {
                    title: 'Honoraires de participation et/ou de conception',
                    type: 'checkbox',
                    value: null,
                    options: {
                        "3_Emploi d_une ou plusieurs oeuvres existantes 1": {title: "Emploi d’une ou plusieurs œuvres existantes"},
                        "3_Emploi d_une ou plusieurs oeuvres existantes 2": {title: "Emploi d’une ou plusieurs œuvres existantes"},
                        "3_Emploi d_une ou plusieurs oeuvres existantes 3": {title: "Emploi d’une ou plusieurs œuvres existantes"},
                    },
                },
                "4_Duree_de_exposition": {
                    type: "number",
                    value: null,
                }
            } as ICalculatorData
        }
    },


})

export type ICalculatorData = {
    [key in calculatorDataKeys]: {
        title: string,
        type: 'checkbox' | 'number',
        options: {
            [key in calculatorDataOptionKey]: calculatorDataOption
        },
        value: calculatorDataOptionKey | null,
    }
}

export type calculatorDataKeys =
      '1_taille_structure'
    | '2_Type_exposition'
    | '3_Honoraires_participation'
    | '4_Duree_de_exposition'
    | '5_Honoraires_de_réalisation'
    | '6_Per_Diem'
    | '7_Honoraires_montage_transport'
    | '8_Forfait_performance'
    | '9_Forfait_texte_1000_frappes'


export interface calculatorDataOption {
    title: string,
    description: string | null,
    info: string | null,
}

export type calculatorDataOptionKey =
      '1_taille_structure_petite'
    | '1_taille_structure_moyen'
    | '1_taille_structure_grand'
    | '1_taille_structure_large'

    | '2_Type_exposition_solo'
    | '2_Type_exposition_2a6'
    | '2_Type_exposition_7etPlus'


    | "3_Emploi d_une ou plusieurs oeuvres existantes 1"
    | "3_Emploi d_une ou plusieurs oeuvres existantes 2"
    | "3_Emploi d_une ou plusieurs oeuvres existantes 3"

