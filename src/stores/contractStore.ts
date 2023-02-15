import { defineStore } from 'pinia'

export interface IStateContractStore {
    contract_exposition: boolean
    contract_public: boolean

    work_price: string

    with_production: boolean
    structure_name: string
    structure_street: string
    structure_number: string
    structure_city: string
    structure_country: string

    user_firstname: string
    user_name: string
    user_status: string


    artiste_structureType: 'artistSolo'|'collectif'
    artiste_name: string
    artiste_nationality: string
    artiste_birth: string
    artiste_mail: string
    artiste_postal: string
    artiste_mobileNumber: string
    artiste_gallery: string

    info_date: string,
    info_localisation: string,

    entitled: string

    option_honoraryAchievement: boolean
    option_materials: boolean
    option_perDiem: boolean
    option_dailyTax: boolean
    option_transportation: boolean
    option_editors: boolean
    option_toBeCompletedIfNecessary: boolean
    option_toBeCompletedIfNecessary_content: string

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
            user_firstname: '',
            user_name: '',
            user_status: '',

            work_price: '',

            artiste_structureType: 'artistSolo',
            artiste_postal: '',
            artiste_mobileNumber: '',
            artiste_gallery: '',
            artiste_name: '',
            artiste_birth: '',
            artiste_mail: '',
            artiste_nationality: '',

            info_date: '',
            info_localisation: '',
            entitled: '',
            option_honoraryAchievement: false,
            option_materials: false,
            option_perDiem: false,
            option_dailyTax: false,
            option_transportation: false,
            option_editors: false,
            option_toBeCompletedIfNecessary: false,
            option_toBeCompletedIfNecessary_content: '',
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
