export interface Achievement {
    apiname: string;
    achieved: number;
    unlocktime: number;
    name: string;
    description: string;
}

/**
 * Gets steam achievements for given steamid.
 * @throws If can't get steam stats
 */
export async function getAchievements(
    steamid: string | number
): Promise<Achievement[]> {
    // we use v0001 api because v0002 doesn't return unlocktime
    const response = await fetch(
        `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=414740&key=${process.env.STEAM_WEB_API_KEY}&steamid=${steamid}&l=en`,
        { cache: 'no-store' }
    );
    if (!response.ok) throw new Error("Can't get steam achievements");
    const data = await response.json();
    if (!data.playerstats || !data.playerstats.achievements)
        throw new Error("Can't get steam achievements");
    return data.playerstats.achievements;
}
