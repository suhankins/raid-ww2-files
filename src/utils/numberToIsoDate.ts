export function numberToIsoDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
