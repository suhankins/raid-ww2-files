import { type IAchievementSchema } from '@/lib/IAchievementSchema';
import { formatErrorMessage } from '../formatErrorMessage';

const PREFIX = "Can't get Steam achievements schema";

/**
 * Gets steam achievements schema for given steamid.
 * It's needed because getAchievements doesn't contain icons.
 * @throws If can't get schema
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
    if (!response.ok) {
        throw new Error(formatErrorMessage(PREFIX, response));
    }
    const data = await response.json();
    if (
        !data ||
        !data.game ||
        !data.game.availableGameStats ||
        !data.game.availableGameStats.achievements
    ) {
        throw new Error(
            formatErrorMessage(PREFIX, 'no achievement schema available')
        );
    }
    return data.game.availableGameStats.achievements;
}
