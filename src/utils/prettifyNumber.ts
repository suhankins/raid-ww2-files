/**
 * @example prettifyNumber(123456789) // "123,456,789"
 */
export default function prettifyNumber(x: number) {
    return x
        .toString() // "12345"
        .split('') // ["1", "2", "3", "4", "5"]
        .toReversed() // ["5", "4", "3", "2", "1"]
        .map((character, index) =>
            index % 3 === 0 && index !== 0 ? `${character},` : character
        ) // ["5", "4", "3", "2,", "1"]
        .toReversed() // ["1", "2,", "3", "4", "5"]
        .join(''); // "12,345"
}
