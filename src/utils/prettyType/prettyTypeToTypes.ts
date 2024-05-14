import { IWeapon } from '@/lib/IWeapon';
import { PrettyTypes } from './PrettyTypes';

export default function prettyTypeToTypes(
    pretty: (typeof PrettyTypes)[number]
): IWeapon['type'][] | null {
    switch (pretty) {
        case 'All':
            return null;
        case 'Equipment':
            return ['grenade', 'mine'];
        case 'Melee':
            return ['melee'];
        case 'Primary':
            return ['primary'];
        case 'Secondary':
            return ['secondary'];
    }
}
