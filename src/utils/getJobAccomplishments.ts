import { IAccomplishmentType, IJob } from '@/components/RaidsTable/IJob';
import { OPERATIONS } from './RaidDB';
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
        completed: !!achievements.find(
            (achievement) =>
                achievement.apiname === accomplishment.achievementName
        )?.achieved,
    }));
}
