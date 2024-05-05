import type { IUserInfo } from '@/lib/IUserInfo';
import pageStyles from '../Pages.module.css';
import styles from './PlayerInfo.module.css';
import { TapedPicture } from '@/components/TapedPicture/TapedPicture';
import { getLevelString } from '@/utils/getLevelString';
import type { ISteamStats } from '@/lib/ISteamStats';
import { getLatestAchievement } from '@/utils/getLatestAchievement';
import type { IAchievement } from '@/lib/IAchievement';
import { numberToIsoDate } from '@/utils/numberToIsoDate';

export function PlayerInfo({
    user,
    stats,
    achievements,
}: {
    user: IUserInfo;
    stats: ISteamStats;
    achievements: IAchievement[];
}) {
    const latestAchievement = getLatestAchievement(achievements);

    return (
        <section>
            <TapedPicture
                className={styles.profilePicture}
                src={user.avatarfull}
                alt=""
            />
            <h2>
                <a href={user.profileurl}>{user.personaname}</a>
            </h2>
            <p className={pageStyles.handWritten}>
                {getLevelString(stats, achievements)}
            </p>
            <p>Operations completed: {stats.ach_open_loot_crates}</p>
            <p>
                Confirmed kills: {stats.ach_kill_enemies}, of which{' '}
                {stats.ach_kill_enemies_with_headshot} were headshots,{' '}
                {stats.ach_kill_enemies_with_melee} were performed using melee,{' '}
                {stats.ach_kill_enemies_with_grenades} with grenades,{' '}
                {stats.ach_kill_enemies_with_turret} with mounted turrets,{' '}
                {stats.ach_kill_enemies_with_secondary_weap} with sidearms, and{' '}
                {stats.ach_kill_enemies -
                    stats.ach_kill_enemies_with_melee -
                    stats.ach_kill_enemies_with_grenades -
                    stats.ach_kill_enemies_with_turret -
                    stats.ach_kill_enemies_with_secondary_weap}{' '}
                with primary weapons.
            </p>
            <p>
                Last notable reporting of the operative:{' '}
                {numberToIsoDate(latestAchievement.unlocktime)}, see note &quot;
                {latestAchievement.name}&quot; for details.
            </p>
        </section>
    );
}
