export const DefaultJobStat = {
    id: 'completions',
    name: 'Completions',
} as const;

export const JobStats = [
    DefaultJobStat,
    { id: 'starts', name: 'Starts' },
    { id: 'time', name: 'Total time' },
] as const;
