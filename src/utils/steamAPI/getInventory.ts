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
    icon_url: string;
    /**
     * https://community.akamai.steamstatic.com/economy/image/${icon_url_large}/330x192?allow_animated=1
     */
    icon_url_large: string;
    descriptions: [
        {
            type: 'html';
            value: string;
        },
    ];
    name: string;
    name_color: string;
    type: '';
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

type IAPIReturnValue = {
    assets: IAsset[];
    descriptions: IDescription[];
    total_inventory_count: number;
    /**
     * 1 = success
     */
    success: number;
};

export async function getInventory(steamid: string | number) {
    const response = await fetch(
        `https://steamcommunity.com/inventory/${steamid}/414740/2`
    );
    if (!response.ok)
        throw new Error(
            `Can't get Steam inventory: server response ${response.status} (${response.statusText})`
        );
    const data = (await response.json()) as IAPIReturnValue;
    if (!data || data.success !== 1 || !data.assets || !data.descriptions) {
        throw new Error(
            `Can't get Steam inventory: some items are missing from response`
        );
    }
    return data.assets
        .map((asset) => {
            const description = data.descriptions.find(
                (description) => asset.classid === description.classid
            );
            if (!description)
                throw new Error("Couldn't find description for an item");
            return {
                ...asset,
                ...description,
            };
        })
        .reduce(
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
            [] as (IAsset & IDescription)[]
        );
}
