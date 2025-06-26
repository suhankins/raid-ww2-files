import prettifyNumber from '@/utils/prettifyNumber';
import { type ISteamStats } from '@/lib/ISteamStats';
import getKillsByWeaponType from '@/utils/getWeaponStats/getKillsByWeaponType';
import toPercentage from '@/utils/toPercentage';
import formatPluralString from './formatPluralString';
import {
    getWeaponByBestAccuracy,
    getWeaponByWorstAccuracy,
} from './getWeaponWeaponByCondition';

export type Banner = {
    icon: string;
    getter: (stats: ISteamStats) => number;
    formatter: (
        x: number,
        stats: ISteamStats
    ) => {
        value?: string;
        text: string;
    };
    weight: number | ((x: number, totalKills: number) => number);
    negative?: boolean;
    requirement?: (x: number) => boolean;
};

function getStringWithPluralNoun(
    noun: string,
    postfix: string | undefined,
    count: number
): string {
    if (postfix) {
        return `${formatPluralString(noun, count)} ${postfix}`;
    }
    return `${formatPluralString(noun, count)}`;
}

const getNumberFormatter = (noun: string, postfix?: string) => (x: number) => ({
    value: prettifyNumber(x),
    text: getStringWithPluralNoun(noun, postfix, x),
});

const getPercentageFormatter = (noun: string) => (x: number) => ({
    value: toPercentage(x),
    text: noun,
});

/**
 * @param importanceThreshold how many percents should it be before it's shown above kills
 */
const getPercentageWeight =
    (importanceThreshold: number) => (fraction: number, totalKills: number) =>
        (totalKills / importanceThreshold) * fraction * 100;

export const HallOfFameBannersDB: Banner[] = [
    {
        icon: 'kills',
        getter: (stats: ISteamStats) => getKillsByWeaponType('all', stats),
        formatter: getNumberFormatter('nazi', 'killed'),
        weight: 1,
    },
    {
        icon: 'headshots',
        getter: (stats: ISteamStats) =>
            stats.ach_kill_enemies_with_headshot ?? 0,
        formatter: getNumberFormatter('head', 'blown'),
        weight: 1.1,
    },
    {
        icon: 'revives',
        getter: (stats: ISteamStats) => stats.ach_revive_teammates ?? 0,
        formatter: getNumberFormatter('teammate', 'revived'),
        weight: 100,
    },
    {
        icon: 'cards',
        getter: (stats: ISteamStats) =>
            (stats.challenge_cards_start_raid_total_count ?? 0) +
            (stats.challenge_cards_start_operation_total_count ?? 0),
        formatter: getNumberFormatter('mission', 'with cards played'),
        weight: 110,
    },
    {
        icon: 'dismember',
        getter: (stats: ISteamStats) => stats.ach_dismember_enemies ?? 0,
        formatter: getNumberFormatter('limb', 'cut'),
        weight: 2.5,
    },
    {
        icon: 'best',
        getter: (stats: ISteamStats) => stats.ach_top_stats_award ?? 0,
        formatter: getNumberFormatter('"Best of" award'),
        weight: 200,
    },
    {
        icon: 'secondary',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('secondary', stats) /
            getKillsByWeaponType('all', stats),
        formatter: getPercentageFormatter('kills with secondary'),
        weight: getPercentageWeight(20),
        requirement: (x) => x > 0.2,
    },
    {
        icon: 'grenade',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('grenade', stats) /
            getKillsByWeaponType('all', stats),
        formatter: getPercentageFormatter('kills with explosives'),
        weight: getPercentageWeight(12),
        requirement: (x) => x > 0.12,
    },
    {
        icon: 'melee',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('melee', stats) /
            getKillsByWeaponType('all', stats),
        formatter: getPercentageFormatter('kills with melee'),
        weight: getPercentageWeight(10),
        requirement: (x) => x > 0.1,
    },
    {
        icon: 'turret',
        getter: (stats: ISteamStats) =>
            (stats.ach_kill_enemies_with_turret ?? 0) /
            getKillsByWeaponType('all', stats),
        formatter: getPercentageFormatter('kills with mounted MG'),
        weight: getPercentageWeight(5),
        requirement: (x) => x > 0.05,
    },
    {
        icon: 'box',
        getter: (stats: ISteamStats) => stats.ach_open_loot_crates ?? 0,
        formatter: getNumberFormatter('loot crate', 'open'),
        weight: 5,
    },
    {
        icon: 'never_played',
        getter: (stats: ISteamStats) => (stats.game_played === 1 ? 0 : 1),
        formatter: () => ({ text: 'Never seen on the battlefield' }),
        weight: Infinity,
        negative: true,
    },
    {
        icon: 'character',
        getter: (stats: ISteamStats) => stats.ach_create_character ?? 0,
        formatter: getNumberFormatter('character', 'created'),
        weight: 100,
    },
    {
        icon: 'dogtag',
        getter: (stats: ISteamStats) => stats.dogtags_collected ?? 0,
        formatter: getNumberFormatter('dogtag', 'collected'),
        weight: 30,
    },
    {
        icon: 'gold',
        getter: (stats: ISteamStats) => stats.player_gold_amount ?? 0,
        formatter: getNumberFormatter('gold bar', 'in the Camp'),
        weight: Infinity,
    },
    {
        icon: 'coin',
        getter: (stats: ISteamStats) => stats.grenade_kills_decoy_coin ?? 0,
        formatter: getNumberFormatter('kill', 'with a coin'),
        weight: 1_000,
    },
    {
        icon: 'bounty',
        getter: (stats: ISteamStats) =>
            stats.bounty_cards_complete_mission_grand_total ?? 0,
        formatter: getNumberFormatter('bounty', 'collected'),
        weight: 1_000,
    },
    {
        icon: 'bounty',
        getter: (stats: ISteamStats) =>
            1.0 - getWeaponByWorstAccuracy(stats).accuracy,
        formatter: (x, stats) => ({
            text: `accuracy with ${getWeaponByWorstAccuracy(stats).name}`,
            value: toPercentage(1.0 - x),
        }),
        weight: 20_000,
        requirement: (x) => x > 0.95,
        negative: true,
    },
    {
        icon: 'bounty',
        getter: (stats: ISteamStats) => getWeaponByBestAccuracy(stats).accuracy,
        formatter: (x, stats) => ({
            text: `accuracy with ${getWeaponByBestAccuracy(stats).name}`,
            value: toPercentage(x),
        }),
        weight: 50_000,
        requirement: (x) => x > 0.8,
        negative: true,
    },
] as const;
