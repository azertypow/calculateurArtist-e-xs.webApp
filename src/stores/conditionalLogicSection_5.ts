import type {OptionCalculatorSection} from "../gloabal/CalculatorSection";

export function conditionalLogicSection_5(
    calculatorSection_1: OptionCalculatorSection,
    calculatorSection_2: OptionCalculatorSection,
): number {

    console.log(calculatorSection_1._value?.uniqueID)

    //-----------------------------------------------------------------
    if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '01'
    ) {
        return 101
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '02'
        && calculatorSection_2._value?.uniqueID   === '01'
    ) {
        return 102
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '03'
        && calculatorSection_2._value?.uniqueID   === '01'
    ) {
        return 103
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '04'
        && calculatorSection_2._value?.uniqueID   === '01'
    ) {
        return 104
    }



    //-----------------------------------------------------------------
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '02'
    ) {
        return 201
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '02'
        && calculatorSection_2._value?.uniqueID   === '02'
    ) {
        return 202
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '03'
        && calculatorSection_2._value?.uniqueID   === '02'
    ) {
        return 203
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '04'
        && calculatorSection_2._value?.uniqueID   === '02'
    ) {
        return 204
    }


    //-----------------------------------------------------------------
    else if(
        calculatorSection_1._value?.uniqueID      === '01'
        && calculatorSection_2._value?.uniqueID   === '03'
    ) {
        return 301
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '02'
        && calculatorSection_2._value?.uniqueID   === '03'
    ) {
        return 302
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '03'
        && calculatorSection_2._value?.uniqueID   === '03'
    ) {
        return 303
    }
    else if(
        calculatorSection_1._value?.uniqueID      === '04'
        && calculatorSection_2._value?.uniqueID   === '03'
    ) {
        return 304
    }

    return 0
}