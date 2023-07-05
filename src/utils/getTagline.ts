function fullfilmentLevel40CountFactory(count: number) {
    return (achievementData: any) =>
        achievementData.ach_reach_level_40_count >= count;
}

function fullfilmentLevelFactory(level: number) {
    return (achievementData: any) =>
        achievementData[`ach_reach_level_${level}`] === 1;
}

/**
 * All possible taglines. Sorted by priority, so the first one that matches is the one that is used.
 * TODO: Write good taglines, current ones are placeholders
 */
const taglines = [
    {
        fullfilment: fullfilmentLevel40CountFactory(5),
        tagline: 'Level 40 x5',
    },
    {
        fullfilment: fullfilmentLevel40CountFactory(4),
        tagline: 'Level 40 x4',
    },
    {
        fullfilment: fullfilmentLevel40CountFactory(3),
        tagline: 'Level 40 x3',
    },
    {
        fullfilment: fullfilmentLevel40CountFactory(2),
        tagline: 'Level 40 x2',
    },
    {
        fullfilment: fullfilmentLevelFactory(40),
        tagline: 'Level 40',
    },
    {
        fullfilment: fullfilmentLevelFactory(30),
        tagline: 'Level 30',
    },
    {
        fullfilment: fullfilmentLevelFactory(20),
        tagline: 'Level 20',
    },
    {
        fullfilment: fullfilmentLevelFactory(10),
        tagline: 'Level 10',
    },
    {
        fullfilment: fullfilmentLevelFactory(5),
        tagline: 'Level 5',
    },
    {
        fullfilment: fullfilmentLevelFactory(2),
        tagline: 'Level 2',
    },
    {
        fullfilment: () => true,
        tagline: 'Level 1',
    },
];

export function getTagline(achievementData: any) {
    const tagline = taglines.find((tagline) =>
        tagline.fullfilment(achievementData)
    );
    return tagline ? tagline.tagline : 'Level 1';
}
