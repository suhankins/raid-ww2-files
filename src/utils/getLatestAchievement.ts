import type { IAchievement } from '@/lib/IAchievement';

export function getLatestAchievement(
    achievements: IAchievement[]
): IAchievement {
    const latestAchievement = achievements.reduce((latest, achievement) => {
        if (achievement.unlocktime > latest.unlocktime) return achievement;
        return latest;
    });
    return latestAchievement;
}
