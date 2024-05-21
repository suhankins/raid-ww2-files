import { type IWeapon } from '../lib/IWeapon';

export const Grenades: IWeapon[] = [
    {
        id: 'm24',
        name: 'M24 Stielhandgranate',
        type: 'grenade',
        category: 'grenade',
    },
    {
        id: 'concrete',
        name: 'Concrete Grenade',
        type: 'grenade',
        category: 'grenade',
    },
    {
        id: 'd343',
        name: '343d Hand Grenade',
        type: 'grenade',
        category: 'grenade',
    },
    {
        id: 'mills',
        name: 'Mills Grenade',
        type: 'grenade',
        category: 'grenade',
    },
    { id: 'betty', name: 'Spring Mine', type: 'grenade', category: 'mine' },
    { id: 'decoy_coin', name: 'Decoy Coin', type: 'grenade' },
];

export const Melee: IWeapon[] = [
    { id: 'weapon', name: 'Weapon butt', type: 'melee', noIcon: true },
    { id: 'fists', name: 'Fists', type: 'melee', hidden: true, noIcon: true },
    { id: 'm3_knife', name: 'M3 Combat Knife', type: 'melee' },
    {
        id: 'robbins_dudley_trench_push_dagger',
        name: 'Robbins Dudley Push Dagger',
        type: 'melee',
    },
    {
        id: 'german_brass_knuckles',
        name: 'German Knuckleduster',
        type: 'melee',
    },
    {
        id: 'lockwood_brothers_push_dagger',
        name: 'Lockwood Brothers Push Dagger',
        type: 'melee',
    },
    { id: 'bc41_knuckle_knife', name: 'BC41 Knuckle Knife', type: 'melee' },
    { id: 'km_dagger', name: "The Admiral's Dagger", type: 'melee' },
    { id: 'marching_mace', name: 'The Marching Mace ', type: 'melee' },
    { id: 'lc14b', name: 'Bloody Machete', type: 'melee' },
];

export const Guns: IWeapon[] = [
    { id: 'm1911', name: 'Colt M1911', type: 'secondary', category: 'pistol' },
    {
        id: 'webley',
        name: 'Webley MK VI',
        type: 'secondary',
        category: 'pistol',
    },
    { id: 'c96', name: 'C96 Mauser', type: 'secondary', category: 'pistol' },
    { id: 'thompson', name: 'Thompson M1A1', type: 'primary', category: 'smg' },
    { id: 'sten', name: 'Sten MkII', type: 'primary', category: 'smg' },
    {
        id: 'garand',
        name: 'M1 Garand',
        type: 'primary',
        category: 'assault_rifle',
    },
    { id: 'm1918', name: 'BAR', type: 'primary', category: 'lmg' },
    {
        id: 'm1903',
        name: 'M1903 Springfield',
        type: 'primary',
        category: 'snp',
    },
    { id: 'm1912', name: 'M12', type: 'primary', category: 'shotgun' },
    { id: 'mp38', name: 'MP 38', type: 'primary', category: 'smg' },
    {
        id: 'carbine',
        name: 'M1 Carbine',
        type: 'primary',
        category: 'assault_rifle',
    },
    { id: 'mp44', name: 'StG 44', type: 'primary', category: 'assault_rifle' },
    { id: 'mg42', name: 'MG 42', type: 'primary', category: 'lmg' },
    { id: 'mosin', name: 'Mosin Nagant', type: 'primary', category: 'snp' },
    { id: 'sterling', name: 'Sterling', type: 'primary', category: 'smg' },
    { id: 'geco', name: 'Double-Barrel', type: 'primary', category: 'shotgun' },
    { id: 'dp28', name: 'Degtyaryov DP-28', type: 'primary', category: 'lmg' },
    {
        id: 'tt33',
        name: 'Tokarev TT-33',
        type: 'secondary',
        category: 'pistol',
    },
    { id: 'ithaca', name: 'Ithaca 37', type: 'primary', category: 'shotgun' },
    { id: 'kar_98k', name: 'Karabiner 98k', type: 'primary', category: 'snp' },
    { id: 'bren', name: 'Bren', type: 'primary', category: 'lmg' },
    {
        id: 'lee_enfield',
        name: 'Lee-Enfield',
        type: 'primary',
        category: 'snp',
    },
    {
        id: 'browning',
        name: 'Browning Auto-5',
        type: 'primary',
        category: 'shotgun',
    },
    { id: 'welrod', name: 'Welrod', type: 'secondary', category: 'pistol' },
    {
        id: 'shotty',
        name: 'Pocket Double-Barrel',
        type: 'secondary',
        category: 'shotgun',
    },
];

export const Turrets: IWeapon[] = [
    { id: 'turret', name: 'Mounted Turret', type: 'turret' },
];

export const WeaponsDB: IWeapon[] = [
    ...Grenades,
    ...Melee,
    ...Guns,
    ...Turrets,
];

export const getWeaponById = (weaponId: string) =>
    WeaponsDB.find((weapon) => weapon.id === weaponId);
