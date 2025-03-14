import {
    type IRaid,
    type IJob,
    type IOperation,
} from '../app/[steamid]/_components/RaidsTable/IJob';

export const RAIDS: IRaid[] = [
    {
        id: 'level_train_yard',
        name: 'Amber Train',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'The rest is history' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_trainyard',
            },
            {
                type: 'completion',
                achievementName: [
                    'Railyard - The shelter',
                    'Railyard - The room raider',
                    'Railyard - No Glory',
                    'Railyard - Premature dynamite-ation',
                    'Railyard - Cranetastic',
                    'Railyard - AA anonymous',
                ],
            },
        ],
    },
    {
        id: 'level_radio_defense',
        name: 'Wiretap',
        type: 'raid',
        accomplishments: [
            {
                type: 'veryHard',
                achievementName: 'Radio defence - Over and out',
            },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_radiodefence',
            },
            {
                type: 'completion',
                achievementName: [
                    'Radio defence - You are safe with us',
                    'Radio defence - Cutting crew',
                    'Radio defence - No blitzkrieg for you',
                    "Radio defence - Oh, I didn't see you there",
                    'Radio defence - Hands off',
                ],
            },
        ],
    },
    {
        id: 'level_flakturm',
        name: "Odin's fall",
        type: 'raid',
        accomplishments: [
            {
                type: 'veryHard',
                achievementName: "Flaktower - Ain't no tower high enough",
            },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_flak' },
            {
                type: 'completion',
                achievementName: [
                    "Flaktower - They'll neven see it coming",
                    'Flaktower - Ninja RAID',
                ],
            },
        ],
    },
    {
        id: 'level_ger_bridge',
        name: 'Trainwreck',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'Bridge that gap' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_bridge' },
            {
                type: 'completion',
                achievementName: [
                    'Bridge - Walk it off',
                    'Bridge - Rush minute',
                ],
            },
        ],
    },
    {
        id: 'level_settlement',
        name: 'Strongpoint',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'Sweep and clear' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_castle' },
            {
                type: 'completion',
                achievementName: [
                    'Castle - Swooping Eagle',
                    'Castle - 100 Nazi Scalps',
                ],
            },
        ],
    },
    {
        id: 'level_tnd',
        name: 'Tiger Trap',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_tank_depot_hardest' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_tank_depot',
            },
        ],
    },
    {
        id: 'level_sto',
        name: "Rogue's Gallery",
        type: 'raid',
        isOutlaw: true,
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_gallery_hardest' },
            { type: 'completion', achievementName: ['ach_gallery_stealth'] },
        ],
    },
    {
        id: 'level_hunters',
        name: 'Hunters',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_hunters_hardest' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_hunters' },
            {
                type: 'completion',
                achievementName: ['ach_hunters_stealth'],
            },
        ],
    },
    {
        id: 'level_convoy',
        name: 'Last Orders',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_sommelier_hardest' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_sommelier',
            },
            {
                type: 'completion',
                achievementName: ['ach_sommelier_stealth_flawless'],
            },
        ],
    },
    {
        id: 'level_gold_rush',
        name: 'Gold Rush',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'That will do' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_bank' },
            {
                type: 'completion',
                achievementName: [
                    'Treasury - Take from them, everything, EVERYTHING',
                    'Treasury - Got a plane to catch',
                    'Treasury - Bumpy ride',
                    'Easy there cowboy',
                ],
            },
        ],
    },
    {
        id: 'level_forest_gumpy',
        name: 'Forest Convoy',
        type: 'raid',
        isOutlaw: true,
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_forest_convoy_hardest' },
        ],
    },
    {
        id: 'level_spies_test',
        name: 'Extraction',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_airfield_hardest' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_airfield',
            },
        ],
    },
    {
        id: 'level_bunker_test',
        name: 'Bunker Busters',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_bunkers_hardest' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_bunkers',
            },
        ],
    },
    {
        id: 'level_tutorial',
        name: 'Tutorial',
        type: 'raid',
    },
    {
        id: 'level_fury_railway',
        name: 'Gold Diggers',
        type: 'raid',
        isOutlaw: true,
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_fury_railway_hardest' },
            {
                type: 'completion',
                achievementName: ['ach_fury_railway_customs'],
            },
        ],
    },
    {
        id: 'level_silo',
        name: 'Countdown',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'That will suffice' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_silo',
            },
            {
                type: 'completion',
                achievementName: [
                    'Visit all side-rooms',
                    'The seven wooden barrels',
                ],
            },
        ],
    },
    {
        id: 'level_kelly',
        name: 'Kelly',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: "Kelly - Kelly's Heroes" },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_kelly',
            },
            {
                type: 'completion',
                achievementName: [
                    'Kelly - Clean Haus',
                    'Kelly - Safe Guard',
                    'ach_kelly_stealth',
                ],
            },
        ],
    },
    {
        id: 'level_forest_bunker',
        name: 'Full Stop',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_forest_bunker_hardest' },
            {
                type: 'dogtags',
                achievementName: 'ach_bring_them_home_forest_bunker',
            },
            {
                type: 'completion',
                achievementName: [
                    'ach_fb_overkill',
                    'ach_fb_outsmart_bullets',
                    'ach_fb_smrt',
                    'ach_fb_ilija_roleplay',
                    'ach_fb_secret_secret',
                ],
            },
        ],
    },
] as const;

