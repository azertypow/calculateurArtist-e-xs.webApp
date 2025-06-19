import {formatCHF} from "../gloabal/formatCurency";
import type {IGlobalTotal} from "../stores/globalStore";

export function totalWithPercent(globalTotal: IGlobalTotal | {errorMessage: string}, percent: number): string {
    if('errorMessage' in globalTotal) return ''

    const inPercent = globalTotal.IN_finalPercentCalc * (percent / 100)

    return formatCHF( inPercent + globalTotal.OUT_ofFinalPercentCalc )
}
