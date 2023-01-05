import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_3_option_3(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
) {
    switch (calculatorSection_1._value?.uniqueID) {
        case '01':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 1_000
                case '02':
                    return 500
                case '03':
                    return 200
            }
            break
        case '02':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 2_000
                case '02':
                    return 1_000
                case '03':
                    return 400
            }
            break
        case '03':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 6_000
                case '02':
                    return 3_000
                case '03':
                    return 1_200
            }
            break
        case '04':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 10_000
                case '02':
                    return 5_000
                case '03':
                    return 2_000
            }
            break
    }
    return NaN
}