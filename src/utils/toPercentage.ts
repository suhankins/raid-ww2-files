export default function toPercentage(value: number): string {
    return `${(value * 100).toFixed(1)}%`;
}
