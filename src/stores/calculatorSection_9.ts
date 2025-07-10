import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {calculatorSection_1} from "./calculatorSection_1";
import {conditionalLogicSection_8} from "./conditionalLogicSection_8";
import {conditionalLogicSection_8_sans} from "./conditionalLogicSection_8_sans";

export const calculatorSection_9 =                 new NumberCalculatorSection(
    {index : 8, title : "Événements",
        help: `
<ul>
<li>Événement avec préparation : présentation publique nécessitant un temps de préparation.
<br>Exemples : lecture, conférence, workshop, modération de rencontre, etc.</br>
<li>Événement sans préparation : présentation publique ne nécessitant pas de temps de préparation.
<br>Exemples : présence lors de visite guidée, projection en présence de l’artiste, etc.</br>
</ul>
`},
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre d’occurences",
    ).setAMultiplier({
        value: new ConditionalValueFromSubsectionOption([
            calculatorSection_1,
        ], () => conditionalLogicSection_8(calculatorSection_1)),
        text: "Événement avec préparation",
        unit: 'CHF',
    }),
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre d’occurences",
    ).setAMultiplier({
        value: new ConditionalValueFromSubsectionOption([
            calculatorSection_1,
        ], () => conditionalLogicSection_8_sans(calculatorSection_1)),
        text: "Événement sans préparation",
        unit: 'CHF',
    }),
)
