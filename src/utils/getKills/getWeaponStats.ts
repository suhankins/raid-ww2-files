import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import { getWeaponKillCount } from './getWeaponKillCount';
import getKillsByWeaponCategory from './getKillsByWeaponCategory';
import getKillsByWeaponType from './getKillsByWeaponType';
import { type IWeaponWithStats } from '@/lib/IWeaponWithStats';

export default function getWeaponStats(
    weapon: IWeapon,
    stats: ISteamStats
): IWeaponWithStats {
    const kills = getWeaponKillCount(weapon, stats);
    return {
        ...weapon,
        kills: getWeaponKillCount(weapon, stats),
        categoryRatio:
            weapon.category &&
            kills &&
            kills / getKillsByWeaponCategory(weapon.category, stats),
        typeRatio: kills && kills / getKillsByWeaponType(weapon.type, stats),
        totalRatio: kills && kills / getKillsByWeaponType('all', stats),
    };
}
