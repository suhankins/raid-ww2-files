'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import styles from './WeaponsTable.module.css';
import TableRow from './TableRow';
import Stepper from '../Stepper/Stepper';
import { useEffect, useMemo, useState } from 'react';
import { IWeapon } from '@/lib/IWeapon';
import { PrettyTypes } from '@/utils/prettyType/PrettyTypes';
import typeToPrettyType from '@/utils/prettyType/typesToPrettyType';
import prettyTypeToTypes from '@/utils/prettyType/prettyTypeToType';
import getKillsByWeaponType from '@/utils/getKills/getKillsByWeaponType';
import toPercentage from '@/utils/toPercentage';
import { PrettyCategories } from '@/utils/prettyCategory/PrettyCategories';
import categoryToPrettyCategory from '@/utils/prettyCategory/categoryToPrettyCategory';
import prettyCategoryToCategory from '@/utils/prettyCategory/prettyCategoryToCategory';
import getKillsByWeaponCategory from '@/utils/getKills/getKillsByWeaponCategory';
import { getWeaponKillCount } from '@/utils/getKills/getWeaponKillCount';
import getKillsByTypeAndCategory from '@/utils/getKills/getKillsByTypeAndCategory';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    const [selectedType, setSelectedType] = useState<IWeapon['type'] | null>(
        null
    );
    const [selectedCategory, setSelectedCategory] = useState<NonNullable<
        IWeapon['category']
    > | null>(null);

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

    const filteredCategories = useMemo(
        () =>
            PrettyCategories.filter(
                (category) =>
                    category === 'All' ||
                    sortedWeapons.some(
                        (weapon) =>
                            weapon.category ===
                            prettyCategoryToCategory(category)
                    )
            ),
        [sortedWeapons]
    );

    useEffect(() => {
        if (
            selectedCategory &&
            !filteredCategories.includes(
                categoryToPrettyCategory(selectedCategory)
            )
        ) {
            setSelectedCategory(null);
        }
    }, [filteredCategories, selectedCategory]);

    const categorizedWeapons = useMemo(
        () =>
            sortedWeapons.filter(
                (weapon) =>
                    selectedCategory === null ||
                    weapon.category === selectedCategory
            ),
        [selectedCategory, sortedWeapons]
    );

    const killsByTypeAndCategory = useMemo(
        () =>
            getKillsByTypeAndCategory(
                selectedType,
                selectedCategory,
                categorizedWeapons,
                stats
            ),
        [categorizedWeapons, selectedCategory, selectedType, stats]
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
                <Stepper
                    options={filteredCategories}
                    selectedOption={categoryToPrettyCategory(selectedCategory)}
                    onChange={(value) =>
                        setSelectedCategory(
                            prettyCategoryToCategory(
                                value as (typeof PrettyCategories)[number]
                            )
                        )
                    }
                >
                    Category
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
                    {categorizedWeapons.map((weapon) => (
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
                        <td>{killsByTypeAndCategory}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                            {toPercentage(
                                killsByTypeAndCategory /
                                    getKillsByWeaponType('all', stats)
                            )}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
