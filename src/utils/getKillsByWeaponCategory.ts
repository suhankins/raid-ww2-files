import type { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsDB, type Weapon } from './WeaponsDB';
import { getWeaponKillCount } from './getWeaponKillCount';

export default function getKillsByWeaponCategory(
    category: NonNullable<Weapon['category']>,
    stats: ISteamStats
): number {
    return WeaponsDB.filter((weapon) => weapon.category === category).reduce(
        (total, weapon) => total + (getWeaponKillCount(weapon, stats) ?? 0),
        0
    );
}
