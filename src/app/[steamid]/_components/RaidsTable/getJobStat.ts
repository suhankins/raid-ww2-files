import { type JOB_STATS } from './RaidsTable';
import { type IRaid } from './IJob';
import { type ISteamStats } from '@/lib/ISteamStats';

export default function getJobStat(
    job: IRaid,
    stat: (typeof JOB_STATS)[number],
    stats: ISteamStats
) {
    const getter = statGetters[stat.id];
    return getter(job, stats);
}

const statGetters: {
    [stat in (typeof JOB_STATS)[number]['id']]: (
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
