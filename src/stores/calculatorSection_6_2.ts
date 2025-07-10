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
        "nombre de semaines",
    ).setAMultiplier({
        value: 5500/4,
        text: "Base mensuelle brute : CHF 5500.– <br>→ semaine à ",
        status: "info",
        unit: 'CHF',
    }),
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre de jours",
    ).setAMultiplier({
        value: 253.46,
        text: "Base mensuelle brute : CHF 5500.–<br>→ jour à ",
        status: "info",
        unit: 'CHF',
    }),
)
