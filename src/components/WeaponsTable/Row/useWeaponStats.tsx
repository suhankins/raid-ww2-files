import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import getKillsByWeaponCategory from '@/utils/getKills/getKillsByWeaponCategory';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import { getWeaponKillCount } from '@/utils/getKills/getWeaponKillCount';
import toPercentage from '@/utils/toPercentage';
import { useMemo } from 'react';

export default function useWeaponStats(weapon: IWeapon, stats: ISteamStats) {
    const kills = useMemo(
        () => getWeaponKillCount(weapon, stats),
        [stats, weapon]
    );

    const categoryPercentage = useMemo(
        () =>
            weapon.category && kills
                ? toPercentage(
                      kills / getKillsByWeaponCategory(weapon.category, stats)
                  )
                : '-',
        [kills, stats, weapon.category]
    );

    const typePercentage = useMemo(
        () =>
            kills
                ? toPercentage(kills / getKillsByWeaponType(weapon.type, stats))
                : '-',
        [kills, stats, weapon.type]
    );

    const totalPercentage = useMemo(
        () =>
            kills
                ? toPercentage(kills / getKillsByWeaponType('all', stats))
                : '-',
        [kills, stats]
    );

    return {
        kills,
        categoryPercentage,
        typePercentage,
        totalPercentage,
    };
}
