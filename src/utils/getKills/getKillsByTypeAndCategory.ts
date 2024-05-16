import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '@/lib/IWeapon';
import getKillsByWeaponType from './getKillsByWeaponType';
import getKillsByWeaponCategory from './getKillsByWeaponCategory';
import getKillsForGivenWeapons from './getKillsForGivenWeapons';
import { DefaultWeaponCategory } from '@/lib/WeaponCategories';
import { DefaultWeaponType } from '@/lib/WeaponTypes';

export default function getKillsByTypeAndCategory(
    type: IWeapon['type'],
    category: NonNullable<IWeapon['category']>,
    weapons: IWeapon[],
    stats: ISteamStats
) {
    if (category === DefaultWeaponCategory.id) {
        return getKillsByWeaponType(type, stats);
    }
    if (type === DefaultWeaponType.id) {
        getKillsByWeaponCategory(category, stats);
    }
    return getKillsForGivenWeapons(weapons, stats);
}
