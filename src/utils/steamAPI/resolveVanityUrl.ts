export async function resolveVanityUrl(vanityurl: string): Promise<string> {
    const urlParams = new URLSearchParams();
    urlParams.set('key', process.env.STEAM_WEB_API_KEY ?? '');
    urlParams.set('vanityurl', vanityurl);
    const response = await fetch(
        'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001?' +
            urlParams.toString()
    );
    if (!response.ok) {
        throw new Error(
            'Steam refused to resolve URL\n' +
                response.status +
                ': ' +
                response.statusText
        );
    }
    const data = (await response.json()).response;
    if (!data || data.success !== 1) {
        throw new Error("Steam couldn't resolve vanity URL");
    }
    return data.steamid;
}
