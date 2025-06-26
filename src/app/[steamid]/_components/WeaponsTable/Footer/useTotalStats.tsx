import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import getKillsByTypeAndCategory from '@/utils/getWeaponStats/getKillsByTypeAndCategory';
import getKillsByWeaponType from '@/utils/getWeaponStats/getKillsByWeaponType';
import {
    getAverageAccuracyForGivenWeapons,
    getKillsForGivenWeapons,
    getShotsForGivenWeapons,
    getUsageCountForGivenWeapons,
} from '@/utils/getWeaponStats/getStatForGivenWeapons';
import { getTotalWeaponsUsageRatio } from '@/utils/getWeaponStats/getWeaponStat';
import toPercentage from '@/utils/toPercentage';
import { useMemo } from 'react';

export default function useTotalStats(
    type: IWeapon['type'],
    category: NonNullable<IWeapon['category']>,
    weapons: IWeapon[],
    stats: ISteamStats
) {
    const kills = useMemo(
        () => getKillsByTypeAndCategory(type, category, weapons, stats),
        [weapons, category, type, stats]
    );

    const typePercentage = useMemo(
        () =>
            weapons.every((weapon, _, array) => weapon.type === array[0].type)
                ? toPercentage(
                      getKillsForGivenWeapons(weapons, stats) /
                          getKillsByWeaponType(weapons[0]?.type, stats)
                  )
                : '-',
        [stats, weapons]
    );

    const totalPercentage = useMemo(
        () => toPercentage(kills / getKillsByWeaponType('all', stats)),
        [kills, stats]
    );

    const shotsFired = useMemo(
        () => getShotsForGivenWeapons(weapons, stats),
        [weapons, stats]
    );

    const averageAccuracy = useMemo(
        () => getAverageAccuracyForGivenWeapons(weapons, stats),
        [weapons, stats]
    );

    const totalUsageCount = useMemo(
        () => getUsageCountForGivenWeapons(weapons, stats),
        [weapons, stats]
    );

    const slotUsage = useMemo(
        () => getTotalWeaponsUsageRatio(weapons, stats),
        [weapons, stats]
    );

    return {
        kills,
        typePercentage,
        totalPercentage,
        shotsFired,
        averageAccuracy,
        totalUsageCount,
        slotUsage,
    };
}
