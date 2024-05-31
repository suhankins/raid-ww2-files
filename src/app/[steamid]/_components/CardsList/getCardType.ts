import { type IInventoryCard } from '@/utils/steamAPI/getInventory';

export default function getCardType(card: IInventoryCard): string {
    if (card.type !== '') {
        return card.type;
    }
    if (!!card.tags.find((tag) => tag.internal_name === 'op_only')) {
        return 'operation';
    }
    return 'raid';
}
