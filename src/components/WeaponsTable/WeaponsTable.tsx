'use client';

import { type ISteamStats } from '@/lib/ISteamStats';
import styles from './WeaponsTable.module.css';
import WeaponsTableRow from './Row/WeaponsTableRow';
import Stepper from '../Stepper/Stepper';
import { PrettyTypes } from '@/utils/prettyType/PrettyTypes';
import typeToPrettyType from '@/utils/prettyType/typesToPrettyType';
import prettyTypeToTypes from '@/utils/prettyType/prettyTypeToType';
import { PrettyCategories } from '@/utils/prettyCategory/PrettyCategories';
import categoryToPrettyCategory from '@/utils/prettyCategory/categoryToPrettyCategory';
import prettyCategoryToCategory from '@/utils/prettyCategory/prettyCategoryToCategory';
import WeaponsTableFooter from './Footer/WeaponsTableFooter';
import useWeaponsWithTypesAndCategories from './useWeaponsWithTypesAndCategories';

export function WeaponsTable({ stats }: { stats: ISteamStats }) {
    const {
        selectedType,
        setSelectedType,
        categories,
        selectedCategory,
        setSelectedCategory,
        weapons,
    } = useWeaponsWithTypesAndCategories();

    return (
        <section>
            <div className="controls">
                <Stepper
                    id="weaponType"
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
                    id="weaponCategory"
                    options={categories}
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
                    {weapons.map((weapon) => (
                        <WeaponsTableRow
                            weapon={weapon}
                            key={weapon.id}
                            stats={stats}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <WeaponsTableFooter
                        type={selectedType}
                        category={selectedCategory}
                        weapons={weapons}
                        stats={stats}
                    />
                </tfoot>
            </table>
        </section>
    );
}
