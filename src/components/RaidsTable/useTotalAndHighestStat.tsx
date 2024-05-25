import { type IJob } from '@/components/RaidsTable/IJob';
import { type ISteamStats } from '@/lib/ISteamStats';
import getJobStat from '@/components/RaidsTable/getJobStat';
import { useMemo } from 'react';
import { type JOB_STATS } from './RaidsTable';

export default function useTotalAndHighestStat(
    jobs: IJob[],
    selectedStat: (typeof JOB_STATS)[number],
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
