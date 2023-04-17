import { defineStore } from 'pinia'

export interface IStateContractStore {
    contract_exposition: boolean
    contract_public: boolean

    work_price: string

    with_production: boolean

    exposition_name: string

    structure_name: string
    structure_street: string
    structure_number: string
    structure_city: string
    structure_country: string
    structure_reclamationDelay: string

    artiste_hasCommission: boolean
    commission_percent: string

    struct_representant_firstname: string
    struct_representant_name: string
    struct_representant_status: string


    participationAuFrais_rembourser:  '' | 'rembourse à l’Artiste les dépenses nécessaires' | 'A titre de participation aux frais occasionnés'

    artiste_angagementPretEtRedaction: "prêter son concours" | "rédiger les textes décrivant sa démarche artistique"

    artiste_renumerationPercent: string
    artiste_structureType: 'artistSolo'|'collectif'
    artiste_firstname: string
    artiste_name: string
    artiste_nationality: string
    artiste_birth: string
    artiste_mail: string
    artiste_postal: string
    artiste_mobileNumber: string
    artiste_gallery: string

    clef_de_repartition: string

    option_chargeBudgetDeProd: 'artiste' | 'structure' | 'clef_de_repartition'

    info_date_expo_from: string,
    info_date_expo_to: string,
    info_date_delay: string,
    info_date_sign_contract: string,
    info_localisation: string,

    entitled: string

    option_honoraryAchievement: boolean
    option_materials: boolean
    option_perDiem: boolean
    option_dailyTax: boolean
    option_transportation: boolean
    option_editors: boolean

    option_indemnisation_remunerePourLExpo: boolean
    option_indemnisation_conceptionEtAdaptation: boolean
    option_indemnisation_verseUneSomme: boolean

    option_indemnisationCalculHeure: boolean
    option_expositionEtVente: boolean
    option_participationPrixDeVente: boolean

    option_structureContributionForTheProduction: {
        byParticipation: boolean
        remuneration: boolean
    }

    option_arrayOf_toBeCompletedIfNecessary: {
        option_toBeCompletedIfNecessary: boolean
        option_toBeCompletedIfNecessary_content: string
    }[]

    objectList: {
        year: string
        dimensions: string
        material: string
        assurance: string
    }[]
}

export const useContractStore = defineStore('contractStore', {
    state: function () {
        return {
            contract_exposition: false,
            contract_public: false,
            with_production: true,
            structure_name: '',
            structure_street: '',
            structure_number: '',
            structure_city: '',
            structure_country: '',
            structure_reclamationDelay: '',
            struct_representant_firstname: '',
            struct_representant_name: '',
            struct_representant_status: '',

            exposition_name: '',

            work_price: '',

            artiste_renumerationPercent: '',
            artiste_structureType: 'artistSolo',
            artiste_postal: '',
            artiste_mobileNumber: '',
            artiste_gallery: '',
            artiste_name: '',
            artiste_firstname: '',
            artiste_birth: '',
            artiste_mail: '',
            artiste_nationality: '',

            clef_de_repartition: '',

            option_chargeBudgetDeProd: "structure",

            artiste_hasCommission: true,
            commission_percent: '',

            participationAuFrais_rembourser: '',

            artiste_angagementPretEtRedaction: "prêter son concours",

            info_date_expo_from: '',
            info_date_expo_to: '',
            info_date_delay: '',
            info_date_sign_contract: '',

            info_localisation: '',
            entitled: '',
            option_honoraryAchievement: false,
            option_materials: false,
            option_perDiem: false,
            option_dailyTax: false,
            option_transportation: false,
            option_editors: false,
            option_indemnisation_remunerePourLExpo: false,
            option_indemnisation_conceptionEtAdaptation: false,
            option_indemnisation_verseUneSomme: false,

            option_indemnisationCalculHeure: false,
            option_expositionEtVente: false,
            option_participationPrixDeVente: false,

            option_structureContributionForTheProduction: {
                byParticipation: false,
                remuneration: false,
            },

            option_arrayOf_toBeCompletedIfNecessary: [
                {
                    option_toBeCompletedIfNecessary: false,
                    option_toBeCompletedIfNecessary_content: '',
                }
            ],

            objectList: [
                {
                    year: '',
                    dimensions: '',
                    material: '',
                    assurance: '',
                }
            ]
        } satisfies IStateContractStore
    },
})
