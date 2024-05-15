export default function formatJobStat(
    value: number,
    percentageOfTotal: string
): string {
    if (value === 0) {
        return 'Unknown';
    } else {
        return percentageOfTotal;
    }
}
