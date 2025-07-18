import {formatCHF} from "../gloabal/formatCurency";
import type {IGlobalTotal} from "../stores/globalStore";
import type {
    NumberCalculatorSection,
    NumberCalculatorSubsection,
    OptionCalculatorSection,
    OptionCalculatorSubsection
} from "../gloabal/CalculatorSection";

export function totalWithPercent(globalTotal: IGlobalTotal | {errorMessage: string}, percent: number): string {
    if('errorMessage' in globalTotal) return ''

    const inPercent = globalTotal.IN_finalPercentCalc * (percent / 100)

    return formatCHF( inPercent + globalTotal.OUT_ofFinalPercentCalc )
}

export function calculateTotalResultOfSubsections(section: OptionCalculatorSection | NumberCalculatorSection): number {
    return (section.subSections as (OptionCalculatorSubsection | NumberCalculatorSubsection)[])
        .reduce( (acc: number, subSection: OptionCalculatorSubsection | NumberCalculatorSubsection) => acc + subSection.result, 0)
}

