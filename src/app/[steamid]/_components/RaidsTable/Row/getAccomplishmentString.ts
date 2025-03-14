import type { IAccomplishmentType } from '../IJob';
import type IAccomplishmentStatus from './IAccomplishmentStatus';

const names: { [accomplishment in IAccomplishmentType]: string } = {
    noBleedout:
        'Finish with at least 2 players without anyone going into bleedout',
    veryHard: 'Finish on Very Hard',
    dogtags: 'Collect 100% dog tags',
    veryHardNoBleedout:
        'Finish with at least 2 players without anyone going into bleedout on Very Hard',
    completion: 'Complete all achievements for this job',
};

export default function getAccomplishmentString(
    accomplishment: IAccomplishmentStatus
) {
    return `${names[accomplishment.type]}: ${accomplishment.progress ?? (accomplishment.completed ? 'Completed' : 'Not completed')}`;
}
