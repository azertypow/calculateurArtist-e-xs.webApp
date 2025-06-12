import {NumberCalculatorSection, NumberCalculatorSubsection} from "../gloabal/CalculatorSection";

export const calculatorSection_8 = new NumberCalculatorSection(
    {
        index : 8,
        title : 'Montage et transport',
        required : false,
        info : "recommandation de 60 CHF/h, minimum 23 CHF/h",
        help:`
                            <p>
                              Attention : 
                              <br>→ Pour les indépendant·e·x·s, Visarte recommande un tarif horaire de 60 CHF minimum et de 300 CHF brut par jour minimum pour les salarié·e·x·s. 
                              <br>→ À Genève, le salaire minimum horaire est de 24,48 CHF en 2025. Cela représente un coût total employeur de 28.23 CHF.
                            </p>
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
