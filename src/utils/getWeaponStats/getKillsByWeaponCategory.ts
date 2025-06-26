import type { ISteamStats } from '@/lib/ISteamStats';
import { WEAPONS_DB } from '../WeaponsDB';
import { type IWeapon } from '../../lib/IWeapon';
import { getKillsForGivenWeapons } from './getStatForGivenWeapons';

export default function getKillsByWeaponCategory(
    category: NonNullable<IWeapon['category']>,
    stats: ISteamStats,
    weapons?: IWeapon[]
): number {
    switch (category) {
        case 'mine':
            return stats.ach_kill_enemies_with_mines;
        case 'grenade':
            return stats.ach_kill_enemies_with_grenades;
        default:
            return getKillsForGivenWeapons(
                weapons ??
                    WEAPONS_DB.filter((weapon) => weapon.category === category),
                stats
            );
    }
}
