'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import HallOfFameCard from './HallOfFameCard';
import { HallOfFameCardsDB } from '@/components/HallOfFame/HallOfFameCardsDB';
import styles from './HallOfFame.module.css';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import { useMemo, useRef } from 'react';
import useAutoScroller from './useAutoScroller';

const getWeightedValue = (
    value: number,
    weight: (typeof HallOfFameCardsDB)[number]['weight'],
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
            HallOfFameCardsDB.toSorted(
                (a, b) =>
                    getWeightedValue(a.getter(stats), a.weight, totalKills) -
                    getWeightedValue(b.getter(stats), b.weight, totalKills)
            ).toReversed(),
        [stats, totalKills]
    );
    return (
        <>
            <h3>Known for</h3>
            <div className={styles.container} ref={containerRef}>
                {cards.map((stat, index) => (
                    <HallOfFameCard stat={stat} stats={stats} key={index} />
                ))}
            </div>
        </>
    );
}
