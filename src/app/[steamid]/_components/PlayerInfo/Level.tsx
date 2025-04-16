import { IAchievement } from '@/lib/IAchievement';
import { ISteamStats } from '@/lib/ISteamStats';

export const POSSIBLE_LEVELS = [40, 30, 20, 10, 5, 2];

export function Level({
    stats,
    achievements,
}: {
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    if (stats.ach_reach_level_40_count >= 2) {
        return (
            <span>
                40
                <span className="smaller">
                    ×{stats.ach_reach_level_40_count}
                </span>
            </span>
        );
    }
    const highestAchievedLevel = POSSIBLE_LEVELS.find((level) =>
        achievements.find(
            (achievement) =>
                achievement.apiname === `ach_reach_level_${level}` &&
                achievement.achieved
        )
    );
    return <span>{highestAchievedLevel ?? 1}</span>;
}
