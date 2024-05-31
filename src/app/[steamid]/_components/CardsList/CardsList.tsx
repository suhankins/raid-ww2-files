'use client';

import { type IInventoryCard } from '@/utils/steamAPI/getInventory';
import styles from './CardsList.module.css';
import { useState } from 'react';
import Card from './Card';
import Effect from './Effect';
import Tabs from '@/components/Tabs/Tabs';
import Textbox from '@/components/Textbox/Textbox';
import useFilteredCards from './useFilteredCards';

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
                    />
                    <Tabs
                        options={TYPES}
                        selectedOption={selectedType}
                        onChange={(value) =>
                            setSelectedType(value as (typeof TYPES)[number])
                        }
                        name="Type"
                        inline
                    />
                    <ul className={styles.cardsList}>
                        {filteredCards.map((card, index) => (
                            <li
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
                        <div>
                            <h3>{currentCard.name}</h3>
                            {'positiveEffect' in currentCard && (
                                <Effect>{currentCard.positiveEffect}</Effect>
                            )}
                            {'negativeEffect' in currentCard && (
                                <Effect negative>
                                    {currentCard.negativeEffect}
                                </Effect>
                            )}
                            {!(
                                'positiveEffect' in currentCard ||
                                'negativeEffect' in currentCard
                            ) && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: currentCard.descriptions[0]
                                            .value,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
