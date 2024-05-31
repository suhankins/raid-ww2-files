import { HallOfFameBannersDB } from './HallOfFameBannersDB';
import styles from './HallOfFameBanner.module.css';
import { ISteamStats } from '@/lib/ISteamStats';
import Image from 'next/image';

export default function HallOfFameBanner({
    banner,
    stats,
}: {
    banner: (typeof HallOfFameBannersDB)[number];
    stats: ISteamStats;
}) {
    return (
        <article className={styles.banner} data-negative={banner.negative}>
            <Image
                width={72}
                height={72}
                src={`/static/images/raid/hallOfFame/${banner.icon}.png`}
                alt=""
            />
            <p>{banner.render(banner.getter(stats))}</p>
        </article>
    );
}
