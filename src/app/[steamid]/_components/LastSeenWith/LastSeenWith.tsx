/* eslint-disable @next/next/no-img-element */
import { ISteamStats } from '@/lib/ISteamStats';
import { getGrenadeIdFromIndex } from '@/utils/getFromIndex/getGrenadeIdFromIndex';
import { getMeleeIdFromIndex } from '@/utils/getFromIndex/getMeleeIdFromIndex';
import { getWeaponIdFromIndex } from '@/utils/getFromIndex/getWeaponIdFromIndex';
import styles from './LastSeenWith.module.css';
import { Weapon } from './Weapon';
import { getWeaponById } from '@/utils/WeaponsDB';

export default function LastSeenWith({ stats }: { stats: ISteamStats }) {
    const primary = getWeaponById(getWeaponIdFromIndex(stats.equipped_primary));
    const secondary = getWeaponById(
        getWeaponIdFromIndex(stats.equipped_secondary)
    );
    const equipment = getWeaponById(
        getGrenadeIdFromIndex(stats.equipped_grenade)
    );
    const melee = getWeaponById(getMeleeIdFromIndex(stats.equipped_melee));

    if (!primary && !secondary && !equipment && !melee) {
        return null;
    }

    return (
        <>
            <h2 className={styles.header}>
                Raider was last seen with these weapons
            </h2>
            <div className={styles.lastSeenWithGrid}>
                <Weapon stats={stats} weapon={primary} />
                <Weapon stats={stats} weapon={secondary} />
                <Weapon stats={stats} weapon={equipment} />
                <Weapon stats={stats} weapon={melee} />
            </div>
        </>
    );
}
