import { CardsDB } from '../CardsDB';
import { formatErrorMessage } from '../formatErrorMessage';

type IAsset = {
    appid: 414740;
    contextid: string;
    assetid: string;
    classid: string;
    instanceid: string;
    /**
     * Actually a number encoded as string
     */
    amount: string;
};

type IDescription = {
    appid: 414740;
    classid: string;
    instanceid: string;
    /**
     * https://community.akamai.steamstatic.com/economy/image/${icon_url}/96fx96f?allow_animated=1
     */
    icon_url?: string;
    /**
     * https://community.akamai.steamstatic.com/economy/image/${icon_url_large}/330x192?allow_animated=1
     */
    icon_url_large?: string;
    descriptions: [
        {
            type: 'html';
            value: string;
        },
    ];
    name: string;
    name_color: string;
    type: string;
    market_name: string;
    tags: {
        category: 'cards';
        internal_name:
            | 'challenge'
            | 'booster'
            | 'op_only'
            | 'event'
            | 'raid_only';
        localized_category_name: 'Challenge Cards';
        localized_tag_name:
            | 'Challenge'
            | 'Operation-Only'
            | 'Raid-Only'
            | 'Booster'
            | 'Event';
    }[];
};

export type IInventoryItem = IAsset & IDescription;

type IAPIReturnValue = {
    assets: IAsset[];
    descriptions: IDescription[];
    total_inventory_count: number;
    /**
     * 1 = success
     */
    success: number;
};

export type IInventoryCard =
    | IInventoryItem
    | (IInventoryItem & (typeof CardsDB)[number]);

const PREFIX = "Can't get Steam inventory";

export async function getInventory(
    steamid: string | number
): Promise<IInventoryCard[]> {
    const response = await fetch(
        `https://steamcommunity.com/inventory/${steamid}/414740/2`,
        {
            headers: {
                Cookie: `steamLoginSecure=${process.env.STEAM_WEB_API_KEY ?? ''}`,
            },
        }
    );
    if (!response.ok) {
        throw new Error(formatErrorMessage(PREFIX, response));
    }
    const data = (await response.json()) as IAPIReturnValue;
    if (!data || data.success !== 1 || !data.assets || !data.descriptions) {
        throw new Error(
            formatErrorMessage(PREFIX, 'some items are missing from response')
        );
    }
    return data.assets
        .map((asset) => {
            // Combining assets and descriptions
            const description = data.descriptions.find(
                (description) => asset.classid === description.classid
            );
            if (!description)
                throw new Error(
                    formatErrorMessage(
                        PREFIX,
                        "couldn't find description for an item"
                    )
                );
            return {
                ...asset,
                ...description,
            };
        })
        .reduce(
            // Removing duplicates, adding them to amount of existing cards
            (acc, item) => {
                if (acc.length === 0) return [item];
                const accItemIndex = acc.findIndex(
                    (accItem) => accItem.classid === item.classid
                );
                if (accItemIndex === -1) {
                    return [...acc, item];
                } else {
                    return acc.toSpliced(accItemIndex, 1, {
                        ...acc[accItemIndex],
                        amount: (
                            parseInt(acc[accItemIndex].amount) +
                            parseInt(item.amount)
                        ).toString(),
                    });
                }
            },
            [] as IInventoryItem[]
        )
        .map((item) => {
            // Yes, we really are just checking name
            // I couldn't find anything better, this API doesn't return enough info.
            const card = CardsDB.find(
                (card) =>
                    card.name === item.name ||
                    (card.synonyms && card.synonyms.includes(item.name))
            );
            if (!card) return item;
            return {
                ...item,
                ...card,
            };
        });
}
