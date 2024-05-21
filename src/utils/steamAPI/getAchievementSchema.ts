import { type IAchievementSchema } from '@/lib/IAchievementSchema';

/**
 * Gets steam achievements schema for given steamid.
 * @throws If can't get steam stats
 */
export async function getAchievementSchema(): Promise<IAchievementSchema[]> {
    const urlParams = new URLSearchParams();
    urlParams.set('key', process.env.STEAM_WEB_API_KEY ?? '');
    urlParams.set('appId', '414740');
    urlParams.set('l', 'english');
    urlParams.set('format', 'json');

    const response = await fetch(
        'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v0002?' +
            urlParams.toString()
    );
    if (!response.ok)
        throw new Error(
            `Can't get Steam achievements schema: server response ${response.status} (${response.statusText})`
        );
    const data = await response.json();
    if (
        !data ||
        !data.game ||
        !data.game.availableGameStats ||
        !data.game.availableGameStats.achievements
    )
        throw new Error(
            "Can't get Steam achievements schema: no achievement schema available!"
        );
    return data.game.availableGameStats.achievements;
}
