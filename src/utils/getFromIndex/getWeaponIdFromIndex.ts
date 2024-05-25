import { GUNS } from '../WeaponsDB';

const weaponList = GUNS.map((weapon) => weapon.id);

/**
 * Gets the weapon id from the index. Used for primary and secondary weapons.
 * @param index 1-25
 */
export function getWeaponIdFromIndex(index: number): string {
    return weaponList[index - 1];
}
