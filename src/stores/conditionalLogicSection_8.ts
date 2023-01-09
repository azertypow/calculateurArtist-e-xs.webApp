import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_8(
    calculatorSection_1: OptionCalculatorSection,
): number {
    switch (calculatorSection_1._value?.uniqueID) {
        case "01":
            return 250
        case "02":
            return 500
        case "03":
            return 750
        case "04":
            return 1_000
    }
    return 0
}