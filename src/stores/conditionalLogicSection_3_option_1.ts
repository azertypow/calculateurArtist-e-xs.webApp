import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_3_option_1(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
) {
    switch (calculatorSection_1._value?.uniqueID) {
        case '01':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 500
                case '02':
                    return 250
                case '03':
                    return 100
            }
            break
        case '02':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 1_000
                case '02':
                    return 500
                case '03':
                    return 200
            }
            break
        case '03':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 3_000
                case '02':
                    return 1_500
                case '03':
                    return 600
            }
            break
        case '04':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 5_000
                case '02':
                    return 2_500
                case '03':
                    return 1_000
            }
            break
    }
    return NaN
}