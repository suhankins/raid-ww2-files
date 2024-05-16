import { type IJob } from '@/lib/IJob';
import { type ISteamStats } from '@/lib/ISteamStats';
import { type JobStats } from '@/lib/JobStats';
import getJobStat from '@/utils/getJobStat';
import { useMemo } from 'react';

export default function useTotalAndHighestStat(
    jobs: IJob[],
    selectedStat: (typeof JobStats)[number],
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
