import { type IAchievement } from '@/lib/IAchievement';
import { type IAchievementSchema } from '@/lib/IAchievementSchema';
import styles from './AchievementList.module.css';
import { numberToIsoDate } from '@/utils/numberToIsoDate';

export default function getAchievementTooltipHtml(
    achievement: IAchievement & IAchievementSchema
) {
    return `<div class="${styles.achievementTooltip}">
    <h3>${achievement.displayName}</h3>
    <p>${achievement.description}</p>
    <p>${achievement.achieved ? `Unlocked: ${numberToIsoDate(achievement.unlocktime)}` : 'Not unlocked'}</p>
    </div>`;
}
