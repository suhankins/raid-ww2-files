import type { ISteamStats } from '@/lib/ISteamStats';

/**
 * @example
 * steamStatsArrayToObject([{"name":"equipped_grenade","value":4}]) // {equipped_grenade: 4}
 */
export function steamStatsArrayToObject(
    steamStatsArray?: { name: string; value: number }[]
): ISteamStats {
    const steamStatsObject: ISteamStats = {};
    steamStatsArray?.forEach((steamStat) => {
        steamStatsObject[steamStat.name] = steamStat.value;
    });
    return steamStatsObject;
}
