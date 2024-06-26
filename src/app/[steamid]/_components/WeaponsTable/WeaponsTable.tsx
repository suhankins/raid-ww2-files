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
            />
            <table className={styles.table}>
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
                            assignedSortBy="categoryRatio"
                            {...sortValuesAndSetters}
                        >
                            % of category
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="typeRatio"
                            {...sortValuesAndSetters}
                        >
                            % of slot
                        </WeaponsTableHeaderCell>
                        <WeaponsTableHeaderCell
                            assignedSortBy="totalRatio"
                            {...sortValuesAndSetters}
                        >
                            % of total
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
            <p>
                NOTE: Some numbers may not add up here due to the fact that data
                for some weapons only started being collected fairly recently.
                That is to say our spies were keeping track that raider killed
                certain amount of soldiers with some weapon type, but did not
                yet know the name of a specific weapon used.
            </p>
        </>
    );
}
