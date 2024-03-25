/* eslint-disable @next/next/no-img-element */
import { ISteamStats } from '@/lib/ISteamStats';
import { getWeaponName } from '@/utils/getWeaponName';

export function Weapon({
    stats,
    weaponId,
}: {
    stats: ISteamStats;
    weaponId: string;
}) {
    const killCount =
        stats[`weapon_kills_${weaponId}`] ||
        stats[`melee_kills_${weaponId}`] ||
        stats[`grenade_kills_${weaponId}`];
    return (
        <>
            <img alt="" src={`/static/images/raid/weapons/${weaponId}.png`} />
            <div>
                <h3>{getWeaponName(weaponId) || 'Name goes here'}</h3>
                <p>Confirmed kills: {killCount || 'Unknown'}</p>
            </div>
        </>
    );
}
