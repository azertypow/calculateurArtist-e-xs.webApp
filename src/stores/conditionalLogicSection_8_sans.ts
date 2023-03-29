import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_8_sans(
    calculatorSection_1: OptionCalculatorSection,
): number {
    switch (calculatorSection_1._value?.uniqueID) {
        case "01":
            return 125
        case "02":
            return 250
        case "03":
            return 375
        case "04":
            return 500
    }
    return 0
}
