import { IWeapon } from './IWeapon';

export type IWeaponWithStats = IWeapon & {
    kills: number | undefined;
    categoryRatio: number | undefined;
    typeRatio: number | undefined;
    totalRatio: number | undefined;
};
