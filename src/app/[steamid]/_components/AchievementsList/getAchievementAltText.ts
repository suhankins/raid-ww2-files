import { type IAchievement } from '@/lib/IAchievement';
import { type IAchievementSchema } from '@/lib/IAchievementSchema';

export default function getAchievementAltText(
    achievement: IAchievement & IAchievementSchema
) {
    return `Achievement "${achievement.displayName}": ${achievement.achieved ? 'Unlocked' : 'Not unlocked'}`;
}
