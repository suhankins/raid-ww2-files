import { ISteamStats } from '@/lib/ISteamStats';
import { Weapon } from '@/utils/WeaponsDB';
import getKillsByWeaponType from '@/utils/getKillsByWeaponType';
import { getWeaponKillCount } from '@/utils/getWeaponKillCount';
import styles from './WeaponsTable.module.css';

export default function TableRow({
    weapon,
    index,
    weapons,
    stats,
}: {
    weapon: Weapon;
    index: number;
    weapons: Weapon[];
    stats: ISteamStats;
}) {
    const kills = getWeaponKillCount(weapon, stats);
    return (
        <tr
            key={weapon.id}
            className={
                weapons[index - 1]?.type !== weapon.type
                    ? styles.separate
                    : undefined
            }
        >
            <th scope="row">{weapon.name}</th>
            <td>{kills ?? '-'}</td>
            <td>
                {kills
                    ? `${(
                          (kills / getKillsByWeaponType(weapon.type, stats)) *
                          100
                      ).toFixed(1)}%`
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
