import {OptionCalculatorSection, OptionCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_2 = new OptionCalculatorSection(
    {index : 3, title : 'Exposant·e·x·s', required : true,
            help:`
<p>Choisir l'une des options par rapport au nombre d’artistes invité·e·x·s à exposer. 
</br>Un collectif d’artistes est considéré dans ce décompte comme une personne.</p>
`}
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: '1 artiste'}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: '2 à 6 artistes'}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: '7 artistes ou plus'}, ),
)
