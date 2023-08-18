import { PlayerCard } from '@/components/PlayerCard/PlayerCard';
import { getAchievements } from '@/utils/getAchievements';
import { getGrenadeIdFromIndex } from '@/utils/getFromIndex/getGrenadeIdFromIndex';
import { getMeleeIdFromIndex } from '@/utils/getFromIndex/getMeleeIdFromIndex';
import { getWeaponIdFromIndex } from '@/utils/getFromIndex/getWeaponIdFromIndex';
import { getStats } from '@/utils/getStats/getStats';
import { getTagline } from '@/utils/getTagline';
import { getUserInfo } from '@/utils/getUserInfo';

export default async function Home({
    params: { steamid },
}: {
    params: { steamid: string };
}) {
    if (!steamid.match(/^[0-9]+$/)) {
        // Instead of SteamID we were probably given a vanity URL
        const givenUrl = decodeURIComponent(steamid);
        const vanityUrl = givenUrl.match(
            /(?<=https:\/\/steamcommunity\.com\/id\/)(\w+)/gm
        );
        if (vanityUrl) {
            // TODO: call resolveVanityUrl with vanityUrl[0]
        }
    }
    // My steamid: 76561198061159261
    const user = await getUserInfo(steamid);
    const stats = await getStats(steamid);
    await getAchievements(steamid);
    return (
        <>
            <div>
                <PlayerCard {...user} tagline={getTagline(stats)} />
                {getWeaponIdFromIndex(stats.equipped_primary)}
                {getWeaponIdFromIndex(stats.equipped_secondary)}
                {getGrenadeIdFromIndex(stats.equipped_grenade)}
                {getMeleeIdFromIndex(stats.equipped_melee)}
            </div>
            <div>{JSON.stringify(stats)}</div>
        </>
    );
}
