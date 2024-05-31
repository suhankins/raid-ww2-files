import type { IUserInfo } from '@/lib/IUserInfo';
import styles from './PlayerInfo.module.css';
import { Level } from '@/components/PlayerInfo/Level';
import type { ISteamStats } from '@/lib/ISteamStats';
import type { IAchievement } from '@/lib/IAchievement';
import getCharaterFromIndex from '@/utils/getFromIndex/getCharacterIdFromIndex';
import getAchievementsCompletedPercentage from '@/utils/getAchievementsCompletedPercentage';
import { getLatestAchievement } from '@/utils/getLatestAchievement';
import { numberToIsoDate } from '@/utils/numberToIsoDate';
import Image from 'next/image';

export default function PlayerInfo({
    user,
    stats,
    achievements,
    children,
}: {
    user: IUserInfo;
    stats: ISteamStats;
    achievements: IAchievement[];
    children: React.ReactNode;
}) {
    const character = getCharaterFromIndex(stats.equipped_character ?? 0);
    const lastAchievement = getLatestAchievement(achievements);

    return (
        <div className={styles.container}>
            <div className={styles.pictureContainer}>
                <Image
                    width={335}
                    height={460}
                    alt=""
                    src={`/static/images/raid/characters/${character.id}.png`}
                    priority
                />
            </div>
            <div className={styles.info}>
                <div className={styles.basics}>
                    <div className={styles.basicsCard}>
                        <b>
                            {getAchievementsCompletedPercentage(achievements)}
                        </b>
                        <p>Achievements completed</p>
                    </div>
                    <div className={styles.basicsCard}>
                        <Image
                            width={96}
                            height={64}
                            alt=""
                            src={`/static/images/raid/nationality/${character.id}.png`}
                        />
                        <p>{character.nationality}</p>
                    </div>
                    <div className={styles.basicsCard}>
                        <b>
                            <Level stats={stats} achievements={achievements} />
                        </b>
                        <p>Level</p>
                    </div>
                </div>
                <div className={styles.basicsCard + ' ' + styles.wide}>
                    <b>{user.personaname}</b>
                    <p>{character.name}</p>
                </div>
                <h3 className={styles.sidenote}></h3>
                {children}
                {lastAchievement.unlocktime !== 0 && (
                    <p>
                        Last notable reporting on{' '}
                        {numberToIsoDate(lastAchievement.unlocktime)}, see note
                        &quot;{lastAchievement.name}&quot; for details.
                    </p>
                )}
            </div>
        </div>
    );
}
