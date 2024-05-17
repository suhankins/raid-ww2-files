'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './WeaponsTable.module.css';
import WeaponsTableRow from './Row/WeaponsTableRow';
import Stepper from '../Stepper/Stepper';
import WeaponsTableFooter from './Footer/WeaponsTableFooter';
import useWeaponsWithTypesAndCategories from './useWeaponsWithTypesAndCategories';
import { WeaponTypes } from '@/lib/WeaponTypes';
import { WeaponCategories } from '@/lib/WeaponCategories';
import useSortWeapons from './useSortWeapons';
import WeaponsTableHeaderCell from './Header/WeaponsTableHeaderCell';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
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
            <div className="controls">
                <Stepper
                    id="weaponType"
                    options={WeaponTypes}
                    selectedOption={selectedType}
                    onChange={(value) =>
                        setSelectedType(value as (typeof WeaponTypes)[number])
                    }
                >
                    Slot
                </Stepper>
                <Stepper
                    id="weaponCategory"
                    options={categories}
                    selectedOption={selectedCategory}
                    onChange={(value) =>
                        setSelectedCategory(
                            value as (typeof WeaponCategories)[number]
                        )
                    }
                >
                    Category
                </Stepper>
            </div>
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
        </>
    );
}
