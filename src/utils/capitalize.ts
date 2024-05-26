/**
 * @example capitalize("hello") // "Hello"
 */
export default function capitalize(text: string): string {
    return text[0].toLocaleUpperCase() + text.slice(1);
}
