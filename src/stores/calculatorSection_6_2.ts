import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {calculatorSection_1} from "./calculatorSection_1";
import {conditionalLogicSection_8} from "./conditionalLogicSection_8";
import {conditionalLogicSection_8_sans} from "./conditionalLogicSection_8_sans";

export const calculatorSection_6_2 =                 new NumberCalculatorSection(
    {
        index : 6,
        title : "Honoraires de réalisation",
        help: ``
    },
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre de semaine·s",
    ).setAMultiplier({
        value: 5500/4,
        text: "Sur base mensuelle de 5000, semaine·s à ",
        status: "info",
        unit: 'CHF',
    }),
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre de jour·s",
    ).setAMultiplier({
        value: 5500/21.7,
        text: "Sur base mensuelle de 5000, jour·s à ",
        status: "info",
        unit: 'CHF',
    }),
)
