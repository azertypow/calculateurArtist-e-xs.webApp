import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_9(
    calculatorSection_1: OptionCalculatorSection,
): number {
    switch (calculatorSection_1._value?.uniqueID) {
        case "01":
            return 80
        case "02":
            return 90
        case "03":
            return 100
        case "04":
            return 100
    }
    return 0
}
