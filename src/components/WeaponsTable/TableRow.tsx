import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '@/lib/IWeapon';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import { getWeaponKillCount } from '@/utils/getKills/getWeaponKillCount';
import getKillsByWeaponCategory from '@/utils/getKills/getKillsByWeaponCategory';
import toPercentage from '@/utils/toPercentage';

export default function TableRow({
    weapon,
    stats,
}: {
    weapon: IWeapon;
    stats: ISteamStats;
}) {
    const kills = getWeaponKillCount(weapon, stats);
    return (
        <tr key={weapon.id}>
            <th scope="row">{weapon.name}</th>
            <td>{kills ?? '-'}</td>
            <td>
                {weapon.category && kills
                    ? toPercentage(
                          kills /
                              getKillsByWeaponCategory(weapon.category, stats)
                      )
                    : '-'}
            </td>
            <td>
                {kills
                    ? toPercentage(
                          kills / getKillsByWeaponType(weapon.type, stats)
                      )
                    : '-'}
            </td>
            <td>
                {kills
                    ? `${(
                          (kills / getKillsByWeaponType('all', stats)) *
                          100
                      ).toFixed(1)}%`
                    : '-'}
            </td>
        </tr>
    );
}
