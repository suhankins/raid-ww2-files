import prettifyNumber from '@/utils/prettifyNumber';
import { type ISteamStats } from '@/lib/ISteamStats';
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
                <b>{prettifyNumber(x)}</b>
                <br />
                nazis killed
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
                <b>{prettifyNumber(x)}</b>
                <br />
                heads blown
            </>
        ),
        weight: 1.1,
    },
    {
        icon: 'revives',
        getter: (stats: ISteamStats) => stats.ach_revive_teammates ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b>
                <br />
                teammates revived
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
                <b>{prettifyNumber(x)}</b>
                <br />
                missions with cards played
            </>
        ),
        weight: 110,
    },
    {
        icon: 'dismember',
        getter: (stats: ISteamStats) => stats.ach_dismember_enemies ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b>
                <br />
                limbs cut
            </>
        ),
        weight: 2.5,
    },
    {
        icon: 'best',
        getter: (stats: ISteamStats) => stats.ach_top_stats_award ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b>
                <br />
                &quot;Best of&quot; awards
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
                <b>{toPercentage(x)}</b>
                <br />
                kills with secondary
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
                <b>{toPercentage(x)}</b>
                <br />
                kills with explosives
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
                <b>{toPercentage(x)}</b>
                <br />
                kills with melee
            </>
        ),
        weight: (x: number, totalKills: number) => (totalKills / 10) * x * 100,
    },
    {
        icon: 'turret',
        getter: (stats: ISteamStats) =>
            (stats.ach_kill_enemies_with_turret ?? 0) /
            getKillsByWeaponType('all', stats),
        render: (x: number) => (
            <>
                <b>{toPercentage(x)}</b>
                <br />
                kills with mounted MG
            </>
        ),
        weight: (x: number, totalKills: number) => (totalKills / 10) * x * 100,
    },
    {
        icon: 'box',
        getter: (stats: ISteamStats) => stats.ach_open_loot_crates ?? 0,
        render: (x: number) => (
            <>
                <b>{prettifyNumber(x)}</b>
                <br />
                loot crates open
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
                <b>{x}</b>
                <br />
                characters created
            </>
        ),
        weight: 100,
    },
    {
        icon: 'dogtag',
        getter: (stats: ISteamStats) => stats.dogtags_collected ?? 0,
        render: (x: number) => (
            <>
                <b>{x}</b>
                <br />
                dogtags collected
            </>
        ),
        weight: 30,
    },
    {
        icon: 'gold',
        getter: (stats: ISteamStats) => stats.player_gold_amount ?? 0,
        render: (x: number) => (
            <>
                <b>{x}</b>
                <br />
                gold bars in the Camp
            </>
        ),
        weight: 20,
    },
] as const;
