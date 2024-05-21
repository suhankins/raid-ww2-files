import { type WeaponCategories } from './WeaponCategories';
import { type WeaponTypes } from './WeaponTypes';

export interface IWeapon {
    id: string;
    name: string;
    type: (typeof WeaponTypes)[number]['id'];
    hidden?: boolean;
    category?: (typeof WeaponCategories)[number]['id'];
    noIcon?: boolean;
}
