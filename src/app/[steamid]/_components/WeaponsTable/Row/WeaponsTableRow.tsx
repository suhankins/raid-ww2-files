import { type IWeaponWithStats } from '@/lib/IWeaponWithStats';
import prettifyNumber from '@/utils/prettifyNumber';
import toPercentage from '@/utils/toPercentage';
import WeaponImage from './WeaponImage';
import { renderToString } from 'react-dom/server';

export default function WeaponsTableRow({
    weapon,
}: {
    weapon: IWeaponWithStats;
}) {
    return (
        <tr key={weapon.id}>
            <th
                data-tooltip-id={weapon.noIcon ? undefined : 'tooltip'}
                data-tooltip-html={renderToString(
                    <WeaponImage weapon={weapon} />
                )}
                scope="row"
            >
                {weapon.name}
            </th>
            <td>
                {weapon.kills !== undefined
                    ? prettifyNumber(weapon.kills)
                    : '-'}
            </td>
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
