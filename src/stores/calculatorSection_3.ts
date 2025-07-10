import {
    ConditionalValueFromSubsectionOption,
    OptionCalculatorSection,
    OptionCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {conditionalLogicSection_3_option_1} from "./conditionalLogicSection_3_option_1";
import {conditionalLogicSection_3_option_2} from "./conditionalLogicSection_3_option_2";
import {conditionalLogicSection_3_option_3} from "./conditionalLogicSection_3_option_3";
import {calculatorSection_1} from "./calculatorSection_1";
import {calculatorSection_2} from "./calculatorSection_2";

export const calculatorSection_3 = new OptionCalculatorSection(
    {index : 4, title : 'Œuvres', required : true,
        help:`
<p>
Préciser la nature des œuvres présentées pour l’exposition. Si différentes œuvres entrent dans différentes catégories, choisir l'option la plus avantageuse pour l’artiste.
</p>

<p>Exemple : Si une exposition regroupe des œuvres déjà existantes ainsi que de nouvelles créations, alors c’est la catégorie «conception d'une ou plusieurs nouvelles œuvres» qui est appliquée.</p>
`}
).addSubSection(
    new OptionCalculatorSubsection({
        uniqueID: '01',
        titre: 'œuvre(s) existante(s)',
        subtitle: undefined,
        subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
            [
                calculatorSection_1,
                calculatorSection_2,
            ],
            () => conditionalLogicSection_3_option_1(calculatorSection_1, calculatorSection_2),
            0,
        ),
    }),
    new OptionCalculatorSubsection(
        {
            uniqueID: '02',
            titre: 'adaptation d’œuvre(s) existante(s)',
            subtitle: undefined,
            subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                [
                    calculatorSection_1,
                    calculatorSection_2,
                ],
                () => conditionalLogicSection_3_option_2(calculatorSection_1, calculatorSection_2),
                0,
            )
        },
    ),
    new OptionCalculatorSubsection(
        {
            uniqueID: '03',
            titre: 'conception de nouvelle(s) œuvre(s)',
            subtitle: undefined,
            subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                [
                    calculatorSection_1,
                    calculatorSection_2,
                ],
                () => conditionalLogicSection_3_option_3(calculatorSection_1, calculatorSection_2),
                0,
            )

        },
    ),
)
