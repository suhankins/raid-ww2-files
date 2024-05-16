import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import useTotalStats from './useTotalStats';

export default function WeaponsTableFooter({
    type,
    category,
    weapons,
    stats,
}: {
    type: IWeapon['type'] | null;
    category: NonNullable<IWeapon['category']> | null;
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
            <td>{kills}</td>
            <td>-</td>
            <td>{typePercentage}</td>
            <td>{totalPercentage}</td>
        </tr>
    );
}
