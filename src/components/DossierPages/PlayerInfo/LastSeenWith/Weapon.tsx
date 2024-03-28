/* eslint-disable @next/next/no-img-element */
import { ISteamStats } from '@/lib/ISteamStats';
import { getWeaponKillCount } from '@/utils/getWeaponKillCount';
import { getWeaponName } from '@/utils/getWeaponName';

export function Weapon({
    stats,
    weaponId,
}: {
    stats: ISteamStats;
    weaponId: string;
}) {
    const killCount = getWeaponKillCount(weaponId, stats);
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
