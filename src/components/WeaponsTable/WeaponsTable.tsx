'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import styles from './WeaponsTable.module.css';
import TableRow from './TableRow';
import Stepper from '../Stepper/Stepper';
import { useMemo, useState } from 'react';
import { IWeapon } from '@/lib/IWeapon';
import { PrettyTypes } from '@/utils/prettyType/PrettyTypes';
import typeToPrettyType from '@/utils/prettyType/typesToPrettyType';
import prettyTypeToTypes from '@/utils/prettyType/prettyTypeToType';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import toPercentage from '@/utils/toPercentage';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    const [selectedType, setSelectedType] = useState<IWeapon['type'] | null>(
        null
    );

    const sortedWeapons = useMemo(
        () =>
            WeaponsSortedByType.filter(
                (weapon) =>
                    !weapon.hidden &&
                    (selectedType === null ||
                        selectedType.includes(weapon.type))
            ),
        [selectedType]
    );

    return (
        <>
            <div className={styles.controls}>
                <Stepper
                    options={PrettyTypes}
                    selectedOption={typeToPrettyType(selectedType)}
                    onChange={(value) =>
                        setSelectedType(
                            prettyTypeToTypes(
                                value as (typeof PrettyTypes)[number]
                            )
                        )
                    }
                >
                    Slot
                </Stepper>
            </div>
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
                    {sortedWeapons.map((weapon) => (
                        <TableRow
                            weapon={weapon}
                            key={weapon.id}
                            stats={stats}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Totals</th>
                        <td>
                            {getKillsByWeaponType(selectedType || 'all', stats)}
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            {toPercentage(
                                getKillsByWeaponType(
                                    selectedType || 'all',
                                    stats
                                ) / getKillsByWeaponType('all', stats)
                            )}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
