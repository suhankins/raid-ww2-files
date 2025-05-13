'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './RaidsTable.module.css';
import { JOBS, RAIDS_AND_DAYS_ONLY } from '../../../../utils/RaidDB';
import getJobStat from '../RaidsTable/getJobStat';
import { useMemo, useState } from 'react';
import Stepper from '@/components/Stepper/Stepper';
import { type IAchievement } from '@/lib/IAchievement';
import Checkbox from '@/components/Checkbox/Checkbox';
import RaidsTableRow from './Row/RaidsTableRow';
import useTotalAndHighestStat from './useTotalAndHighestStat';
import DifficultyBar from './DifficultyBar';
import { DIFFICULTIES } from '@/utils/Difficulties';
import getDifficultyStat from '@/utils/getDifficultyStat';

export const DEFAULT_JOB_STAT = {
    id: 'completions',
    name: 'Completions',
} as const;

export const JOB_STATS = [
    DEFAULT_JOB_STAT,
    { id: 'starts', name: 'Starts' },
    { id: 'time', name: 'Total time' },
] as const;

export default function RaidsTable({
    stats,
    achievements,
}: {
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    const [selectedStat, setSelectedStat] =
        useState<(typeof JOB_STATS)[number]>(DEFAULT_JOB_STAT);
    const [operationDaysSeparate, setOperationDaysSeparate] = useState(false);

    const listOfJobs = useMemo(
        () => (operationDaysSeparate ? RAIDS_AND_DAYS_ONLY : JOBS),
        [operationDaysSeparate]
    );

    const { total, highest } = useTotalAndHighestStat(
        listOfJobs,
        selectedStat,
        stats
    );

    const totalSuccesses = DIFFICULTIES.reduce(
        (acc, difficulty) =>
            acc + getDifficultyStat(stats, difficulty.id, 'success'),
        0
    );
    const totalFailures = DIFFICULTIES.reduce(
        (acc, difficulty) =>
            acc + getDifficultyStat(stats, difficulty.id, 'failure'),
        0
    );

    return (
        <>
            <h2>Missions carried out</h2>
            {totalSuccesses > 0 ? (
                <>
                    <h3>Successes by difficulty</h3>
                    <DifficultyBar
                        stats={stats}
                        status="success"
                        total={totalSuccesses}
                    />
                </>
            ) : null}
            {totalFailures > 0 ? (
                <>
                    <h3>Failures by difficulty</h3>
                    <DifficultyBar
                        stats={stats}
                        status="failure"
                        total={totalFailures}
                    />
                </>
            ) : null}
            <div className="controls">
                <Stepper
                    options={JOB_STATS}
                    selectedOption={selectedStat}
                    onChange={(value) =>
                        setSelectedStat(value as (typeof JOB_STATS)[number])
                    }
                >
                    Sort by
                </Stepper>
                <Checkbox
                    checked={operationDaysSeparate}
                    onChange={(value) => setOperationDaysSeparate(value)}
                >
                    Display operation days separately
                </Checkbox>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Accomplishments</th>
                        <th scope="col">{selectedStat.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfJobs
                        .sort(
                            (job1, job2) =>
                                getJobStat(job2, selectedStat, stats) -
                                getJobStat(job1, selectedStat, stats)
                        )
                        .map((job) => (
                            <RaidsTableRow
                                key={job.id}
                                stats={stats}
                                job={job}
                                achievements={achievements}
                                selectedStat={selectedStat}
                                total={total}
                                highest={highest}
                            />
                        ))}
                </tbody>
            </table>
        </>
    );
}
