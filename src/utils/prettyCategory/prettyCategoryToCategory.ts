import { IWeapon } from '@/lib/IWeapon';
import { type PrettyCategories } from './PrettyCategories';

export default function prettyCategoryToCategory(
    pretty: (typeof PrettyCategories)[number]
): NonNullable<IWeapon['category']> | null {
    switch (pretty) {
        case 'Assault Rifle':
            return 'assault_rifle';
        case 'Grenade':
            return 'grenade';
        case 'Machine Gun':
            return 'lmg';
        case 'Mine':
            return 'mine';
        case 'Pistol':
            return 'pistol';
        case 'Shotgun':
            return 'shotgun';
        case 'Sniper Rifle':
            return 'snp';
        case 'Sub-machine Gun':
            return 'smg';
        default:
            return null;
    }
}
