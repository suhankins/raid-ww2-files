'use client';

import { type IInventoryCard } from '@/utils/steamAPI/getInventory';
import styles from './CardsList.module.css';
import { useId, useState } from 'react';
import Card from './Card';
import Tabs from '@/components/Tabs/Tabs';
import Textbox from '@/components/Textbox/Textbox';
import useFilteredCards from './useFilteredCards';
import classNames from 'classnames';
import { CardDescription } from './CardDescription';

export const DEFAULT_RARITY = { id: 'all', name: 'All' };
export const RARITIES = [
    DEFAULT_RARITY,
    { id: 'common', name: 'Common' },
    { id: 'uncommon', name: 'Uncommon' },
    { id: 'rare', name: 'Rare' },
    { id: 'halloween', name: 'Event' },
] as const;

export const DEFAULT_TYPE = { id: 'all', name: 'All' };
export const TYPES = [
    DEFAULT_TYPE,
    { id: 'raid', name: 'Raid' },
    { id: 'operation', name: 'Operation' },
];

export default function CardsList({
    inventory,
}: {
    inventory: IInventoryCard[];
}) {
    const [selectedRarity, setSelectedRarity] =
        useState<(typeof RARITIES)[number]>(DEFAULT_RARITY);
    const [selectedType, setSelectedType] =
        useState<(typeof TYPES)[number]>(DEFAULT_TYPE);
    const [search, setSearch] = useState('');

    const filteredCards = useFilteredCards(
        inventory,
        selectedRarity,
        selectedType,
        search
    );

    const [selectedCard, setSelectedCard] = useState<string>(
        inventory[0]?.classid
    );
    const currentCard =
        inventory.find((card) => card.classid === selectedCard) || inventory[0];

    const cardTypeTabsId = useId();
    const listId = useId();

    if (inventory.length === 0) {
        return (
            <>
                <h2>Challenge and booster cards</h2>
                <p>
                    Our spies couldn&apos;t obtain any information about
                    raider&apos;s cards! Maybe they don&apos;t have any cards?
                </p>
            </>
        );
    }

    return (
        <>
            <h2>Challenge and booster cards</h2>
            <div className={styles.container}>
                <div className={styles.cardsListContainer}>
                    <Tabs
                        options={RARITIES}
                        selectedOption={selectedRarity}
                        onChange={(value) =>
                            setSelectedRarity(
                                value as (typeof RARITIES)[number]
                            )
                        }
                        name="Rarity"
                        htmlFor={cardTypeTabsId}
                    />
                    <Tabs
                        options={TYPES}
                        selectedOption={selectedType}
                        onChange={(value) =>
                            setSelectedType(value as (typeof TYPES)[number])
                        }
                        name="Type"
                        inline
                        id={cardTypeTabsId}
                        htmlFor={listId}
                    />
                    <ul className={styles.cardsList} id={listId}>
                        {filteredCards.map((card, index) => (
                            <li
                                className={classNames({
                                    'selected-corners':
                                        selectedCard === card.classid,
                                })}
                                key={index}
                                tabIndex={0}
                                aria-label={card.name}
                                aria-current={selectedCard === card.classid}
                                onClick={() => setSelectedCard(card.classid)}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedCard(card.classid);
                                    }
                                }}
                            >
                                <Card card={card} count={card.amount} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.cardDetails} aria-live="polite">
                    <Textbox
                        value={search}
                        onChange={(e) =>
                            setSearch((e.target as HTMLInputElement).value)
                        }
                    >
                        Search
                    </Textbox>
                    <div className={styles.cardContainer}>
                        <Card
                            card={currentCard}
                            size={2.5}
                            onIconHoverShowTooltip
                        />
                        <CardDescription
                            name={currentCard.name}
                            positiveEffect={
                                'positiveEffect' in currentCard
                                    ? currentCard.positiveEffect
                                    : undefined
                            }
                            negativeEffect={
                                'negativeEffect' in currentCard
                                    ? currentCard.negativeEffect
                                    : undefined
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
