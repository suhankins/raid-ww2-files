import { type IRaid, type IJob } from '@/lib/IJob';
import { type ISteamStats } from '@/lib/ISteamStats';

export default function getJobStat(
    job: IJob,
    stat: 'Completions' | 'Time',
    stats: ISteamStats
) {
    const getter = stat === 'Time' ? getRaidTime : getRaidStarts;
    if ('id' in job) {
        return getter(job, stats);
    }
    return job.parts.reduce((starts, raid) => starts + getter(raid, stats), 0);
}

function getRaidTime(raid: IRaid, stats: ISteamStats) {
    return stats[`${raid.id}_time`] ?? 0;
}

function getRaidStarts(raid: IRaid, stats: ISteamStats) {
    return (stats[`${raid.id}_victory`] || stats[`${raid.id}_completed`]) ?? 0;
}
