import { IWeapon } from '@/lib/IWeapon';
import { PrettyTypes } from './PrettyTypes';

export default function typeToPrettyType(
    type: IWeapon['type'] | null
): (typeof PrettyTypes)[number] {
    if (!type) return 'All';
    switch (type) {
        case 'primary':
            return 'Primary';
        case 'secondary':
            return 'Secondary';
        case 'grenade':
            return 'Equipment';
        case 'melee':
            return 'Melee';
        default:
            return 'All';
    }
}
