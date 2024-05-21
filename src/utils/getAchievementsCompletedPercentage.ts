import { type IAchievement } from '@/lib/IAchievement';
import toPercentage from './toPercentage';

export default function getAchievementsCompletedPercentage(
    achievements: IAchievement[]
) {
    return toPercentage(
        achievements.reduce(
            (acc, achievement) => acc + achievement.achieved,
            0
        ) / achievements.length,
        0
    );
}
