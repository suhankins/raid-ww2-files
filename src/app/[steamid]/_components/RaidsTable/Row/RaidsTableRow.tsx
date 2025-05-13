import formatJobStat from './formatJobStat';
import getJobStat from '../getJobStat';
import toPercentage from '@/utils/toPercentage';
import JobAccomplishments from './JobAccomplishments';
import JobIcon from './JobIcon';
import { type IJob } from '../IJob';
import { type ISteamStats } from '@/lib/ISteamStats';
import { type IAchievement } from '@/lib/IAchievement';
import styles from '../RaidsTable.module.css';
import { type JOB_STATS } from '../RaidsTable';

export default function RaidsTableRow({
    job,
    selectedStat,
    stats,
    total,
    highest,
    achievements,
}: {
    job: IJob;
    selectedStat: (typeof JOB_STATS)[number];
    stats: ISteamStats;
    total: number;
    highest: number;
    achievements: IAchievement[];
}): React.ReactNode {
    const jobStat = getJobStat(job, selectedStat, stats);
    const percentageOfTotal = toPercentage(jobStat / total);
    const percentageOfMax = toPercentage(jobStat / highest);

    return (
        <tr key={job.name}>
            <td>
                <JobIcon job={job} />
            </td>
            <td>{job.name}</td>
            <td>
                <JobAccomplishments job={job} achievements={achievements} />
            </td>
            <td
                data-tooltip-id="tooltip"
                data-tooltip-content={percentageOfTotal}
            >
                <div
                    className={styles.bar}
                    style={{
                        width: percentageOfMax,
                    }}
                >
                    <span>{formatJobStat(selectedStat, jobStat)}</span>
                </div>
            </td>
        </tr>
    );
}
