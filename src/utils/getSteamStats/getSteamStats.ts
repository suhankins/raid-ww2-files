import { ISteamStats } from '@/lib/ISteamStats';
import { steamStatsArrayToObject } from '../steamStatsArrayToObject';

/**
 * Gets steam stats for given steamid.
 * @throws If can't get steam stats
 */
export async function getSteamStats(
    steamid: string | number
): Promise<ISteamStats> {
    const response = await fetch(
        `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=414740&key=${process.env.STEAM_WEB_API_KEY}&steamid=${steamid}&format=json`,
        { cache: 'no-store' }
    );
    if (!response.ok) throw new Error("Can't get steam stats");
    const data = await response.json();
    return steamStatsArrayToObject(data.playerstats.stats);
}
