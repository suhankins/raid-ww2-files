import { IAccomplishmentType } from '@/lib/IJob';

const names = {
    noBleedout:
        'Finish with at least 2 players without anyone going into bleedout',
    veryHard: 'Finish on Very Hard',
    dogtags: 'Collect 100% dog tags',
    veryHardNoBleedout:
        'Finish with at least 2 players without anyone going into bleedout on Very Hard',
};

export default function getAccomplishmentString(accomplishment: {
    type: IAccomplishmentType;
    completed: boolean;
}) {
    return `${names[accomplishment.type]}: ${accomplishment.completed ? 'Completed' : 'Not completed'}`;
}
