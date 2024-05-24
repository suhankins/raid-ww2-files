import { IInventoryCard } from '@/utils/steamAPI/getInventory';
import getCardType from './getCardType';
import Image from 'next/image';
import styles from './Card.module.css';
import getSrcForCard from './getSrcForCard';
import capitalize from './capitalize';

export default function Card({
    card,
    size = 1,
    onIconHoverShowTooltip,
    count,
}: {
    card: IInventoryCard;
    size?: number;
    onIconHoverShowTooltip?: boolean;
    count?: string;
}) {
    const iconSize = 12;

    return (
        <div
            className={styles.container}
            style={{ '--padding': `${7 * size}px` } as React.CSSProperties}
        >
            <Image
                className={styles.typeIcon}
                width={iconSize * size}
                height={iconSize * size}
                src={`/static/images/raid/cardIcons/${getCardType(card)}.png`}
                alt=""
                data-tooltip-content={capitalize(getCardType(card))}
                data-tooltip-id={onIconHoverShowTooltip ? 'tooltip' : undefined}
            />
            {'rarity' in card && (
                <Image
                    className={styles.rarityIcon}
                    width={iconSize * size}
                    height={iconSize * size}
                    src={`/static/images/raid/cardIcons/${card.rarity}.png`}
                    alt=""
                    data-tooltip-content={capitalize(card.rarity)}
                    data-tooltip-id={
                        onIconHoverShowTooltip ? 'tooltip' : undefined
                    }
                />
            )}
            <Image
                width={105 * size}
                height={150 * size}
                src={getSrcForCard(card)}
                alt={card.name}
            />
            {count && count !== '1' && (
                <div className={styles.count} aria-label="Cards in possesion">
                    {count}
                </div>
            )}
        </div>
    );
}
