export interface IAchievement {
    apiname: string;
    /**
     * 0 - not achieved
     *
     * 1 - achieved
     */
    achieved: number;
    unlocktime: number;
    name: string;
    description: string;
}
