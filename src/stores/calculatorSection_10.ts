import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {calculatorSection_1} from "./calculatorSection_1";
import {conditionalLogicSection_9} from "./conditionalLogicSection_9";

export const calculatorSection_10 =                 new NumberCalculatorSection(
    {index : 9, title : "Texte", required : false, info : 'source?',
        help:`<p>Les textes commandés par la structure à l’artiste sont rémunérés par 1000 frappes (espaces compris). Le coût forfaitaire par 1000 frappes est calculé automatiquement selon la taille de la structure d’accueil. La longueur du texte final est arrondie au millier de frappes le plus proche.</p>
<ul>Exemples : 
<li>Si le texte produit contient 1312 caractères espaces compris, compter 1 occurence.</li>
<li>Si le texte produit contient 29’979 caractères espaces compris, compter 30 occurences.</li>
</ul>
`}
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre d’occurrences",
    ).setAMultiplier(
        {
            value: new ConditionalValueFromSubsectionOption([
                calculatorSection_1,
            ], () => conditionalLogicSection_9(calculatorSection_1)),
            text: "Coût forfait texte / 1000 frappes",
            unit: "CHF"
        }
    ),
)
