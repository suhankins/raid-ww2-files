import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import {
    getWeaponKillCount,
    getWeaponShotsCount,
    getWeaponUsedCount,
    getWeaponAccuracy,
    getWeaponUsageRatio,
} from './getWeaponStat';
import getKillsByWeaponType from './getKillsByWeaponType';
import { type IWeaponWithStats } from '@/lib/IWeaponWithStats';

export default function getWeaponStats(
    weapon: IWeapon,
    stats: ISteamStats
): IWeaponWithStats {
    const kills = getWeaponKillCount(weapon, stats);
    return {
        ...weapon,
        kills,
        killsTotalRatio: kills && kills / getKillsByWeaponType('all', stats),
        shotsFired: getWeaponShotsCount(weapon, stats),
        accuracy: getWeaponAccuracy(weapon, stats),
        timesEquipped: getWeaponUsedCount(weapon, stats),
        usageRatio: getWeaponUsageRatio(weapon, stats),
    };
}
