import formatAbsoluteNumber from './formatAbsoluteNumber';

const PLURALS: { [key: string]: string } = {
    bounty: 'bounties',
};

/**
 * @example formatPluralString('thing', 2) // "things"
 * @example formatPluralString('thing', 1) // "thing"
 */
export default function formatPluralString(string: string, number: number) {
    // We don't compare number to 1, because it could potentially be 1.01,
    // which would get rounded to 1.0 and confuse people why is 1.0 considered plural
    const shouldBePlural = formatAbsoluteNumber(number) !== '1.0';
    if (PLURALS[string] !== undefined && shouldBePlural) {
        return PLURALS[string];
    }
    return `${string}${shouldBePlural ? 's' : ''}`;
}
