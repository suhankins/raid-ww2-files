import {
    DefaultWeaponCategory,
    WeaponCategories,
} from '@/lib/WeaponCategories';
import { DefaultWeaponType, WeaponTypes } from '@/lib/WeaponTypes';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import { useEffect, useMemo, useState } from 'react';

export default function useWeaponsWithTypesAndCategories() {
    const [selectedType, setSelectedType] =
        useState<(typeof WeaponTypes)[number]>(DefaultWeaponType);

    const [selectedCategory, setSelectedCategory] = useState<
        (typeof WeaponCategories)[number]
    >(DefaultWeaponCategory);

    const sortedWeapons = useMemo(
        () =>
            WeaponsSortedByType.filter(
                (weapon) =>
                    !weapon.hidden &&
                    (selectedType.id === DefaultWeaponType.id ||
                        selectedType.id === weapon.type)
            ),
        [selectedType]
    );

    const filteredCategories = useMemo(
        () =>
            WeaponCategories.filter(
                (category) =>
                    category.id === DefaultWeaponCategory.id ||
                    sortedWeapons.some(
                        (weapon) => weapon.category === category.id
                    )
            ),
        [sortedWeapons]
    );

    useEffect(() => {
        if (!filteredCategories.includes(selectedCategory)) {
            setSelectedCategory(DefaultWeaponCategory);
        }
    }, [filteredCategories, selectedCategory]);

    const categorizedWeapons = useMemo(
        () =>
            sortedWeapons.filter(
                (weapon) =>
                    selectedCategory.id === DefaultWeaponCategory.id ||
                    weapon.category === selectedCategory.id
            ),
        [selectedCategory, sortedWeapons]
    );

    return {
        weapons: categorizedWeapons,
        selectedType,
        selectedCategory,
        setSelectedCategory,
        setSelectedType,
        categories: filteredCategories,
    };
}
