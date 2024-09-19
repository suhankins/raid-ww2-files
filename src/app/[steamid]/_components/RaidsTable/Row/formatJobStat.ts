import prettifyNumber from '@/utils/prettifyNumber';
import { type JOB_STATS } from '../RaidsTable';

const MINUTE = 60;
const HOUR = MINUTE * 60;
const PRECISION = 1;

function formatAbsoluteNumber(number: number) {
    return number.toFixed(1);
}

function formatMultipleString(string: string, number: number) {
    return `${string}${formatAbsoluteNumber(number) !== '1.0' ? 's' : ''}`;
}

export default function formatJobStat(
    selectedStat: (typeof JOB_STATS)[number],
    value: number
): string {
    switch (selectedStat.id) {
        case 'completions':
        case 'starts':
            return `${prettifyNumber(value)} ${formatMultipleString('time', value)}`;
        case 'time':
            if (value < MINUTE) {
                return `${value} ${formatMultipleString('second', value)}`;
            }
            if (value < HOUR) {
                const minutes = value / MINUTE;
                return `${formatAbsoluteNumber(minutes)} ${formatMultipleString('minute', minutes)}`;
            }
            const hours = value / HOUR;
            return `${formatAbsoluteNumber(hours)} ${formatMultipleString('hour', hours)}`;
    }
}
