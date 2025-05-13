import { type ISteamStats } from '@/lib/ISteamStats';
import toPercentage from '@/utils/toPercentage';
import { useCallback, useMemo } from 'react';
import styles from './DifficultyBar.module.css';

const Segment = ({
    caption,
    size,
    absolute,
}: {
    caption: string;
    size: number;
    absolute: number;
}) => (
    <div
        className={styles.bar}
        style={{ width: `${size * 100}%` }}
        data-tooltip-id="tooltip"
        data-tooltip-content={`${caption}: ${toPercentage(size)} (${absolute})`}
    >
        <div className={styles.caption}>{caption}</div>
        <div className={styles.barText}>{toPercentage(size)}</div>
    </div>
);

const DIFFICULTIES = [
    { id: 'difficulty_1', caption: 'Easy' },
    { id: 'difficulty_2', caption: 'Normal' },
    { id: 'difficulty_3', caption: 'Hard' },
    { id: 'difficulty_4', caption: 'Very hard' },
] as const;

export default function DifficultyBar({
    stats,
    status,
}: {
    stats: ISteamStats;
    status: 'failure' | 'success';
}) {
    const getStat = useCallback(
        (id: string) => stats[`${id}_${status}`] || 0,
        [status, stats]
    );

    const total = useMemo(
        () =>
            DIFFICULTIES.reduce(
                (acc, difficulty) => acc + getStat(difficulty.id),
                0
            ),
        [getStat]
    );

    return (
        <div className={styles.difficultyBar}>
            {DIFFICULTIES.map((difficulty) => (
                <Segment
                    key={difficulty.id}
                    caption={difficulty.caption}
                    size={getStat(difficulty.id) / total}
                    absolute={getStat(difficulty.id)}
                />
            ))}
        </div>
    );
}
