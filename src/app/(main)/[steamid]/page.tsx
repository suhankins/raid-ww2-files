import { getGrenadeIdFromIndex } from '@/utils/getFromIndex/getGrenadeIdFromIndex';
import { getMeleeIdFromIndex } from '@/utils/getFromIndex/getMeleeIdFromIndex';
import { getWeaponIdFromIndex } from '@/utils/getFromIndex/getWeaponIdFromIndex';
import { getSteamStats } from '@/utils/getSteamStats/getSteamStats';
import { getTagline } from '@/utils/getTagline';

export default async function Home({
    params: { steamid },
}: {
    params: { steamid: string };
}) {
    const stats = await getSteamStats(
        process.env.NODE_ENV === 'development' ? '76561198061159261' : steamid
    );
    return (
        <>
            <code>
                {getTagline(stats)}
                {getWeaponIdFromIndex(stats.equipped_primary)}
                {getWeaponIdFromIndex(stats.equipped_secondary)}
                {getGrenadeIdFromIndex(stats.equipped_grenade)}
                {getMeleeIdFromIndex(stats.equipped_melee)}
            </code>
            <div>{JSON.stringify(stats)}</div>
        </>
    );
}
