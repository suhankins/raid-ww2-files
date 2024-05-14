import { IWeapon } from '@/lib/IWeapon';
import { PrettyCategories } from './PrettyCategories';

export default function categoryToPrettyCategory(
    category: IWeapon['category'] | null
): (typeof PrettyCategories)[number] {
    switch (category) {
        case 'assault_rifle':
            return 'Assault Rifle';
        case 'grenade':
            return 'Grenade';
        case 'lmg':
            return 'Machine Gun';
        case 'mine':
            return 'Mine';
        case 'pistol':
            return 'Pistol';
        case 'shotgun':
            return 'Shotgun';
        case 'smg':
            return 'Sub-machine Gun';
        case 'snp':
            return 'Sniper Rifle';
        default:
            return 'All';
    }
}
