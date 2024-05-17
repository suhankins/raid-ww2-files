import type { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsDB } from '../WeaponsDB';
import { type IWeapon } from '../../lib/IWeapon';
import getKillsForGivenWeapons from './getKillsForGivenWeapons';

export default function getKillsByWeaponCategory(
    category: NonNullable<IWeapon['category']>,
    stats: ISteamStats
): number {
    switch (category) {
        case 'mine':
            return stats.ach_kill_enemies_with_mines;
        case 'grenade':
            return stats.ach_kill_enemies_with_grenades;
        default:
            return getKillsForGivenWeapons(
                WeaponsDB.filter((weapon) => weapon.category === category),
                stats
            );
    }
}
