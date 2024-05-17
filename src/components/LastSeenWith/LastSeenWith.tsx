/* eslint-disable @next/next/no-img-element */
import { ISteamStats } from '@/lib/ISteamStats';
import { getGrenadeIdFromIndex } from '@/utils/getFromIndex/getGrenadeIdFromIndex';
import { getMeleeIdFromIndex } from '@/utils/getFromIndex/getMeleeIdFromIndex';
import { getWeaponIdFromIndex } from '@/utils/getFromIndex/getWeaponIdFromIndex';
import styles from './LastSeenWith.module.css';
import { Weapon } from './Weapon';
import { getWeaponById } from '@/utils/WeaponsDB';

export function LastSeenWith({ stats }: { stats: ISteamStats }) {
    return (
        <>
            <h2>Raider was last seen with these weapons</h2>
            <div className={styles.lastSeenWithGrid}>
                <Weapon
                    stats={stats}
                    weapon={getWeaponById(
                        getWeaponIdFromIndex(stats.equipped_primary)
                    )}
                />
                <Weapon
                    stats={stats}
                    weapon={getWeaponById(
                        getWeaponIdFromIndex(stats.equipped_secondary)
                    )}
                />
                <Weapon
                    stats={stats}
                    weapon={getWeaponById(
                        getGrenadeIdFromIndex(stats.equipped_grenade)
                    )}
                />
                <Weapon
                    stats={stats}
                    weapon={getWeaponById(
                        getMeleeIdFromIndex(stats.equipped_melee)
                    )}
                />
            </div>
        </>
    );
}
