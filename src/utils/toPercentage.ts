/**
 * @param value number between 0 and 1
 */
export default function toPercentage(value: number): string {
    return `${(value * 100).toFixed(1)}%`;
}
