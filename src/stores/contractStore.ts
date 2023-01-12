import { defineStore } from 'pinia'

export interface IStateContractStore {
    contract_exposition: boolean
    contract_public: boolean
    with_production: boolean
    structure_name: string
    structure_street: string
    structure_number: string
    structure_city: string
    structure_country: string

    user_firstname: string
    user_name: string
    user_status: string

    info_date: string,
    info_localisation: string,
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
            info_date: '',
            info_localisation: '',
        } satisfies IStateContractStore
    },
})
