import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_4(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
): number {

    switch (calculatorSection_1._value?.uniqueID) {
        case "01":
            switch (calculatorSection_2._value?.uniqueID) {
                case "01": return 125
                case "02": return 62.5
                case "03": return 25
            }
            break;
        case "02":
            switch (calculatorSection_2._value?.uniqueID) {
                case "01": return 250
                case "02": return 125
                case "03": return 50
            }
            break;
        case "03":
            switch (calculatorSection_2._value?.uniqueID) {
                case "01": return 750
                case "02": return 375
                case "03": return 150
            }
            break;
        case "04":
            switch (calculatorSection_2._value?.uniqueID) {
                case "01": return 1250
                case "02": return 625
                case "03": return 250
            }
            break;
    }

    return 0
}