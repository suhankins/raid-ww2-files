import { GRENADES } from '../WeaponsDB';

const grenadeList = GRENADES.map((weapon) => weapon.id);

/**
 * Gets the grenade id from the index.
 * @param index 1-5
 * @returns The grenade id
 */
export function getGrenadeIdFromIndex(index: number): string {
    return grenadeList[index - 1];
}