export const OPERATIONS: IOperation[] = [
    {
        id: 'clear_skies',
        name: 'Clear Skies',
        type: 'operation',
        parts: [
            {
                id: 'jobs_clear_skies_part_1',
                name: 'Clear Skies 1: Communication Breakdown',
                type: 'raid',
                parent: 'clear_skies',
                accomplishments: [
                    {
                        type: 'veryHard',
                        achievementName: 'ach_clear_skies_hardest',
                    },
                    {
                        type: 'veryHardNoBleedout',
                        achievementName: 'ach_clear_skies_hardest_no_bleedout',
                    },
                    {
                        type: 'noBleedout',
                        achievementName: 'ach_clear_skies_no_bleedout',
                    },
                ],
            },
            {
                id: 'jobs_clear_skies_part_2',
                name: 'Clear Skies 2: Enigmatic',
                type: 'raid',
                parent: 'clear_skies',
                accomplishments: [
                    {
                        type: 'veryHard',
                        achievementName: 'ach_clear_skies_hardest',
                    },
                    {
                        type: 'veryHardNoBleedout',
                        achievementName: 'ach_clear_skies_hardest_no_bleedout',
                    },
                    {
                        type: 'noBleedout',
                        achievementName: 'ach_clear_skies_no_bleedout',
                    },
                ],
            },
            {
                id: 'jobs_clear_skies_part_3',
                name: 'Clear Skies 3: Burning Man',
                type: 'raid',
                parent: 'clear_skies',
                accomplishments: [
                    {
                        type: 'veryHard',
                        achievementName: 'ach_clear_skies_hardest',
                    },
                    {
                        type: 'veryHardNoBleedout',
                        achievementName: 'ach_clear_skies_hardest_no_bleedout',
                    },
                    {
                        type: 'noBleedout',
                        achievementName: 'ach_clear_skies_no_bleedout',
                    },
                ],
            },
            {
                id: 'jobs_clear_skies_part_4',
                name: 'Clear Skies 4: London Calling',
                type: 'raid',
                parent: 'clear_skies',
                accomplishments: [
                    {
                        type: 'veryHard',
                        achievementName: 'ach_clear_skies_hardest',
                    },
                    {
                        type: 'veryHardNoBleedout',
                        achievementName: 'ach_clear_skies_hardest_no_bleedout',
                    },
                    {
                        type: 'noBleedout',
                        achievementName: 'ach_clear_skies_no_bleedout',
                    },
                ],
            },
            {
                id: 'jobs_clear_skies_part_5',
                name: 'Clear Skies 5: Rolling Stock',
                type: 'raid',
                parent: 'clear_skies',
                accomplishments: [
                    {
                        type: 'veryHard',
                        achievementName: 'ach_clear_skies_hardest',
                    },
                    {
                        type: 'veryHardNoBleedout',
                        achievementName: 'ach_clear_skies_hardest_no_bleedout',
                    },
                    {
                        type: 'noBleedout',
                        achievementName: 'ach_clear_skies_no_bleedout',
                    },
                ],
            },
            {
                id: 'jobs_clear_skies_part_6',
                name: 'Clear Skies 6: Blinding Heimdall',
                type: 'raid',
                parent: 'clear_skies',
                accomplishments: [
                    {
                        type: 'veryHard',
                        achievementName: 'ach_clear_skies_hardest',
                    },
                    {
                        type: 'veryHardNoBleedout',
                        achievementName: 'ach_clear_skies_hardest_no_bleedout',
                    },
                    {
                        type: 'noBleedout',
                        achievementName: 'ach_clear_skies_no_bleedout',
                    },
                    {
                        type: 'completion',
                        achievementName: ['Flaktower - A Leap of Faith'],
                    },
                ],
            },
        ],
        accomplishments: [
            {
                type: 'veryHard',
                achievementName: 'ach_clear_skies_hardest',
            },
            {
                type: 'veryHardNoBleedout',
                achievementName: 'ach_clear_skies_hardest_no_bleedout',
            },
            {
                type: 'noBleedout',
                achievementName: 'ach_clear_skies_no_bleedout',
            },
            {
                type: 'completion',
                achievementName: ['Flaktower - A Leap of Faith'],
            },
        ],
    },
    {
        id: 'rhinegold',
        name: 'Rhinegold',
        type: 'operation',
        parts: [
            {
                id: 'jobs_oper_flamable_part_1',
                name: 'Rhinegold 1: Cloak and Dagger',
                type: 'raid',
                parent: 'rhinegold',
            },
            {
                id: 'jobs_oper_flamable_part_2',
                name: 'Rhinegold 2: Fuel For The Fire',
                type: 'raid',
                parent: 'rhinegold',
            },
            {
                id: 'jobs_oper_flamable_part_3',
                name: 'Rhinegold 3: Urgent Delivery',
                type: 'raid',
                parent: 'rhinegold',
            },
            {
                id: 'jobs_oper_flamable_part_4',
                name: 'Rhinegold 4: Firestarter',
                type: 'raid',
                parent: 'rhinegold',
            },
        ],
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_burn_hardest' },
            {
                type: 'veryHardNoBleedout',
                achievementName: 'ach_burn_hardest_no_bleedout',
            },
            { type: 'noBleedout', achievementName: 'ach_burn_no_bleedout' },
        ],
    },
] as const;

export const JOBS: IJob[] = [...RAIDS, ...OPERATIONS] as const;

export const RAIDS_AND_DAYS_ONLY: IRaid[] = [
    ...RAIDS,
    ...OPERATIONS.flatMap((operation) => operation.parts),
] as const;
