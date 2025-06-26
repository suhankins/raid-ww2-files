/* eslint-disable @next/next/no-img-element */
import { IRaid } from '../IJob';
import styles from './JobIcon.module.css';

export default function JobIcon({ job }: { job: IRaid }) {
    return (
        <img
            loading="lazy"
            className={job.isOutlaw ? styles.outlaw : undefined}
            alt=""
            src={`/static/images/raid/raids/${job.id}.png`}
        />
    );
}
