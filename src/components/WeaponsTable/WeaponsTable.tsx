import { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import getKillsByWeaponType from '@/utils/getKillsByWeaponType';
import { getWeaponKillCount } from '@/utils/getWeaponKillCount';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Kills</th>
                    <th scope="col">% of slot</th>
                    <th scope="col">% of total</th>
                </tr>
            </thead>
            <tbody>
                {WeaponsSortedByType.filter((weapon) => !weapon.hidden).map(
                    (weapon) => {
                        const kills = getWeaponKillCount(weapon, stats);
                        return (
                            <tr key={weapon.id}>
                                <th scope="row">{weapon.name}</th>
                                <td>{kills ?? '-'}</td>
                                <td>
                                    {kills
                                        ? `${(
                                              (kills /
                                                  getKillsByWeaponType(
                                                      weapon.type,
                                                      stats
                                                  )) *
                                              100
                                          ).toFixed(1)}%`
                                        : '-'}
                                </td>
                                <td>
                                    {kills
                                        ? `${(
                                              (kills /
                                                  getKillsByWeaponType(
                                                      'all',
                                                      stats
                                                  )) *
                                              100
                                          ).toFixed(1)}%`
                                        : '-'}
                                </td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    );
}
