export const DEFAULT_WEAPON_CATEGORY = { id: 'all', name: 'All' } as const;

export const WEAPON_CATEGORIES = [
    DEFAULT_WEAPON_CATEGORY,
    { id: 'assault_rifle', name: 'Assault Rifle' },
    { id: 'smg', name: 'Sub-machine Gun' },
    { id: 'lmg', name: 'Machine Gun' },
    { id: 'snp', name: 'Sniper Rifle' },
    { id: 'shotgun', name: 'Shotgun' },
    { id: 'pistol', name: 'Pistol' },
    { id: 'grenade', name: 'Grenade' },
    { id: 'mine', name: 'Mine' },
] as const;
