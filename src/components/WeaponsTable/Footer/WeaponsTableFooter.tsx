import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import useTotalStats from './useTotalStats';
import prettifyNumber from '@/utils/prettifyNumber';

export default function WeaponsTableFooter({
    type,
    category,
    weapons,
    stats,
}: {
    type: IWeapon['type'];
    category: NonNullable<IWeapon['category']>;
    weapons: IWeapon[];
    stats: ISteamStats;
}) {
    const { kills, typePercentage, totalPercentage } = useTotalStats(
        type,
        category,
        weapons,
        stats
    );
    return (
        <tr>
            <th scope="row">Totals</th>
            <td>{prettifyNumber(kills ?? 0)}</td>
            <td>-</td>
            <td>{typePercentage}</td>
            <td>{totalPercentage}</td>
        </tr>
    );
}
