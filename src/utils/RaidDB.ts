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
        ],
    },
    {
        id: 'level_ger_bridge',
        name: 'Trainwreck',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'Bridge that gap' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_bridge' },
        ],
    },
    {
        id: 'level_settlement',
        name: 'Strongpoint',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'Sweep and clear' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_castle' },
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
        ],
    },
    {
        id: 'level_hunters',
        name: 'Hunters',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_hunters_hardest' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_hunters' },
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
        ],
    },
    {
        id: 'level_gold_rush',
        name: 'Gold Rush',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'That will do' },
            { type: 'dogtags', achievementName: 'ach_bring_them_home_bank' },
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
            },
            {
                id: 'jobs_clear_skies_part_2',
                name: 'Clear Skies 2: Enigmatic',
                type: 'raid',
                parent: 'clear_skies',
            },
            {
                id: 'jobs_clear_skies_part_3',
                name: 'Clear Skies 3: Burning Man',
                type: 'raid',
                parent: 'clear_skies',
            },
            {
                id: 'jobs_clear_skies_part_4',
                name: 'Clear Skies 4: London Calling',
                type: 'raid',
                parent: 'clear_skies',
            },
            {
                id: 'jobs_clear_skies_part_5',
                name: 'Clear Skies 5: Rolling Stock',
                type: 'raid',
                parent: 'clear_skies',
            },
            {
                id: 'jobs_clear_skies_part_6',
                name: 'Clear Skies 6: Blinding Heimdall',
                type: 'raid',
                parent: 'clear_skies',
            },
        ],
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_clear_skies_hardest' },
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
