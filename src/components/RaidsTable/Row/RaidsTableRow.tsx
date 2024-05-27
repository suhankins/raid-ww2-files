import formatJobStat from '@/components/RaidsTable/Row/formatJobStat';
import getJobStat from '@/components/RaidsTable/getJobStat';
import toPercentage from '@/utils/toPercentage';
import JobAccomplishments from './JobAccomplishments';
import JobIcon from './JobIcon';
import { type IJob } from '@/components/RaidsTable/IJob';
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
            <td>
                <div
                    className={styles.bar}
                    style={{
                        width: percentageOfMax,
                    }}
                    title={`${jobStat}`}
                >
                    {formatJobStat(jobStat, percentageOfTotal)}
                </div>
            </td>
        </tr>
    );
}
