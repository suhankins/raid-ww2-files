export const DefaultWeaponCategory = { id: 'all', name: 'All' } as const;

export const WeaponCategories = [
    DefaultWeaponCategory,
    { id: 'assault_rifle', name: 'Assault Rifle' },
    { id: 'smg', name: 'Sub-machine Gun' },
    { id: 'lmg', name: 'Machine Gun' },
    { id: 'snp', name: 'Sniper Rifle' },
    { id: 'shotgun', name: 'Shotgun' },
    { id: 'pistol', name: 'Pistol' },
    { id: 'grenade', name: 'Grenade' },
    { id: 'mine', name: 'Mine' },
] as const;
