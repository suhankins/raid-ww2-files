/**
 * @param value number between 0 and 1
 * @param precision
 * @example toPercentage(0.73638, 1) // "73.6%"
 */
export default function toPercentage(
    value: number,
    precision: number = 1
): string {
    if (isNaN(value)) {
        value = 0;
    }
    return `${(value * 100).toFixed(precision)}%`;
}
