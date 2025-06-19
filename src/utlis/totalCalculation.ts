import {formatCHF} from "../gloabal/formatCurency";
import type {IGlobalTotal} from "../stores/globalStore";

export function totalWithPercent(globalTotal: IGlobalTotal | {errorMessage: string}, percent: number): string {
    if('errorMessage' in globalTotal) return ''

    const inPercent = globalTotal.IN_finalPercentCalc / 100 * percent

    return formatCHF( inPercent + globalTotal.OUT_ofFinalPercentCalc )
}
