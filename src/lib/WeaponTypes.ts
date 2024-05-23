export const DefaultWeaponType = { id: 'all', name: 'All' } as const;

export const WeaponTypes = [
    DefaultWeaponType,
    { id: 'primary', name: 'Primary' },
    { id: 'secondary', name: 'Secondary' },
    { id: 'grenade', name: 'Equipment' },
    { id: 'melee', name: 'Melee' },
    { id: 'turret', name: 'Turret' },
] as const;
