import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import useWeaponStats from './useWeaponStats';

export default function WeaponsTableRow({
    weapon,
    stats,
}: {
    weapon: IWeapon;
    stats: ISteamStats;
}) {
    const { kills, categoryPercentage, typePercentage, totalPercentage } =
        useWeaponStats(weapon, stats);

    return (
        <tr key={weapon.id}>
            <th scope="row">{weapon.name}</th>
            <td>{kills ?? '-'}</td>
            <td>{categoryPercentage}</td>
            <td>{typePercentage}</td>
            <td>{totalPercentage}</td>
        </tr>
    );
}
