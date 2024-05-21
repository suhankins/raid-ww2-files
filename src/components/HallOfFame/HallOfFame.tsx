'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import HallOfFameBanner from './HallOfFameBanner';
import { HallOfFameBannersDB } from '@/components/HallOfFame/HallOfFameBannerDB';
import styles from './HallOfFame.module.css';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import { useMemo, useRef } from 'react';
import useAutoScroller from './useAutoScroller';

const getWeightedValue = (
    value: number,
    weight: (typeof HallOfFameBannersDB)[number]['weight'],
    totalKills: number
) => (typeof weight === 'number' ? weight * value : weight(value, totalKills));

export default function HallOfFame({ stats }: { stats: ISteamStats }) {
    const containerRef = useRef<HTMLDivElement>(null);
    useAutoScroller(containerRef);
    const totalKills = useMemo(
        () => getKillsByWeaponType('all', stats),
        [stats]
    );
    const cards = useMemo(
        () =>
            HallOfFameBannersDB.map((card) => ({
                ...card,
                value: card.getter(stats),
            }))
                .filter((card) => card.value > 0)
                .toSorted(
                    (a, b) =>
                        getWeightedValue(a.value, a.weight, totalKills) -
                        getWeightedValue(b.value, b.weight, totalKills)
                )
                .toReversed(),
        [stats, totalKills]
    );
    return (
        <>
            <div className={styles.container} ref={containerRef}>
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
