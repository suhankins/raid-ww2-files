export const DefaultWeaponType = { id: 'all', name: 'All' } as const;

export const WeaponTypes = [
    DefaultWeaponType,
    { id: 'primary', name: 'Primary' },
    { id: 'secondary', name: 'Secondary' },
    { id: 'grenade', name: 'Grenade' },
    { id: 'melee', name: 'Melee' },
    { id: 'turret', name: 'Turret' },
] as const;

export function getTypeIndex(id: (typeof WeaponTypes)[number]['id']) {
    return WeaponTypes.findIndex((type) => type.id === id);
}
