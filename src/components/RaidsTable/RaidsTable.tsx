'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './RaidsTable.module.css';
import { Jobs, RaidsAndDays } from '@/utils/RaidDB';
import getJobStat from '@/utils/getJobStat';
import { useMemo, useState } from 'react';
import Stepper from '../Stepper/Stepper';
import { type IAchievement } from '@/lib/IAchievement';
import Checkbox from '../Checkbox/Checkbox';
import RaidsTableRow from './Row/RaidsTableRow';
import useTotalAndHighestStat from './useTotalAndHighestStat';
import { DefaultJobStat, JobStats } from '@/lib/JobStats';

export default function RaidsTable({
    stats,
    achievements,
}: {
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    const [selectedStat, setSelectedStat] =
        useState<(typeof JobStats)[number]>(DefaultJobStat);
    const [operationDaysSeparate, setOperationDaysSeparate] = useState(false);

    const listOfJobs = useMemo(
        () => (operationDaysSeparate ? RaidsAndDays : Jobs),
        [operationDaysSeparate]
    );

    const { total, highest } = useTotalAndHighestStat(
        listOfJobs,
        selectedStat,
        stats
    );

    return (
        <>
            <h2>Missions carried out</h2>
            <div className="controls">
                <Stepper
                    options={JobStats}
                    selectedOption={selectedStat}
                    onChange={(value) =>
                        setSelectedStat(value as (typeof JobStats)[number])
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
