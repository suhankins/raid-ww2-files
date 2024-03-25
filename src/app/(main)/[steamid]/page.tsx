import { PlayerInfo } from '@/components/DossierPages/PlayerInfo/PlayerInfo';
import { getAchievements } from '@/utils/getAchievements';
import { getStats } from '@/utils/getStats/getStats';
import { getUserInfo } from '@/utils/getUserInfo';
import { resolveVanityUrl } from '@/utils/resolveVanityUrl';
import { redirect } from 'next/navigation';

export default async function Home({
    params: { steamid },
}: {
    params: { steamid: string };
}) {
    if (!steamid.match(/^[0-9]+$/)) {
        // Instead of SteamID we were probably given a vanity URL
        const givenUrl = decodeURIComponent(steamid);
        const vanityUrl = givenUrl.match(
            /(?<=https:\/\/steamcommunity\.com\/id\/)(\w+)/gim
        );
        let vanityToResolve;
        if (vanityUrl) {
            vanityToResolve = vanityUrl[0];
        } else {
            vanityToResolve = steamid;
        }
        redirect(`/${await resolveVanityUrl(vanityToResolve)}`);
    }
    const user = await getUserInfo(steamid);
    const stats = await getStats(steamid);
    const achievements = await getAchievements(steamid);
    return (
        <main>
            <div>
                <PlayerInfo
                    user={user}
                    stats={stats}
                    achievements={achievements}
                />
            </div>
            <div>{JSON.stringify(stats)}</div>
        </main>
    );
}
