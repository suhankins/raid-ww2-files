import { type ISteamStats } from '@/lib/ISteamStats';
import HallOfFameBanner from './HallOfFameBanner';
import { HallOfFameBannersDB } from './HallOfFameBannersDB';
import styles from './HallOfFame.module.css';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';

const getWeightedValue = (
    value: number,
    weight: (typeof HallOfFameBannersDB)[number]['weight'],
    totalKills: number
) => (typeof weight === 'number' ? weight * value : weight(value, totalKills));

export default function HallOfFame({ stats }: { stats: ISteamStats }) {
    const totalKills = getKillsByWeaponType('all', stats);
    const cards = HallOfFameBannersDB.map((card) => ({
        ...card,
        value: card.getter(stats),
    }))
        .filter((card) => card.value > 0)
        .sort(
            (a, b) =>
                getWeightedValue(a.value, a.weight, totalKills) -
                getWeightedValue(b.value, b.weight, totalKills)
        )
        .reverse();

    return (
        <>
            <div className={styles.container}>
                {cards.map((banner, index) => (
                    <HallOfFameBanner
                        banner={banner}
                        stats={stats}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
}
