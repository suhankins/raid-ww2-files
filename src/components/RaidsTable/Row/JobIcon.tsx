/* eslint-disable @next/next/no-img-element */
import { IJob } from '@/components/RaidsTable/IJob';
import styles from './JobIcon.module.css';

export default function JobIcon({ job }: { job: IJob }) {
    const id = job.type === 'raid' && job.parent ? job.parent : job.id;
    const isOutlaw = job.type === 'raid' && job.isOutlaw;

    return (
        <img
            loading="lazy"
            className={isOutlaw ? styles.outlaw : undefined}
            alt=""
            src={`/static/images/raid/raids/${id}.png`}
        />
    );
}
