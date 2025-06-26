import { type IAchievement } from '@/lib/IAchievement';
import { type IRaid } from '../IJob';
import getAccomplishmentString from './getAccomplishmentString';
import getJobAccomplishments from './getJobAccomplishments';
import styles from '../RaidsTable.module.css';
import Image from 'next/image';

export default function JobAccomplishments({
    job,
    achievements,
}: {
    job: IRaid;
    achievements: IAchievement[];
}) {
    return getJobAccomplishments(job, achievements).map((accomplishment) => (
        <Image
            width={32}
            height={32}
            data-tooltip-id="tooltip"
            data-tooltip-html={getAccomplishmentString(accomplishment)}
            loading="lazy"
            key={accomplishment.type}
            src={`/static/images/raid/accomplishments/${accomplishment.type}.png`}
            className={styles.accomplishment}
            data-completed={accomplishment.completed}
            alt={getAccomplishmentString(accomplishment)}
        />
    ));
}
