export const DEFAULT_WEAPON_TYPE = { id: 'all', name: 'All' } as const;

export const WEAPON_TYPES = [
    DEFAULT_WEAPON_TYPE,
    { id: 'primary', name: 'Primary' },
    { id: 'secondary', name: 'Secondary' },
    { id: 'grenade', name: 'Equipment' },
    { id: 'melee', name: 'Melee' },
    { id: 'turret', name: 'Turret' },
] as const;
