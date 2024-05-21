import { IAchievement } from '@/lib/IAchievement';
import { IAchievementSchema } from '@/lib/IAchievementSchema';
import styles from './AchievementList.module.css';

export default function getAchievementTooltipHtml(
    achievement: IAchievement & IAchievementSchema
) {
    return `<h3 class="${styles.achievementTooltip}">${achievement.displayName}</h3><p class="${styles.achievementTooltip}">${achievement.description}</p>`;
}
