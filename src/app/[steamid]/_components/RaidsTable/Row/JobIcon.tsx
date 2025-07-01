/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { type IRaid } from '../IJob';
import styles from './JobIcon.module.css';

export default function JobIcon(params: { job: IRaid } | { id: string }) {
    const isOutlaw = 'job' in params && params.job.isOutlaw;
    const id = 'job' in params ? params.job.id : params.id;
    return (
        <img
            loading="lazy"
            className={classNames({ [styles.outlaw]: isOutlaw })}
            alt=""
            src={`/static/images/raid/raids/${id}.png`}
        />
    );
}
