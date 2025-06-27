import { type ISteamStats } from '@/lib/ISteamStats';
import { type IWeapon } from '../../lib/IWeapon';
import { WEAPONS_DB } from '../WeaponsDB';

export function getTotalWeaponsUsageRatio(
    weapons: IWeapon[],
    stats: ISteamStats
): number | undefined {
    if (
        weapons.some(
            (weapon, index, array) => array.at(index - 1)?.type !== weapon.type
        )
    ) {
        return undefined;
    }
    return weapons.reduce(
        (acc, weapon) => acc + (getWeaponUsageRatio(weapon, stats) ?? 0),
        0
    );
}

export function getWeaponUsageRatio(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    const count = getWeaponUsedCount(weapon, stats);
    return (
        count && (count ?? 0) / getWeaponTypeTotalUsedCount(weapon.type, stats)
    );
}

export function getWeaponTypeTotalUsedCount(
    type: IWeapon['type'],
    stats: ISteamStats
): number {
    return WEAPONS_DB.filter((weapon) => weapon.type === type).reduce(
        (acc, cur) =>
            acc + (cur.ignoreUsage ? 0 : getWeaponUsedCount(cur, stats) ?? 0),
        0
    );
}

export function getWeaponUsedCount(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    if (weapon.ignoreUsage) {
        return undefined;
    }
    switch (weapon.type) {
        case 'primary':
        case 'secondary':
            return stats[`weapon_used_${weapon.id}`];
        case 'melee':
            return stats[`melee_used_${weapon.id}`];
        case 'grenade':
            return stats[`grenade_used_${weapon.id}`];
        default:
            return undefined;
    }
}

export function getWeaponAccuracy(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    const accuracy =
        (getWeaponHitsCount(weapon, stats) ?? 0) /
        (getWeaponShotsCount(weapon, stats) ?? 0);
    return isFinite(accuracy) ? accuracy : undefined;
}

export function getWeaponShotsCount(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    switch (weapon.type) {
        case 'primary':
        case 'secondary':
            return stats[`weapon_shots_${weapon.id}`];
        default:
            return undefined;
    }
}

export function getWeaponHitsCount(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    switch (weapon.type) {
        case 'primary':
        case 'secondary':
            return stats[`weapon_hits_${weapon.id}`];
        default:
            return undefined;
    }
}

export function getWeaponKillCount(
    weapon: IWeapon,
    stats: ISteamStats
): number | undefined {
    switch (weapon.type) {
        case 'primary':
        case 'secondary':
            return stats[`weapon_kills_${weapon.id}`];
        case 'melee':
            return stats[`melee_kills_${weapon.id}`];
        case 'grenade':
            return stats[`grenade_kills_${weapon.id}`];
        case 'other':
            if (weapon.id === 'turret') {
                return stats.ach_kill_enemies_with_turret;
            } else if (weapon.id === 'vehicle') {
                return stats.ach_run_over_enemies_with_jeep;
            }
        case 'all':
            return stats.ach_kill_enemies;
    }
}
