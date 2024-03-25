// https://github.com/steam-test1/Raid-WW2-Lua-Complete/blob/c593f4b5b08f2a1ee8e72e0c8a7f50514e89a0a2/lib/tweak_data/statisticstweakdata.lua#L196C4-L196C4

const weaponList = [
    'm1911',
    'webley',
    'c96',
    'thompson',
    'sten',
    'garand',
    'm1918', // BAR
    'm1903',
    'm1912',
    'mp38',
    'carbine', // M1 Carbine
    'mp44', // StG 44
    'mg42',
    'mosin',
    'sterling',
    'geco', // Double-barrel
    'dp28',
    'tt33',
    'ithaca',
    'kar_98k',
    'bren',
    'lee_enfield',
    'browning',
    'welrod',
    'shotty',
];

/**
 * Gets the weapon id from the index. Used for primary and secondary weapons.
 * @param index 1-25
 */
export function getWeaponIdFromIndex(index: number): string {
    return weaponList[index - 1];
}
