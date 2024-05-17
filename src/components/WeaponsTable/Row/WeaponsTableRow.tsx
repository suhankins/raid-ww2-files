import { IWeaponWithStats } from '@/lib/IWeaponWithStats';
import toPercentage from '@/utils/toPercentage';

export default function WeaponsTableRow({
    weapon,
}: {
    weapon: IWeaponWithStats;
}) {
    return (
        <tr key={weapon.id}>
            <th scope="row">{weapon.name}</th>
            <td>{weapon.kills ?? '-'}</td>
            <td>
                {weapon.categoryRatio === undefined
                    ? '-'
                    : toPercentage(weapon.categoryRatio)}
            </td>
            <td>
                {weapon.typeRatio === undefined
                    ? '-'
                    : toPercentage(weapon.typeRatio)}
            </td>
            <td>
                {weapon.totalRatio === undefined
                    ? '-'
                    : toPercentage(weapon.totalRatio)}
            </td>
        </tr>
    );
}
