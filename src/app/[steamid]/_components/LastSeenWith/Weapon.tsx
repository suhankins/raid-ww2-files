/* eslint-disable @next/next/no-img-element */
import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import {
    getWeaponAccuracy,
    getWeaponKillCount,
} from '@/utils/getWeaponStats/getWeaponStat';
import styles from './Weapon.module.css';
import prettifyNumber from '@/utils/prettifyNumber';
import toPercentage from '@/utils/toPercentage';

export function Weapon({
    stats,
    weapon,
}: {
    stats: ISteamStats;
    weapon: IWeapon | undefined;
}) {
    if (!weapon) {
        return <></>;
    }
    const killCount = getWeaponKillCount(weapon, stats);
    const accuracy = getWeaponAccuracy(weapon, stats);
    return (
        <article className={styles.weaponCard}>
            <div className={styles.imgContainer}>
                <img
                    loading="lazy"
                    alt=""
                    src={`/static/images/raid/weapons/${weapon.id}.png`}
                />
            </div>
            <div className={styles.description}>
                <h3>{weapon.name}</h3>
                <p>
                    Confirmed kills:{' '}
                    {killCount ? prettifyNumber(killCount) : 'Unknown'}
                </p>
                {accuracy && <p>Accuracy: {toPercentage(accuracy)}</p>}
            </div>
        </article>
    );
}
