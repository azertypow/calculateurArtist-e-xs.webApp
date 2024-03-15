import {NumberCalculatorSection, NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_6 = new NumberCalculatorSection(
    {index : 6, title : 'Honoraires de réalisation',
        help:`
        <p>Comment déterminer la rémunération de l’artiste pour la réalisation de l'œuvre ?</p>
        <p>
        → Définir un nombre d’heures nécessaires à la réalisation du travail ainsi que son tarif horaire. 
        <br>OU
        <br>→ Définir un montant forfaitaire.
        <p>
        Attention : 
        </p>
        <ul>
        <li>Dans tous les cas, ces décisions doivent se prendre en amont et en accord entre l’artiste et la structure.</li>
        <li>Si l'œuvre n’est pas réalisée directement par l’artiste (réalisation par un tiers), les coûts de production n'entrent pas dans le calcul de l’honoraire de l’artiste et n'apparaissent donc pas dans ce calculateur.</li>
        </ul>

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
