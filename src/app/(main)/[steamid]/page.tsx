import { LastSeenWith } from '@/components/DossierPages/LastSeenWith/LastSeenWith';
import { PlayerInfo } from '@/components/DossierPages/PlayerInfo/PlayerInfo';
import RaidsTable from '@/components/RaidsTable/RaidsTable';
import { WeaponsTable } from '@/components/WeaponsTable/WeaponsTable';
import { getAchievements } from '@/utils/steamAPI/getAchievements';
import { getStats } from '@/utils/getStats/getStats';
import { getUserInfo } from '@/utils/steamAPI/getUserInfo';
import { resolveVanityUrl } from '@/utils/steamAPI/resolveVanityUrl';
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
            <h1>Raider dossier</h1>
            <PlayerInfo user={user} stats={stats} achievements={achievements} />
            <LastSeenWith stats={stats} />
            <WeaponsTable stats={stats} />
            <RaidsTable stats={stats} achievements={achievements} />
        </main>
    );
}
