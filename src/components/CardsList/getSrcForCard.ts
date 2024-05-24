import { type IInventoryCard } from '@/utils/steamAPI/getInventory';

export default function getSrcForCard(card: IInventoryCard): string {
    if ('texture' in card) {
        return `/static/images/raid/cards/${card.texture}.png`;
    }
    if (card.icon_url) {
        return `https://community.akamai.steamstatic.com/economy/image/${card.icon_url}/96fx96f?allow_animated=0`;
    }
    return '/static/images/raid/cards/none.png';
}
