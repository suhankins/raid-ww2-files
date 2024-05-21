/* eslint-disable @next/next/no-img-element */
import { HallOfFameCardsDB } from '@/components/HallOfFame/HallOfFameBannerDB';
import styles from './HallOfFameBanner.module.css';
import { ISteamStats } from '@/lib/ISteamStats';

export default function HallOfFameCard({
    stat,
    stats,
}: {
    stat: (typeof HallOfFameCardsDB)[number];
    stats: ISteamStats;
}) {
    return (
        <article className={styles.banner}>
            <img
                loading="lazy"
                src={`/static/images/raid/hallOfFame/${stat.icon}.png`}
                alt=""
                title={stat.icon}
            />
            <p>{stat.render(stat.getter(stats))}</p>
        </article>
    );
}
