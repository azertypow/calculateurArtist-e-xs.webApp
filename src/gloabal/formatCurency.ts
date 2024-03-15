export function formatCHF(value: number): string {
    return value.toLocaleString('fr-CH', {
        style: 'currency',
        currency: 'CHF',
    })
        .replace('.00', '.—')
        .replace('CHF', '')
}
