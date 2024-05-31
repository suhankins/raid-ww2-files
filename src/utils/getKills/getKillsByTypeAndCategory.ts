import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '@/lib/IWeapon';
import getKillsByWeaponType from './getKillsByWeaponType';
import getKillsByWeaponCategory from './getKillsByWeaponCategory';
import getKillsForGivenWeapons from './getKillsForGivenWeapons';
import { DEFAULT_WEAPON_CATEGORY } from '@/lib/WeaponCategories';
import { DEFAULT_WEAPON_TYPE } from '@/lib/WeaponTypes';

export default function getKillsByTypeAndCategory(
    type: IWeapon['type'],
    category: NonNullable<IWeapon['category']>,
    weapons: IWeapon[],
    stats: ISteamStats
) {
    if (category === DEFAULT_WEAPON_CATEGORY.id) {
        return getKillsByWeaponType(type, stats);
    }
    if (type === DEFAULT_WEAPON_TYPE.id) {
        getKillsByWeaponCategory(category, stats);
    }
    return getKillsForGivenWeapons(weapons, stats);
}
