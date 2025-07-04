import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import { type IWeaponWithStats } from '@/lib/IWeaponWithStats';
import useTotalStats from './useTotalStats';
import prettifyNumber from '@/utils/prettifyNumber';
import { useMemo } from 'react';
import toPercentage from '@/utils/toPercentage';

export default function WeaponsTableFooter({
    type,
    category,
    weapons,
    stats,
}: {
    type: IWeapon['type'];
    category: NonNullable<IWeapon['category']>;
    weapons: IWeaponWithStats[];
    stats: ISteamStats;
}) {
    const {
        kills = 0,
        totalPercentage,
        shotsFired,
        averageAccuracy,
        totalUsageCount,
        slotUsage,
    } = useTotalStats(type, category, weapons, stats);
    const actualTotalKills = useMemo(
        () => weapons.reduce((acc, weapon) => acc + (weapon.kills ?? 0), 0),
        [weapons]
    );
    return (
        <tr>
            <th scope="row">Total</th>
            <td>
                {prettifyNumber(kills)}
                {kills !== actualTotalKills && (
                    <span
                        data-tooltip-id="tooltip"
                        data-tooltip-content={`Includes data not reflected in the table. Total from table data is ${prettifyNumber(actualTotalKills)}`}
                    >
                        *
                    </span>
                )}
            </td>
            <td>{totalPercentage}</td>
            <td>{shotsFired || '-'}</td>
            <td>
                {isFinite(averageAccuracy)
                    ? toPercentage(averageAccuracy)
                    : '-'}
            </td>
            <td>{totalUsageCount || '-'}</td>
            <td>{slotUsage ? toPercentage(slotUsage) : '-'}</td>
        </tr>
    );
}
