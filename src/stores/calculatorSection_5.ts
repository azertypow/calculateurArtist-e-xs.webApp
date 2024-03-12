import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {calculatorSection_1} from "./calculatorSection_1";
import {calculatorSection_2} from "./calculatorSection_2";
import {conditionalLogicSection_4} from "./conditionalLogicSection_4";

export const calculatorSection_5 =                 new NumberCalculatorSection(
    {index : 5, title : "Durée de l’exposition", required : true, info : 'Montant forfaitaire supplémentaire par mois au-delà du premier mois',
        help:`
<p>Les frais liés à la durée correspondent à des frais de location. Ils sont donc progressifs. La durée minimale de ces frais est fixée à un mois. Concernant la progression, arrondir la durée mensuelle à l’unité la plus proche.</p>

<p>Exemples :</p>
 
<ul>
    <li> Exposition de 3 semaines = 1 mois</li>
    <li> Exposition de 9 semaines = 2 mois</li>
</ul>
`},
).addSubSection(
    new NumberCalculatorSubsection(
        '',
        0,
        "mois",
        1,
    ).setAMultiplier(
        {
            value: new ConditionalValueFromSubsectionOption(
                [
                    calculatorSection_1,
                    calculatorSection_2,
                ],
                () => conditionalLogicSection_4(
                    calculatorSection_1,
                    calculatorSection_2,
                ),
            ),
            text: 'Montant forfaitaire supplémentaire par mois au-delà du premier mois: ',
            status: "info",
            unit: "CHF",
            isActiveIfValueGreaterThan: 1
        },
    )
)
