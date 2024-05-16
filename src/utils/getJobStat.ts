import { type IRaid, type IJob } from '@/lib/IJob';
import { type ISteamStats } from '@/lib/ISteamStats';
import { type JobStats } from '@/lib/JobStats';

export default function getJobStat(
    job: IJob,
    stat: (typeof JobStats)[number],
    stats: ISteamStats
) {
    const getter = statGetters[stat.id];
    if (job.type === 'raid') {
        return getter(job, stats);
    }
    return job.parts.reduce((starts, raid) => starts + getter(raid, stats), 0);
}

const statGetters: {
    [stat in (typeof JobStats)[number]['id']]: (
        raid: IRaid,
        stats: ISteamStats
    ) => number;
} = {
    completions: (raid, stats) =>
        (stats[`${raid.id}_victory`] ||
            stats[`${raid.id}_completed`] ||
            stats[`${raid.id}_quit`]) ??
        0,
    time: (raid, stats) => stats[`${raid.id}_time`] ?? 0,
    starts: (raid, stats) =>
        (stats[`${raid.id}_started`] ?? 0) + (stats[`${raid.id}_drop_in`] ?? 0),
};
