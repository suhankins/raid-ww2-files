import { getTagline } from '@/utils/getTagline';
import { steamStatsArrayToObject } from '@/utils/steamStatsArrayToObject';

export default async function Home() {
    console.log(process.env.STEAM_WEB_API_KEY);
    const response = await fetch(
        `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=414740&key=${process.env.STEAM_WEB_API_KEY}&steamid=76561198061159261&format=json`
    );
    const data = await response.json();
    const stats = steamStatsArrayToObject(data.playerstats.stats);

    return <div>{getTagline(stats)}</div>;
}
