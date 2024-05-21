import { LastSeenWith } from '@/components/LastSeenWith/LastSeenWith';
import { PlayerInfo } from '@/components/PlayerInfo/PlayerInfo';
import RaidsTable from '@/components/RaidsTable/RaidsTable';
import { WeaponsTable } from '@/components/WeaponsTable/WeaponsTable';
import { getAchievements } from '@/utils/steamAPI/getAchievements';
import { getStats } from '@/utils/steamAPI/getStats/getStats';
import { getUserInfo } from '@/utils/steamAPI/getUserInfo';
import { resolveVanityUrl } from '@/utils/steamAPI/resolveVanityUrl';
import { redirect } from 'next/navigation';
import ErrorCard from './ErrorCard';
import HallOfFame from '@/components/HallOfFame/HallOfFame';

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
        const resolvedId = await resolveVanityUrl(vanityToResolve).catch(
            (e) => e
        );
        if (!(resolvedId instanceof Error)) {
            redirect(`/${resolvedId}`);
        }
        return <ErrorCard e={resolvedId} />;
    }
    try {
        const user = await getUserInfo(steamid);
        const stats = await getStats(steamid);
        const achievements = await getAchievements(steamid);

        return (
            <>
                <section className="limited-width-wider">
                    <h1>Raider dossier</h1>
                    <PlayerInfo
                        user={user}
                        stats={stats}
                        achievements={achievements}
                    >
                        <HallOfFame stats={stats} />
                    </PlayerInfo>
                </section>
                <div className="limited-width">
                    <section>
                        <LastSeenWith stats={stats} />
                    </section>
                    <section>
                        <WeaponsTable stats={stats} />
                    </section>
                    <section>
                        <RaidsTable stats={stats} achievements={achievements} />
                    </section>
                </div>
            </>
        );
    } catch (e) {
        return <ErrorCard e={e} />;
    }
}
