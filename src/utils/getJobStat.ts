import { type IRaid, type IJob } from '@/lib/IJob';
import { type IJobStat } from '@/lib/IRaidStat';
import { type ISteamStats } from '@/lib/ISteamStats';

export default function getJobStat(
    job: IJob,
    stat: IJobStat,
    stats: ISteamStats
) {
    const getter = statGetters[stat];
    if (job.type === 'raid') {
        return getter(job, stats);
    }
    return job.parts.reduce((starts, raid) => starts + getter(raid, stats), 0);
}

const statGetters: {
    [stat in IJobStat]: (raid: IRaid, stats: ISteamStats) => number;
} = {
    Completions: (raid, stats) =>
        (stats[`${raid.id}_victory`] ||
            stats[`${raid.id}_completed`] ||
            stats[`${raid.id}_quit`]) ??
        0,
    Time: (raid, stats) => stats[`${raid.id}_time`] ?? 0,
    Starts: (raid, stats) =>
        (stats[`${raid.id}_started`] ?? 0) + (stats[`${raid.id}_drop_in`] ?? 0),
};
