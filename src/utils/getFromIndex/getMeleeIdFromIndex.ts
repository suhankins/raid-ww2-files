import { Melee } from '../WeaponsDB';

const meleeList = Melee.map((weapon) => weapon.id);

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
