/* eslint-disable @next/next/no-img-element */
import { HallOfFameCards } from '@/lib/HallOfFameCards';
import styles from './HallOfFameCard.module.css';
import { ISteamStats } from '@/lib/ISteamStats';

export default function HallOfFameCard({
    stat,
    stats,
}: {
    stat: (typeof HallOfFameCards)[number];
    stats: ISteamStats;
}) {
    return (
        <article className={styles.banner}>
            <img
                src="/static/images/raid/raids/clear_skies.png"
                alt=""
                title={stat.icon}
            />
            <p>{stat.formatter(stat.getter(stats))}</p>
        </article>
    );
}
