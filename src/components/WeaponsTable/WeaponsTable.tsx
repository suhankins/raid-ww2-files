import { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import styles from './WeaponsTable.module.css';
import TableRow from './TableRow';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Kills</th>
                    <th scope="col">% of category</th>
                    <th scope="col">% of slot</th>
                    <th scope="col">% of total</th>
                </tr>
            </thead>
            <tbody>
                {WeaponsSortedByType.filter((weapon) => !weapon.hidden).map(
                    (weapon) => (
                        <TableRow
                            weapon={weapon}
                            key={weapon.id}
                            stats={stats}
                        />
                    )
                )}
            </tbody>
        </table>
    );
}
