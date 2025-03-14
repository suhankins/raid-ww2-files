import { type IJob } from '../IJob';
import { OPERATIONS } from '@/utils/RaidDB';
import { type IAchievement } from '@/lib/IAchievement';
import type IAccomplishmentStatus from './IAccomplishmentStatus';

const checkAchievementStatus = (achievements: IAchievement[], name: string) =>
    !!achievements.find((achievement) => achievement.apiname === name)
        ?.achieved;

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
    console.log(
        job.accomplishments.map((accomplishment) => ({
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
                ? `${accomplishment.achievementName.reduce(
                      (count, achievement) =>
                          count +
                          (checkAchievementStatus(achievements, achievement)
                              ? 1
                              : 0),
                      0
                  )}/${accomplishment.achievementName.length}`
                : undefined,
        }))
    );
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
            ? `${accomplishment.achievementName.reduce(
                  (count, achievement) =>
                      count +
                      (checkAchievementStatus(achievements, achievement)
                          ? 1
                          : 0),
                  0
              )}/${accomplishment.achievementName.length}`
            : undefined,
    }));
}
