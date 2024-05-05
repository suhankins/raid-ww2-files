/* eslint-disable @next/next/no-img-element */
import { ISteamStats } from '@/lib/ISteamStats';
import { type Weapon } from '@/utils/WeaponsDB';
import { getWeaponKillCount } from '@/utils/getWeaponKillCount';

export function Weapon({
    stats,
    weapon,
}: {
    stats: ISteamStats;
    weapon: Weapon | undefined;
}) {
    if (!weapon) {
        return <></>;
    }
    const killCount = getWeaponKillCount(weapon.id, stats);
    return (
        <>
            <img alt="" src={`/static/images/raid/weapons/${weapon.id}.png`} />
            <div>
                <h3>{weapon.name}</h3>
                <p>Confirmed kills: {killCount ?? 'Unknown'}</p>
            </div>
        </>
    );
}
