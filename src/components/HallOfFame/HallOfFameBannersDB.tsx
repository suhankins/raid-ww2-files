import prettifyNumber from '@/utils/prettifyNumber';
import { ISteamStats } from '../../lib/ISteamStats';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import toPercentage from '@/utils/toPercentage';

export type Banner = {
    icon: string;
    getter: (stats: ISteamStats) => number;
    render: (x: number) => React.ReactNode;
    weight: number | ((x: number, totalKills: number) => number);
    negative?: boolean;
};

export const HallOfFameBannersDB: Banner[] = [
    {
        icon: 'kills',
        getter: (stats: ISteamStats) => getKillsByWeaponType('all', stats),
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> nazis killed
            </>
        ),
        weight: 1,
    },
    {
        icon: 'headshots',
        getter: (stats: ISteamStats) =>
            stats.ach_kill_enemies_with_headshot ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> heads blown
            </>
        ),
        weight: 1.1,
    },
    {
        icon: 'revives',
        getter: (stats: ISteamStats) => stats.ach_revive_teammates ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> teammates revived
            </>
        ),
        weight: 100,
    },
    {
        icon: 'cards',
        getter: (stats: ISteamStats) =>
            (stats.challenge_cards_start_raid_total_count ?? 0) +
            (stats.challenge_cards_start_operation_total_count ?? 0),
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> cards used
            </>
        ),
        weight: 110,
    },
    {
        icon: 'dismember',
        getter: (stats: ISteamStats) => stats.ach_dismember_enemies ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> limbs cut
            </>
        ),
        weight: 2.5,
    },
    {
        icon: 'best',
        getter: (stats: ISteamStats) => stats.ach_top_stats_award ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> &quot;Best of&quot; awards
            </>
        ),
        weight: 200,
    },
    {
        icon: 'secondary',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('secondary', stats) /
            getKillsByWeaponType('all', stats),
        render: (x: number) => (
            <>
                <b>{toPercentage(x)}</b> kills with secondary
            </>
        ),
        weight: (x: number, totalKills: number) => (totalKills / 20) * x * 100,
    },
    {
        icon: 'grenade',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('grenade', stats) /
            getKillsByWeaponType('all', stats),
        render: (x: number) => (
            <>
                <b>{toPercentage(x)}</b> kills with explosives
            </>
        ),
        weight: (x: number, totalKills: number) => (totalKills / 12) * x * 100,
    },
    {
        icon: 'melee',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('melee', stats) /
            getKillsByWeaponType('all', stats),
        render: (x: number) => (
            <>
                <b>{toPercentage(x)}</b> kills with melee
            </>
        ),
        weight: (x: number, totalKills: number) => (totalKills / 10) * x * 100,
    },
    {
        icon: 'turret',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('turret', stats) /
            getKillsByWeaponType('all', stats),
        render: (x: number) => (
            <>
                <b>{toPercentage(x)}</b> kills with mounted MG
            </>
        ),
        weight: (x: number, totalKills: number) => (totalKills / 10) * x * 100,
    },
    {
        icon: 'box',
        getter: (stats: ISteamStats) => stats.ach_open_loot_crates ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b> loot crates open
            </>
        ),
        weight: 5,
    },
    {
        icon: 'never_played',
        getter: (stats: ISteamStats) => (stats.game_played === 1 ? 0 : 1),
        render: () => 'Never seen on the battlefield',
        weight: Infinity,
        negative: true,
    },
    {
        icon: 'character',
        getter: (stats: ISteamStats) => stats.ach_create_character ?? 0,
        render: (x: number) => (
            <>
                <b>{x}</b> characters created
            </>
        ),
        weight: 100,
    },
] as const;