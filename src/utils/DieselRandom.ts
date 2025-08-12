/*
 * Ported by HW12Dev
 */
function ToUint32(x: number) {
    return parseInt(x.toString()) % Math.pow(2, 32);
}

const constant1 = Math.pow(2, -32);

let dieselRandomState = 0;
export function dieselRandomSeed(seed: number) {
    dieselRandomState = seed;
}

/**
 * @param max if provided, returns int `[1; max]`
 * @example dieselRandom(); // [0; 1]
 * @example dieselRandom(10); // [1; 10]
 */
export function dieselRandom(max: number | null = null) {
    dieselRandomState = ToUint32(
        ToUint32(1664525 * dieselRandomState) + 1013904223
    );

    if (max != null) {
        return Math.floor(dieselRandomState * constant1 * max + 1);
    }
    return dieselRandomState * constant1;
}

export const tableRandom = <T>(table: T[]): T =>
    table[Math.floor(dieselRandom(table.length) - 1)];

const format = (x: number) => x.toString().padStart(2, '0');

export const getSeed = (customDate?: Date) => {
    const __SEED_LIMIT = 2000000000;
    const __SEED_A = 92836596;
    const __SEED_B = 767;

    // Format should be ddmmddyyyy

    const date = customDate || new Date();
    const date_time = `${format(
        date.getUTCDate()
    )}${format(date.getUTCMonth() + 1)}${format(
        date.getUTCDate()
    )}${date.getUTCFullYear()}`;

    const seed =
        Math.abs(Math.floor((parseInt(date_time) * __SEED_A) / __SEED_B)) %
        __SEED_LIMIT;

    return seed;
};
