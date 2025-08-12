import { getSeed } from '@/utils/DieselRandom';
import { getDailyJob } from '@/utils/generateDailyJob';
import { numberToIsoDate } from '@/utils/numberToIsoDate';

const from = new Date('2025-06-26');
const to = new Date('2025-08-11');

const list: { [date: string]: ReturnType<typeof getDailyJob> } = {};

for (
    let currentDate = from;
    currentDate <= to;
    currentDate = new Date(1000 * 60 * 60 * 24 + +currentDate)
) {
    list[numberToIsoDate(currentDate)] = getDailyJob(getSeed(currentDate));
}

console.log(list);
