import { type ISteamStats } from '@/lib/ISteamStats';
import {
    DefaultWeaponCategory,
    WeaponCategories,
} from '@/lib/WeaponCategories';
import { DefaultWeaponType, WeaponTypes } from '@/lib/WeaponTypes';
import { WEAPONS_DB } from '@/utils/WeaponsDB';
import getWeaponStats from '@/utils/getKills/getWeaponStats';
import { useEffect, useMemo, useState } from 'react';

export default function useWeaponsWithTypesAndCategories(stats: ISteamStats) {
    const [selectedType, setSelectedType] =
        useState<(typeof WeaponTypes)[number]>(DefaultWeaponType);

    const [selectedCategory, setSelectedCategory] = useState<
        (typeof WeaponCategories)[number]
    >(DefaultWeaponCategory);

    const weaponsWithStats = useMemo(
        () => WEAPONS_DB.map((weapon) => getWeaponStats(weapon, stats)),
        [stats]
    );

    const weaponsWithCorrectTypes = useMemo(
        () =>
            weaponsWithStats.filter(
                (weapon) =>
                    !weapon.hidden &&
                    (selectedType.id === DefaultWeaponType.id ||
                        selectedType.id === weapon.type)
            ),
        [selectedType, weaponsWithStats]
    );

    const applicableCategories = useMemo(
        () =>
            WeaponCategories.filter(
                (category) =>
                    category.id === DefaultWeaponCategory.id ||
                    weaponsWithCorrectTypes.some(
                        (weapon) => weapon.category === category.id
                    )
            ),
        [weaponsWithCorrectTypes]
    );

    useEffect(() => {
        if (!applicableCategories.includes(selectedCategory)) {
            setSelectedCategory(DefaultWeaponCategory);
        }
    }, [applicableCategories, selectedCategory]);

    const weaponsWithCorrectCategories = useMemo(
        () =>
            weaponsWithCorrectTypes.filter(
                (weapon) =>
                    selectedCategory.id === DefaultWeaponCategory.id ||
                    weapon.category === selectedCategory.id
            ),
        [selectedCategory, weaponsWithCorrectTypes]
    );

    return {
        weapons: weaponsWithCorrectCategories,
        selectedType,
        selectedCategory,
        setSelectedCategory,
        setSelectedType,
        categories: applicableCategories,
    };
}
