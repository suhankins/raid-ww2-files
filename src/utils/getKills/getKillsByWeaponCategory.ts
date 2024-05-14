import type { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsDB } from '../WeaponsDB';
import { type IWeapon } from '../../lib/IWeapon';
import { getWeaponKillCount } from './getWeaponKillCount';

export default function getKillsByWeaponCategory(
    category: IWeapon['category'],
    stats: ISteamStats
): number {
    switch (category) {
        case 'mine':
            return stats.ach_kill_enemies_with_mines;
        case 'grenade':
            return stats.ach_kill_enemies_with_grenades;
        default:
            return WeaponsDB.filter(
                (weapon) => category && weapon.category === category
            ).reduce(
                (total, weapon) =>
                    total + (getWeaponKillCount(weapon, stats) ?? 0),
                0
            );
    }
}
