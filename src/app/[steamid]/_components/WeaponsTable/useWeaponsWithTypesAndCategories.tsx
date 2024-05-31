import { type ISteamStats } from '@/lib/ISteamStats';
import {
    DEFAULT_WEAPON_CATEGORY,
    WEAPON_CATEGORIES,
} from '@/lib/WeaponCategories';
import { DEFAULT_WEAPON_TYPE, WEAPON_TYPES } from '@/lib/WeaponTypes';
import { WEAPONS_DB } from '@/utils/WeaponsDB';
import getWeaponStats from '@/utils/getKills/getWeaponStats';
import { useEffect, useMemo, useState } from 'react';

export default function useWeaponsWithTypesAndCategories(stats: ISteamStats) {
    const [selectedType, setSelectedType] =
        useState<(typeof WEAPON_TYPES)[number]>(DEFAULT_WEAPON_TYPE);

    const [selectedCategory, setSelectedCategory] = useState<
        (typeof WEAPON_CATEGORIES)[number]
    >(DEFAULT_WEAPON_CATEGORY);

    const weaponsWithStats = useMemo(
        () => WEAPONS_DB.map((weapon) => getWeaponStats(weapon, stats)),
        [stats]
    );

    const weaponsWithCorrectTypes = useMemo(
        () =>
            weaponsWithStats.filter(
                (weapon) =>
                    !weapon.hidden &&
                    (selectedType.id === DEFAULT_WEAPON_TYPE.id ||
                        selectedType.id === weapon.type)
            ),
        [selectedType, weaponsWithStats]
    );

    const applicableCategories = useMemo(
        () =>
            WEAPON_CATEGORIES.filter(
                (category) =>
                    category.id === DEFAULT_WEAPON_CATEGORY.id ||
                    weaponsWithCorrectTypes.some(
                        (weapon) => weapon.category === category.id
                    )
            ),
        [weaponsWithCorrectTypes]
    );

    useEffect(() => {
        if (!applicableCategories.includes(selectedCategory)) {
            setSelectedCategory(DEFAULT_WEAPON_CATEGORY);
        }
    }, [applicableCategories, selectedCategory]);

    const weaponsWithCorrectCategories = useMemo(
        () =>
            weaponsWithCorrectTypes.filter(
                (weapon) =>
                    selectedCategory.id === DEFAULT_WEAPON_CATEGORY.id ||
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
