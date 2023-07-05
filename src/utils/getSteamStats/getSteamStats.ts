import { steamStatsArrayToObject } from '../steamStatsArrayToObject';

export async function getSteamStats(steamid: string | number) {
    const response = await fetch(
        `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=414740&key=${process.env.STEAM_WEB_API_KEY}&steamid=${steamid}&format=json`
    );
    const data = await response.json();
    return steamStatsArrayToObject(data.playerstats.stats);
}
