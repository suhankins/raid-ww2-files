import { type ISteamStats } from '@/lib/ISteamStats';
import { getWeaponAccuracy } from './getWeaponStats/getWeaponStat';
import { WEAPONS_DB } from './WeaponsDB';

export function getWeaponByBestAccuracy(stats: ISteamStats) {
    return WEAPONS_DB.reduce(
        (currentWorstWeapon, weapon) => {
            const accuracy = getWeaponAccuracy(weapon, stats);
            if (
                accuracy !== undefined &&
                accuracy > currentWorstWeapon.accuracy
            ) {
                return {
                    ...weapon,
                    accuracy,
                };
            }
            return currentWorstWeapon;
        },
        { name: 'Placeholder', accuracy: 0.0 }
    );
}

export function getWeaponByWorstAccuracy(stats: ISteamStats) {
    return WEAPONS_DB.reduce(
        (currentWorstWeapon, weapon) => {
            const accuracy = getWeaponAccuracy(weapon, stats);
            if (
                accuracy !== undefined &&
                accuracy < currentWorstWeapon.accuracy
            ) {
                return {
                    ...weapon,
                    accuracy,
                };
            }
            return currentWorstWeapon;
        },
        { name: 'Placeholder', accuracy: 1 }
    );
}
