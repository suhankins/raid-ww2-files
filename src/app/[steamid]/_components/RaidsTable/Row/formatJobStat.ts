import prettifyNumber from '@/utils/prettifyNumber';
import { type JOB_STATS } from '../RaidsTable';
import formatAbsoluteNumber from '@/utils/formatAbsoluteNumber';
import formatPluralString from '@/utils/formatPluralString';

const MINUTE = 60;
const HOUR = MINUTE * 60;

export default function formatJobStat(
    selectedStat: (typeof JOB_STATS)[number],
    value: number
): string {
    switch (selectedStat.id) {
        case 'completions':
        case 'starts':
            return `${prettifyNumber(value)} ${formatPluralString('time', value)}`;
        case 'time':
            if (value === 0) {
                return 'Unknown';
            }
            if (value < MINUTE) {
                return `${value} ${formatPluralString('second', value)}`;
            }
            if (value < HOUR) {
                const minutes = value / MINUTE;
                return `${formatAbsoluteNumber(minutes)} ${formatPluralString('minute', minutes)}`;
            }
            const hours = value / HOUR;
            return `${formatAbsoluteNumber(hours)} ${formatPluralString('hour', hours)}`;
    }
}
