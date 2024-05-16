import type { IUserInfo } from '@/lib/IUserInfo';

/**
 * Gets user info for given steamid.
 * @throws If can't get user info
 * @throws If profile is not public
 */
export async function getUserInfo(steamid: string) {
    const response = await fetch(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_WEB_API_KEY}&steamids=${steamid}`,
        { cache: 'no-store' }
    );
    if (!response.ok)
        throw new Error(
            `Can't get Steam user info: server responded ${response.status} (${response.statusText})`
        );
    const data = (await response.json()).response.players[0] as
        | IUserInfo
        | undefined;
    if (!data) {
        throw new Error("Can't get Steam user info: user doesn't exist");
    }
    if (data.communityvisibilitystate !== 3) {
        throw new Error("Can't get Steam user info: profile is not public");
    }
    return data;
}
