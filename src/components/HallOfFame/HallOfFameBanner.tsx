/* eslint-disable @next/next/no-img-element */
import { HallOfFameBannersDB } from '@/components/HallOfFame/HallOfFameBannersDB';
import styles from './HallOfFameBanner.module.css';
import { ISteamStats } from '@/lib/ISteamStats';

export default function HallOfFameBanner({
    banner,
    stats,
}: {
    banner: (typeof HallOfFameBannersDB)[number];
    stats: ISteamStats;
}) {
    return (
        <article className={styles.banner} data-negative={banner.negative}>
            <img
                loading="lazy"
                src={`/static/images/raid/hallOfFame/${banner.icon}.png`}
                alt=""
                title={banner.icon}
            />
            <p>{banner.render(banner.getter(stats))}</p>
        </article>
    );
}
