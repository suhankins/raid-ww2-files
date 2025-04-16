/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getAchievements } from '@/utils/steamAPI/getAchievements';
import { getStats } from '@/utils/steamAPI/getStats/getStats';
import { getUserInfo } from '@/utils/steamAPI/getUserInfo';
import { ImageResponse } from 'next/og';
import resolveSteamId from './_utils/resolveSteamId';
import getCharacterFromIndex from '@/utils/getFromIndex/getCharacterIdFromIndex';
import { getLatestAchievement } from '@/utils/getLatestAchievement';
import getAchievementsCompletedPercentage from './_components/PlayerInfo/getAchievementsCompletedPercentage';
import { numberToIsoDate } from '@/utils/numberToIsoDate';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { ISteamStats } from '@/lib/ISteamStats';
import { IAchievement } from '@/lib/IAchievement';
import { POSSIBLE_LEVELS } from './_components/PlayerInfo/Level';
import { getHallOfFameCards } from './_components/HallOfFame/getHallOfFameCards';

const RAID_RED = '#de4a3e';
const RAID_WHITE = '#d7d7d7';

const FONT_SIZE_SMALLER = '14px';
const FONT_SIZE_NORMAL = '16px';
const FONT_SIZE_BIGGER = '20px';
const FONT_SIZE_LARGER = '36px';
const FONT_SIZE_LARGE = '48px';

export const size = {
    width: 1000,
    height: 550,
};

export const contentType = 'image/png';

type Props = {
    params: Promise<{ steamid: string }>;
};

async function readImage(url: string) {
    const image = await readFile(
        join(
            process.env.NODE_ENV === 'development'
                ? join(process.cwd(), '/public')
                : 'https://raid.detta.dev/',
            url
        )
    );
    return Uint8Array.from(image).buffer;
}

function Level({
    stats,
    achievements,
}: {
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    if (stats.ach_reach_level_40_count >= 2) {
        return (
            <span
                style={{
                    color: RAID_RED,
                    fontSize: FONT_SIZE_LARGE,
                    alignItems: 'baseline',
                }}
            >
                40
                <span style={{ fontSize: FONT_SIZE_LARGER }}>
                    ×{stats.ach_reach_level_40_count}
                </span>
            </span>
        );
    }
    const highestAchievedLevel = POSSIBLE_LEVELS.find((level) =>
        achievements.find(
            (achievement) =>
                achievement.apiname === `ach_reach_level_${level}` &&
                achievement.achieved
        )
    );
    return <span>{highestAchievedLevel ?? 1}</span>;
}

export default async function Image({ params }: Props) {
    let { steamid } = await params;

    const resolvedId = await resolveSteamId(decodeURIComponent(steamid));

    const [user, stats, achievements] = await Promise.all([
        getUserInfo(resolvedId),
        getStats(resolvedId),
        getAchievements(resolvedId),
    ]);

    const character = getCharacterFromIndex(stats.equipped_character ?? 0);
    const lastAchievement = getLatestAchievement(achievements);

    const [
        characterImageSrc,
        nationalityImageSrc,
        backgroundImageSrc,
        bannerSrc,
        cards,
    ] = await Promise.all([
        readImage(`/static/images/raid/characters/${character.id}.png`),
        readImage(`/static/images/nationality/${character.nationality}.png`),
        readImage('/static/images/raid/background.jpg'),
        readImage('/static/images/banner.png'),
        Promise.all(
            getHallOfFameCards(stats)
                .slice(0, 5)
                .map(async (banner) => ({
                    ...banner,
                    icon: await readImage(
                        `/static/images/raid/hallOfFame/${banner.icon}.png`
                    ),
                    formatted: banner.formatter(banner.getter(stats)),
                }))
        ),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    width: '1000px',
                    height: '550px',
                }}
            >
                <img
                    style={{ position: 'absolute', left: 0, top: 0 }}
                    // @ts-expect-error
                    src={backgroundImageSrc}
                    width={1000}
                    height={550}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: 550,
                        justifyContent: 'center',
                    }}
                >
                    <img
                        width={335}
                        height={460}
                        // @ts-expect-error
                        src={characterImageSrc}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: 550,
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <div
                                style={{
                                    color: RAID_RED,
                                    fontSize: FONT_SIZE_LARGE,
                                    textAlign: 'center',
                                    marginBottom: '8px',
                                }}
                            >
                                {getAchievementsCompletedPercentage(
                                    achievements
                                )}
                            </div>
                            <div
                                style={{
                                    color: RAID_WHITE,
                                    fontSize: FONT_SIZE_NORMAL,
                                }}
                            >
                                Achievements
                            </div>
                            <div
                                style={{
                                    color: RAID_WHITE,
                                    fontSize: FONT_SIZE_NORMAL,
                                }}
                            >
                                completed
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <div
                                style={{ display: 'flex', marginBottom: '8px' }}
                            >
                                <img
                                    // @ts-expect-error
                                    src={nationalityImageSrc}
                                    width={96}
                                    height={64}
                                />
                            </div>
                            <div
                                style={{
                                    color: RAID_WHITE,
                                    fontSize: FONT_SIZE_NORMAL,
                                }}
                            >
                                {character.nationality}
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <div
                                style={{ display: 'flex', marginBottom: '8px' }}
                            >
                                <Level
                                    stats={stats}
                                    achievements={achievements}
                                />
                            </div>
                            <div style={{ color: RAID_WHITE }}>Level</div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginBottom: '4px',
                        }}
                    >
                        <div
                            style={{
                                color: RAID_RED,
                                fontSize: FONT_SIZE_LARGE,
                            }}
                        >
                            {user.personaname}
                        </div>
                        <div
                            style={{
                                color: RAID_WHITE,
                                fontSize: FONT_SIZE_NORMAL,
                            }}
                        >
                            {character.name}
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginBottom: '4px',
                        }}
                    >
                        {cards.map((banner, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    width: '100px',
                                    height: '179px',
                                    padding: '5px 8px 15px 8px',
                                    flex: 'none',
                                    alignItems: 'center',
                                    fontSize: FONT_SIZE_NORMAL,
                                    flexDirection: 'column',
                                    textAlign: 'center',
                                }}
                            >
                                <img
                                    width={100}
                                    height={179}
                                    // @ts-expect-error
                                    src={bannerSrc}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                    }}
                                />
                                <img
                                    width={72}
                                    height={72}
                                    // @ts-expect-error
                                    src={banner.icon}
                                    style={{ marginBottom: '6px' }}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {banner.formatted.value && (
                                        <div
                                            style={{
                                                color: RAID_WHITE,
                                                fontSize: FONT_SIZE_BIGGER,
                                            }}
                                        >
                                            {banner.formatted.value}
                                        </div>
                                    )}
                                    <div
                                        style={{
                                            color: RAID_WHITE,
                                            fontSize: FONT_SIZE_SMALLER,
                                        }}
                                    >
                                        {banner.formatted.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {lastAchievement.unlocktime !== 0 && (
                        <div
                            style={{
                                color: RAID_WHITE,
                                display: 'flex',
                                fontSize: FONT_SIZE_SMALLER,
                            }}
                        >
                            Last notable reporting on{' '}
                            {numberToIsoDate(lastAchievement.unlocktime)},{' '}
                            &quot;{lastAchievement.name}&quot;.
                        </div>
                    )}
                </div>
            </div>
        ),
        { debug: false, ...size }
    );
}
