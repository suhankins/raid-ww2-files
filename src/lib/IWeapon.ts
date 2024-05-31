import { type WEAPON_CATEGORIES } from './WeaponCategories';
import { type WEAPON_TYPES } from './WeaponTypes';

export interface IWeapon {
    id: string;
    name: string;
    type: (typeof WEAPON_TYPES)[number]['id'];
    hidden?: boolean;
    category?: (typeof WEAPON_CATEGORIES)[number]['id'];
    noIcon?: boolean;
}
