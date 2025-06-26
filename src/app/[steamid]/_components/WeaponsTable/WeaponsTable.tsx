'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './WeaponsTable.module.css';
import WeaponsTableRow from './Row/WeaponsTableRow';
import WeaponsTableFooter from './Footer/WeaponsTableFooter';
import useWeaponsWithTypesAndCategories from './useWeaponsWithTypesAndCategories';
import { WEAPON_TYPES } from '@/lib/WeaponTypes';
import { WEAPON_CATEGORIES } from '@/lib/WeaponCategories';
import useSortWeapons from './useSortWeapons';
import WeaponsTableHeaderCell from './Header/WeaponsTableHeaderCell';
import Tabs from '@/components/Tabs/Tabs';
import { useId } from 'react';

export default function WeaponsTable({ stats }: { stats: ISteamStats }) {
    const {
        selectedType,
        setSelectedType,
        categories,
        selectedCategory,
        setSelectedCategory,
        weapons: unsortedWeapons,
    } = useWeaponsWithTypesAndCategories(stats);

    const { weapons, sortValuesAndSetters } = useSortWeapons(unsortedWeapons);

    const weaponCategoryTabsId = useId();
    const tableId = useId();

    return (
        <>
            <h2>Raider&apos;s arsenal</h2>
            <Tabs
                name="Weapon Slot"
                options={WEAPON_TYPES}
                selectedOption={selectedType}
                onChange={(value) =>
                    setSelectedType(value as (typeof WEAPON_TYPES)[number])
                }
                htmlFor={weaponCategoryTabsId}
            />
            <Tabs
                name="Weapon category"
                options={categories}
                selectedOption={selectedCategory}
                onChange={(value) =>
                    setSelectedCategory(
                        value as (typeof WEAPON_CATEGORIES)[number]
                    )
                }
                inline
                id={weaponCategoryTabsId}
                htmlFor={tableId}
            />
            <table className={styles.table} id={tableId}>
                <thead>
                    <tr>
                        <WeaponsTableHeaderCell
                            assignedSortBy="name"
                            {...sortValuesAndSetters}
                        >
                            Name
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="kills"
                            {...sortValuesAndSetters}
                        >
                            Kills
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="killsTotalRatio"
                            {...sortValuesAndSetters}
                        >
                            % of total kills
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="shotsFired"
                            {...sortValuesAndSetters}
                        >
                            Shots fired
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="accuracy"
                            {...sortValuesAndSetters}
                        >
                            Accuracy
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="timesEquipped"
                            {...sortValuesAndSetters}
                        >
                            Times equipped
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="usageRatio"
                            {...sortValuesAndSetters}
                        >
                            % of slot usage
                        </WeaponsTableHeaderCell>
                    </tr>
                </thead>
                <tbody>
                    {weapons.map((weapon) => (
                        <WeaponsTableRow weapon={weapon} key={weapon.id} />
                    ))}
                </tbody>
                <tfoot>
                    <WeaponsTableFooter
                        type={selectedType.id}
                        category={selectedCategory.id}
                        weapons={weapons}
                        stats={stats}
                    />
                </tfoot>
            </table>
        </>
    );
}
