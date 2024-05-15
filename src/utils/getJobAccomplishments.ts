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
        return [];
    }
    if (typeof job.accomplishments === 'string') {
        const operation = Operations.find(
            (operation) => operation.id === job.accomplishments
        );
        if (operation) {
            return getJobAccomplishments(operation, achievements);
        } else {
            return [];
        }
    }
    return job.accomplishments.map((accomplishment) => ({
        type: accomplishment.type,
        completed: !!achievements.find(
            (achievement) =>
                achievement.apiname === accomplishment.achievementName
        )?.achieved,
    }));
}
