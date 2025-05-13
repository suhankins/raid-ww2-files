import { type ISteamStats } from '@/lib/ISteamStats';
import getKillsByWeaponType from '@/utils/getWeaponStats/getKillsByWeaponType';
import { HallOfFameBannersDB } from '@/utils/HallOfFameBannersDB';

const getWeightedValue = (
    value: number,
    weight: (typeof HallOfFameBannersDB)[number]['weight'],
    totalKills: number
) => (typeof weight === 'number' ? weight * value : weight(value, totalKills));

export function getHallOfFameCards(stats: ISteamStats) {
    const totalKills = getKillsByWeaponType('all', stats);
    const cards = HallOfFameBannersDB.map((card) => ({
        ...card,
        value: card.getter(stats),
    }))
        .filter((card) => card.value > 0)
        .sort(
            (a, b) =>
                getWeightedValue(a.value, a.weight, totalKills) -
                getWeightedValue(b.value, b.weight, totalKills)
        )
        .reverse();

    return cards;
}
