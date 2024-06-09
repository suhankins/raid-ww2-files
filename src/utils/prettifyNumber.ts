/**
 * @example prettifyNumber(123456789) // "123,456,789"
 */
export default function prettifyNumber(x: number) {
    return x.toLocaleString('en-US');
}
