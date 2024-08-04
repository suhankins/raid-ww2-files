import { resolveVanityUrl } from '@/utils/steamAPI/resolveVanityUrl';

/**
 * @example resolveSteamId("https://steamcommunity.com/id/pongman/") // "76561198061159261"
 * @example resolveSteamId("pongman") // "76561198061159261"
 * @example resolveSteamId("https://steamcommunity.com/profiles/76561198061159261") // "76561198061159261"
 * @example resolveSteamId("76561198061159261") // "76561198061159261"
 */
export default async function resolveSteamId(steamid: string): Promise<string> {
    // Input is most likely steamid already
    if (steamid.match(/^[0-9]+$/)) {
        return steamid;
    }

    try {
        const url = new URL(steamid);
        if (url.hostname !== 'steamcommunity.com') {
            throw new Error('Not a Steam URL');
        }
        const pathname = url.pathname.split('/');
        if (pathname[1] === 'profiles') {
            return pathname[2];
        }
        return await resolveVanityUrl(pathname[2]);
    } catch (e) {}

    return await resolveVanityUrl(steamid);
}
