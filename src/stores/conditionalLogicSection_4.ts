import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_4(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
): number {

    if(
            calculatorSection_1._value?.uniqueID    === "01"
        &&  calculatorSection_2._value?.uniqueID    === "01"
    )   return 250

    if(
        calculatorSection_1._value?.uniqueID        === "01"
        &&  calculatorSection_2._value?.uniqueID    === "01"
    )   return 250

    if(
        calculatorSection_1._value?.uniqueID        === "03"
        &&  calculatorSection_2._value?.uniqueID    === "01"
    )   return 250

    return 0
}