import { IAccomplishmentType, IJob } from '@/lib/IJob';
import { Operations } from './RaidDB';
import { IAchievement } from '@/lib/IAchievement';

export default function getJobAccomplishments(
    job: IJob,
    achievements: IAchievement[]
): {
    type: IAccomplishmentType;
    completed: boolean;
}[] {
    if (!job.accomplishments) {
        if ('parent' in job && job.parent) {
            const operation = Operations.find(
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
        completed: !!achievements.find(
            (achievement) =>
                achievement.apiname === accomplishment.achievementName
        )?.achieved,
    }));
}
