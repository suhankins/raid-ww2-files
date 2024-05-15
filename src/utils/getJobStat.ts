import { type IRaid, type IJob } from '@/lib/IJob';
import { type IRaidStat } from '@/lib/IRaidStat';
import { type ISteamStats } from '@/lib/ISteamStats';

export default function getJobStat(
    job: IJob,
    stat: IRaidStat,
    stats: ISteamStats
) {
    const getter = statGetters[stat];
    if ('id' in job) {
        return getter(job, stats);
    }
    return job.parts.reduce((starts, raid) => starts + getter(raid, stats), 0);
}

const statGetters: {
    [stat in IRaidStat]: (raid: IRaid, stats: ISteamStats) => number;
} = {
    Completions: (raid, stats) =>
        (stats[`${raid.id}_victory`] || stats[`${raid.id}_completed`]) ?? 0,
    Time: (raid, stats) => stats[`${raid.id}_time`] ?? 0,
    Starts: (raid, stats) =>
        (stats[`${raid.id}_started`] ?? 0) + (stats[`${raid.id}_drop_in`] ?? 0),
};
