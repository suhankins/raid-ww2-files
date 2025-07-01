import { type IDailyBountyEffect } from '@/lib/IDailyBountyEffect';

export const DAILY_BOUNTY_EFFECTS: { [key: string]: IDailyBountyEffect } = {
    effect_player_cannot_sprint: {
        negative_effect: [{ difficulty: 0.45, text: 'Players cannot sprint.' }],
    },
    effect_player_cannot_ads: {
        negative_effect: [
            { difficulty: 0.5, text: 'Players can only hipfire weapons.' },
        ],
    },
    ammo_pickups_refill_grenades: {
        positive_effect: [
            { difficulty: -0.3, text: 'Ammo loot drops refill equipment.' },
        ],
        forbids: ['players_only_melee'],
        names: { positive_effect: ['Blammo sweep', 'Blammo Ammo'] },
    },
    player_primary_damage: {
        names: { positive_effect: ['Let the Bullets Fly'] },
        forbids: [
            'enemies_receive_damage',
            'enemy_health',
            'player_primary_ammo_capacity',
        ],
        negative_effect: [
            {
                text: 'Primary weapons deal 25% less damage.',
                difficulty: 0.5,
            },
            {
                text: 'Primary weapons deal 50% less damage.',
                difficulty: 0.6,
            },
            {
                text: 'Primary weapons deal 75% less damage.',
                difficulty: 0.8,
            },
            { text: 'Primary weapons deal 95% less damage.', difficulty: 1 },
        ],
        positive_effect: [
            {
                text: 'Primary weapons deal 1% more damage.',
                difficulty: -0.01,
            },
            {
                text: 'Primary weapons deal 5% more damage.',
                difficulty: -0.05,
            },
            {
                text: 'Primary weapons deal 10% more damage.',
                difficulty: -0.1,
            },
            {
                text: 'Primary weapons deal 20% more damage.',
                difficulty: -0.2,
            },
            {
                text: 'Primary weapons deal 30% more damage.',
                difficulty: -0.3,
            },
        ],
    },
    bags_dont_slow_players_down: {
        positive_effect: [
            {
                difficulty: -0.25,
                text: 'Carry items do not slow players down.',
            },
        ],
    },
    player_can_move_only_back_and_side: {
        names: { negative_effect: ['Cowboy Crabs'] },
        negative_effect: [
            {
                difficulty: 666.666,
                text: 'You can only walk backwards or sideways (strafe)',
            },
        ],
    },
    effect_player_movement_speed: {
        positive_effect: [
            {
                text: 'Player movement speed is increased by 10%.',
                difficulty: -0.1,
            },
            {
                text: 'Player movement speed is increased by 20%.',
                difficulty: -0.75,
            },
            {
                text: 'Player movement speed is increased by 30%.',
                difficulty: -0.1,
            },
        ],
        names: {
            positive_effect: ['Giddy Up', 'Without Fuhrer Delay', 'Tally-ho!'],
        },
        negative_effect: [
            {
                text: 'Player movement speed is reduced by 10%.',
                difficulty: 0.25,
            },
            {
                text: 'Player movement speed is reduced by 15%.',
                difficulty: 0.28,
            },
            {
                text: 'Player movement speed is reduced by 20%.',
                difficulty: 0.3,
            },
        ],
    },
    effect_player_carry_invert_speed: {
        positive_effect: [
            {
                difficulty: -0.3,
                text: 'Carry weight penalties are instead positives.',
            },
        ],
    },
    player_headshot_damage: {
        positive_effect: [
            { text: 'Headshot damage increased by 10%', difficulty: -0.15 },
            { text: 'Headshot damage increased by 15%', difficulty: -0.2 },
            { text: 'Headshot damage increased by 20%', difficulty: -0.25 },
            { text: 'Headshot damage increased by 25%', difficulty: -0.3 },
            { text: 'Headshot damage increased by 30%', difficulty: -0.35 },
            { text: 'Headshot damage increased by 50%', difficulty: -0.5 },
        ],
        forbids: ['player_headshot_doesnt_do_damage'],
        names: { positive_effect: ['Ace-High', 'Bullseye', 'Deadshot'] },
    },
    effect_player_dooms_day: {
        names: { negative_effect: ['Draw!', "Sheriff's in town"] },
        negative_effect: [
            {
                includes: {
                    effect_player_cannot_sprint: { value: true },
                    effect_player_cannot_ads: { value: true },
                },
                difficulty: 0.82,
                text: 'Players can only hipfire weapons and can no longer sprint.',
            },
        ],
    },
    effect_player_random_reload: {
        negative_effect: [
            {
                difficulty: 0.65,
                text: 'Reloading weapons leaves them with random amount of bullets.',
            },
        ],
    },
    player_headshot_doesnt_do_damage: {
        forbids: ['player_headshot_damage'],
        negative_effect: [{ difficulty: 1, text: "Headshots don't do damage" }],
    },
    player_critical_hit_chance: {
        positive_effect: [
            {
                text: 'Crit chances are increased by 10%.',
                difficulty: -0.05,
            },
            {
                text: 'Crit chances are increased by 15%.',
                difficulty: -0.1,
            },
            {
                text: 'Crit chances are increased by 20%.',
                difficulty: -0.15,
            },
            {
                text: 'Crit chances are increased by 25%.',
                difficulty: -0.175,
            },
            {
                text: 'Crit chances are increased by 30%.',
                difficulty: -0.2,
            },
            { text: 'Crit chances are increased by 100%.', difficulty: -1 },
        ],
    },
    player_health: {
        names: { positive_effect: ['Heroes of Kelly'] },
        forbids: ['enemy_does_damage'],
        negative_effect: [
            { text: 'Player Health is reduced by 10%.', difficulty: 0.5 },
            { text: 'Player Health is reduced by 25%.', difficulty: 0.65 },
            { text: 'Player Health is reduced by 50%.', difficulty: 1.2 },
            { text: 'Player Health is reduced by 75%.', difficulty: 1.8 },
        ],
        positive_effect: [
            {
                text: 'Player Health is increased by 10%.',
                difficulty: -0.05,
            },
            {
                text: 'Player Health is increased by 25%.',
                difficulty: -0.2,
            },
            { text: 'Player Health is increased by 50%.', difficulty: -0.4 },
        ],
    },
    modify_bleedout_timer: {
        names: { positive_effect: ['Bounty Worth Dying For'] },
        forbids: ['set_bleedout_timer'],
        negative_effect: [
            {
                text: 'Bleedout timer decreased by 10 seconds.',
                difficulty: 0.4,
            },
            {
                text: 'Bleedout timer decreased by 15 seconds.',
                difficulty: 0.6,
            },
            {
                text: 'Bleedout timer decreased by 20 seconds.',
                difficulty: 0.8,
            },
        ],
        positive_effect: [
            {
                text: 'Bleedout timer increased by 3 seconds.',
                difficulty: -0.1,
            },
            {
                text: 'Bleedout timer increased by 5 seconds.',
                difficulty: -0.15,
            },
            {
                text: 'Bleedout timer increased by 10 seconds.',
                difficulty: -0.2,
            },
        ],
    },
    effect_modify_lives: {
        positive_effect: [
            { text: 'Players have 1 more lives.', difficulty: -0.1 },
        ],
        names: {
            positive_effect: ['Tough As Nails', 'Down or Alive'],
            negative_effect: ['Dead and Deader'],
        },
        negative_effect: [
            {
                text: 'Players have 3 less lives. (Minimum of 1 life)',
                difficulty: 1,
            },
            {
                text: 'Players have 2 less lives. (Minimum of 1 life)',
                difficulty: 0.8,
            },
        ],
    },
    set_bleedout_timer: {
        forbids: ['modify_bleedout_timer'],
        negative_effect: [
            { text: 'Bleedout timer reduced to 3 seconds', difficulty: 1 },
            {
                text: 'Bleedout timer reduced to 10 seconds',
                difficulty: 0.75,
            },
            {
                text: 'Bleedout timer reduced to 15 seconds',
                difficulty: 0.6,
            },
            {
                text: 'Bleedout timer reduced to 20 seconds',
                difficulty: 0.5,
            },
        ],
    },
    enemy_does_damage: {
        names: {
            positive_effect: ['Pass the Whiskey'],
            negative_effect: [
                'Dead or Alive',
                'Gestapo and Go',
                'Soured Kraut',
            ],
        },
        forbids: ['player_health'],
        negative_effect: [
            { text: 'Enemies deal 25% more damage.', difficulty: 0.5 },
            { text: 'Enemies deal 50% more damage.', difficulty: 0.75 },
            { text: 'Enemies deal 75% more damage.', difficulty: 1 },
            { text: 'Enemies deal 100% more damage.', difficulty: 1.5 },
        ],
        positive_effect: [
            { text: 'Enemies deal 5% less damage.', difficulty: -0.1 },
            { text: 'Enemies deal 10% less damage.', difficulty: -0.2 },
        ],
    },
    enemies_receive_damage: {
        positive_effect: [
            { text: 'Enemies take 10% more damage.', difficulty: -0.2 },
            { text: 'Enemies take 20% more damage.', difficulty: -0.4 },
        ],
        forbids: [
            'enemy_health',
            'player_primary_damage',
            'player_secondary_damage',
        ],
        negative_effect: [
            { text: 'Enemies take 30% less damage.', difficulty: 0.4 },
            { text: 'Enemies take 50% less damage.', difficulty: 1 },
            { text: 'Enemies take 70% less damage.', difficulty: 1.5 },
        ],
    },
    reload_speed: {
        names: {
            positive_effect: [
                'Fastest Hans in the West',
                'Fast Hand Hans',
                'Fast Hands Fritz',
            ],
        },
        forbids: ['players_only_melee'],
        negative_effect: [
            { text: 'Players reload 10% slower.', difficulty: 0.3 },
            { text: 'Players reload 20% slower.', difficulty: 0.4 },
            { text: 'Players reload 30% slower.', difficulty: 0.5 },
        ],
        positive_effect: [
            { text: 'Players reload 10% faster.', difficulty: -0.1 },
            { text: 'Players reload 20% faster.', difficulty: -0.15 },
            { text: 'Players reload 30% faster.', difficulty: -0.2 },
            { text: 'Players reload 50% faster.', difficulty: -0.25 },
        ],
    },
    player_secondary_ammo_capacity: {
        positive_effect: [
            {
                text: 'Secondary weapons ammo capacity is increased by 10%.',
                difficulty: -0.05,
            },
            {
                text: 'Secondary weapons ammo capacity is increased by 20%.',
                difficulty: -0.075,
            },
            {
                text: 'Secondary weapons ammo capacity is increased by 40%.',
                difficulty: -0.1,
            },
        ],
        names: {
            positive_effect: [
                'Never Enough Brass',
                'High Ammo High Noon',
                'Loaded to the Teeth',
            ],
            negative_effect: ['Dry Gunpowder', 'Where are the bullets?'],
        },
        negative_effect: [
            {
                text: 'Secondary weapons ammo capacity is reduced to 50%.',
                difficulty: 0.6,
            },
            {
                text: 'Secondary weapons ammo capacity is reduced to 0%.',
                difficulty: 0.75,
                added_forbids: ['player_secondary_damage'],
            },
        ],
    },
    player_primary_ammo_capacity: {
        names: {
            positive_effect: [
                'Never Enough Brass',
                'High Ammo High Noon',
                'Loaded to the Teeth',
            ],
            negative_effect: ['Dry Gunpowder', 'Where are the bullets?'],
        },
        forbids: ['player_primary_damage'],
        negative_effect: [
            {
                text: 'Primary weapons ammo capacity is reduced to 50%.',
                difficulty: 0.7,
            },
            {
                text: 'Primary weapons ammo capacity is reduced to 0%.',
                difficulty: 0.85,
                added_forbids: ['player_primary_damage'],
            },
        ],
        positive_effect: [
            {
                text: 'Primary weapons ammo capacity is increased by 10%.',
                difficulty: -0.075,
            },
            {
                text: 'Primary weapons ammo capacity is increased by 20%.',
                difficulty: -0.1,
            },
            {
                text: 'Primary weapons ammo capacity is increased by 40%.',
                difficulty: -0.125,
            },
        ],
    },
    players_only_melee: {
        names: {
            negative_effect: [
                'Fistful of Reichsmark',
                'Faster than reloading',
                'Handy Hans',
            ],
        },
        forbids: [
            'ammo_pickups_refill_grenades',
            'reload_speed',
            'player_primary_damage',
            'player_primary_ammo_capacity',
            'player_secondary_damage',
            'player_secondary_ammo_capacity',
            'player_headshot_damage',
            'player_headshot_doesnt_do_damage',
            'enemy_loot_drop_chance',
            'enemy_loot_drop_despawn_ammo',
            'enemy_loot_drop_despawn_health',
            'enemy_loot_drop_reward_increase',
        ],
        negative_effect: [{ difficulty: 1, text: 'Melee weapons only.' }],
    },
    players_warcries_disabled: {
        negative_effect: [{ difficulty: 1, text: 'Warcries are disabled.' }],
    },
    enemy_health: {
        names: {
            positive_effect: ['Glorious Bastards'],
            negative_effect: ['Wanted Want-er'],
        },
        forbids: ['enemies_receive_damage'],
        negative_effect: [
            { text: 'Enemies have 25% more Health', difficulty: 0.5 },
            { text: 'Enemies have 50% more Health', difficulty: 0.75 },
            { text: 'Enemies have 75% more Health', difficulty: 1 },
        ],
        positive_effect: [
            { text: 'Enemies take 10% more damage.', difficulty: -0.1 },
            { text: 'Enemies take 25% more damage.', difficulty: -0.2 },
        ],
    },
    enemy_loot_drop_chance: {
        positive_effect: [
            {
                text: 'Loot drop chance increased by 10%.',
                difficulty: -0.1,
            },
            {
                text: 'Loot drop chance increased by 20%.',
                difficulty: -0.2,
            },
            { text: 'Loot drop chance increased by 30%.', difficulty: -0.3 },
        ],
        negative_effect: [
            {
                text: 'Loot drop chance decreased by 10%.',
                difficulty: 0.25,
            },
            { text: 'Loot drop chance decreased by 20%.', difficulty: 0.4 },
            { text: 'Loot drop chance decreased by 30%.', difficulty: 0.6 },
        ],
    },
    enemy_loot_drop_reward_increase: {
        positive_effect: [
            {
                text: 'Loot pickup rewards increased by 5%',
                difficulty: -0.05,
            },
            {
                text: 'Loot pickup rewards increased by 10%',
                difficulty: -0.1,
            },
            {
                text: 'Loot pickup rewards increased by 25%',
                difficulty: -0.15,
            },
        ],
    },
    players_melee_damage_increase: {
        positive_effect: [
            {
                text: 'Melee weapons deal 200% more damage.',
                difficulty: -0.35,
            },
        ],
        forbids: ['players_only_melee'],
        negative_effect: [
            {
                text: 'Melee weapons deal 50% less damage.',
                difficulty: 0.4,
            },
            {
                text: 'Melee weapons deal 90% less damage.',
                difficulty: 0.65,
            },
        ],
    },
    player_secondary_damage: {
        names: { positive_effect: ['Big Iron', 'Let the Bullets Fly'] },
        forbids: [
            'enemies_receive_damage',
            'enemy_health',
            'player_secondary_ammo_capacity',
        ],
        negative_effect: [
            {
                text: 'Secondary weapons deal 25% less damage.',
                difficulty: 0.4,
            },
            {
                text: 'Secondary weapons deal 50% less damage.',
                difficulty: 0.5,
            },
            {
                text: 'Secondary weapons deal 75% less damage.',
                difficulty: 0.7,
            },
            {
                text: 'Secondary weapons deal 95% less damage.',
                difficulty: 0.9,
            },
        ],
        positive_effect: [
            {
                text: 'Secondary weapons deal 1% more damage.',
                difficulty: -0.01,
            },
            {
                text: 'Secondary weapons deal 5% more damage.',
                difficulty: -0.02,
            },
            {
                text: 'Secondary weapons deal 10% more damage.',
                difficulty: -0.08,
            },
            {
                text: 'Secondary weapons deal 20% more damage.',
                difficulty: -0.15,
            },
            {
                text: 'Secondary weapons deal 30% more damage.',
                difficulty: -0.2,
            },
        ],
    },
    effect_time_speed: {
        negative_effect: [
            {
                text: 'The speed of everything is increased by 10%.',
                difficulty: 0.45,
            },
            {
                text: 'The speed of everything is increased by 20%.',
                difficulty: 0.6,
            },
        ],
    },
} as const;

export const getSortedEffectNames = () =>
    Object.keys(DAILY_BOUNTY_EFFECTS).sort();
