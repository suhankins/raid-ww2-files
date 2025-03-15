import type { IUserInfo } from '@/lib/IUserInfo';
import { formatErrorMessage } from '../formatErrorMessage';

const PREFIX = "Can't get Steam user info";

/**
 * Gets user info for given steamid.
 * @throws If can't get user info
 * @throws If profile is not public
 */
export async function getUserInfo(steamid: string) {
    const urlParams = new URLSearchParams();
    urlParams.set('key', process.env.STEAM_WEB_API_KEY ?? '');
    urlParams.set('l', 'english');
    urlParams.set('format', 'json');
    urlParams.set('steamids', steamid.toString());

    const response = await fetch(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002?` +
            urlParams.toString()
    );

    if (!response.ok) {
        throw new Error(formatErrorMessage(PREFIX, response));
    }

    const data = (await response.json()).response.players[0] as
        | IUserInfo
        | undefined;

    if (!data) {
        throw new Error(formatErrorMessage(PREFIX, "user doesn't exist"));
    }
    if (data.communityvisibilitystate !== 3) {
        throw new Error(formatErrorMessage(PREFIX, 'profile is not public'));
    }

    return data;
}
