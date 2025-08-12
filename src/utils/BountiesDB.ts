import { getDailyJob } from './generateDailyJob';

/**
 * List of old bounties for when the algorithm changes
 */
export const BOUNTIES_DB: {
    [date: string]: ReturnType<typeof getDailyJob>;
} = {
    '2025/06/26': {
        job: 'level_gold_rush',
        card: {
            rarity: 'uncommon',
            name: 'Glorious Bastards',
            positiveDescription: 'Enemies take 10% more damage.',
            negativeDescription: 'Loot drop chance decreased by 30%.',
            bonusXp: 1500,
        },
    },
    '2025/06/27': {
        job: 'level_kelly',
        card: {
            rarity: 'common',
            name: 'Heroes of Kelly',
            positiveDescription: 'Player Health is increased by 25%.',
            negativeDescription: 'Bleedout timer reduced to 15 seconds',
            bonusXp: 1200,
        },
    },
    '2025/06/28': {
        job: 'level_radio_defense',
        card: {
            rarity: 'common',
            name: 'Where are the bullets?',
            positiveDescription: 'Ammo loot drops refill equipment.',
            negativeDescription:
                'Primary weapons ammo capacity is reduced to 50%.',
            bonusXp: 1200,
        },
    },
    '2025/06/29': {
        job: 'jobs_oper_flamable_part_4',
        card: {
            rarity: 'rare',
            name: 'Bullseye',
            positiveDescription: 'Headshot damage increased by 10%',
            negativeDescription: 'Player Health is reduced by 50%.',
            bonusXp: 3000,
        },
    },
    '2025/06/30': {
        job: 'level_silo',
        card: {
            rarity: 'uncommon',
            name: 'Spaghetti Hans',
            positiveDescription: 'Loot pickup rewards increased by 5%',
            negativeDescription: 'Secondary weapons deal 75% less damage.',
            bonusXp: 1900,
        },
    },
    '2025/07/01': {
        job: 'level_radio_defense',
        card: {
            rarity: 'rare',
            name: 'Bounty Worth Dying For',
            positiveDescription: 'Bleedout timer increased by 5 seconds.',
            negativeDescription: 'Player Health is reduced by 75%.',
            bonusXp: 3000,
        },
    },
    '2025/07/02': {
        job: 'jobs_oper_flamable_part_4',
        card: {
            rarity: 'common',
            name: 'High Ammo High Noon',
            positiveDescription:
                'Primary weapons ammo capacity is increased by 40%.',
            negativeDescription: 'Player Health is reduced by 10%.',
            bonusXp: 1100,
        },
    },
    '2025/07/03': {
        job: 'level_silo',
        card: {
            rarity: 'common',
            name: 'Blammo sweep',
            positiveDescription: 'Ammo loot drops refill equipment.',
            negativeDescription: 'Secondary weapons deal 50% less damage.',
            bonusXp: 600,
        },
    },
    '2025/07/04': {
        job: 'level_tnd',
        card: {
            rarity: 'rare',
            name: 'Glorious Bastards',
            positiveDescription: 'Enemies take 10% more damage.',
            negativeDescription: 'Warcries are disabled.',
            bonusXp: 2700,
        },
    },
    '2025/07/05': {
        job: 'level_tnd',
        card: {
            rarity: 'rare',
            name: 'Bounty Worth Dying For',
            positiveDescription: 'Bleedout timer increased by 5 seconds.',
            negativeDescription: 'Warcries are disabled.',
            bonusXp: 2600,
        },
    },
    '2025/07/06': {
        job: 'level_bunker_test',
        card: {
            rarity: 'common',
            name: 'Big Iron',
            positiveDescription: 'Secondary weapons deal 1% more damage.',
            negativeDescription: 'Players reload 20% slower.',
            bonusXp: 1200,
        },
    },
    '2025/07/07': {
        job: 'level_bunker_test',
        card: {
            rarity: 'common',
            name: 'Wanted Want-er',
            positiveDescription: 'Headshot damage increased by 25%',
            negativeDescription: 'Enemies have 25% more Health',
            bonusXp: 600,
        },
    },
    '2025/07/08': {
        job: 'jobs_clear_skies_part_2',
        card: {
            rarity: 'common',
            name: 'Wicked West Berlin',
            positiveDescription: 'Loot pickup rewards increased by 5%',
            negativeDescription: 'Players cannot sprint.',
            bonusXp: 1200,
        },
    },
    '2025/07/09': {
        job: 'level_flakturm',
        card: {
            rarity: 'common',
            name: 'Bullseye',
            positiveDescription: 'Headshot damage increased by 30%',
            negativeDescription:
                'Reloading weapons leaves them with random amount of bullets.',
            bonusXp: 900,
        },
    },
    '2025/07/10': {
        job: 'level_convoy',
        card: {
            rarity: 'common',
            name: 'Bounty Worth Dying For',
            positiveDescription: 'Bleedout timer increased by 10 seconds.',
            negativeDescription: 'Player movement speed is reduced by 10%.',
            bonusXp: 300,
        },
    },
    '2025/07/11': {
        job: 'level_ger_bridge',
        card: {
            rarity: 'common',
            name: 'Soured Kraut',
            positiveDescription: 'Players have 1 more lives.',
            negativeDescription: 'Enemies deal 25% more damage.',
            bonusXp: 1200,
        },
    },
    '2025/07/12': {
        job: 'level_hunters',
        card: {
            rarity: 'uncommon',
            name: 'Glorious Bastards',
            positiveDescription: 'Enemies take 10% more damage.',
            negativeDescription:
                'Reloading weapons leaves them with random amount of bullets.',
            bonusXp: 1700,
        },
    },
    '2025/07/13': {
        job: 'level_hunters',
        card: {
            rarity: 'uncommon',
            name: 'Where are the bullets?',
            positiveDescription: 'Crit chances are increased by 25%.',
            negativeDescription:
                'Primary weapons ammo capacity is reduced to 0%.',
            bonusXp: 2000,
        },
    },
    '2025/07/14': {
        job: 'jobs_oper_flamable_part_3',
        card: {
            rarity: 'uncommon',
            name: 'Ace-High',
            positiveDescription: 'Headshot damage increased by 10%',
            negativeDescription: 'Secondary weapons deal 95% less damage.',
            bonusXp: 2300,
        },
    },
    '2025/07/15': {
        job: 'jobs_oper_flamable_part_3',
        card: {
            rarity: 'common',
            name: 'Blammo Ammo',
            positiveDescription: 'Ammo loot drops refill equipment.',
            negativeDescription: 'Player movement speed is reduced by 20%.',
            bonusXp: 300,
        },
    },
    '2025/07/16': {
        job: 'level_radio_defense',
        card: {
            rarity: 'uncommon',
            name: 'Where are the bullets?',
            positiveDescription: 'Enemies take 10% more damage.',
            negativeDescription:
                'Primary weapons ammo capacity is reduced to 50%.',
            bonusXp: 1500,
        },
    },
    '2025/07/17': {
        job: 'level_silo',
        card: {
            rarity: 'common',
            name: 'Heroes of Kelly',
            positiveDescription: 'Player Health is increased by 50%.',
            negativeDescription: 'Melee weapons deal 50% less damage.',
            bonusXp: 300,
        },
    },
    '2025/07/18': {
        job: 'level_silo',
        card: {
            rarity: 'rare',
            name: 'Let the Bullets Fly',
            positiveDescription: 'Primary weapons deal 1% more damage.',
            negativeDescription: 'Secondary weapons deal 95% less damage.',
            bonusXp: 2700,
        },
    },
    '2025/07/19': {
        job: 'level_tnd',
        card: {
            rarity: 'common',
            name: 'Spaghetti Hans',
            positiveDescription: 'Melee weapons deal 200% more damage.',
            negativeDescription: 'Players reload 10% slower.',
            bonusXp: 300,
        },
    },
    '2025/07/20': {
        job: 'level_tnd',
        card: {
            rarity: 'uncommon',
            name: 'Blammo sweep',
            positiveDescription: 'Ammo loot drops refill equipment.',
            negativeDescription: 'Warcries are disabled.',
            bonusXp: 2100,
        },
    },
    '2025/07/21': {
        job: 'jobs_clear_skies_part_6',
        card: {
            rarity: 'uncommon',
            name: "Sheriff's in town",
            positiveDescription:
                'Secondary weapons ammo capacity is increased by 40%.',
            negativeDescription:
                'Players can only hipfire weapons and can no longer sprint.',
            bonusXp: 2200,
        },
    },
    '2025/07/22': {
        job: 'jobs_clear_skies_part_4',
        card: {
            rarity: 'uncommon',
            name: 'Fast Hands Fritz',
            positiveDescription: 'Players reload 20% faster.',
            negativeDescription: 'Player Health is reduced by 25%.',
            bonusXp: 1500,
        },
    },
    '2025/07/23': {
        job: 'jobs_clear_skies_part_4',
        card: {
            rarity: 'common',
            name: 'Tally-ho!',
            positiveDescription: 'Player movement speed is increased by 10%.',
            negativeDescription: 'Players cannot sprint.',
            bonusXp: 1100,
        },
    },
    '2025/07/24': {
        job: 'level_flakturm',
        card: {
            rarity: 'uncommon',
            name: 'Glorious Bastards',
            positiveDescription: 'Enemies take 10% more damage.',
            negativeDescription:
                'Reloading weapons leaves them with random amount of bullets.',
            bonusXp: 1700,
        },
    },
    '2025/07/25': {
        job: 'level_flakturm',
        card: {
            rarity: 'uncommon',
            name: 'Fastest Hans in the West',
            positiveDescription: 'Players reload 10% faster.',
            negativeDescription:
                'Reloading weapons leaves them with random amount of bullets.',
            bonusXp: 1700,
        },
    },
    '2025/07/26': {
        job: 'level_ger_bridge',
        card: {
            rarity: 'rare',
            name: 'Gestapo and Go',
            positiveDescription: 'Enemies take 20% more damage.',
            negativeDescription: 'Enemies deal 100% more damage.',
            bonusXp: 3000,
        },
    },
    '2025/07/27': {
        job: 'level_hunters',
        card: {
            rarity: 'uncommon',
            name: 'Ace-High',
            positiveDescription: 'Headshot damage increased by 15%',
            negativeDescription: 'Bleedout timer decreased by 20 seconds.',
            bonusXp: 1800,
        },
    },
    '2025/07/28': {
        job: 'level_hunters',
        card: {
            rarity: 'uncommon',
            name: 'Fast Hands Fritz',
            positiveDescription: 'Players reload 50% faster.',
            negativeDescription: 'Enemies take 50% less damage.',
            bonusXp: 2300,
        },
    },
    '2025/07/29': {
        job: 'jobs_oper_flamable_part_3',
        card: {
            rarity: 'common',
            name: 'Heroes of Kelly',
            positiveDescription: 'Player Health is increased by 50%.',
            negativeDescription: 'Loot drop chance decreased by 30%.',
            bonusXp: 600,
        },
    },
    '2025/07/30': {
        job: 'jobs_oper_flamable_part_3',
        card: {
            rarity: 'rare',
            name: 'Handy Hans',
            positiveDescription: 'Enemies deal 5% less damage.',
            negativeDescription: 'Melee weapons only.',
            bonusXp: 2700,
        },
    },
    '2025/07/31': {
        job: 'level_radio_defense',
        card: {
            rarity: 'uncommon',
            name: 'Where are the bullets?',
            positiveDescription: 'Melee weapons deal 200% more damage.',
            negativeDescription:
                'Primary weapons ammo capacity is reduced to 0%.',
            bonusXp: 1500,
        },
    },
    '2025/08/01': {
        job: 'level_hunters',
        card: {
            rarity: 'uncommon',
            name: 'Poker Faces',
            positiveDescription: 'Loot pickup rewards increased by 5%',
            negativeDescription: 'Bleedout timer reduced to 20 seconds',
            bonusXp: 1400,
        },
    },
    '2025/08/02': {
        job: 'jobs_oper_flamable_part_3',
        card: {
            rarity: 'rare',
            name: 'Dead and Deader',
            positiveDescription: 'Player Health is increased by 25%.',
            negativeDescription:
                'Players have 3 less lives. (Minimum of 1 life)',
            bonusXp: 2400,
        },
    },
    '2025/08/03': {
        job: 'level_settlement',
        card: {
            rarity: 'common',
            name: 'Blammo sweep',
            positiveDescription: 'Ammo loot drops refill equipment.',
            negativeDescription: 'Primary weapons deal 25% less damage.',
            bonusXp: 600,
        },
    },
    '2025/08/04': {
        job: 'level_radio_defense',
        card: {
            rarity: 'uncommon',
            name: 'Dry Gunpowder',
            positiveDescription: 'Loot pickup rewards increased by 5%',
            negativeDescription:
                'Primary weapons ammo capacity is reduced to 0%.',
            bonusXp: 2400,
        },
    },
    '2025/08/05': {
        job: 'level_spies_test',
        card: {
            rarity: 'uncommon',
            name: 'Let the Bullets Fly',
            positiveDescription: 'Secondary weapons deal 1% more damage.',
            negativeDescription: 'Melee weapons deal 90% less damage.',
            bonusXp: 1900,
        },
    },
    '2025/08/06': {
        job: 'level_silo',
        card: {
            rarity: 'common',
            name: 'Spaghetti Hans',
            positiveDescription: 'Loot pickup rewards increased by 25%',
            negativeDescription: 'Secondary weapons deal 25% less damage.',
            bonusXp: 800,
        },
    },
    '2025/08/07': {
        job: 'level_train_yard',
        card: {
            rarity: 'common',
            name: 'Wild Warcry',
            positiveDescription: 'Enemies take 20% more damage.',
            negativeDescription: 'Players reload 10% slower.',
            bonusXp: 300,
        },
    },
    '2025/08/08': {
        job: 'jobs_clear_skies_part_6',
        card: {
            rarity: 'rare',
            name: 'Dead and Deader',
            positiveDescription: 'Secondary weapons deal 10% more damage.',
            negativeDescription:
                'Players have 3 less lives. (Minimum of 1 life)',
            bonusXp: 2800,
        },
    },
    '2025/08/09': {
        job: 'jobs_clear_skies_part_6',
        card: {
            rarity: 'common',
            name: 'Heroes of Kelly',
            positiveDescription: 'Player Health is increased by 10%.',
            negativeDescription: 'Melee weapons deal 50% less damage.',
            bonusXp: 1100,
        },
    },
    '2025/08/10': {
        job: 'jobs_clear_skies_part_4',
        card: {
            rarity: 'common',
            name: 'Glorious Bastards',
            positiveDescription: 'Enemies take 25% more damage.',
            negativeDescription: 'Players reload 20% slower.',
            bonusXp: 600,
        },
    },
    '2025/08/11': {
        job: 'jobs_clear_skies_part_4',
        card: {
            rarity: 'uncommon',
            name: 'Gestapo and Go',
            positiveDescription: 'Headshot damage increased by 15%',
            negativeDescription: 'Enemies deal 50% more damage.',
            bonusXp: 1700,
        },
    },
};
