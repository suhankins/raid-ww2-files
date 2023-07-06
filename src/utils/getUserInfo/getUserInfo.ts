import { IUserInfo } from '@/lib/IUserInfo';

/**
 * Gets user info for given steamid.
 * @throws If can't get user info
 * @throws If profile is not public
 */
export async function getUserInfo(steamid: string) {
    const response = await fetch(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_WEB_API_KEY}&steamids=${steamid}`
    );
    if (!response.ok) throw new Error("Can't get user info");
    const data = (await response.json()) as IUserInfo;
    if (data.communityvisibilitystate !== 3)
        throw new Error('Profile is not public');
    return data;
}
