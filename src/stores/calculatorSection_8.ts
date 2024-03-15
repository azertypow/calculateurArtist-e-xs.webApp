import {NumberCalculatorSection, NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_8 = new NumberCalculatorSection(
    {
        index : 8,
        title : 'Montage et transport',
        required : false,
        info : "recommandation de 60 CHF/h, minimum 23 CHF/h",
        help:`
                            <p>Lorsque l’artiste se charge du montage et/ou du transport de ses pièces&nbsp;:</p>
                             
                            <p>
                                → soit compléter par le nombre d’heures estimées
                                <br>OU
                                <br>→ soit définir un forfait
                            </p>
                            
                            <p>Ces décisions se prennent en accord avec la structure.</p>
                        `
    },
).addSubSection(
    new NumberCalculatorSubsection(
        'nombre d’heures',
        0,
    ).setAMultiplier({
        value: 0,
        text: 'Coût horaire',
        isEditable: true,
        unit: 'CHF',
    })
).addSubSection(
    new NumberCalculatorSubsection(
        'Et/ou forfait',
        0,
        "CHF",
        0,
    )
)
