/* eslint-disable @next/next/no-img-element */
import { ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '@/lib/IWeapon';
import { getWeaponKillCount } from '@/utils/getKills/getWeaponKillCount';

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
        <>
            <img alt="" src={`/static/images/raid/weapons/${weapon.id}.png`} />
            <div>
                <h3>{weapon.name}</h3>
                <p>Confirmed kills: {killCount ?? 'Unknown'}</p>
            </div>
        </>
    );
}
