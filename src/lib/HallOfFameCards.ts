import prettifyNumber from '@/utils/prettifyNumber';
import { ISteamStats } from './ISteamStats';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import toPercentage from '@/utils/toPercentage';

export const HallOfFameCards = [
    {
        icon: 'kills',
        getter: (stats: ISteamStats) => getKillsByWeaponType('all', stats),
        formatter: (x: number) => `${prettifyNumber(x)} nazis killed`,
        weight: 1,
    },
    {
        icon: 'headshots',
        getter: (stats: ISteamStats) =>
            stats.ach_kill_enemies_with_headshot ?? 0,
        formatter: (x: number) => `${prettifyNumber(x)} heads blown`,
        weight: 1.1,
    },
    {
        icon: 'revives',
        getter: (stats: ISteamStats) => stats.ach_revive_teammates ?? 0,
        formatter: (x: number) => `${prettifyNumber(x)} teammates revived`,
        weight: 100,
    },
    {
        icon: 'cards',
        getter: (stats: ISteamStats) =>
            (stats.challenge_cards_start_raid_total_count ?? 0) +
            (stats.challenge_cards_start_operation_total_count ?? 0),
        formatter: (x: number) => `${prettifyNumber(x)} cards used`,
        weight: 110,
    },
    {
        icon: 'dismember',
        getter: (stats: ISteamStats) => stats.ach_dismember_enemies ?? 0,
        formatter: (x: number) => `${prettifyNumber(x)} limbs cut`,
        weight: 2.5,
    },
    {
        icon: 'best',
        getter: (stats: ISteamStats) => stats.ach_top_stats_award ?? 0,
        formatter: (x: number) => `${prettifyNumber(x)} "Best of" awards`,
        weight: 200,
    },
    {
        icon: 'secondary',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('secondary', stats) /
            getKillsByWeaponType('all', stats),
        formatter: (x: number) => `${toPercentage(x)} kills with secondary`,
        weight: (x: number, totalKills: number) => (totalKills / 20) * x * 100,
    },
    {
        icon: 'grenade',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('grenade', stats) /
            getKillsByWeaponType('all', stats),
        formatter: (x: number) => `${toPercentage(x)} kills with explosives`,
        weight: (x: number, totalKills: number) => (totalKills / 12) * x * 100,
    },
    {
        icon: 'melee',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('melee', stats) /
            getKillsByWeaponType('all', stats),
        formatter: (x: number) => `${toPercentage(x)} kills with melee`,
        weight: (x: number, totalKills: number) => (totalKills / 10) * x * 100,
    },
    {
        icon: 'turret',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('turret', stats) /
            getKillsByWeaponType('all', stats),
        formatter: (x: number) => `${toPercentage(x)} kills with mounted MG`,
        weight: (x: number, totalKills: number) => (totalKills / 10) * x * 100,
    },
    {
        icon: 'box',
        getter: (stats: ISteamStats) => stats.ach_open_loot_crates ?? 0,
        formatter: (x: number) => `${prettifyNumber(x)} loot crates  open`,
        weight: 5,
    },
] as const;
