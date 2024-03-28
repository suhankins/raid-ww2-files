import { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import { getWeaponKillCount } from '@/utils/getWeaponKillCount';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Kills</th>
                </tr>
            </thead>
            <tbody>
                {WeaponsSortedByType.filter((weapon) => !weapon.hidden).map(
                    (weapon) => (
                        <tr key={weapon.id}>
                            <th scope="row">{weapon.name}</th>
                            <td>
                                {getWeaponKillCount(weapon.id, stats) ??
                                    'Unknown'}
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}
