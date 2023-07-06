import { getGrenadeIdFromIndex } from '@/utils/getFromIndex/getGrenadeIdFromIndex';
import { getMeleeIdFromIndex } from '@/utils/getFromIndex/getMeleeIdFromIndex';
import { getWeaponIdFromIndex } from '@/utils/getFromIndex/getWeaponIdFromIndex';
import { getSteamStats } from '@/utils/getSteamStats/getSteamStats';
import { getTagline } from '@/utils/getTagline';
import { getUserInfo } from '@/utils/getUserInfo/getUserInfo';

export default async function Home({
    params: { steamid },
}: {
    params: { steamid: string };
}) {
    // My steamid: 76561198061159261
    const user = await getUserInfo(steamid);
    const stats = await getSteamStats(steamid);
    return (
        <>
            <code>
                {user.personaname}
                {user.avatarfull}
                {user.profileurl}
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
