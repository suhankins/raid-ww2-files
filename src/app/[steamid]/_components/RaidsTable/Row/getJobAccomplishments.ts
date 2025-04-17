import { type IJob } from '../IJob';
import { OPERATIONS } from '@/utils/RaidDB';
import { type IAchievement } from '@/lib/IAchievement';
import type IAccomplishmentStatus from './IAccomplishmentStatus';

const checkAchievementStatus = (achievements: IAchievement[], name: string) =>
    !!achievements.find((achievement) => achievement.apiname === name)
        ?.achieved;

const getProgressString = (
    achievements: IAchievement[],
    requirements: string[]
) => {
    const notCompletedAchievements = requirements.filter(
        (achievement) => !checkAchievementStatus(achievements, achievement)
    );
    const total = requirements.length;
    const current = total - notCompletedAchievements.length;
    const progress = `${current}/${requirements.length}`;
    if (current === total) {
        return progress;
    }
    const missingAchievementNames = notCompletedAchievements.map(
        (achievementName) =>
            achievements.find(
                (achievement) => achievement.apiname === achievementName
            )?.name
    );
    return `${progress}<br />Missing achievements:<ul><li>${missingAchievementNames.join('</li><li>')}<ul />`;
};

export default function getJobAccomplishments(
    job: IJob,
    achievements: IAchievement[]
): IAccomplishmentStatus[] {
    if (!job.accomplishments) {
        if ('parent' in job && job.parent) {
            const operation = OPERATIONS.find(
                (operation) => operation.id === job.parent
            );
            if (operation) {
                return getJobAccomplishments(operation, achievements);
            }
        }
        return [];
    }
    return job.accomplishments.map((accomplishment) => ({
        type: accomplishment.type,
        completed: Array.isArray(accomplishment.achievementName)
            ? accomplishment.achievementName.every((achievement) =>
                  checkAchievementStatus(achievements, achievement)
              )
            : checkAchievementStatus(
                  achievements,
                  accomplishment.achievementName
              ),
        progress: Array.isArray(accomplishment.achievementName)
            ? getProgressString(achievements, accomplishment.achievementName)
            : undefined,
    }));
}
