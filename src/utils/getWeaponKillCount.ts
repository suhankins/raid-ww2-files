import { ISteamStats } from '@/lib/ISteamStats';

export function getWeaponKillCount(
    weaponId: string,
    stats: ISteamStats
): number | undefined {
    return (
        stats[`weapon_kills_${weaponId}`] ||
        stats[`melee_kills_${weaponId}`] ||
        stats[`grenade_kills_${weaponId}`]
    );
}
