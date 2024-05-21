/* eslint-disable @next/next/no-img-element */
import { type IAchievement } from '@/lib/IAchievement';
import { type IAchievementSchema } from '@/lib/IAchievementSchema';
import getAchievementAltText from './getAchievementAltText';
import getAchievementTooltipHtml from './getAchievementTooltipHtml';
import styles from './AchievementList.module.css';

export default function AchievementsList({
    achievements,
    achievementSchema,
}: {
    achievements: IAchievement[];
    achievementSchema: IAchievementSchema[];
}) {
    const combinedAchievements = achievements.map((achievement) => {
        const schema = achievementSchema.find(
            (schema) => schema.name === achievement.apiname
        );
        if (!schema) {
            throw new Error(`No schema for achievement ${achievement.apiname}`);
        }
        return {
            ...schema,
            ...achievement,
        };
    });
    return (
        <>
            <h2>Raider&apos;s notable achievements</h2>
            <ul className={styles.list}>
                {combinedAchievements.map((achievement) => (
                    <li key={achievement.apiname}>
                        <img
                            src={
                                achievement.achieved
                                    ? achievement.icon
                                    : achievement.icongray
                            }
                            alt={getAchievementAltText(achievement)}
                            data-tooltip-id="tooltip"
                            data-tooltip-html={getAchievementTooltipHtml(
                                achievement
                            )}
                            loading="lazy"
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
