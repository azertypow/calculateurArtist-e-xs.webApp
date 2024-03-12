import {NumberCalculatorSection, NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_6 = new NumberCalculatorSection(
    {index : 6, title : 'Honoraires de réalisation',
        help:`
<p>Option 1 : Si la ou les œuvres sont produites par l’artiste&nbsp;: 
<ul>
    <li> Soit définir en amont un nombre d’heures nécessaires à la réalisation du travail ainsi que son coût horaire. Conformément aux directives de Visarte Suisse, et selon la loi genevoise (salaire minimum de 24&nbsp;CHF pour les salarié·e·x·s), le montant horaire ne peut être inférieur à 90&nbsp;CHF pour les indépendant·e·x·s. <span style="color: red">contenu plus générique ici</span></li>
    <li> Soit définir en amont un montant forfaitaire </li>
</ul>

<p>Option 2 : Si la ou les œuvres sont produites par l’artiste + une autre personne morale ou physique&nbsp;:  
<ul>
<li> La structure rémunère elle-même l’intervenant·e·x·s externe et cela n’apparaît pas dans les calculs ci-dessous. Pour la rémunération de l’artiste, se référer à l'option&nbsp;1</li>
<li> L’artiste rémunère les personnes morales ou physiques employées pour la réalisation de ses pièces. Envisager dans ce cas un forfait.</li>
</ul>

<p>Option 3 : Si la ou les œuvres ne sont pas produites par l’artiste, le coût de production n'entre pas dans le calcul des honoraires de l’artiste et n'apparaît donc pas dans ce calculateur.</p>

<p>Dans tous les cas, ces décisions doivent se prendre en accord avec la structure. </p>
`},
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre d’heures",
        0,
        "heures",
    ).setAMultiplier({
        text: 'Coût horaire',
        isEditable: true,
        unit: 'CHF',
        value: 0,
    })
).addSubSection(
    new NumberCalculatorSubsection(
        'Et/ou forfait de réalisation',
        0,
        "CHF",
    )
)
