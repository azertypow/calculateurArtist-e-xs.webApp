import { defineStore } from 'pinia'

export interface IStateContractStore {
    contract: "d\'exposition" | 'présentation publique'
    with_production: boolean
    structure_name: string
    structure_street: string
    structure_number: number
    structure_city: string
    structure_country: string

    user_firstname: string
    user_name: string
    user_status: string

    info_date: string,
}

export const useContractStore = defineStore('contractStore', {
    state: function () {
        return {
            contract: "d\'exposition",
            with_production: true,
            structure_name: '',
            structure_street: '',
            structure_number: NaN,
            structure_city: '',
            structure_country: '',
            user_firstname: '',
            user_name: '',
            user_status: '',
            info_date: '',
        } satisfies IStateContractStore
    },
})
