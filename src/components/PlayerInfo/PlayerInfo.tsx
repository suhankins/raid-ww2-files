/* eslint-disable @next/next/no-img-element */
import type { IUserInfo } from '@/lib/IUserInfo';
import styles from './PlayerInfo.module.css';
import { getLevelString } from '@/utils/getLevelString';
import type { ISteamStats } from '@/lib/ISteamStats';
import type { IAchievement } from '@/lib/IAchievement';
import getCharaterFromIndex from '@/utils/getFromIndex/getCharacterIdFromIndex';

export function PlayerInfo({
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

    return (
        <div className={styles.container}>
            <img
                className={styles.profilePicture}
                alt=""
                src={`/static/images/raid/characters/${character.id}.png`}
            />
            <div className={styles.info}>
                <h2>
                    <a href={user.profileurl}>{user.personaname}</a>{' '}
                </h2>
                <h3 className={styles.sidenote}>
                    {character.description} |{' '}
                    {getLevelString(stats, achievements)}
                </h3>
                {children}
            </div>
        </div>
    );
}
