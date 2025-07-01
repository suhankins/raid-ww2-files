import { type IRaid } from '@/app/[steamid]/_components/RaidsTable/IJob';
import {
    DAILY_BOUNTY_EFFECTS,
    getSortedEffectNames,
} from './DailyBountyEffectsDB';
import { dieselRandomSeed, tableRandom } from './DieselRandom';
import { type IEffect } from '@/lib/IDailyBountyEffect';
import { RAIDS } from './RaidDB';
import { type IRarity } from '@/lib/IRarity';

const POSSIBLE_JOBS = [
    'level_bunker_test',
    'jobs_clear_skies_part_6', // 'clear_skies_flakturm',
    'jobs_clear_skies_part_2', // 'clear_skies_gold_rush',
    'jobs_clear_skies_part_4', // 'clear_skies_radio_defense',
    'level_convoy',
    'level_flakturm',
    'level_forest_bunker',
    'level_ger_bridge',
    'level_gold_rush',
    'level_hunters',
    'level_kelly',
    'jobs_oper_flamable_part_3', // 'oper_flamable_bridge',
    'jobs_oper_flamable_part_4', // 'oper_flamable_castle',
    'level_radio_defense',
    'level_settlement',
    'level_silo',
    'level_spies_test',
    'level_tnd',
    'level_train_yard',
];

function generateBountyCardEffects(jobData: IRaid) {
    let name = '';
    let difficulty = 0;
    const effectForbids = jobData.forbidBuffs || [];
    const effectsLibKeys = getSortedEffectNames();
    let effectNegativeKey = tableRandom(effectsLibKeys);
    let effectNegativeData = DAILY_BOUNTY_EFFECTS[effectNegativeKey];

    while (!effectNegativeData.negative_effect) {
        effectNegativeKey = tableRandom(effectsLibKeys);
        effectNegativeData = DAILY_BOUNTY_EFFECTS[effectNegativeKey];
    }

    const effectNegativeStats = tableRandom(
        effectNegativeData.negative_effect as IEffect[]
    );

    if (effectNegativeData.forbids) {
        effectForbids.push(...effectNegativeData.forbids);
    }

    if (effectNegativeData.names && effectNegativeData.names.negative_effect) {
        name = tableRandom(effectNegativeData.names.negative_effect);
    }

    if (effectNegativeStats.added_forbids) {
        effectForbids.push(...effectNegativeStats.added_forbids);
    }

    if (effectNegativeStats.difficulty) {
        difficulty += effectNegativeStats.difficulty;
    }

    let effectPositiveKey = tableRandom(effectsLibKeys);
    let effectPositiveData = DAILY_BOUNTY_EFFECTS[effectPositiveKey];

    while (
        effectForbids.includes(effectPositiveKey) ||
        effectPositiveKey === effectNegativeKey ||
        !effectPositiveData.positive_effect
    ) {
        effectPositiveKey = tableRandom(effectsLibKeys);
        effectPositiveData = DAILY_BOUNTY_EFFECTS[effectPositiveKey];
    }

    const effectPositiveStats = tableRandom(effectPositiveData.positive_effect);

    if (
        name === '' &&
        effectPositiveData.names &&
        effectPositiveData.names.positive_effect
    ) {
        name = tableRandom(effectPositiveData.names.positive_effect);
    }

    if (effectPositiveStats.difficulty) {
        difficulty += effectPositiveStats.difficulty;
    }

    return {
        difficulty,
        name,
        positiveDescription: effectPositiveStats.text,
        negativeDescription: effectNegativeStats.text,
    };
}

function getBountyCard(seed: number, jobData: IRaid) {
    dieselRandomSeed(seed);

    const {
        difficulty,
        name: generatedName,
        positiveDescription,
        negativeDescription,
    } = generateBountyCardEffects(jobData);

    // Clamp
    const diffXpRange = Math.min(Math.max(difficulty, 0.1), 1);
    const bonusXp = Math.round((3000 * diffXpRange) / 100) * 100;
    let rarity = 'common';

    if (diffXpRange < 0.45) {
        rarity = 'common';
    } else if (diffXpRange < 0.8) {
        rarity = 'uncommon';
    } else {
        rarity = 'rare';
    }

    const name =
        generatedName !== ''
            ? generatedName
            : tableRandom([
                  'Wicked West Berlin',
                  'Spaghetti Hans',
                  'Poker Faces',
                  'Wild Warcry',
              ]);

    return {
        rarity: rarity as IRarity,
        name,
        positiveDescription,
        negativeDescription,
        bonusXp,
    };
}

export function getDailyJob(seed: number) {
    dieselRandomSeed(seed);

    const bountyJobName = tableRandom(POSSIBLE_JOBS);
    const raid = RAIDS.find((raid) => raid.id === bountyJobName) as IRaid;
    const card = getBountyCard(seed, raid);

    return {
        job: bountyJobName,
        card: card,
    };
}
