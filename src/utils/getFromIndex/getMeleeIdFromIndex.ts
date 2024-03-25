// https://github.com/steam-test1/Raid-WW2-Lua-Complete/blob/c593f4b5b08f2a1ee8e72e0c8a7f50514e89a0a2/lib/tweak_data/statisticstweakdata.lua#L223

const meleeList = [
    'weapon', // Unused
    'fists', // Unused
    'm3_knife',
    'robbins_dudley_trench_push_dagger',
    'german_brass_knuckles',
    'lockwood_brothers_push_dagger',
    'bc41_knuckle_knife',
    'km_dagger',
    'marching_mace',
    'lc14b', // Bloody Machete
];

/**
 * Gets the melee id from the index.
 * @param index 1-10
 * @returns The melee id
 * @example
 * getMeleeIdFromIndex(3) // 'm3_knife'
 */
export function getMeleeIdFromIndex(index: number): string {
    return meleeList[index - 1];
}
