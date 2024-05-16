'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './RaidsTable.module.css';
import { Jobs, RaidsAndDays } from '@/utils/RaidDB';
import getJobStat from '@/utils/getJobStat';
import { useMemo, useState } from 'react';
import Stepper from '../Stepper/Stepper';
import { type IJobStat } from '@/lib/IRaidStat';
import { type IAchievement } from '@/lib/IAchievement';
import Checkbox from '../Checkbox/Checkbox';
import RaidsTableRow from './Row/RaidsTableRow';
import useTotalAndHighestStat from './useTotalAndHighestStat';

export default function RaidsTable({
    stats,
    achievements,
}: {
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    const [selectedStat, setSelectedStat] = useState<IJobStat>('Completions');
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
        <section>
            <div className="controls">
                <Stepper
                    id="raidStat"
                    options={['Completions', 'Starts', 'Time']}
                    selectedOption={selectedStat}
                    onChange={(value) =>
                        setSelectedStat(value as 'Completions' | 'Time')
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
                        <th scope="col">{selectedStat}</th>
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
        </section>
    );
}
