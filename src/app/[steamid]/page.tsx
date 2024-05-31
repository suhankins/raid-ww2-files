import { redirect } from 'next/navigation';
import Tooltip from './_components/Tooltip/Tooltip';
import ErrorCard from './ErrorCard';

// Player stats components
import LastSeenWith from './_components/LastSeenWith/LastSeenWith';
import PlayerInfo from './_components/PlayerInfo/PlayerInfo';
import RaidsTable from './_components/RaidsTable/RaidsTable';
import WeaponsTable from './_components/WeaponsTable/WeaponsTable';
import HallOfFame from './_components/HallOfFame/HallOfFame';
import AchievementsList from './_components/AchievementsList/AchievementsList';
import CardsList from './_components/CardsList/CardsList';

// Steam API calls
import { resolveVanityUrl } from '@/utils/steamAPI/resolveVanityUrl';
import { getAchievements } from '@/utils/steamAPI/getAchievements';
import { getStats } from '@/utils/steamAPI/getStats/getStats';
import { getUserInfo } from '@/utils/steamAPI/getUserInfo';
import { getAchievementSchema } from '@/utils/steamAPI/getAchievementSchema';
import { getInventory } from '@/utils/steamAPI/getInventory';

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
        const [user, stats, achievements, achievementSchema, inventory] =
            await Promise.all([
                getUserInfo(steamid),
                getStats(steamid),
                getAchievements(steamid),
                getAchievementSchema(),
                getInventory(steamid).catch((e) => e as Error),
            ]);

        return (
            <main className="animate-in">
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
                <section className="limited-width-wider">
                    {inventory instanceof Error ? (
                        <>
                            <h2>Challenge and booster cards</h2>
                            <p>
                                Our spies couldn&apos;t obtain any information
                                about raider&apos;s cards!
                            </p>
                            <details>
                                <summary>Technical details</summary>
                                <code>{inventory.message}</code>
                            </details>
                        </>
                    ) : (
                        <CardsList inventory={inventory} />
                    )}
                </section>
                <section className="limited-width">
                    <AchievementsList
                        achievementSchema={achievementSchema}
                        achievements={achievements}
                    />
                </section>
                <Tooltip />
            </main>
        );
    } catch (e) {
        return <ErrorCard e={e} />;
    }
}
