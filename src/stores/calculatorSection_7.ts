import {NumberCalculatorSection, NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_7 = new NumberCalculatorSection(
    {index : 7, title : 'Per diem',
        help:`
<p>Les per diems ne sont pas considérés comme du salaire, et ne sont pas soumis aux cotisations sociales.</p>

<p>Indemnité forfaitaire visant à dédommager l’artiste pour ses frais de repas et de déplacement lors du montage de l'exposition par exemple.</p>

<p>Le nombre de jours se détermine en accord avec la structure.</p>
`},
).addSubSection(
    new NumberCalculatorSubsection(
        "Nombre de jours",
        0,
        'jours',
    ).setAMultiplier({
        value: 50,
        text: 'Montant du per diem: ',
        unit: 'CHF',
        status: 'info',
    }),
)
