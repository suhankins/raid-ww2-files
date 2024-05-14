import { IWeapon } from '@/lib/IWeapon';
import { PrettyTypes } from './PrettyTypes';

export default function typesToPrettyType(
    type: IWeapon['type'][] | null
): (typeof PrettyTypes)[number] {
    if (!type) return 'All';
    switch (type[0]) {
        case 'primary':
            return 'Primary';
        case 'secondary':
            return 'Secondary';
        case 'grenade':
        case 'mine':
            return 'Equipment';
        case 'melee':
            return 'Melee';
        default:
            return 'All';
    }
}
