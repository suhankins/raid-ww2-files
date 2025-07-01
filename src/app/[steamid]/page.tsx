import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import Tooltip from '@/components/Tooltip/Tooltip';
import ErrorCard from './ErrorCard';
import resolveSteamId from './_utils/resolveSteamId';

// Player stats components
import LastSeenWith from './_components/LastSeenWith/LastSeenWith';
import PlayerInfo from './_components/PlayerInfo/PlayerInfo';
import RaidsTable from './_components/RaidsTable/RaidsTable';
import WeaponsTable from './_components/WeaponsTable/WeaponsTable';
import HallOfFame from './_components/HallOfFame/HallOfFame';
import AchievementsList from './_components/AchievementsList/AchievementsList';
import CardsList from './_components/CardsList/CardsList';

// Steam API calls
import { getAchievements } from '@/utils/steamAPI/getAchievements';
import { getStats } from '@/utils/steamAPI/getStats/getStats';
import { getUserInfo } from '@/utils/steamAPI/getUserInfo';
import { getAchievementSchema } from '@/utils/steamAPI/getAchievementSchema';
import { getInventory } from '@/utils/steamAPI/getInventory';

type Props = {
    params: Promise<{ steamid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    let { steamid } = await params;

    const resolvedId = await resolveSteamId(decodeURIComponent(steamid));
    try {
        const user = await getUserInfo(resolvedId);

        return {
            title: `${user.personaname} - RAID: WWII stats`,
            description: `View ${user.personaname}'s stats in RAID: World War II`,
        };
    } catch (e) {
        return {};
    }
}

export default async function Home({ params }: Props) {
    let { steamid } = await params;

    // We can't just assume that numbers are SteamID because vanity URLs can be just numbers
    // i.e. https://steamcommunity.com/id/12345
    const resolvedId = await resolveSteamId(decodeURIComponent(steamid)).catch(
        (e) => e as Error
    );
    if (resolvedId instanceof Error) {
        return <ErrorCard e={resolvedId} />;
    }
    if (resolvedId !== steamid) {
        redirect(`/${resolvedId}`);
    }

    steamid = resolvedId;

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
                <section className="limited-width">
                    <LastSeenWith stats={stats} />
                </section>
                <section className="limited-width-wider">
                    <WeaponsTable stats={stats} />
                </section>
                <section className="limited-width">
                    <RaidsTable stats={stats} achievements={achievements} />
                </section>
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
