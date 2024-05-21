/* eslint-disable @next/next/no-img-element */
import { IAchievement } from '@/lib/IAchievement';
import { IJob } from '@/lib/IJob';
import getAccomplishmentString from '@/utils/getAccomplishmentString';
import getJobAccomplishments from '@/utils/getJobAccomplishments';
import styles from '../RaidsTable.module.css';

export default function JobAccomplishments({
    job,
    achievements,
}: {
    job: IJob;
    achievements: IAchievement[];
}) {
    return getJobAccomplishments(job, achievements).map((accomplishment) => (
        <img
            data-tooltip-id="tooltip"
            data-tooltip-content={getAccomplishmentString(accomplishment)}
            loading="lazy"
            key={accomplishment.type}
            src={`/static/images/raid/accomplishments/${accomplishment.type}.png`}
            className={styles.accomplishment}
            data-completed={accomplishment.completed}
            alt={getAccomplishmentString(accomplishment)}
        />
    ));
}
