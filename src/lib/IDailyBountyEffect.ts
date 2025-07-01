export interface IEffect {
    difficulty: number;
    text: string;
    /**
     * TODO: Add proper definition
     * As of right now, there's only 1 "includes", and it doesn't matter to my website at all.
     */
    includes?: any;
    added_forbids?: string[];
}

export interface IDailyBountyEffect {
    negative_effect?: IEffect[];
    positive_effect?: IEffect[];
    names?: {
        negative_effect?: string[];
        positive_effect?: string[];
    };
    forbids?: string[];
}
