import { type IWeapon } from '../../lib/IWeapon';
import type { ISteamStats } from '@/lib/ISteamStats';
import getKillsForGivenWeapons from './getKillsForGivenWeapons';
import { getWeaponById } from '../WeaponsDB';

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
                (stats.ach_kill_enemies_with_mines ?? 0) +
                getKillsForGivenWeapons([getWeaponById('decoy_coin')!], stats)
            );
        case 'other':
            return (
                (stats.ach_kill_enemies_with_turret ?? 0) +
                (stats.ach_run_over_enemies_with_jeep ?? 0)
            );
        case 'secondary':
            return stats.ach_kill_enemies_with_secondary_weap ?? 0;
        case 'all':
            return stats.ach_kill_enemies ?? 0;
        case 'primary':
            return (
                getKillsByWeaponType('all', stats) -
                getKillsByWeaponType('melee', stats) -
                getKillsByWeaponType('grenade', stats) -
                getKillsByWeaponType('other', stats) -
                getKillsByWeaponType('secondary', stats)
            );
    }
}
