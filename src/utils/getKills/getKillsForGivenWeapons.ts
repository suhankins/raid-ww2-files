import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '@/lib/IWeapon';
import { getWeaponKillCount } from './getWeaponKillCount';

export default function getKillsForGivenWeapons(
    weapons: IWeapon[],
    stats: ISteamStats
) {
    return weapons.reduce(
        (total, weapon) => total + (getWeaponKillCount(weapon, stats) ?? 0),
        0
    );
}
