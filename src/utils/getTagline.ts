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
 * TODO: Write good taglines, current ones could be improved.
 */
const taglines = [
    {
        fullfilment: fullfilmentLevel40CountFactory(5),
        tagline: 'Destructive force of nature',
    },
    {
        fullfilment: fullfilmentLevel40CountFactory(4),
        tagline: 'Unstoppable force',
    },
    {
        fullfilment: fullfilmentLevel40CountFactory(3),
        tagline: 'Extremely dangerous',
    },
    {
        fullfilment: fullfilmentLevel40CountFactory(2),
        tagline: 'Terrifyingly effecient agent',
    },
    {
        fullfilment: fullfilmentLevelFactory(40),
        tagline: 'Professional saboteur',
    },
    {
        fullfilment: fullfilmentLevelFactory(30),
        tagline: 'Experienced operative',
    },
    {
        fullfilment: fullfilmentLevelFactory(20),
        tagline: 'Competent agent',
    },
    {
        fullfilment: fullfilmentLevelFactory(10),
        tagline: 'Battle-tested recruit',
    },
    {
        fullfilment: fullfilmentLevelFactory(5),
        tagline: 'Slightly above average shooter',
    },
    {
        fullfilment: fullfilmentLevelFactory(2),
        tagline: '"Intern" raider',
    },
    {
        fullfilment: () => true,
        tagline: 'Just recruited',
    },
];

export function getTagline(achievementData: any) {
    const tagline = taglines.find((tagline) =>
        tagline.fullfilment(achievementData)
    );
    return tagline ? tagline.tagline : 'Level 1';
}
