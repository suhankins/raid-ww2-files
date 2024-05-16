import formatJobStat from '@/utils/formatJobStat';
import getJobStat from '@/utils/getJobStat';
import toPercentage from '@/utils/toPercentage';
import JobAccomplishments from './JobAccomplishments';
import JobIcon from './JobIcon';
import { type IJob } from '@/lib/IJob';
import { type IJobStat } from '@/lib/IRaidStat';
import { type ISteamStats } from '@/lib/ISteamStats';
import { type IAchievement } from '@/lib/IAchievement';
import styles from '../RaidsTable.module.css';

export default function RaidsTableRow({
    job,
    selectedStat,
    stats,
    total,
    highest,
    achievements,
}: {
    job: IJob;
    selectedStat: IJobStat;
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
            <td title={percentageOfTotal}>
                <div
                    className={styles.bar}
                    style={{
                        width: percentageOfMax,
                    }}
                >
                    {formatJobStat(jobStat, percentageOfTotal)}
                </div>
            </td>
        </tr>
    );
}
