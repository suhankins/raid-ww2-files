import { type IWeapon } from './IWeapon';

export type IWeaponWithStats = IWeapon & IWeaponStats;

export type IWeaponStats = {
    name: string;
    kills: number | undefined;
    killsTotalRatio: number | undefined;
    shotsFired: number | undefined;
    accuracy: number | undefined;
    timesEquipped: number | undefined;
    usageRatio: number | undefined;
};
