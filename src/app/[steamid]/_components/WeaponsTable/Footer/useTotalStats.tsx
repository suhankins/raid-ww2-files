import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import getKillsByTypeAndCategory from '@/utils/getKills/getKillsByTypeAndCategory';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import getKillsForGivenWeapons from '@/utils/getKills/getKillsForGivenWeapons';
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

    return {
        kills,
        typePercentage,
        totalPercentage,
    };
}
