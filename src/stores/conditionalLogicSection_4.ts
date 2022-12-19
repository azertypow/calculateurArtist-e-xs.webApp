import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_4(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
    calculatorSection_3: OptionCalculatorSection,
): number {

    //-----------------------------------------------------------------
    if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '01'
        && calculatorSection_3._value?.uniqueID   === '01'
    ) {
        return 125 //par mois supplémentaire
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '01'
        && calculatorSection_3._value?.uniqueID   === '02'
    ) {
        return 125
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '01'
        && calculatorSection_3._value?.uniqueID   === '03'
    ) {
        return 125
    }


    //-----------------------------------------------------------------
    if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '02'
        && calculatorSection_3._value?.uniqueID   === '01'
    ) {
        return 62.5 //par mois supplémentaire
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '02'
        && calculatorSection_3._value?.uniqueID   === '02'
    ) {
        return 62.5
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '02'
        && calculatorSection_3._value?.uniqueID   === '03'
    ) {
        return 62.5
    }


    //-----------------------------------------------------------------
    if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '03'
        && calculatorSection_3._value?.uniqueID   === '01'
    ) {
        return 25 //par mois supplémentaire
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '03'
        && calculatorSection_3._value?.uniqueID   === '02'
    ) {
        return 25
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '03'
        && calculatorSection_3._value?.uniqueID   === '03'
    ) {
        return 25
    }


    //-----------------------------------------------------------------
    if(
        calculatorSection_1._value?.uniqueID      === '02'
        && calculatorSection_2._value?.uniqueID   === '01'
        && calculatorSection_3._value?.uniqueID   === '01'
    ) {
        return 25 //par mois supplémentaire
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '02'
        && calculatorSection_2._value?.uniqueID   === '01'
        && calculatorSection_3._value?.uniqueID   === '02'
    ) {
        return 25
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '02'
        && calculatorSection_2._value?.uniqueID   === '01'
        && calculatorSection_3._value?.uniqueID   === '03'
    ) {
        return 25
    }


    return 0
}
