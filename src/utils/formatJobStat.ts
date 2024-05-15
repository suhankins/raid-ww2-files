import { IRaidStat } from '@/lib/IRaidStat';

export default function formatJobStat(
    value: number,
    percentageOfTotal: string,
    stat: IRaidStat
): string {
    if (value === 0) {
        return 'Unknown';
    }
    switch (stat) {
        case 'Time':
            return `${(value / 3600000).toFixed(1)} hours`;
        default:
            return percentageOfTotal;
    }
}
