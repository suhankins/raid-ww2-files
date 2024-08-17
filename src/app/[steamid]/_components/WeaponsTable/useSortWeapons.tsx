import { type ISortOrder } from '@/lib/ISortOrder';
import {
    type IWeaponStats,
    type IWeaponWithStats,
} from '@/lib/IWeaponWithStats';
import { useState } from 'react';

export default function useSortWeapons(weapons: IWeaponWithStats[]) {
    const [sortBy, setSortBy] = useState<keyof IWeaponStats>('kills');
    const [sortOrder, setSortOrder] = useState<ISortOrder>('descending');

    return {
        weapons: [...weapons].sort(
            (a, b) =>
                (sortBy === 'name'
                    ? a[sortBy].localeCompare(b[sortBy], 'en')
                    : (a[sortBy] ?? -1) - (b[sortBy] ?? -1)) *
                (sortOrder === 'descending' ? -1 : 1)
        ),
        sortValuesAndSetters: {
            setSortBy,
            setSortOrder,
            sortBy,
            sortOrder,
        },
    };
}
