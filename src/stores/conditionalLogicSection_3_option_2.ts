import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_3_option_2(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
) {
    switch (calculatorSection_1._value?.uniqueID) {
        case '01':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 750
                case '02':
                    return 375
                case '03':
                    return 150
            }
            break
        case '02':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 1_500
                case '02':
                    return 750
                case '03':
                    return 300
            }
            break
        case '03':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 4_500
                case '02':
                    return 2_250
                case '03':
                    return 900
            }
            break
        case '04':
            switch (calculatorSection_2._value?.uniqueID) {
                case '01':
                    return 7_500
                case '02':
                    return 3_750
                case '03':
                    return 1_500
            }
            break
    }
    return NaN
}