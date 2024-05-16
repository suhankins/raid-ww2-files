import { type IJob } from '@/lib/IJob';
import { type IJobStat } from '@/lib/IRaidStat';
import { type ISteamStats } from '@/lib/ISteamStats';
import getJobStat from '@/utils/getJobStat';
import { useMemo } from 'react';

export default function useTotalAndHighestStat(
    jobs: IJob[],
    selectedStat: IJobStat,
    stats: ISteamStats
) {
    const total = useMemo(
        () =>
            jobs.reduce(
                (total, job) => total + getJobStat(job, selectedStat, stats),
                0
            ),
        [jobs, selectedStat, stats]
    );

    const highest = useMemo(
        () =>
            jobs.reduce(
                (highest, job) =>
                    Math.max(highest, getJobStat(job, selectedStat, stats)),
                0
            ),
        [jobs, selectedStat, stats]
    );

    return {
        total,
        highest,
    };
}
