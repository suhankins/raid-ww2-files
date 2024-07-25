import { IInventoryCard } from '@/utils/steamAPI/getInventory';
import {
    DEFAULT_RARITY,
    DEFAULT_TYPE,
    type RARITIES,
    type TYPES,
} from './CardsList';
import { useMemo } from 'react';
import getCardType from './getCardType';

export default function useFilteredCards(
    inventory: IInventoryCard[],
    rarity: (typeof RARITIES)[number],
    type: (typeof TYPES)[number],
    search: string
): IInventoryCard[] {
    const filteredByRarity = useMemo(
        () =>
            inventory.filter(
                (card) =>
                    rarity === DEFAULT_RARITY ||
                    ('rarity' in card && card.rarity === rarity.id)
            ),
        [inventory, rarity]
    );

    const fileteredByType = useMemo(
        () =>
            filteredByRarity.filter(
                (card) => type === DEFAULT_TYPE || getCardType(card) === type.id
            ),
        [filteredByRarity, type]
    );

    const filteredBySearch = useMemo(
        () =>
            fileteredByType.filter((card) =>
                card.name.toLowerCase().includes(search.toLowerCase())
            ),
        [fileteredByType, search]
    );

    return filteredBySearch;
}
