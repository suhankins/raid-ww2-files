import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '@/lib/IWeapon';
import getKillsByWeaponType from './getKillsByWeaponType';
import getKillsByWeaponCategory from './getKillsByWeaponCategory';
import getKillsForGivenWeapons from './getKillsForGivenWeapons';

export default function getKillsByTypeAndCategory(
    type: IWeapon['type'] | null,
    category: NonNullable<IWeapon['category']> | null,
    weapons: IWeapon[],
    stats: ISteamStats
) {
    if (category === null) {
        return getKillsByWeaponType(type || 'all', stats);
    }
    if (type === null) {
        getKillsByWeaponCategory(category, stats);
    }
    return getKillsForGivenWeapons(weapons, stats);
}
