export type IAccomplishmentType =
    | 'veryHard'
    | 'veryHardNoBleedout'
    | 'dogtags'
    | 'noBleedout';

/**
 * Object containing type and name of achievement
 */
export type IAccomplishment = {
    type: IAccomplishmentType;
    achievementName: string;
};

export type IRaid = {
    type: 'raid';
    id: string;
    name: string;
    /**
     * List of IAccomplishment objects
     * or string with ID of operation that contains it instead
     */
    accomplishments?: IAccomplishment[] | string;
};

export type IOperation = {
    type: 'operation';
    id: string;
    name: string;
    parts: IRaid[];
    accomplishments?: IAccomplishment[];
};

export type IJob = IRaid | IOperation;
