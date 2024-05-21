/**
 * @param value number between 0 and 1
 */
export default function toPercentage(
    value: number,
    precision: number = 1
): string {
    return `${(value * 100).toFixed(precision)}%`;
}
