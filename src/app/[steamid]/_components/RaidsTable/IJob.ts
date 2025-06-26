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
    accomplishments?: IAccomplishment[];
    isOutlaw?: boolean;
};
