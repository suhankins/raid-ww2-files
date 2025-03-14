export type IAccomplishmentType =
    | 'veryHard'
    | 'veryHardNoBleedout'
    | 'dogtags'
    | 'noBleedout'
    | 'completion';

/**
 * Object containing type and name of achievement
 */
export type IAccomplishment = {
    type: IAccomplishmentType;
    achievementName: string | string[];
};

export type IRaid = {
    type: 'raid';
    id: string;
    name: string;
    /**
     * Parent operation
     */
    parent?: string;
    accomplishments?: IAccomplishment[];
    isOutlaw?: boolean;
};

export type IOperation = {
    type: 'operation';
    id: string;
    name: string;
    parts: IRaid[];
    accomplishments: IAccomplishment[];
};

export type IJob = IRaid | IOperation;
