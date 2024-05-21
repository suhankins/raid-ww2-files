import { IAchievement } from '@/lib/IAchievement';
import { ISteamStats } from '@/lib/ISteamStats';

const possibleLevels = [40, 30, 20, 10, 5, 2];

export function getLevel(stats: ISteamStats, achievements: IAchievement[]) {
    if (stats.ach_reach_level_40_count >= 2) {
        return `40 x${stats.ach_reach_level_40_count}`;
    }
    const highestAchievedLevel = possibleLevels.find((level) =>
        achievements.find(
            (achievement) => achievement.apiname === `ach_reach_level_${level}`
        )
    );
    return `${highestAchievedLevel ?? 1}`;
}
