import { type IRaid } from '../app/[steamid]/_components/RaidsTable/IJob';

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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
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
    {
        id: 'jobs_oper_flamable_part_1',
        name: 'Cloak and Dagger',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_burn_hardest' },
            {
                type: 'veryHardNoBleedout',
                achievementName: 'ach_burn_hardest_no_bleedout',
            },
            {
                type: 'noBleedout',
                achievementName: 'ach_burn_no_bleedout',
            },
        ],
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_oper_flamable_part_2',
        name: 'Fuel For The Fire',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_burn_hardest' },
            {
                type: 'veryHardNoBleedout',
                achievementName: 'ach_burn_hardest_no_bleedout',
            },
            {
                type: 'noBleedout',
                achievementName: 'ach_burn_no_bleedout',
            },
        ],
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_oper_flamable_part_3',
        name: 'Urgent Delivery',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_burn_hardest' },
            {
                type: 'veryHardNoBleedout',
                achievementName: 'ach_burn_hardest_no_bleedout',
            },
            {
                type: 'noBleedout',
                achievementName: 'ach_burn_no_bleedout',
            },
        ],
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_oper_flamable_part_4',
        name: 'Firestarter',
        type: 'raid',
        accomplishments: [
            { type: 'veryHard', achievementName: 'ach_burn_hardest' },
            {
                type: 'veryHardNoBleedout',
                achievementName: 'ach_burn_hardest_no_bleedout',
            },
            {
                type: 'noBleedout',
                achievementName: 'ach_burn_no_bleedout',
            },
        ],
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_clear_skies_part_1',
        name: 'Communication Breakdown',
        type: 'raid',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_clear_skies_part_2',
        name: 'Enigmatic',
        type: 'raid',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_clear_skies_part_3',
        name: 'Burning Man',
        type: 'raid',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_clear_skies_part_4',
        name: 'London Calling',
        type: 'raid',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_clear_skies_part_5',
        name: 'Rolling Stock',
        type: 'raid',
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
        forbidBuffs: [
            'bags_dont_slow_players_down',
            'effect_player_carry_invert_speed',
        ],
    },
    {
        id: 'jobs_clear_skies_part_6',
        name: 'Blinding Heimdall',
        type: 'raid',
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
] as const;
