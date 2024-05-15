import { type IRaid, type IJob, IOperation } from '@/lib/IJob';

export const Raids: IRaid[] = [
    {
        id: 'level_train_yard',
        name: 'Amber Train',
    },
    {
        id: 'level_radio_defense',
        name: 'Wiretap',
    },
    {
        id: 'level_flakturm',
        name: "Odin's fall",
    },
    {
        id: 'level_ger_bridge',
        name: 'Trainwreck',
    },
    {
        id: 'level_settlement',
        name: 'Strongpoint',
    },
    {
        id: 'level_tnd',
        name: 'Tiger Trap',
    },
    {
        id: 'level_sto',
        name: 'Rogues Gallery',
    },
    {
        id: 'level_hunters',
        name: 'Hunters',
    },
    {
        id: 'level_convoy',
        name: 'Last Orders',
    },
    {
        id: 'level_gold_rush',
        name: 'Gold Rush',
    },
    {
        id: 'level_forest_gumpy',
        name: 'Forest Convoy',
    },
    {
        id: 'level_spies_test',
        name: 'Extraction',
    },
    {
        id: 'level_bunker_test',
        name: 'Bunker Busters',
    },
    {
        id: 'level_tutorial',
        name: 'Tutorial',
    },
    {
        id: 'level_fury_railway',
        name: 'Gold Diggers',
    },
    {
        id: 'level_silo',
        name: 'Countdown',
    },
    {
        id: 'level_kelly',
        name: 'Kelly',
    },
];

export const Operations: IOperation[] = [
    {
        name: 'Clear Skies',
        parts: [
            {
                id: 'jobs_clear_skies_part_1',
                name: 'Clear Skies 1: Communication Breakdown',
            },
            {
                id: 'jobs_clear_skies_part_2',
                name: 'Clear Skies 2: Enigmatic',
            },
            {
                id: 'jobs_clear_skies_part_3',
                name: 'Clear Skies 3: Burning Man',
            },
            {
                id: 'jobs_clear_skies_part_4',
                name: 'Clear Skies 4: London Calling',
            },
            {
                id: 'jobs_clear_skies_part_5',
                name: 'Clear Skies 5: Rolling Stock',
            },
            {
                id: 'jobs_clear_skies_part_6',
                name: 'Clear Skies 6: Blinding Heimdall',
            },
        ],
    },
    {
        name: 'Rhinegold',
        parts: [
            {
                id: 'jobs_oper_flamable_part_1',
                name: 'Rhinegold 1: Cloak and Dagger',
            },
            {
                id: 'jobs_oper_flamable_part_2',
                name: 'Rhinegold 2: Fuel For The Fire',
            },
            {
                id: 'jobs_oper_flamable_part_3',
                name: 'Rhinegold 3: Urgent Delivery',
            },
            {
                id: 'jobs_oper_flamable_part_4',
                name: 'Rhinegold 4: Firestarter',
            },
        ],
    },
];

export const Jobs: IJob[] = [...Raids, ...Operations];
