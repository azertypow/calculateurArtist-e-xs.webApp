import {OptionCalculatorSection, OptionCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_1 = new OptionCalculatorSection(
    {index : 2, title : 'Montant des subventions annuelles fixes', required : true,
        help:`
            <p>Choisir la catégorie par rapport au budget annuel de la structure ou du projet (hors frais fixes de loyer).</p>
            <p>La délimitation des structures et des projets peut être difficile à établir selon les cas de figure. En cas de doute entre deux catégories, il est recommandé de choisir la plus haute.</p>
            
            <p>Si l’exposition ne se déroule pas dans la totalité de la surface de la
                      structure, alors il convient d’appliquer la catégorie d’espace la plus adaptée à la surface
                      spécifique au sein de la structure.</p>
             
            <p>Les quatre catégories proposées sont :</p>
            
            <ul>
                <li>Petite : moins de 50 000 CHF</li>
                <li>Moyenne : entre 50 000 et 250 000 CHF</li>
                <li>Grande : entre 250 000 et 500 000 CHF</li>
                <li>Très grande : supérieure à 500 000 CHF</li>
            </ul>
            
            <p>Il est recommandé aux parties de remplir conjointement le formulaire en ligne.</p>
        `}
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: 'petite', subtitle: '< 50 000 CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: 'moyenne', subtitle: '50K–250K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: 'grande', subtitle: '250K–500K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '04', titre: 'très grande', subtitle: '> 500K CHF /année'}),
)
