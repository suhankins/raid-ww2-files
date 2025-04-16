import { type ISteamStats } from '@/lib/ISteamStats';
import HallOfFameBanner from './HallOfFameBanner';
import styles from './HallOfFame.module.css';
import { getHallOfFameCards } from './getHallOfFameCards';

export default function HallOfFame({ stats }: { stats: ISteamStats }) {
    const cards = getHallOfFameCards(stats);

    return (
        <div className={styles.container}>
            {cards.map((banner, index) => (
                <HallOfFameBanner banner={banner} stats={stats} key={index} />
            ))}
        </div>
    );
}
