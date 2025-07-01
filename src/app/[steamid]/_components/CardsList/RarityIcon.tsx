import { IRarity } from '@/lib/IRarity';
import capitalize from '@/utils/capitalize';
import Image from 'next/image';

export function RarityIcon({
    className,
    size,
    rarity,
    showTooltip = true,
}: {
    className?: string;
    size: number;
    rarity: IRarity;
    showTooltip?: boolean;
}) {
    return (
        <Image
            className={className}
            width={size}
            height={size}
            src={`/static/images/raid/cardIcons/${rarity}.png`}
            alt=""
            data-tooltip-content={capitalize(rarity)}
            data-tooltip-id={showTooltip ? 'tooltip' : undefined}
        />
    );
}
