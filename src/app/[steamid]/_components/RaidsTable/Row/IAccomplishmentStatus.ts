import { type IAccomplishmentType } from '../IJob';

export default interface IAccomplishmentStatus {
    type: IAccomplishmentType;
    completed: boolean;
    progress?: string;
}
