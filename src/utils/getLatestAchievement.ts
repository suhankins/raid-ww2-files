import type { IAchievement } from '@/lib/IAchievement';

export function getLatestAchievement(
    achievements: IAchievement[]
): IAchievement {
    return achievements.reduce((latest, achievement) =>
        achievement.unlocktime > latest.unlocktime ? achievement : latest
    );
}
