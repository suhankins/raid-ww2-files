import { IWeapon } from '@/lib/IWeapon';
import { WeaponsSortedByType } from '@/utils/WeaponsDB';
import { PrettyCategories } from '@/utils/prettyCategory/PrettyCategories';
import categoryToPrettyCategory from '@/utils/prettyCategory/categoryToPrettyCategory';
import prettyCategoryToCategory from '@/utils/prettyCategory/prettyCategoryToCategory';
import { useEffect, useMemo, useState } from 'react';

export default function useWeaponsWithTypesAndCategories() {
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

    return {
        weapons: categorizedWeapons,
        selectedType,
        selectedCategory,
        setSelectedCategory,
        setSelectedType,
        categories: filteredCategories,
    };
}
