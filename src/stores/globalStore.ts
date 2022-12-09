import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', {
    state() {
        return {
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

