export function calculatePercentageChange(currentValue: number, previousValue: number): number {
    return +(((currentValue - previousValue) / previousValue) * 100).toFixed(2);
}