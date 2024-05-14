import { type Weapon } from './WeaponsDB';
import type { ISteamStats } from '@/lib/ISteamStats';

export default function getKillsByWeaponType(
    type: Weapon['type'],
    stats: ISteamStats
): number {
    switch (type) {
        case 'melee':
            return stats.ach_kill_enemies_with_melee;
        case 'grenade':
            return stats.ach_kill_enemies_with_grenades;
        case 'mine':
            return stats.ach_kill_enemies_with_mines;
        case 'turret':
            return stats.ach_kill_enemies_with_turret;
        case 'secondary':
            return stats.ach_kill_enemies_with_secondary_weap;
        case 'all':
            return stats.ach_kill_enemies;
        case 'primary':
            return (
                stats.ach_kill_enemies -
                stats.ach_kill_enemies_with_melee -
                stats.ach_kill_enemies_with_grenades -
                stats.ach_kill_enemies_with_turret -
                stats.ach_kill_enemies_with_secondary_weap
            );
    }
}
