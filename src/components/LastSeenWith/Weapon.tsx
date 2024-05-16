/* eslint-disable @next/next/no-img-element */
import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import { getWeaponKillCount } from '@/utils/getKills/getWeaponKillCount';
import styles from './Weapon.module.css';

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
    return (
        <article className={styles.weaponCard}>
            <img alt="" src={`/static/images/raid/weapons/${weapon.id}.png`} />
            <div className={styles.description}>
                <h3>{weapon.name}</h3>
                <p>Confirmed kills: {killCount ?? 'Unknown'}</p>
            </div>
        </article>
    );
}
