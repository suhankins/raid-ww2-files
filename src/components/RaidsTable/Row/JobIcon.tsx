/* eslint-disable @next/next/no-img-element */
import { IJob } from '@/lib/IJob';

export default function JobIcon({ job }: { job: IJob }) {
    const id = job.type === 'raid' && job.parent ? job.parent : job.id;

    return <img alt="" src={`/static/images/raid/raids/${id}.png`} />;
}
