import type { ISteamStats } from '@/lib/ISteamStats';
import { WeaponsDB } from '../WeaponsDB';
import { type IWeapon } from '../../lib/IWeapon';
import { getWeaponKillCount } from './getWeaponKillCount';

export default function getKillsByWeaponCategory(
    category: NonNullable<IWeapon['category']>,
    stats: ISteamStats
): number {
    return WeaponsDB.filter((weapon) => weapon.category === category).reduce(
        (total, weapon) => total + (getWeaponKillCount(weapon, stats) ?? 0),
        0
    );
}
