import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '../../lib/IWeapon';

export function getWeaponKillCount(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    switch (weapon.type) {
        case 'primary':
        case 'secondary':
            return stats[`weapon_kills_${weapon.id}`];
        case 'melee':
            return stats[`melee_kills_${weapon.id}`];
        case 'grenade':
            return stats[`grenade_kills_${weapon.id}`];
        case 'other':
            if (weapon.id === 'turret') {
                return stats.ach_kill_enemies_with_turret;
            } else if (weapon.id === 'vehicle') {
                return stats.ach_run_over_enemies_with_jeep;
            }
        case 'all':
            return stats.ach_kill_enemies;
    }
}
