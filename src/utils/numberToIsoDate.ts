/**
 * @example numberToIsoDate(1741940061) // "2025/03/14"
 * @example numberToIsoDate(new Date(1741940061000)) // "2025/03/14"
 */
export function numberToIsoDate(timestamp: number | Date) {
    const date =
        timestamp instanceof Date ? timestamp : new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}/${month}/${day}`;
}
