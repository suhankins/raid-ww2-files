import { type ISteamStats } from '@/lib/ISteamStats';
import toPercentage from '@/utils/toPercentage';
import styles from './DifficultyBar.module.css';
import getDifficultyStat from '@/utils/getDifficultyStat';
import { DIFFICULTIES } from '@/utils/Difficulties';

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

export default function DifficultyBar({
    stats,
    status,
    total,
}: {
    stats: ISteamStats;
    status: 'failure' | 'success';
    total: number;
}) {
    return (
        <div className={styles.difficultyBar}>
            {DIFFICULTIES.map((difficulty) => (
                <Segment
                    key={difficulty.id}
                    caption={difficulty.caption}
                    size={
                        getDifficultyStat(stats, difficulty.id, status) / total
                    }
                    absolute={getDifficultyStat(stats, difficulty.id, status)}
                />
            ))}
        </div>
    );
}
