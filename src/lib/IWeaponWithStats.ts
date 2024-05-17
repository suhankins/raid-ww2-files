import { IWeapon } from './IWeapon';

export type IWeaponWithStats = IWeapon & IWeaponStats;

export type IWeaponStats = {
    name: string;
    kills: number | undefined;
    categoryRatio: number | undefined;
    typeRatio: number | undefined;
    totalRatio: number | undefined;
};
