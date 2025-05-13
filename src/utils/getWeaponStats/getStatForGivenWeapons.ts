import { ISteamStats } from '@/lib/ISteamStats';
import { IWeapon } from '@/lib/IWeapon';
import {
    getWeaponHitsCount,
    getWeaponKillCount,
    getWeaponShotsCount,
    getWeaponUsedCount,
} from './getWeaponStat';

export function getUsageCountForGivenWeapons(
    weapons: IWeapon[],
    stats: ISteamStats
) {
    return weapons.reduce(
        (total, weapon) => total + (getWeaponUsedCount(weapon, stats) ?? 0),
        0
    );
}

export function getAverageAccuracyForGivenWeapons(
    weapons: IWeapon[],
    stats: ISteamStats
): number {
    return (
        getHitsForGivenWeapons(weapons, stats) /
        getShotsForGivenWeapons(weapons, stats)
    );
}

export function getHitsForGivenWeapons(
    weapons: IWeapon[],
    stats: ISteamStats
): number {
    return weapons.reduce(
        (total, weapon) => total + (getWeaponHitsCount(weapon, stats) ?? 0),
        0
    );
}

export function getShotsForGivenWeapons(
    weapons: IWeapon[],
    stats: ISteamStats
): number {
    return weapons.reduce(
        (total, weapon) => total + (getWeaponShotsCount(weapon, stats) ?? 0),
        0
    );
}

export function getKillsForGivenWeapons(
    weapons: IWeapon[],
    stats: ISteamStats
): number {
    return weapons.reduce(
        (total, weapon) => total + (getWeaponKillCount(weapon, stats) ?? 0),
        0
    );
}
