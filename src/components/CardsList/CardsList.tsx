'use client';

import { type IInventoryCard } from '@/utils/steamAPI/getInventory';
import styles from './CardsList.module.css';
import { useState } from 'react';
import Card from './Card';
import Effect from './Effect';

export default function CardsList({
    inventory,
}: {
    inventory: IInventoryCard[];
}) {
    const [selectedCard, setSelectedCard] = useState<number>(0);
    const currentCard = inventory[selectedCard];
    return (
        <>
            <h2>Challenge and booster cards</h2>
            {inventory.length !== 0 ? (
                <div className={styles.container}>
                    <ul className={styles.cardsList}>
                        {inventory.map((card, index) => (
                            <li
                                key={index}
                                tabIndex={0}
                                aria-label={card.name}
                                aria-current={index === selectedCard}
                                onClick={() => setSelectedCard(index)}
                                onKeyDown={(e) => {
                                    if (e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedCard(index);
                                    }
                                }}
                            >
                                <Card card={card} />
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cardDetails} aria-live="polite">
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
            ) : (
                <p>
                    Our spies couldn't obtain any information about raider's
                    cards!
                </p>
            )}
        </>
    );
}
