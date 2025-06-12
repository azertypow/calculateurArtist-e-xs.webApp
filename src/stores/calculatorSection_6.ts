import {NumberCalculatorSection, NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_6 = new NumberCalculatorSection(
    {index : 6, title : 'Honoraires de réalisation',
        help:`
        <p>Comment déterminer la rémunération de l’artiste pour la réalisation de l'œuvre ?
        <br>→ Définir le nombre de jours ou de semaines nécessaires à la réalisation du travail ainsi que son tarif horaire.
        </p>
        <p>
        Attention :
        
        <br>Dans tous les cas, ces décisions doivent se prendre en amont et en accord entre l’artiste et la structure.
        Si l'œuvre n’est pas réalisée directement par l’artiste (réalisation par un tiers), les coûts de production n'entrent pas dans le calcul de l’honoraire de l’artiste et n'apparaissent donc pas dans ce calculateur.
         </p>
        `},
).addSubSection(
    new NumberCalculatorSubsection(
        "nombre d’heures",
        0,
        "heures",
    ).setAMultiplier({
        text: 'Base Mensuelle:',
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
