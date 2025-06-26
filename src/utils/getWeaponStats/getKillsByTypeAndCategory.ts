import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import getKillsByWeaponType from './getKillsByWeaponType';
import getKillsByWeaponCategory from './getKillsByWeaponCategory';
import { DEFAULT_WEAPON_CATEGORY } from '@/lib/WeaponCategories';

export default function getKillsByTypeAndCategory(
    type: IWeapon['type'],
    category: NonNullable<IWeapon['category']>,
    weapons: IWeapon[],
    stats: ISteamStats
) {
    if (category === DEFAULT_WEAPON_CATEGORY.id) {
        return getKillsByWeaponType(type, stats);
    } else {
        return getKillsByWeaponCategory(category, stats, weapons);
    }
}
