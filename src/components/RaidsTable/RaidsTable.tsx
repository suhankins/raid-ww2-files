/* eslint-disable @next/next/no-img-element */
'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './RaidsTable.module.css';
import { Jobs } from '@/utils/RaidDB';
import getJobStat from '@/utils/getJobStat';
import { useMemo, useState } from 'react';
import Stepper from '../Stepper/Stepper';
import toPercentage from '@/utils/toPercentage';
import { type IRaidStat } from '@/lib/IRaidStat';
import formatJobStat from '@/utils/formatJobStat';
import getJobAccomplishments from '@/utils/getJobAccomplishments';
import { type IAchievement } from '@/lib/IAchievement';
import getAccomplishmentString from '@/utils/getAccomplishmentString';

export default function RaidsTable({
    stats,
    achievements,
}: {
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    const [selectedStat, setSelectedStat] = useState<IRaidStat>('Completions');

    const total = useMemo(
        () =>
            Jobs.reduce(
                (total, job) => total + getJobStat(job, selectedStat, stats),
                0
            ),
        [selectedStat, stats]
    );

    const highest = useMemo(
        () =>
            Jobs.reduce(
                (highest, job) =>
                    Math.max(highest, getJobStat(job, selectedStat, stats)),
                0
            ),
        [selectedStat, stats]
    );

    return (
        <section>
            <Stepper
                options={['Completions', 'Starts', 'Time']}
                selectedOption={selectedStat}
                onChange={(value) =>
                    setSelectedStat(value as 'Completions' | 'Time')
                }
            >
                Sort by
            </Stepper>
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Accomplishments</th>
                        <th scope="col">{selectedStat}</th>
                    </tr>
                </thead>
                <tbody>
                    {Jobs.sort(
                        (raid1, raid2) =>
                            getJobStat(raid2, selectedStat, stats) -
                            getJobStat(raid1, selectedStat, stats)
                    ).map((raid) => {
                        const jobStat = getJobStat(raid, selectedStat, stats);
                        const percentageOfTotal = toPercentage(jobStat / total);
                        const percentageOfMax = toPercentage(jobStat / highest);

                        return (
                            <tr key={raid.name}>
                                <td>ICON</td>
                                <td>{raid.name}</td>
                                <td>
                                    {getJobAccomplishments(
                                        raid,
                                        achievements
                                    ).map((accomplishment) => (
                                        <img
                                            key={accomplishment.type}
                                            src={`/static/images/raid/accomplishments/${accomplishment.type}.png`}
                                            className={styles.accomplishment}
                                            data-completed={
                                                accomplishment.completed
                                            }
                                            title={getAccomplishmentString(
                                                accomplishment
                                            )}
                                            alt={getAccomplishmentString(
                                                accomplishment
                                            )}
                                        />
                                    ))}
                                </td>
                                <td title={percentageOfTotal}>
                                    <div
                                        className={styles.bar}
                                        style={{
                                            width: percentageOfMax,
                                        }}
                                    >
                                        {formatJobStat(
                                            jobStat,
                                            percentageOfTotal
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}
