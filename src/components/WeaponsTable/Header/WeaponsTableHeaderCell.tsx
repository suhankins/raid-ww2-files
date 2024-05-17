import { type ISortOrder } from '@/lib/ISortOrder';
import { type IWeaponStats } from '@/lib/IWeaponWithStats';
import { type Dispatch, type SetStateAction } from 'react';
import styles from './WeaponsTableHeaderCell.module.css';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

export default function WeaponsTableHeaderCell({
    children,
    sortBy,
    assignedSortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
}: {
    children: React.ReactNode;
    sortBy: keyof IWeaponStats;
    assignedSortBy: keyof IWeaponStats;
    sortOrder: ISortOrder;
    setSortBy: Dispatch<SetStateAction<keyof IWeaponStats>>;
    setSortOrder: Dispatch<SetStateAction<ISortOrder>>;
}) {
    return (
        <th
            scope="col"
            className={styles.cell}
            aria-sort={assignedSortBy === sortBy ? sortOrder : undefined}
        >
            <button
                onClick={() => {
                    if (assignedSortBy === sortBy) {
                        setSortOrder((currentOrder) =>
                            currentOrder === 'ascending'
                                ? 'descending'
                                : 'ascending'
                        );
                    } else {
                        setSortBy(assignedSortBy);
                        setSortOrder('descending');
                    }
                }}
            >
                {children}
            </button>
            {sortOrder === 'descending' ? (
                <ChevronDownIcon
                    aria-hidden="true"
                    className={styles.chevron}
                />
            ) : (
                <ChevronUpIcon aria-hidden="true" className={styles.chevron} />
            )}
        </th>
    );
}
