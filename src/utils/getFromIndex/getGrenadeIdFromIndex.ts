// https://github.com/steam-test1/Raid-WW2-Lua-Complete/blob/c593f4b5b08f2a1ee8e72e0c8a7f50514e89a0a2/lib/tweak_data/statisticstweakdata.lua#L235

/**
 * If player has coin equipped, steam stat won't be updated
 */
const grenadeList = ['m24', 'concrete', 'd343', 'mills', 'betty'];

/**
 * Gets the grenade id from the index.
 * @param index 1-5
 * @returns The grenade id
 */
export function getGrenadeIdFromIndex(index: number): string {
    return grenadeList[index - 1];
}
