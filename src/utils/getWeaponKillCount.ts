import { ISteamStats } from '@/lib/ISteamStats';
import { Weapon } from './WeaponsDB';

export function getWeaponKillCount(
    weapon: Weapon,
    stats: ISteamStats
): number | undefined {
    switch (weapon.type) {
        case 'primary':
        case 'secondary':
            return stats[`weapon_kills_${weapon.id}`];
        case 'melee':
            return stats[`melee_kills_${weapon.id}`];
        case 'grenade':
        case 'mine':
            return stats[`grenade_kills_${weapon.id}`];
        case 'turret':
            return stats.ach_kill_enemies_with_turret;
        case 'all':
            return stats.ach_kill_enemies;
    }
}
