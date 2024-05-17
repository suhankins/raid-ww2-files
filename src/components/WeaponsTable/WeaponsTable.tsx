'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './WeaponsTable.module.css';
import WeaponsTableRow from './Row/WeaponsTableRow';
import Stepper from '../Stepper/Stepper';
import WeaponsTableFooter from './Footer/WeaponsTableFooter';
import useWeaponsWithTypesAndCategories from './useWeaponsWithTypesAndCategories';
import { WeaponTypes } from '@/lib/WeaponTypes';
import { WeaponCategories } from '@/lib/WeaponCategories';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    const {
        selectedType,
        setSelectedType,
        categories,
        selectedCategory,
        setSelectedCategory,
        weapons,
    } = useWeaponsWithTypesAndCategories(stats);

    return (
        <>
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
                        <th scope="col">Name</th>
                        <th scope="col">Kills</th>
                        <th scope="col">% of category</th>
                        <th scope="col">% of slot</th>
                        <th scope="col">% of total</th>
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
