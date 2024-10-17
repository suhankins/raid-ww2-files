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

const getNumberRenderer = (children: React.ReactNode) => {
    const percentageRendererComponent = (x: number) => (
        <>
            <b>{prettifyNumber(x)}</b>
            <br />
            {children}
        </>
    );
    return percentageRendererComponent;
};

const getPercentageRenderer = (children: React.ReactNode) => {
    const percentageRendererComponent = (x: number) => (
        <>
            <b>{toPercentage(x)}</b>
            <br />
            {children}
        </>
    );
    return percentageRendererComponent;
};

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
        render: getNumberRenderer('nazis killed'),
        weight: 1,
    },
    {
        icon: 'headshots',
        getter: (stats: ISteamStats) =>
            stats.ach_kill_enemies_with_headshot ?? 0,
        render: getNumberRenderer('heads blown'),
        weight: 1.1,
    },
    {
        icon: 'revives',
        getter: (stats: ISteamStats) => stats.ach_revive_teammates ?? 0,
        render: getNumberRenderer('teammates revived'),
        weight: 100,
    },
    {
        icon: 'cards',
        getter: (stats: ISteamStats) =>
            (stats.challenge_cards_start_raid_total_count ?? 0) +
            (stats.challenge_cards_start_operation_total_count ?? 0),
        render: getNumberRenderer('missions with cards played'),
        weight: 110,
    },
    {
        icon: 'dismember',
        getter: (stats: ISteamStats) => stats.ach_dismember_enemies ?? 0,
        render: getNumberRenderer('limbs cut'),
        weight: 2.5,
    },
    {
        icon: 'best',
        getter: (stats: ISteamStats) => stats.ach_top_stats_award ?? 0,
        render: getNumberRenderer(<>&quot;Best of&quot; awards</>),
        weight: 200,
    },
    {
        icon: 'secondary',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('secondary', stats) /
            getKillsByWeaponType('all', stats),
        render: getPercentageRenderer('kills with secondary'),
        weight: getPercentageWeight(20),
    },
    {
        icon: 'grenade',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('grenade', stats) /
            getKillsByWeaponType('all', stats),
        render: getPercentageRenderer('kills with explosives'),
        weight: getPercentageWeight(12),
    },
    {
        icon: 'melee',
        getter: (stats: ISteamStats) =>
            getKillsByWeaponType('melee', stats) /
            getKillsByWeaponType('all', stats),
        render: getPercentageRenderer('kills with melee'),
        weight: getPercentageWeight(10),
    },
    {
        icon: 'turret',
        getter: (stats: ISteamStats) =>
            (stats.ach_kill_enemies_with_turret ?? 0) /
            getKillsByWeaponType('all', stats),
        render: getPercentageRenderer('kills with mounted MG'),
        weight: getPercentageWeight(10),
    },
    {
        icon: 'box',
        getter: (stats: ISteamStats) => stats.ach_open_loot_crates ?? 0,
        render: getNumberRenderer('loot crates open'),
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
        render: getNumberRenderer('characters created'),
        weight: 100,
    },
    {
        icon: 'dogtag',
        getter: (stats: ISteamStats) => stats.dogtags_collected ?? 0,
        render: getNumberRenderer('dogtags collected'),
        weight: 30,
    },
    {
        icon: 'gold',
        getter: (stats: ISteamStats) => stats.player_gold_amount ?? 0,
        render: getNumberRenderer('gold bars in the Camp'),
        weight: 20,
    },
    {
        icon: 'coin',
        getter: (stats: ISteamStats) => stats.grenade_kills_decoy_coin ?? 0,
        render: getNumberRenderer('kills with a coin'),
        weight: 1_000,
    },
] as const;
