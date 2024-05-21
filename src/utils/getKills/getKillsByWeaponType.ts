import { type IWeapon } from '../../lib/IWeapon';
import type { ISteamStats } from '@/lib/ISteamStats';

export default function getKillsByWeaponType(
    type: IWeapon['type'],
    stats: ISteamStats
): number {
    switch (type) {
        case 'melee':
            return stats.ach_kill_enemies_with_melee ?? 0;
        case 'grenade':
            return (
                (stats.ach_kill_enemies_with_grenades ?? 0) +
                (stats.ach_kill_enemies_with_mines ?? 0)
            );
        case 'turret':
            return stats.ach_kill_enemies_with_turret ?? 0;
        case 'secondary':
            return stats.ach_kill_enemies_with_secondary_weap ?? 0;
        case 'all':
            return stats.ach_kill_enemies ?? 0;
        case 'primary':
            return (
                getKillsByWeaponType('all', stats) -
                getKillsByWeaponType('melee', stats) -
                getKillsByWeaponType('grenade', stats) -
                getKillsByWeaponType('turret', stats) -
                getKillsByWeaponType('secondary', stats)
            );
    }
}
